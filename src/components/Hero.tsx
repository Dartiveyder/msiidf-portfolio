import Link from "next/link";

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroProps = {
  videoSrc?: string;
  skills?: string[];
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  /** Repeated background ticker text behind the video */
  tickerText?: string;
};

export function Hero({
  videoSrc,
  skills = ["Product Design", "UX Design", "UI Design", "UX Research"],
  subtitle,
  primaryCta,
  secondaryCta,
  tickerText = "FIGMA · FRAMER · FIGMA · FRAMER · FIGMA · FRAMER · FIGMA · FRAMER",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-hairline bg-bg-pure px-5 pt-[90px] pb-[50px] text-center content:px-12 content:pt-[120px] content:pb-[90px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap font-mono text-xs tracking-[0.3em] text-primary opacity-[0.08]"
      >
        {tickerText}
      </div>

      <div className="relative">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto -mt-4 block h-auto w-full max-w-[900px] rounded-2xl"
          />
        ) : null}

        {skills.length > 0 ? (
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-lg border border-border-muted bg-surface-alt px-4 py-2.5 font-body text-sm font-medium text-text-soft transition-colors hover:border-primary hover:bg-[#282828]"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mx-auto mt-8 max-w-[640px] font-body text-base leading-[1.55] text-text-secondary content:text-xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="box-border inline-flex min-w-[180px] items-center justify-center rounded-lg bg-primary px-[26px] py-3.5 font-nav text-base font-normal tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="box-border inline-flex min-w-[180px] items-center justify-center rounded-lg border border-border-strong bg-transparent px-[26px] py-3.5 font-nav text-base font-normal tracking-[0.04em] text-text no-underline transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
