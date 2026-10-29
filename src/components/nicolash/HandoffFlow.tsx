import { Fragment } from "react";
import { DiagramFrame, StepCard } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Do briefing ao código",
    subtitle: "Como o projeto saiu de uma conversa com a cliente e chegou em produção",
    steps: [
      { title: "Cliente", description: "Briefing inicial: fotos, preços, manutenção e cancelamento.", accent: false },
      { title: "Figma", description: "Design original: referências de estilo, estrutura e identidade.", accent: false },
      { title: "Claude Design", description: "Refino de interface, handoff preparado para implementação.", accent: false },
      { title: "Claude Code", description: "Projeto Next.js real, pronto para produção.", accent: true },
    ],
  },
  en: {
    eyebrow: "From briefing to code",
    subtitle: "How the project went from a conversation with the client to production",
    steps: [
      { title: "Client", description: "Initial briefing: photos, prices, maintenance and cancellation.", accent: false },
      { title: "Figma", description: "Original design: style references, structure and identity.", accent: false },
      { title: "Claude Design", description: "Interface refinement, handoff ready for implementation.", accent: false },
      { title: "Claude Code", description: "A real Next.js project, ready for production.", accent: true },
    ],
  },
} as const;

export function HandoffFlow({ lang }: { lang: "pt" | "en" }) {
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
