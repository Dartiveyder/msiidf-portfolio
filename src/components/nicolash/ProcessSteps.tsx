import { DiagramFrame, StepCard } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Os quatro passos do processo",
    subtitle: "Do handoff reconstruído ao critério de aceite mobile-first",
    steps: [
      { title: "Reconstrução do handoff", description: "Handoff reconstruído como projeto Next.js real." },
      { title: "Pilha tecnológica", description: "Melhor linguagem, grátis: Next.js na Vercel." },
      { title: "Iteração visual", description: "Prints de tela viram padrão reaproveitável." },
      { title: "Mobile-first", description: "Critério de aceite desde a primeira entrega." },
    ],
  },
  en: {
    eyebrow: "The four steps of the process",
    subtitle: "From the rebuilt handoff to the mobile-first acceptance criterion",
    steps: [
      { title: "Rebuilding the handoff", description: "Rebuilt as a real Next.js project." },
      { title: "Choosing the stack", description: "Best language, free: Next.js on Vercel." },
      { title: "Visual iteration", description: "Screenshots become reusable patterns." },
      { title: "Mobile-first", description: "Acceptance criterion from day one." },
    ],
  },
} as const;

export function ProcessSteps({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <StepCard key={step.title} number={i + 1} title={step.title} description={step.description} />
        ))}
      </div>
    </DiagramFrame>
  );
}
