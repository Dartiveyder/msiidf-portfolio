"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjects, getSiteText } from "@/content/site";

export function ProjetosClient() {
  const { lang } = useLanguage();
  const text = getSiteText(lang);
  const projects = getProjects(lang);

  return (
    <>
      <section className="px-5 pt-[170px] pb-10 text-center content:px-12 content:pt-[180px]">
        <h1 className="m-0 font-display text-3xl font-bold text-text content:text-5xl">
          {text.projetos.heading.title} <span className="text-primary">{text.projetos.heading.highlight}</span>
        </h1>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-[60px] px-5 pb-20 content:gap-[100px] content:px-12 content:pb-[110px]">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard
              variant="row"
              reverse={i % 2 === 1}
              slug={project.slug}
              icon={project.icon}
              name={project.name}
              title={project.title}
              description={project.description}
              image={project.image}
              showRequestAccess={project.requestAccess}
              viewMoreLabel={text.common.viewMore}
              requestAccessLabel={text.projetoDetalhe.requestAccess}
              requestAccessHref={project.requestAccessHref}
            />
          </Reveal>
        ))}
      </section>
    </>
  );
}
