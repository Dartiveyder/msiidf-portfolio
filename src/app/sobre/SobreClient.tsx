"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { StatsGrid } from "@/components/StatsGrid";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getSiteText } from "@/content/site";

export function SobreClient() {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const { sobre } = text;

  return (
    <>
      <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-8 px-5 pt-[164px] pb-[60px] content:gap-16 content:px-12 content:pt-[180px]">
        <div className="w-full min-w-0 content:min-w-[300px] content:flex-1 content:basis-[380px]">
          <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
            {sobre.eyebrow}
          </span>
          <h1 className="m-0 mb-5 font-display text-3xl font-bold text-text content:text-5xl">{text.brand.person}</h1>
          <p className="m-0 font-body text-base leading-[1.65] text-text-secondary content:text-xl">{text.brand.role}</p>
        </div>
        <div className="w-full min-w-0 content:min-w-[280px] content:flex-1 content:basis-[340px]">
          <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[20px] border border-border bg-bg-pure">
            <Image
              src="/assets/sobre-foto.jpeg"
              alt={text.brand.person}
              width={480}
              height={600}
              className="h-full w-full scale-[1.2] object-contain"
            />
          </div>
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-[820px] px-5 pb-20 content:px-12 content:pb-[100px]">
        {sobre.bioParagraphs.map((p) => (
          <p key={p} className="m-0 mb-[22px] font-body text-base leading-[1.8] text-text-muted content:text-lg">
            {p}
          </p>
        ))}
      </Reveal>

      <section className="mx-auto max-w-[900px] px-5 pb-20 content:px-12 content:pb-[100px]">
        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
            {sobre.experienceEyebrow}
          </span>
          <h2 className="m-0 font-display text-2xl font-bold text-text content:text-4xl">
            {sobre.experienceHeading.title} <span className="text-primary">{sobre.experienceHeading.highlight}</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {sobre.experiences.map((exp, i) => (
            <Reveal key={exp.org} className="flex gap-6">
              <div className="flex w-4 shrink-0 flex-col items-center">
                <div className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full bg-primary" />
                {i < sobre.experiences.length - 1 ? <div className="mt-1.5 w-0.5 flex-1 bg-border" /> : null}
              </div>
              <div className="mb-8 flex-1 rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="m-0 mb-1 font-display text-xl font-bold text-text">{exp.role}</h3>
                    <p className="m-0 mb-1.5 font-body text-base text-primary">{exp.org}</p>
                    <p className="m-0 font-mono text-xs text-text-faint">{exp.period}</p>
                  </div>
                  {exp.current ? (
                    <span className="rounded-full bg-primary px-3 py-1.5 font-mono text-xs font-bold text-text-oninverted">
                      {sobre.currentBadge}
                    </span>
                  ) : null}
                </div>
                <p className="m-0 mt-4 font-body text-base leading-[1.6] text-text-body">{exp.summary}</p>
                {exp.bullets.length > 0 ? (
                  <ul className="m-0 mt-4 flex flex-col gap-2.5 pl-5">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="font-body text-base leading-[1.6] text-text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {exp.products.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {exp.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-full border border-border-muted px-3.5 py-1.5 font-mono text-xs text-text-secondary"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-[900px] px-5 pb-20 content:px-12 content:pb-[100px]">
        <div className="mb-10 text-center">
          <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
            {sobre.educationEyebrow}
          </span>
          <h2 className="m-0 font-display text-2xl font-bold text-text content:text-4xl">
            {sobre.educationHeading.title} <span className="text-primary">{sobre.educationHeading.highlight}</span>
          </h2>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary">
          <h3 className="m-0 mb-1 font-display text-xl font-bold text-text">{sobre.education.title}</h3>
          <p className="m-0 mb-1.5 font-body text-base text-primary">{sobre.education.org}</p>
          <p className="m-0 mb-4 font-mono text-xs text-text-faint">{sobre.education.period}</p>
          <p className="m-0 font-body text-base leading-[1.6] text-text-muted">{sobre.education.desc}</p>
        </div>
      </Reveal>

      <Reveal>
        <Section eyebrow={sobre.achievementsEyebrow} title={sobre.achievementsHeading.title} highlight={sobre.achievementsHeading.highlight} tight>
          <StatsGrid stats={text.stats} />
        </Section>
      </Reveal>

      <Reveal as="section" className="px-5 pb-20 text-center content:px-12 content:pb-[100px]">
        <h2 className="m-0 mb-6 font-display text-xl font-bold text-text content:text-2xl">{sobre.ctaHeading}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/fluxo-de-trabalho"
            className="inline-block rounded-lg bg-primary px-[26px] py-3.5 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline"
          >
            {sobre.ctaWorkflow}
          </Link>
          <Link
            href="/contato"
            className="inline-block rounded-lg border border-primary bg-transparent px-[26px] py-3.5 font-mono text-sm font-bold tracking-[0.04em] text-primary no-underline"
          >
            {sobre.ctaContact}
          </Link>
        </div>
      </Reveal>
    </>
  );
}
