"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getSiteText } from "@/content/site";

export function FluxoClient() {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const { fluxo } = text;

  return (
    <>
      <section className="px-5 pt-[170px] pb-10 text-center content:px-12 content:pt-[180px]">
        <h1 className="m-0 mb-4 font-display text-3xl font-bold text-text content:text-5xl">
          {fluxo.heading.title} <span className="text-primary">{fluxo.heading.highlight}</span>
        </h1>
        <p className="mx-auto max-w-[600px] font-body text-base text-text-muted content:text-lg">{fluxo.subtitle}</p>
      </section>

      <section className="mx-auto flex max-w-[900px] flex-col px-5 pt-5 pb-[90px] content:px-12 content:pb-[110px]">
        {text.workflow.map((step, i) => (
          <Reveal key={step.n} delay={(i % 4) * 80}>
            <div className="flex gap-7 border-b border-border-soft py-8">
              <div className="w-[70px] shrink-0 font-display text-4xl font-bold text-primary">{step.n}</div>
              <div>
                <h3 className="m-0 mb-2.5 font-display text-xl font-bold text-text content:text-2xl">{step.title}</h3>
                <p className="m-0 max-w-[600px] font-body text-base leading-[1.65] text-text-body">{step.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="px-5 pb-20 text-center content:px-12 content:pb-[100px]">
        <h2 className="m-0 mb-6 font-display text-xl font-bold text-text content:text-2xl">{fluxo.ctaHeading}</h2>
        <Link
          href="/projetos"
          className="inline-block rounded-lg bg-primary px-[26px] py-3.5 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline"
        >
          {fluxo.ctaButton}
        </Link>
      </Reveal>
    </>
  );
}
