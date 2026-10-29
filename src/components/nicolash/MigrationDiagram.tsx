import { Fragment } from "react";
import { DiagramFrame, StepCard } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Mecânica da migração",
    subtitle: "Vercel/Next.js → cPanel/PHP, passo a passo",
    steps: [
      { title: "GitHub", description: "Repositório privado: só o que vai para produção.", accent: false },
      { title: "Chave SSH", description: "Somente leitura, sem usar a senha pessoal da conta.", accent: false },
      { title: "cPanel", description: "Git Version Control clona o projeto, \"pull\" publica.", accent: false },
      { title: "MySQL", description: "Esquema e dados migrados do Postgres via phpMyAdmin.", accent: true },
    ],
  },
  en: {
    eyebrow: "The migration mechanics",
    subtitle: "Vercel/Next.js → cPanel/PHP, step by step",
    steps: [
      { title: "GitHub", description: "Private repository: only what goes to production.", accent: false },
      { title: "SSH key", description: "Read-only, no personal account password involved.", accent: false },
      { title: "cPanel", description: "Git Version Control clones the project, \"pull\" publishes it.", accent: false },
      { title: "MySQL", description: "Schema and data migrated from Postgres via phpMyAdmin.", accent: true },
    ],
  },
} as const;

export function MigrationDiagram({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {t.steps.map((step, i) => (
          <Fragment key={step.title}>
            <StepCard number={i + 1} title={step.title} description={step.description} tone={step.accent ? "accent" : "default"} />
            {i < t.steps.length - 1 ? (
              <div className="hidden items-center justify-center font-mono text-text-faint sm:flex">→</div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </DiagramFrame>
  );
}
