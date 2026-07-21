"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type NavKey = "sobre" | "projetos" | "fluxo" | "contato";
export type Lang = "pt" | "en";

type NavLinkItem = {
  key: NavKey;
  href: string;
  label: Record<Lang, string>;
};

const defaultLinks: NavLinkItem[] = [
  { key: "sobre", href: "/sobre", label: { pt: "QUEM SOU", en: "ABOUT" } },
  { key: "projetos", href: "/projetos", label: { pt: "PROJETOS", en: "PROJECTS" } },
  { key: "fluxo", href: "/fluxo-de-trabalho", label: { pt: "FLUXO DE TRABALHO", en: "WORKFLOW" } },
  { key: "contato", href: "/contato", label: { pt: "REDES SOCIAIS", en: "SOCIAL" } },
];

const ctaLabel: Record<Lang, string> = { pt: "CONTATO", en: "CONTACT" };

export type NavbarProps = {
  active?: NavKey;
  lang?: Lang;
  onLangChange?: (lang: Lang) => void;
  links?: NavLinkItem[];
  ctaHref?: string;
};

export function Navbar({
  active,
  lang = "pt",
  onLangChange,
  links = defaultLinks,
  ctaHref = "/contato",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkColor = (key: NavKey) => (active === key ? "text-text" : "text-text-mutedalt");

  const langPill = (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface-alt p-1 font-mono text-xs">
      <button
        type="button"
        onClick={() => onLangChange?.("pt")}
        className={`rounded-full px-3 py-1.5 ${
          lang === "pt" ? "bg-primary text-text-oninverted" : "bg-transparent text-text-mutedalt"
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => onLangChange?.("en")}
        className={`rounded-full px-3 py-1.5 ${
          lang === "en" ? "bg-primary text-text-oninverted" : "bg-transparent text-text-mutedalt"
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex max-h-[100px] items-center justify-between gap-6 overflow-hidden border-b border-border-soft bg-navbar px-5 py-4 backdrop-blur-md nav:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/assets/msiidf-logo.png"
            alt="MSIIDF"
            width={120}
            height={35}
            className="block h-[35px] w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 nav:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`font-nav text-sm font-normal tracking-[0.06em] no-underline transition-colors hover:text-text lg:text-base ${linkColor(
                link.key,
              )}`}
            >
              {link.label[lang]}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 nav:flex">
          {langPill}
          <Link
            href={ctaHref}
            className="whitespace-nowrap rounded-tl-xl rounded-br-xl border border-border-muted bg-primary px-5 py-2.5 font-accent text-sm font-normal tracking-[0.04em] text-text-oninverted no-underline outline outline-1 outline-offset-4 outline-border-outline hover:bg-primary-hover"
          >
            {ctaLabel[lang]}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2.5 nav:hidden">
          {langPill}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-alt text-base text-text"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-x-0 top-[72px] z-[49] flex flex-col gap-1 border-b border-border-soft bg-surface-menu p-5 backdrop-blur-md nav:hidden">
          {links.map((link, i) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-2 py-3.5 font-nav text-base font-normal tracking-[0.06em] no-underline transition-colors hover:text-text ${linkColor(
                link.key,
              )} ${i < links.length - 1 ? "border-b border-border-softer" : "mb-2"}`}
            >
              {link.label[lang]}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-primary p-3 text-center font-accent text-sm font-normal tracking-[0.04em] text-text-oninverted no-underline hover:bg-primary-hover"
          >
            {ctaLabel[lang]}
          </Link>
        </div>
      ) : null}
    </>
  );
}
