import Markdown, { type Components } from "react-markdown";
import { QuoteBlock } from "./QuoteBlock";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="m-0 mt-14 mb-4 font-display text-xl font-bold text-text content:text-2xl first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="m-0 mt-10 mb-3 font-display text-lg font-bold text-text content:text-xl">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="m-0 mb-5 font-body text-base leading-[1.75] text-text-body">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="text-primary underline underline-offset-2"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="m-0 mb-5 flex flex-col gap-2.5 pl-5">{children}</ul>,
  ol: ({ children }) => <ol className="m-0 mb-5 flex list-decimal flex-col gap-2.5 pl-5">{children}</ol>,
  li: ({ children }) => (
    <li className="font-body text-base leading-[1.6] text-text-body">{children}</li>
  ),
  blockquote: ({ children }) => <QuoteBlock>{children}</QuoteBlock>,
  img: ({ src, alt }) => (
    <span className="my-8 block overflow-hidden rounded-2xl border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary markdown-authored images with unknown dimensions */}
      <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" className="block h-auto w-full" />
    </span>
  ),
  hr: () => <hr className="my-10 border-border-soft" />,
};

export function CaseStudyMarkdown({ children }: { children: string }) {
  return <Markdown components={components}>{children}</Markdown>;
}
