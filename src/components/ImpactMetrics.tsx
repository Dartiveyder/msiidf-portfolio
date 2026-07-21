import { Reveal } from "./Reveal";
import type { ImpactMetric } from "@/content/site";

export function ImpactMetrics({ metrics }: { metrics: ImpactMetric[] }) {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 text-left">
      {metrics.map((metric, i) => (
        <Reveal key={metric.value} delay={i * 80}>
          <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary hover:bg-surface-alt">
            <div className="font-display text-2xl font-bold text-primary content:text-3xl">{metric.value}</div>
            {metric.label ? (
              <div className="font-body text-base font-semibold text-text">{metric.label}</div>
            ) : null}
            {metric.description ? (
              <p className="m-0 font-body text-sm leading-relaxed text-text-muted">{metric.description}</p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
