import type { ReactNode } from "react";

export type SectionProps = {
  /** Small pill label above the heading, e.g. "Quem sou" */
  eyebrow?: string;
  /** Heading text before the highlighted portion */
  title?: string;
  /** Portion of the heading rendered in the brand green */
  highlight?: string;
  /** Text alignment for the eyebrow/heading block */
  align?: "center" | "left";
  /** Heading size scale */
  size?: "lg" | "md";
  /** Removes the section's top padding, for sections stacked directly under another */
  tight?: boolean;
  className?: string;
  children?: ReactNode;
};

const headingSize: Record<NonNullable<SectionProps["size"]>, string> = {
  lg: "text-2xl content:text-4xl",
  md: "text-xl content:text-3xl",
};

export function Section({
  eyebrow,
  title,
  highlight,
  align = "center",
  size = "lg",
  tight = false,
  className = "",
  children,
}: SectionProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const paddingClass = tight
    ? "px-5 pb-[60px] content:px-12 content:pb-[100px]"
    : "px-5 py-[60px] content:px-12 content:py-[96px]";

  return (
    <section className={`${paddingClass} ${className}`}>
      <div className={`mx-auto flex max-w-[1200px] flex-col ${alignClass}`}>
        {eyebrow ? (
          <span className="mb-5 inline-block rounded-full border border-border-muted px-[18px] py-2 font-mono text-xs text-text-secondary">
            {eyebrow}
          </span>
        ) : null}
        {title ? (
          <h2
            className={`m-0 font-display font-bold text-text ${headingSize[size]} ${
              align === "center" ? "mb-12" : "mb-4"
            }`}
          >
            {title}
            {highlight ? <span className="text-primary"> {highlight}</span> : null}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
