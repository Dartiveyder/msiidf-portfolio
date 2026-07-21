"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar, type NavKey } from "./Navbar";
import { Footer } from "./Footer";
import { useLanguage } from "./LanguageProvider";
import { getSiteText, socialLinks } from "@/content/site";

function activeFromPath(pathname: string): NavKey | undefined {
  if (pathname.startsWith("/sobre")) return "sobre";
  if (pathname.startsWith("/projetos")) return "projetos";
  if (pathname.startsWith("/fluxo-de-trabalho")) return "fluxo";
  if (pathname.startsWith("/contato")) return "contato";
  return undefined;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const text = getSiteText(lang);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReducedMotion(true);
    }
  }, []);

  return (
    <>
      <Navbar active={activeFromPath(pathname)} lang={lang} onLangChange={setLang} />
      {/*
        No `exit` animation and no `mode="wait"` on purpose: the spray overlay
        already masks the swap on its own plain-timer schedule, so the new
        page must never wait on an old page's exit animation to mount — that
        would depend on Framer Motion's rAF loop, which browsers pause for
        backgrounded tabs and could stall the route swap indefinitely.
      */}
      <AnimatePresence>
        <motion.div
          key={pathname}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.15, ease: "easeInOut" }}
          className="flex flex-1 flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer
        tagline={text.footer.tagline}
        navTitle={text.footer.navTitle}
        links={text.footer.links}
        socials={[{ label: "in", href: socialLinks.linkedin }]}
      />
    </>
  );
}
