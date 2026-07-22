"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { StatsGrid } from "@/components/StatsGrid";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjects, getSiteText } from "@/content/site";

export default function Home() {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const projects = getProjects(lang).slice(0, 5);
  const workflowPreview = text.workflow.slice(0, 3);

  return (
    <>
      <Hero
        videoSrc="/assets/hero-video.mp4"
        skills={text.home.heroSkills}
        subtitle={text.brand.role}
        primaryCta={{ label: text.home.heroCtaPrimary, href: "/projetos" }}
        secondaryCta={{ label: text.home.heroCtaSecondary, href: "/contato" }}
      />

      <Marquee words={text.home.marqueeWords} />

      <Reveal className="mt-9 content:mt-16">
        <Section
          title={text.home.projectsHeading.title}
          highlight={text.home.projectsHeading.highlight}
        >
          <div className="mb-10 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <ProjectCard
                  variant="showcase"
                  slug={project.slug}
                  icon={project.icon}
                  title={project.title}
                  name={project.name}
                  summary={project.summary}
                  image={project.image}
                  tags={project.tags}
                />
              </Reveal>
            ))}
          </div>
          <Link
            href="/projetos"
            className="inline-block rounded-lg bg-primary px-[26px] py-3.5 font-mono text-base font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
          >
            {text.home.projectsCta}
          </Link>
        </Section>
      </Reveal>

      <Reveal>
        <Section title={text.home.statsHeading.title} highlight={text.home.statsHeading.highlight}>
          <StatsGrid stats={text.stats} />
        </Section>
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto flex w-full max-w-[1200px] flex-col flex-wrap items-center gap-8 px-5 pb-[60px] content:flex-row content:gap-14 content:px-12 content:pb-[100px]"
      >
        <div className="w-full min-w-0 content:max-w-[300px] content:min-w-[240px] content:flex-1 content:basis-[280px]">
          <div className="mx-auto flex aspect-[4/5] w-full max-w-[300px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-pure content:mx-0">
            <Image
              src="/assets/sobre-foto.jpeg"
              alt={text.brand.person}
              width={480}
              height={600}
              className="h-full w-full scale-[1.2] object-contain"
            />
          </div>
        </div>
        <div className="w-full min-w-0 content:min-w-[300px] content:flex-1 content:basis-[440px]">
          <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
            {text.home.aboutEyebrow}
          </span>
          <h2 className="m-0 mb-4 font-display text-2xl font-bold text-text content:text-4xl">
            {text.home.aboutHeading.title}{" "}
            <span className="text-primary">{text.home.aboutHeading.highlight}</span>
          </h2>
          <p className="m-0 mb-6 max-w-[540px] font-body text-base leading-[1.65] text-text-body">
            {text.brand.bio}
          </p>
          <Link
            href="/sobre"
            className="font-mono text-base font-semibold tracking-[0.04em] text-primary no-underline transition-colors hover:text-primary-hover"
          >
            {text.home.aboutCta}
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <Section
          title={text.home.workflowHeading.title}
          highlight={text.home.workflowHeading.highlight}
        >
          <div className="mb-10 grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 text-left">
            {workflowPreview.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface p-[26px] transition-colors hover:border-primary hover:bg-surface-alt">
                  <div className="mb-3 font-mono text-xs text-primary">{step.n}</div>
                  <h3 className="m-0 mb-2 font-display text-lg font-bold text-text">{step.title}</h3>
                  <p className="m-0 font-body text-base leading-[1.55] text-text-muted">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/fluxo-de-trabalho"
            className="font-mono text-base font-semibold tracking-[0.04em] text-primary no-underline transition-colors hover:text-primary-hover"
          >
            {text.home.workflowCta}
          </Link>
        </Section>
      </Reveal>

      <Reveal>
        <Section
          eyebrow={text.home.contactEyebrow}
          title={text.home.contactHeading.title}
          highlight={text.home.contactHeading.highlight}
        >
          <Link
            href="/contato"
            className="inline-block rounded-lg bg-primary px-[26px] py-3.5 font-mono text-base font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
          >
            {text.home.contactCta}
          </Link>
        </Section>
      </Reveal>
    </>
  );
}
