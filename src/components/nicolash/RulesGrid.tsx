import { DiagramFrame, StepCard } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Regras de negócio, em linguagem natural",
    subtitle: "Como a cliente descreveu, do jeito que ela descreveu",
    rules: [
      { title: "Confirmação instantânea", description: "Sem aprovação manual, a reserva nasce confirmada.", warning: false },
      { title: "Sem intervalo", description: "Agenda corrida, atendimentos emendados um no outro.", warning: false },
      { title: "Cancelamento por WhatsApp", description: "Nunca pelo site, sempre direto com a profissional.", warning: false },
      { title: "Sem limite por cliente", description: "Qualquer pessoa marca quantos horários quiser.", warning: false },
      { title: "Multa de 30%", description: "Para cancelar com menos de 24h de antecedência.", warning: true },
    ],
  },
  en: {
    eyebrow: "Business rules, in natural language",
    subtitle: "The way the client described them, in her own words",
    rules: [
      { title: "Instant confirmation", description: "No manual approval, the booking confirms right away.", warning: false },
      { title: "No buffer time", description: "Back-to-back schedule, no gap between appointments.", warning: false },
      { title: "Cancel via WhatsApp", description: "Never through the site, always with the pro directly.", warning: false },
      { title: "No limit per client", description: "Anyone can book as many time slots as they want.", warning: false },
      { title: "30% cancellation fee", description: "For cancellations with less than 24 hours' notice.", warning: true },
    ],
  },
} as const;

export function RulesGrid({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.rules.map((rule, i) => (
          <StepCard
            key={rule.title}
            number={i + 1}
            title={rule.title}
            description={rule.description}
            tone={rule.warning ? "warning" : "default"}
          />
        ))}
      </div>
    </DiagramFrame>
  );
}
