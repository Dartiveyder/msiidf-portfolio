"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { CaseStudyMarkdown } from "@/components/CaseStudyMarkdown";
import { useLanguage } from "@/components/LanguageProvider";
import { getNextProject, getProject, getProjects, getSiteText } from "@/content/site";

const toolIcons: Record<string, string> = {
  Figma: "/icons/figma.png",
  Framer: "/icons/framer.png",
  Clarity: "/icons/clarity.png",
  Teams: "/icons/teams.png",
  ChatGPT: "/icons/chatgpt.png",
};

function isImagePath(icon: string) {
  return /^(\/|https?:)/.test(icon) || /\.(png|jpe?g|svg|webp)$/i.test(icon);
}

function ProjectIconBadge({ icon, size }: { icon: string; size: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-primary to-primary-dark text-2xl ${size}`}
    >
      {isImagePath(icon) ? (
        <Image src={icon} alt="" width={56} height={56} className="h-full w-full object-cover" />
      ) : (
        <span>{icon}</span>
      )}
    </div>
  );
}

export function ProjetoDetalheClient({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const { projetoDetalhe } = text;
  const project = getProject(lang, slug);

  if (!project) {
    return (
      <section className="px-5 py-[170px] text-center content:px-12">
        <h1 className="font-display text-xl font-bold text-text content:text-2xl">{projetoDetalhe.notFoundTitle}</h1>
        <Link href="/projetos" className="font-mono text-sm text-primary no-underline">
          {projetoDetalhe.notFoundBack}
        </Link>
      </section>
    );
  }

  const caseStudy = project.caseStudy;
  const related = getProjects(lang)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);
  const nextProject = caseStudy ? getNextProject(lang, project.slug) : undefined;

  return (
    <>
      <section className="mx-auto max-w-[1000px] px-5 pt-[164px] content:px-12 content:pt-[180px]">
        <Link
          href="/projetos"
          className="font-mono text-xs font-semibold tracking-[0.04em] text-primary no-underline"
        >
          {projetoDetalhe.back}
        </Link>

        <div className="my-7 flex items-center gap-4">
          <ProjectIconBadge icon={project.icon} size="h-[52px] w-[52px]" />
          <div>
            <div className="font-mono text-xs text-text-faint">{project.name}</div>
            <h1 className="m-0 mt-0.5 font-display text-2xl font-bold text-text content:text-4xl">{project.title}</h1>
          </div>
        </div>

        {caseStudy?.heroSubtitle ? (
          <p className="mb-8 max-w-[640px] font-body text-base leading-[1.6] text-text-secondary content:text-lg">
            {caseStudy.heroSubtitle}
          </p>
        ) : null}

        <div className="mb-8 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-muted px-3.5 py-1.5 font-mono text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.image ? (
          <div className="relative mb-10 aspect-[16/8] w-full overflow-hidden rounded-[18px] border border-border">
            <Image src={project.image} alt={project.imageAlt ?? project.name} fill className="object-cover" />
          </div>
        ) : (
          <div
            className="mb-10 flex aspect-[16/8] w-full items-center justify-center rounded-[18px] border border-border"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #1c1c1c 0px, #1c1c1c 10px, #171717 10px, #171717 20px)",
            }}
          >
            <span className="font-mono text-xs text-text-faintest">screenshot — {project.name}</span>
          </div>
        )}

        {caseStudy?.note ? (
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-alt p-5">
            <span className="shrink-0 text-lg leading-none">ℹ️</span>
            <p className="m-0 font-body text-sm leading-relaxed text-text-secondary">{caseStudy.note}</p>
          </div>
        ) : null}

        {caseStudy?.role ? (
          <div className="mb-10 flex flex-wrap gap-x-10 gap-y-5 rounded-2xl border border-border bg-surface p-7">
            <div>
              <div className="mb-1.5 font-mono text-xs tracking-[0.04em] text-text-faint uppercase">
                {projetoDetalhe.metaRole}
              </div>
              <div className="font-body text-sm text-text-secondary">{caseStudy.role}</div>
            </div>
            {caseStudy.period ? (
              <div>
                <div className="mb-1.5 font-mono text-xs tracking-[0.04em] text-text-faint uppercase">
                  {projetoDetalhe.metaPeriod}
                </div>
                <div className="font-body text-sm text-text-secondary">{caseStudy.period}</div>
              </div>
            ) : null}
            {caseStudy.type ? (
              <div>
                <div className="mb-1.5 font-mono text-xs tracking-[0.04em] text-text-faint uppercase">
                  {projetoDetalhe.metaType}
                </div>
                <div className="font-body text-sm text-text-secondary">{caseStudy.type}</div>
              </div>
            ) : null}
            {caseStudy.skills && caseStudy.skills.length > 0 ? (
              <div className="min-w-[220px] flex-1">
                <div className="mb-1.5 font-mono text-xs tracking-[0.04em] text-text-faint uppercase">
                  {projetoDetalhe.metaSkills}
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-muted px-3 py-1 font-mono text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {project.tools && project.tools.length > 0 ? (
          <>
            <h3 className="m-0 mb-3.5 font-display text-lg font-semibold text-text">{projetoDetalhe.toolsHeading}</h3>
            <div className="mb-8 flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="flex items-center gap-2 rounded-full border border-border-muted bg-surface-alt px-4 py-2 font-body text-sm font-medium text-text-soft"
                >
                  {toolIcons[tool] ? (
                    <Image src={toolIcons[tool]} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                  ) : null}
                  {tool}
                </span>
              ))}
            </div>
          </>
        ) : null}

        {caseStudy ? null : (
          <p className="mb-6 max-w-[760px] font-body text-base leading-[1.75] text-text-secondary">
            {project.description}
          </p>
        )}

        {project.requestAccess || project.externalUrl ? (
          <div className={caseStudy ? "mb-4 flex flex-wrap gap-4" : "mb-16 flex flex-wrap gap-4"}>
            {project.requestAccess ? (
              /^https?:\/\//.test(project.requestAccessHref ?? "") ? (
                <a
                  href={project.requestAccessHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-primary px-6 py-3 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
                >
                  {projetoDetalhe.requestAccess}
                </a>
              ) : (
                <Link
                  href={project.requestAccessHref ?? "/contato"}
                  className="inline-block rounded-lg bg-primary px-6 py-3 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
                >
                  {projetoDetalhe.requestAccess}
                </Link>
              )
            ) : null}
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-primary px-6 py-3 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
              >
                {project.externalUrlLabel ?? projetoDetalhe.visitSite}
              </a>
            ) : null}
          </div>
        ) : null}
      </section>

      {caseStudy ? (
        <>
          <Reveal as="section" className="mx-auto max-w-[1000px] px-5 pb-14 content:px-12">
            <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
              {projetoDetalhe.problemEyebrow}
            </span>
            <h2 className="m-0 mb-5 font-display text-2xl font-bold text-text content:text-4xl">
              {projetoDetalhe.problemHeading.title}{" "}
              <span className="text-primary">{projetoDetalhe.problemHeading.highlight}</span>
            </h2>
            {caseStudy.problem.split("\n\n").map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 mb-4 max-w-[760px] font-body text-base leading-[1.75] text-text-secondary last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal as="section" className="mx-auto max-w-[1000px] px-5 pb-14 content:px-12">
            <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
              {projetoDetalhe.solutionEyebrow}
            </span>
            <h2 className="m-0 mb-5 font-display text-2xl font-bold text-text content:text-4xl">
              {projetoDetalhe.solutionHeading.title}{" "}
              <span className="text-primary">{projetoDetalhe.solutionHeading.highlight}</span>
            </h2>
            {caseStudy.solution.split("\n\n").map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 mb-4 max-w-[760px] font-body text-base leading-[1.75] text-text-secondary last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal as="section" className="mx-auto max-w-[1000px] px-5 pb-16 content:px-12">
            <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
              {projetoDetalhe.impactEyebrow}
            </span>
            <h2 className="m-0 mb-8 font-display text-2xl font-bold text-text content:text-4xl">
              {projetoDetalhe.impactHeading.title}{" "}
              <span className="text-primary">{projetoDetalhe.impactHeading.highlight}</span>
            </h2>
            <ImpactMetrics metrics={caseStudy.impact} />
          </Reveal>

          <Reveal as="section" className="mx-auto max-w-[760px] px-5 pb-16 content:px-12">
            <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
              {projetoDetalhe.processEyebrow}
            </span>
            <h2 className="m-0 mb-8 font-display text-2xl font-bold text-text content:text-4xl">
              {projetoDetalhe.processHeading.title}{" "}
              <span className="text-primary">{projetoDetalhe.processHeading.highlight}</span>
            </h2>
            <CaseStudyMarkdown>{caseStudy.body}</CaseStudyMarkdown>
          </Reveal>

          {nextProject ? (
            <Reveal as="section" className="mx-auto max-w-[1000px] px-5 pb-20 content:px-12 content:pb-[110px]">
              <Link
                href={`/projetos/${nextProject.slug}`}
                className="group flex items-center gap-6 rounded-2xl border border-border bg-surface p-7 no-underline transition-colors hover:border-primary hover:bg-surface-alt content:p-10"
              >
                <ProjectIconBadge icon={nextProject.icon} size="h-14 w-14" />
                <div className="flex-1">
                  <div className="mb-1 font-mono text-xs text-text-faint">{projetoDetalhe.nextProject}</div>
                  <div className="font-display text-xl font-bold text-text content:text-2xl">{nextProject.title}</div>
                </div>
                <span className="shrink-0 font-mono text-2xl text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          ) : null}
        </>
      ) : (
        <section className="mx-auto max-w-[1200px] px-5 pb-20 content:px-12 content:pb-[110px]">
          <h2 className="m-0 mb-7 font-display text-2xl font-bold text-text">
            {projetoDetalhe.otherProjects.title}{" "}
            <span className="text-primary">{projetoDetalhe.otherProjects.highlight}</span>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard
                  variant="card"
                  slug={p.slug}
                  icon={p.icon}
                  title={p.title}
                  name={p.name}
                  summary={p.summary}
                  image={p.image}
                  viewMoreLabel={text.common.viewMore}
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
