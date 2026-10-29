const copy = {
  pt: {
    eyebrow: "Quanto custa cada caminho",
    subtitle: "Comparando o 1º ano de cada plano de entrada, em reais",
    vercelLabel: "Vercel · plano Pro",
    vercelYear: "≈ R$ 1.270/ano*",
    vercelUsd: "US$ 240/ano · US$ 20/mês por assento",
    hostgatorLabel: "HostGator · Plano P",
    hostgatorMonth: "R$ 10,09/mês no 1º ano",
    hostgatorYear: "R$ 121/ano",
    hostgatorRenew: "≈ R$ 551/ano na renovação**",
    multiplierPrefix: "até",
    multiplierValue: "10×",
    multiplierSuffix: "mais barato",
    footnote:
      "*Conversão aproximada em 29/10/2026, câmbio de referência ~R$ 5,30. O plano Pro da Vercel é cobrado em dólar, por assento, mais uso acima do crédito incluso.\n**Preço de lista antes do desconto promocional de entrada, conforme exibido no site da HostGator.",
    sources: [
      { label: "vercel.com/pricing", href: "https://vercel.com/pricing" },
      { label: "hostgator.com.br/hospedagem-de-sites", href: "https://www.hostgator.com.br/hospedagem-de-sites" },
    ],
  },
  en: {
    eyebrow: "What each path actually costs",
    subtitle: "Comparing the 1st year of each entry-level plan, in Brazilian reais",
    vercelLabel: "Vercel · Pro plan",
    vercelYear: "≈ R$ 1,270/year*",
    vercelUsd: "US$ 240/year · US$ 20/month per seat",
    hostgatorLabel: "HostGator · Plan P",
    hostgatorMonth: "R$ 10.09/month in year 1",
    hostgatorYear: "R$ 121/year",
    hostgatorRenew: "≈ R$ 551/year on renewal**",
    multiplierPrefix: "up to",
    multiplierValue: "10×",
    multiplierSuffix: "cheaper",
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
    <div className="case-study-embed my-8 rounded-2xl border border-border bg-surface p-6 content:p-8">
      <span className="mb-3 inline-block rounded-full border border-border-muted px-[14px] py-1.5 font-mono text-[11px] text-text-secondary">
        {t.eyebrow}
      </span>
      <p className="m-0 mb-5 font-mono text-[11px] text-text-faint">{t.subtitle}</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-xl border border-border-muted bg-surface-alt p-6 text-center">
          <div className="font-body text-sm font-semibold text-text-secondary">{t.vercelLabel}</div>
          <div className="mt-3 font-display text-3xl leading-tight font-bold text-text content:text-4xl">
            {t.vercelYear}
          </div>
          <div className="mt-2 font-mono text-[11px] leading-snug text-text-faint">{t.vercelUsd}</div>
        </div>

        <div className="flex items-center justify-center py-2">
          <div className="flex flex-col items-center gap-0.5 rounded-full bg-primary px-7 py-5 text-center">
            <span className="font-mono text-[10px] font-bold tracking-[0.04em] text-text-oninverted uppercase">
              {t.multiplierPrefix}
            </span>
            <span className="font-display text-3xl leading-none font-bold text-text-oninverted">
              {t.multiplierValue}
            </span>
            <span className="font-mono text-[11px] text-text-oninverted">{t.multiplierSuffix}</span>
          </div>
        </div>

        <div className="rounded-xl border border-primary bg-surface-alt p-6 text-center">
          <div className="font-body text-sm font-semibold text-primary">{t.hostgatorLabel}</div>
          <div className="mt-3 font-display text-3xl leading-tight font-bold text-primary content:text-4xl">
            {t.hostgatorYear}
          </div>
          <div className="mt-2 font-mono text-[11px] leading-snug text-text-faint">{t.hostgatorMonth}</div>
          <div className="mt-1 font-mono text-[11px] leading-snug text-text-faint">{t.hostgatorRenew}</div>
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
