import { DiagramFrame, StepCard } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "Linha do tempo do projeto",
    subtitle: "Do site institucional à migração de hospedagem",
    steps: [
      { title: "Site institucional", description: "Design → Next.js → Vercel. Serviços, fotos, preços, responsivo mobile.", accent: false },
      { title: "Agendamento online", description: "Calendário + confirmação. Sem horários sobrepostos, cancelamento via WhatsApp.", accent: false },
      { title: "Painel administrativo", description: "Mobile-first, /admin. Agenda, bloqueios, status dos horários.", accent: false },
      { title: "Segurança dos dados", description: "Criptografia + conformidade. LGPD, sessão segura, senha com hash.", accent: false },
      { title: "Migração de hospedagem", description: "Vercel → PHP/MySQL. cPanel + Git Version Control, custo menor.", accent: true },
    ],
    bannerTitle: "O gatilho da migração: custo",
    bannerSubtitle: "Hospedagem mensal na Vercel ficou alta para um negócio pequeno",
  },
  en: {
    eyebrow: "Project timeline",
    subtitle: "From the business website to the hosting migration",
    steps: [
      { title: "Business website", description: "Design → Next.js → Vercel. Services, photos, prices, mobile responsive.", accent: false },
      { title: "Online booking", description: "Calendar + confirmation. No overlapping slots, cancellation via WhatsApp.", accent: false },
      { title: "Admin panel", description: "Mobile-first, /admin. Schedule, blocked slots, booking status.", accent: false },
      { title: "Data security", description: "Encryption + compliance. LGPD, secure session, hashed password.", accent: false },
      { title: "Hosting migration", description: "Vercel → PHP/MySQL. cPanel + Git Version Control, lower cost.", accent: true },
    ],
    bannerTitle: "The trigger for the migration: cost",
    bannerSubtitle: "Vercel's monthly hosting got expensive for a small business",
  },
} as const;

export function Timeline({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {t.steps.map((step, i) => (
          <StepCard
            key={step.title}
            number={i + 1}
            title={step.title}
            description={step.description}
            tone={step.accent ? "accent" : "default"}
          />
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-border-muted bg-surface-alt p-5 text-center">
        <h3 className="font-body text-base font-semibold text-text">{t.bannerTitle}</h3>
        <p className="m-0 mt-1 font-mono text-xs text-text-faint">{t.bannerSubtitle}</p>
      </div>
    </DiagramFrame>
  );
}
