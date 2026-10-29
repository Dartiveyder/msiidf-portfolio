"use client";

import { useState } from "react";

type Row = { label: string; value: string; highlight?: "cost-bad" | "cost-good" };

type PathData = {
  tabLabel: string;
  badge: string;
  rows: Row[];
};

const copy: Record<"pt" | "en", { vercel: PathData; hostgator: PathData }> = {
  pt: {
    vercel: {
      tabLabel: "Vercel · Next.js",
      badge: "Caminho inicial",
      rows: [
        { label: "Linguagem", value: "TypeScript/JavaScript de ponta a ponta, front-end e back-end no mesmo projeto." },
        { label: "Deploy", value: "Automático a cada push no GitHub, sem configuração manual de servidor." },
        { label: "Banco de dados", value: "Postgres gerenciado (Neon, neste projeto), com variáveis de ambiente sincronizadas automaticamente." },
        { label: "Segurança de infraestrutura", value: "Certificado HTTPS automático, rede de borda, isolamento de funções, tudo gerenciado pela plataforma." },
        {
          label: "Custo",
          value: "Gratuito para validar, mas o plano pago soma rápido quando convertido para reais, especialmente para um negócio pequeno.",
          highlight: "cost-bad",
        },
        { label: "Melhor para", value: "Validar um produto rápido, projetos com orçamento para hospedagem gerenciada, ou produtos que vão escalar de verdade." },
      ],
    },
    hostgator: {
      tabLabel: "HostGator · PHP",
      badge: "Caminho escolhido",
      rows: [
        { label: "Linguagem", value: "PHP no servidor, reescrevendo cada endpoint mantendo exatamente o mesmo contrato, para o front-end não perceber diferença." },
        { label: "Deploy", value: "Git Version Control do próprio cPanel, puxando de um repositório privado no GitHub via chave SSH somente leitura." },
        { label: "Banco de dados", value: "MySQL via phpMyAdmin, com um script de migração dos dados que já existiam no Postgres." },
        { label: "Segurança de infraestrutura", value: "HTTPS via AutoSSL do cPanel, com responsabilidade maior do desenvolvedor sobre o que é exposto publicamente." },
        {
          label: "Custo",
          value: "Uma fração do plano pago da Vercel, cobrado em reais, já incluindo e-mail e domínio.",
          highlight: "cost-good",
        },
        { label: "Melhor para", value: "Negócios pequenos e locais, orçamento apertado, clientes que já conhecem cPanel, ou hospedagem compartilhada tradicional." },
      ],
    },
  },
  en: {
    vercel: {
      tabLabel: "Vercel · Next.js",
      badge: "Initial path",
      rows: [
        { label: "Language", value: "TypeScript/JavaScript end to end, frontend and backend in the same project." },
        { label: "Deploy", value: "Automatic on every push to GitHub, no manual server configuration." },
        { label: "Database", value: "Managed Postgres (Neon, in this project), with environment variables synced automatically." },
        { label: "Infrastructure security", value: "Automatic HTTPS certificates, an edge network, function isolation, all managed by the platform." },
        {
          label: "Cost",
          value: "Free to validate, but the paid plan adds up quickly once converted to local currency, especially for a small business.",
          highlight: "cost-bad",
        },
        { label: "Best for", value: "Validating a product quickly, projects with budget for managed hosting, or products that will genuinely scale." },
      ],
    },
    hostgator: {
      tabLabel: "HostGator · PHP",
      badge: "Chosen path",
      rows: [
        { label: "Language", value: "Server-side PHP, rewriting every endpoint while keeping the exact same contract, so the frontend sees no difference." },
        { label: "Deploy", value: "cPanel's own Git Version Control, pulling from a private GitHub repository through a read-only SSH key." },
        { label: "Database", value: "MySQL via phpMyAdmin, with a migration script for the data that already existed in Postgres." },
        { label: "Infrastructure security", value: "HTTPS via cPanel's AutoSSL, with more of the responsibility on the developer for what gets exposed publicly." },
        {
          label: "Cost",
          value: "A fraction of Vercel's paid plan, billed in local currency, already including email and domain.",
          highlight: "cost-good",
        },
        { label: "Best for", value: "Small, local businesses, a tight budget, clients already familiar with cPanel, or traditional shared hosting." },
      ],
    },
  },
};

export function PathSwitcher({ lang }: { lang: "pt" | "en" }) {
  const [active, setActive] = useState<"vercel" | "hostgator">("vercel");
  const t = copy[lang];
  const data = active === "vercel" ? t.vercel : t.hostgator;

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 content:p-8">
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setActive("vercel")}
          className={`flex-1 rounded-xl border px-4 py-3 font-mono text-sm font-bold tracking-[0.02em] transition-colors ${
            active === "vercel"
              ? "border-primary bg-primary text-text-oninverted"
              : "border-border-muted bg-surface-alt text-text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          {t.vercel.tabLabel}
        </button>
        <button
          type="button"
          onClick={() => setActive("hostgator")}
          className={`flex-1 rounded-xl border px-4 py-3 font-mono text-sm font-bold tracking-[0.02em] transition-colors ${
            active === "hostgator"
              ? "border-primary bg-primary text-text-oninverted"
              : "border-border-muted bg-surface-alt text-text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          {t.hostgator.tabLabel}
        </button>
      </div>

      <div key={active} className="animate-[fadeIn_0.3s_ease-out]">
        <span className="mb-4 inline-block rounded-full border border-border-muted px-3.5 py-1.5 font-mono text-xs text-text-secondary">
          {data.badge}
        </span>
        <div className="flex flex-col divide-y divide-border-soft">
          {data.rows.map((row) => (
            <div key={row.label} className="py-4 first:pt-0 last:pb-0">
              <div className="mb-1.5 font-mono text-[11px] tracking-[0.08em] text-text-faint uppercase">
                {row.label}
              </div>
              <p
                className={`m-0 font-body text-[15px] leading-relaxed ${
                  row.highlight === "cost-bad"
                    ? "font-semibold text-[#e2795a]"
                    : row.highlight === "cost-good"
                      ? "font-semibold text-primary"
                      : "text-text-secondary"
                }`}
              >
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
