import type { ReactNode } from "react";

/**
 * Renders as a <blockquote>. Markdown always nests a <p> inside a blockquote,
 * so the italic/size styling targets that child directly instead of wrapping
 * it in a second <p> (which would be invalid HTML).
 */
export function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-primary py-1 pl-6 [&>p]:m-0 [&>p]:font-body [&>p]:text-lg [&>p]:leading-[1.6] [&>p]:text-text-secondary [&>p]:italic [&>p]:content:text-xl">
      {children}
    </blockquote>
  );
}
