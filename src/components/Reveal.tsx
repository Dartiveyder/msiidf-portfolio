"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  /** Stagger delay in ms, useful for lists/grids revealed item by item. */
  delay?: number;
};

export function Reveal({ children, className = "", as = "div", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Skip the scroll animation entirely for this preference; show content immediately.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = `transition-[opacity,transform] duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  } ${className}`;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (as === "section") {
    return (
      <section ref={ref} className={revealClass} style={style}>
        {children}
      </section>
    );
  }

  return (
    <div ref={ref} className={revealClass} style={style}>
      {children}
    </div>
  );
}
