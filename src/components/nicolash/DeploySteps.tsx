"use client";

import { useState } from "react";

type Step = { title: string; desc: string };

const copy: Record<"pt" | "en", Step[]> = {
  pt: [
    {
      title: "Arquivo de configuração do cPanel",
      desc: "O projeto é preparado com um arquivo de configuração próprio do cPanel, que define exatamente quais arquivos vão para a pasta pública do site, e bloqueia explicitamente tudo que é interno: código-fonte, dependências, controle de versão.",
    },
    {
      title: "Repositório privado no GitHub",
      desc: "Um repositório privado é criado no GitHub, só com o que deve ir para produção.",
    },
    {
      title: "Chave SSH somente leitura",
      desc: "É gerada uma chave SSH de deploy, sem senha, cadastrada no GitHub como chave somente leitura. Isso evita usar a senha pessoal da conta e limita o acesso ao mínimo necessário.",
    },
    {
      title: "Git Version Control no cPanel",
      desc: "Dentro do cPanel, a função Git Version Control recebe a URL do repositório e a chave, clona o projeto e, a cada atualização, basta um \"pull\" para publicar a versão mais nova.",
    },
    {
      title: "Banco de dados via phpMyAdmin",
      desc: "O banco de dados é criado via cPanel/phpMyAdmin, o esquema SQL é importado e os dados que já existiam em produção são migrados com um script próprio.",
    },
  ],
  en: [
    {
      title: "cPanel's own configuration file",
      desc: "The project is prepared with cPanel's own configuration file, which defines exactly which files go into the site's public folder, and explicitly blocks everything internal: source code, dependencies, version control.",
    },
    {
      title: "Private repository on GitHub",
      desc: "A private repository is created on GitHub, containing only what should go to production.",
    },
    {
      title: "Read-only SSH key",
      desc: "A passwordless deploy SSH key is generated and registered on GitHub as a read-only key. This avoids using the personal account password and limits access to the bare minimum.",
    },
    {
      title: "Git Version Control in cPanel",
      desc: "Inside cPanel, the Git Version Control feature takes the repository URL and the key, clones the project, and from then on a single \"pull\" publishes the newest version.",
    },
    {
      title: "Database via phpMyAdmin",
      desc: "The database is created through cPanel/phpMyAdmin, the SQL schema is imported, and the data already in production is migrated with a dedicated script.",
    },
  ],
};

export function DeploySteps({ lang }: { lang: "pt" | "en" }) {
  const [active, setActive] = useState(0);
  const steps = copy[lang];

  return (
    <div className="case-study-embed my-8 flex flex-col gap-2.5 rounded-2xl border border-border bg-surface p-6 content:p-8">
      {steps.map((step, i) => {
        const isActive = i === active;
        return (
          <div
            key={step.title}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(i);
            }}
            className={`cursor-pointer rounded-xl border p-5 transition-colors ${
              isActive ? "border-primary bg-surface-alt" : "border-border-muted hover:border-border-strong"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold transition-colors ${
                  isActive ? "bg-primary text-text-oninverted" : "bg-surface-alt text-text-secondary"
                }`}
              >
                {i + 1}
              </span>
              <h4 className="m-0 font-body text-base font-semibold text-text">{step.title}</h4>
            </div>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="m-0 overflow-hidden pt-3 pl-12 font-body text-sm leading-relaxed text-text-muted">
                {step.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
