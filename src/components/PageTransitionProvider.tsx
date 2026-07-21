"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { COVER_TOTAL_MS, REVEAL_TOTAL_MS, generateStrokes, type SprayStroke } from "./sprayConfig";

export type TransitionPhase = "idle" | "covering" | "covered" | "navigating" | "revealing";

type NavigateOptions = { replace?: boolean };

type TransitionContextValue = {
  phase: TransitionPhase;
  strokes: SprayStroke[];
  /** Programmatic equivalent of router.push/replace, routed through the spray transition. */
  navigate: (href: string, options?: NavigateOptions) => void;
};

const TransitionContext = createContext<TransitionContextValue>({
  phase: "idle",
  strokes: [],
  navigate: () => {},
});

export function usePageTransition(): TransitionContextValue {
  return useContext(TransitionContext);
}

/** Safety net in case a route swap never happens (broken link, navigation error, etc). */
const FALLBACK_MS = 5000;

function resolveInternalHref(url: URL) {
  return url.pathname + url.search + url.hash;
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [strokes, setStrokes] = useState<SprayStroke[]>(() => generateStrokes());

  const pendingRef = useRef(false);
  const coverDoneRef = useRef(false);
  const routeSwappedRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const coverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const clearPendingTimers = useCallback(() => {
    if (coverTimer.current) clearTimeout(coverTimer.current);
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
  }, []);

  // Once both the cover animation has had its full duration AND the route has
  // actually swapped underneath it, it's safe to start revealing. Whichever of
  // the two finishes last is the one that calls this.
  const maybeReveal = useCallback(() => {
    if (!pendingRef.current) return;
    if (!coverDoneRef.current || !routeSwappedRef.current) {
      setPhase(coverDoneRef.current ? "covered" : routeSwappedRef.current ? "navigating" : "covering");
      return;
    }
    pendingRef.current = false;
    clearPendingTimers();
    setPhase("revealing");
  }, [clearPendingTimers]);

  const beginCovering = useCallback(() => {
    pendingRef.current = true;
    coverDoneRef.current = false;
    routeSwappedRef.current = false;
    setStrokes(generateStrokes());
    setPhase("covering");

    coverTimer.current = setTimeout(() => {
      coverDoneRef.current = true;
      maybeReveal();
    }, COVER_TOTAL_MS);

    fallbackTimer.current = setTimeout(() => {
      if (pendingRef.current) {
        pendingRef.current = false;
        setPhase("revealing");
      }
    }, FALLBACK_MS);
  }, [maybeReveal]);

  // Internal SPA navigation: the actual route change is driven by whatever
  // triggered it (Next's own <Link>, or our own router.push below) — this
  // effect just observes when the route has actually swapped.
  useEffect(() => {
    if (!pendingRef.current) return;
    routeSwappedRef.current = true;
    maybeReveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (phase !== "revealing") return;
    revealTimer.current = setTimeout(() => setPhase("idle"), REVEAL_TOTAL_MS);
    return () => {
      if (revealTimer.current) clearTimeout(revealTimer.current);
    };
  }, [phase]);

  useEffect(() => clearPendingTimers, [clearPendingTimers]);

  // Global click listener: masks internal <Link> navigation with the spray
  // overlay (without preventDefault — Next's own Link still drives the actual
  // push, preserving prefetch and any of its own onClick side effects, like a
  // mobile menu closing). Same-tab external links have no competing router,
  // so those we fully control: prevent default, cover, then hard-navigate.
  useEffect(() => {
    if (reducedMotionRef.current) return;

    const handleClick = (e: MouseEvent) => {
      if (pendingRef.current) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.closest("[data-no-page-transition]")) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const current = new URL(window.location.href);
      const isExternal = url.origin !== current.origin;

      if (!isExternal && url.pathname === current.pathname && url.search === current.search) {
        return; // same route, or just an in-page hash link
      }

      if (isExternal) {
        e.preventDefault();
        pendingRef.current = true;
        coverDoneRef.current = false;
        routeSwappedRef.current = false;
        setStrokes(generateStrokes());
        setPhase("covering");
        coverTimer.current = setTimeout(() => {
          window.location.href = url.href;
        }, COVER_TOTAL_MS);
        return;
      }

      beginCovering();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [beginCovering]);

  const navigate = useCallback(
    (href: string, options?: NavigateOptions) => {
      if (pendingRef.current) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        router.push(href);
        return;
      }

      const isExternal = url.origin !== window.location.origin;

      if (reducedMotionRef.current) {
        if (isExternal) window.location.href = url.href;
        else if (options?.replace) router.replace(resolveInternalHref(url));
        else router.push(resolveInternalHref(url));
        return;
      }

      pendingRef.current = true;
      coverDoneRef.current = false;
      routeSwappedRef.current = false;
      setStrokes(generateStrokes());
      setPhase("covering");

      coverTimer.current = setTimeout(() => {
        coverDoneRef.current = true;
        if (isExternal) {
          window.location.href = url.href;
          return;
        }
        if (options?.replace) router.replace(resolveInternalHref(url));
        else router.push(resolveInternalHref(url));
        maybeReveal();
      }, COVER_TOTAL_MS);

      fallbackTimer.current = setTimeout(() => {
        if (pendingRef.current) {
          pendingRef.current = false;
          setPhase("revealing");
        }
      }, FALLBACK_MS);
    },
    [router, maybeReveal],
  );

  return <TransitionContext.Provider value={{ phase, strokes, navigate }}>{children}</TransitionContext.Provider>;
}
