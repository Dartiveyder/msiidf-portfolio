import { DiagramFrame } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Do problema ao impacto",
    subtitle: "Problema identificado, decisões tomadas e resultado final",
    problemTitle: "Problema identificado",
    problems: [
      "Agendamento só por WhatsApp, demora para confirmar",
      "Risco de duas pessoas marcarem o mesmo horário",
      "Custo de hospedagem alto para o tamanho do negócio",
    ],
    decisionsTitle: "Decisões tomadas com Claude Code",
    decisions: [
      "Sistema de agendamento com trava de concorrência",
      "Criptografia de dados + conformidade com a LGPD",
      "Migração de Next.js/Vercel para PHP e MySQL",
    ],
    impactTitle: "Impacto",
    stats: [
      { value: "100%", label: "Paridade de funcionalidades na migração" },
      { value: "0", label: "Conflitos de horário" },
      { value: "2", label: "Arquiteturas completas" },
    ],
  },
  en: {
    eyebrow: "From problem to impact",
    subtitle: "Problem identified, decisions made and the final result",
    problemTitle: "Problem identified",
    problems: [
      "Booking only via WhatsApp, slow to confirm",
      "Risk of two people booking the same time slot",
      "Hosting cost too high for the size of the business",
    ],
    decisionsTitle: "Decisions made with Claude Code",
    decisions: [
      "Booking system with a concurrency lock",
      "Data encryption + LGPD compliance",
      "Migration from Next.js/Vercel to PHP and MySQL",
    ],
    impactTitle: "Impact",
    stats: [
      { value: "100%", label: "Feature parity after migration" },
      { value: "0", label: "Double-booked time slots" },
      { value: "2", label: "Complete backend architectures" },
    ],
  },
} as const;

export function ImpactDiagram({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="flex flex-col gap-3">
        <div className="rounded-xl border border-[#e2795a] bg-surface-alt p-5">
          <h3 className="m-0 font-body text-base font-semibold text-text">{t.problemTitle}</h3>
          <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
            {t.problems.map((p) => (
              <li key={p} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-text-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e2795a]" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-primary bg-surface-alt p-5">
          <h3 className="m-0 font-body text-base font-semibold text-text">{t.decisionsTitle}</h3>
          <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
            {t.decisions.map((d) => (
              <li key={d} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-text-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border-muted bg-surface-alt p-5">
          <h3 className="m-0 mb-4 font-body text-base font-semibold text-text">{t.impactTitle}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border-muted bg-surface p-4 text-center">
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <p className="m-0 mt-2 font-mono text-xs leading-snug text-text-faint">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}
