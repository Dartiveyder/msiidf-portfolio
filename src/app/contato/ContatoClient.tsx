"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getSiteText, socialLinks } from "@/content/site";

export function ContatoClient() {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const { contato } = text;

  return (
    <section className="px-5 pt-[190px] pb-[110px] text-center content:px-12 content:pt-[220px]">
      <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
        {contato.eyebrow}
      </span>
      <h1 className="m-0 mb-12 font-display text-3xl font-bold text-text content:text-5xl">
        {contato.heading.title} <span className="text-primary">{contato.heading.highlight}</span>
      </h1>

      <div className="mx-auto flex max-w-[800px] flex-wrap justify-center gap-6">
        <Reveal className="w-[300px] rounded-2xl border border-border bg-surface p-8 text-left transition-colors hover:border-primary hover:bg-surface-alt">
          <div
            className="mb-6 flex h-11 w-11 items-center justify-center overflow-hidden rounded-[10px]"
            style={{ background: "linear-gradient(135deg,#2fb2ff,#1d6fe0)" }}
          >
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <h3 className="m-0 mb-1.5 font-display text-xl font-bold text-text">Linkedin</h3>
          <p className="m-0 mb-5 font-body text-base text-text-muted">{contato.viewProfile}</p>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg py-3 text-center font-display text-sm font-bold text-text-oninverted no-underline"
            style={{ background: "linear-gradient(90deg,#2fb2ff,#1d6fe0)" }}
          >
            {contato.viewProfile}
          </a>
        </Reveal>

        <Reveal
          delay={80}
          className="w-[300px] rounded-2xl border border-border bg-surface p-8 text-left transition-colors hover:border-primary hover:bg-surface-alt"
        >
          <div className="mb-6 flex h-11 w-11 items-center justify-center overflow-hidden rounded-[10px] bg-white">
            <Image src="/icons/behance.png" alt="Behance" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <h3 className="m-0 mb-1.5 font-display text-xl font-bold text-text">Behance</h3>
          <p className="m-0 mb-5 font-body text-base text-text-muted">{contato.viewProfile}</p>
          <a
            href={socialLinks.behance}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg bg-white py-3 text-center font-display text-sm font-bold text-text-oninverted no-underline"
          >
            {contato.viewProfile}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
