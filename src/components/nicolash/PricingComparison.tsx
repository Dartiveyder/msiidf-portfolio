const copy = {
  pt: {
    eyebrow: "Quanto custa cada caminho",
    vercelLabel: "Vercel · plano Pro",
    vercelSeat: "US$ 20/mês por assento",
    vercelYear: "US$ 240/ano",
    vercelBrl: "≈ R$ 1.270/ano*",
    hostgatorLabel: "HostGator · Plano P",
    hostgatorMonth: "R$ 10,09/mês (1º ano, promocional)",
    hostgatorYear: "R$ 121/ano",
    hostgatorRenew: "≈ R$ 551/ano na renovação**",
    multiplierPrefix: "até",
    multiplierSuffix: "mais barato no primeiro ano",
    footnote:
      "*Conversão aproximada em 29/10/2026, câmbio de referência ~R$ 5,30. O plano Pro da Vercel é cobrado em dólar, por assento, mais uso acima do crédito incluso.\n**Preço de lista antes do desconto promocional de entrada, conforme exibido no site da HostGator.",
    sources: [
      { label: "vercel.com/pricing", href: "https://vercel.com/pricing" },
      { label: "hostgator.com.br/hospedagem-de-sites", href: "https://www.hostgator.com.br/hospedagem-de-sites" },
    ],
  },
  en: {
    eyebrow: "What each path actually costs",
    vercelLabel: "Vercel · Pro plan",
    vercelSeat: "$20/month per seat",
    vercelYear: "$240/year",
    vercelBrl: "≈ R$ 1,270/year*",
    hostgatorLabel: "HostGator · Plan P",
    hostgatorMonth: "R$ 10.09/month (1st year, promotional)",
    hostgatorYear: "R$ 121/year",
    hostgatorRenew: "≈ R$ 551/year on renewal**",
    multiplierPrefix: "up to",
    multiplierSuffix: "cheaper in the first year",
    footnote:
      "*Approximate conversion as of 2026-10-29, reference rate ~R$5.30. Vercel's Pro plan is billed in dollars, per seat, plus usage beyond the included credit.\n**List price before the sign-up promotional discount, as shown on HostGator's own site.",
    sources: [
      { label: "vercel.com/pricing", href: "https://vercel.com/pricing" },
      { label: "hostgator.com.br/hospedagem-de-sites", href: "https://www.hostgator.com.br/hospedagem-de-sites" },
    ],
  },
} as const;

export function PricingComparison({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 content:p-8">
      <span className="mb-5 inline-block rounded-full border border-border-muted px-[14px] py-1.5 font-mono text-[11px] text-text-secondary">
        {t.eyebrow}
      </span>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-xl border border-border-muted bg-surface-alt p-6 text-center">
          <div className="font-body text-sm font-semibold text-text-secondary">{t.vercelLabel}</div>
          <div className="mt-3 font-display text-4xl font-bold text-text content:text-5xl">{t.vercelYear}</div>
          <div className="mt-1 font-body text-xs text-text-faint">{t.vercelSeat}</div>
          <div className="mt-2 font-mono text-xs text-text-faint">{t.vercelBrl}</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1 rounded-full bg-primary px-5 py-3 text-center">
            <span className="font-mono text-[11px] font-bold tracking-[0.04em] text-text-oninverted uppercase">
              {t.multiplierPrefix}
            </span>
            <span className="font-display text-2xl leading-none font-bold text-text-oninverted">~10×</span>
            <span className="max-w-[90px] font-mono text-[10px] leading-tight text-text-oninverted">
              {t.multiplierSuffix}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-primary bg-surface-alt p-6 text-center">
          <div className="font-body text-sm font-semibold text-primary">{t.hostgatorLabel}</div>
          <div className="mt-3 font-display text-4xl font-bold text-primary content:text-5xl">{t.hostgatorYear}</div>
          <div className="mt-1 font-body text-xs text-text-faint">{t.hostgatorMonth}</div>
          <div className="mt-2 font-mono text-xs text-text-faint">{t.hostgatorRenew}</div>
        </div>
      </div>

      <p className="m-0 mt-6 font-mono text-[11px] leading-relaxed whitespace-pre-line text-text-faint">
        {t.footnote}
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {t.sources.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] text-primary underline underline-offset-2"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
