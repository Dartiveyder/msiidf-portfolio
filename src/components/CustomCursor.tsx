"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role='button'], input, textarea, select, summary";

export function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      wrapper.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) wrapper.classList.add("is-hovering");
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) wrapper.classList.remove("is-hovering");
    };

    const onDown = () => wrapper.classList.add("is-pressing");
    const onUp = () => wrapper.classList.remove("is-pressing");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      root.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div ref={wrapperRef} className="custom-cursor-wrapper" aria-hidden="true">
      <div className="custom-cursor-dot" />
    </div>
  );
}
