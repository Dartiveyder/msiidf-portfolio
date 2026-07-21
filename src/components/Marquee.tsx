export type MarqueeProps = {
  words: string[];
};

export function Marquee({ words }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden border-y border-border-hairline bg-bg-pure py-6 content:py-8">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center">
            {words.map((word, i) => (
              <span key={`${copy}-${word}-${i}`} className="flex items-center">
                <span className="px-6 font-mono text-lg font-semibold tracking-[0.04em] text-text-faint content:px-10 content:text-2xl">
                  {word}
                </span>
                <span className="text-lg text-border-outline content:text-2xl" aria-hidden>
                  •
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-pure to-transparent content:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-pure to-transparent content:w-40"
      />
    </div>
  );
}
