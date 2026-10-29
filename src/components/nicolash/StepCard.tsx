import type { ReactNode } from "react";

type StepCardProps = {
  number: number;
  title: string;
  description?: string;
  tone?: "default" | "accent" | "warning";
};

const toneClasses = {
  default: { border: "border-border-muted", badge: "border-border-outline text-text-secondary" },
  accent: { border: "border-primary", badge: "border-primary text-primary" },
  warning: { border: "border-[#e2795a]", badge: "border-[#e2795a] text-[#e2795a]" },
} as const;

export function StepCard({ number, title, description, tone = "default" }: StepCardProps) {
  const t = toneClasses[tone];
  return (
    <div className={`flex h-full flex-col items-center rounded-xl border ${t.border} bg-surface-alt p-5 text-center`}>
      <span className={`mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold ${t.badge}`}>
        {number}
      </span>
      <h3 className="font-body text-base leading-snug font-semibold text-text">{title}</h3>
      {description ? (
        <p className="m-0 mt-2 font-mono text-xs leading-relaxed text-text-faint">{description}</p>
      ) : null}
    </div>
  );
}

export function DiagramFrame({
  eyebrow,
  subtitle,
  children,
}: {
  eyebrow: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 content:p-8">
      <span className="mb-3 inline-block rounded-full border border-border-muted px-[14px] py-1.5 font-mono text-[11px] text-text-secondary">
        {eyebrow}
      </span>
      {subtitle ? <p className="m-0 mb-5 font-mono text-xs text-text-faint">{subtitle}</p> : null}
      {children}
    </div>
  );
}
