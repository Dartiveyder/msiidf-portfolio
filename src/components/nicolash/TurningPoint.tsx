import { DiagramFrame } from "./StepCard";

const copy = {
  pt: {
    eyebrow: "A virada: de vitrine para agendamento",
    subtitle: "Ideia do desenvolvedor, a partir do fluxo manual via WhatsApp e Instagram",
    beforeBadge: "ANTES",
    afterBadge: "DEPOIS",
    name: "Nicolash",
    beforeSub: "Serviços e preços",
    afterSub: "Agendamento online",
    services: [
      { name: "Volume Russo", price: "R$ 200" },
      { name: "Alongamento Fio a Fio", price: "R$ 150" },
      { name: "Design de Sobrancelhas", price: "R$ 60" },
    ],
    bookButton: "Agendar pelo WhatsApp",
    beforeCaption: "Sem agenda real, sem controle de conflitos",
    days: ["S", "T", "Q", "Q", "S", "S"],
    dates: ["3", "4", "5", "6", "7", "8"],
    selectedDate: "6",
    slots: ["09:00", "11:00", "14:30"],
    selectedSlot: "11:00",
    afterCaption: "Nome e telefone preenchidos pela cliente",
    confirmButton: "Confirmar agendamento",
    afterFootnote: "Confirmação instantânea, sem trocar mensagem",
  },
  en: {
    eyebrow: "The turning point: from storefront to booking",
    subtitle: "Developer's idea, from watching the manual WhatsApp and Instagram flow",
    beforeBadge: "BEFORE",
    afterBadge: "AFTER",
    name: "Nicolash",
    beforeSub: "Services and prices",
    afterSub: "Online booking",
    services: [
      { name: "Egyptian Volume", price: "$40" },
      { name: "Classic Lash Extensions", price: "$30" },
      { name: "Eyebrow Design", price: "$12" },
    ],
    bookButton: "Book via WhatsApp",
    beforeCaption: "No real schedule, no conflict control",
    days: ["S", "M", "T", "W", "T", "F"],
    dates: ["3", "4", "5", "6", "7", "8"],
    selectedDate: "6",
    slots: ["09:00", "11:00", "14:30"],
    selectedSlot: "11:00",
    afterCaption: "Name and phone filled in by the client",
    confirmButton: "Confirm booking",
    afterFootnote: "Instant confirmation, no message needed",
  },
} as const;

export function TurningPoint({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  return (
    <DiagramFrame eyebrow={t.eyebrow} subtitle={t.subtitle}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border-muted bg-surface-alt p-5">
          <span className="inline-block rounded-full border border-border-outline px-3 py-1 font-mono text-[10px] font-bold tracking-wide text-text-secondary">
            {t.beforeBadge}
          </span>
          <h3 className="mt-3 font-body text-lg font-semibold text-text">{t.name}</h3>
          <p className="m-0 mb-3 font-mono text-xs text-text-faint">{t.beforeSub}</p>
          <div className="flex flex-col gap-2">
            {t.services.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-lg border border-border-muted bg-surface px-3 py-2.5">
                <span className="font-body text-sm text-text">{s.name}</span>
                <span className="font-mono text-xs text-text-faint">{s.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-full border border-border-outline px-4 py-2.5 text-center font-mono text-xs text-text-secondary">
            {t.bookButton}
          </div>
          <p className="m-0 mt-3 font-mono text-[11px] leading-relaxed text-text-faint">{t.beforeCaption}</p>
        </div>

        <div className="rounded-xl border border-primary bg-surface-alt p-5">
          <span className="inline-block rounded-full border border-primary px-3 py-1 font-mono text-[10px] font-bold tracking-wide text-primary">
            {t.afterBadge}
          </span>
          <h3 className="mt-3 font-body text-lg font-semibold text-text">{t.name}</h3>
          <p className="m-0 mb-3 font-mono text-xs text-text-faint">{t.afterSub}</p>

          <div className="rounded-lg border border-border-muted bg-surface p-3">
            <div className="grid grid-cols-6 gap-1.5 font-mono text-[11px] text-text-faint">
              {t.days.map((d, i) => (
                <span key={`${d}-${i}`} className="text-center">
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-1.5 grid grid-cols-6 gap-1.5">
              {t.dates.map((d) => (
                <span
                  key={d}
                  className={`flex h-7 items-center justify-center rounded-full font-mono text-xs ${
                    d === t.selectedDate ? "bg-primary font-bold text-text-oninverted" : "text-text-secondary"
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.slots.map((slot) => (
                <span
                  key={slot}
                  className={`rounded-md border px-2.5 py-1.5 font-mono text-xs ${
                    slot === t.selectedSlot
                      ? "border-primary bg-primary font-bold text-text-oninverted"
                      : "border-border-muted text-text-secondary"
                  }`}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
          <p className="m-0 mt-3 font-mono text-[11px] text-text-faint">{t.afterCaption}</p>

          <div className="mt-3 rounded-full bg-primary px-4 py-2.5 text-center font-body text-sm font-bold text-text-oninverted">
            {t.confirmButton}
          </div>
          <p className="m-0 mt-3 font-mono text-[11px] leading-relaxed text-primary">{t.afterFootnote}</p>
        </div>
      </div>
    </DiagramFrame>
  );
}
