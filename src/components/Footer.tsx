import Link from "next/link";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSocial = {
  label: string;
  href: string;
};

export type FooterProps = {
  tagline?: string;
  navTitle?: string;
  links?: FooterLink[];
  socials?: FooterSocial[];
};

const defaultLinks: FooterLink[] = [
  { label: "Quem sou", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Fluxo de trabalho", href: "/fluxo-de-trabalho" },
  { label: "Contatos", href: "/contato" },
];

const defaultSocials: FooterSocial[] = [{ label: "in", href: "https://linkedin.com" }];

export function Footer({
  tagline = "Transformando ideias em experiências digitais memoráveis",
  navTitle = "Navegação",
  links = defaultLinks,
  socials = defaultSocials,
}: FooterProps) {
  return (
    <footer className="flex flex-wrap items-start justify-between gap-8 border-t border-border-soft bg-bg px-5 pt-14 pb-10 content:px-12">
      <div className="max-w-[340px]">
        <div className="font-display text-xl font-bold text-text content:text-2xl">MSIIDF</div>
        <p className="m-0 mt-3 font-body text-base leading-relaxed text-text-muted">{tagline}</p>
        <div className="mt-5 flex gap-2.5">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border bg-surface-alt text-sm text-text no-underline"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3.5 font-display text-base font-bold text-primary">{navTitle}</div>
        <div className="flex flex-col gap-2.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-secondary no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
