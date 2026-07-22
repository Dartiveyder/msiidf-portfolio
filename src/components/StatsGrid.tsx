import { Reveal } from "./Reveal";

export type Stat = {
  emoji: string;
  title: string;
  desc: string;
  /** Optional big headline number/figure (e.g. "90%", "+1M") shown above the title. */
  value?: string;
};

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 text-left">
      {stats.map((stat, i) => (
        <Reveal key={stat.title} delay={i * 80}>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary hover:bg-surface-alt">
            <div className="text-3xl">{stat.emoji}</div>
            {stat.value ? (
              <div>
                <div className="font-display text-4xl leading-tight font-bold text-primary content:text-5xl">
                  {stat.value}
                </div>
                <h3 className="m-0 mt-1 font-body text-base font-semibold text-text">{stat.title}</h3>
              </div>
            ) : (
              <h3 className="m-0 font-display text-3xl font-bold text-primary content:text-4xl">{stat.title}</h3>
            )}
            <p className="m-0 font-body text-base leading-relaxed text-text-muted">{stat.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
