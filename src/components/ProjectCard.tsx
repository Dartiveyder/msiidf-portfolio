import Link from "next/link";
import Image from "next/image";

export type ProjectCardVariant = "row" | "card" | "showcase";

export type ProjectCardProps = {
  variant: ProjectCardVariant;
  slug: string;
  /** Emoji, or a path to an image (e.g. "/assets/flow-icon.png") */
  icon: string;
  title: string;
  /** Used for alt text and the placeholder label */
  name?: string;
  /** Short copy, used by the "card" variant and as the hover description on "showcase" */
  summary?: string;
  /** Longer copy, used by the "row" variant */
  description?: string;
  image?: string;
  href?: string;
  /** "row" variant only — mirrors the image/text sides */
  reverse?: boolean;
  /** "row" variant only — shows a request-access button next to the "view more" link */
  showRequestAccess?: boolean;
  /** Label for the "view more" link/CTA */
  viewMoreLabel?: string;
  /** Label for the request-access button ("row" variant only) */
  requestAccessLabel?: string;
  /** Href for the request-access button ("row" variant only) */
  requestAccessHref?: string;
  /** "showcase" variant only — skill/tag pills shown over the image */
  tags?: string[];
  /** "showcase" variant only — extra classes on the outer link (e.g. grid column span) */
  className?: string;
};

function isImagePath(icon: string) {
  return /^(\/|https?:)/.test(icon) || /\.(png|jpe?g|svg|webp)$/i.test(icon);
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function Thumbnail({
  image,
  name,
  rounded,
}: {
  image?: string;
  name?: string;
  rounded: string;
}) {
  if (image) {
    return (
      <div className={`relative aspect-[16/10] w-full overflow-hidden border border-border ${rounded}`}>
        <Image src={image} alt={name ?? ""} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`flex aspect-[16/10] w-full items-center justify-center border border-border p-4 text-center ${rounded}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #1c1c1c 0px, #1c1c1c 10px, #171717 10px, #171717 20px)",
      }}
    >
      <span className="font-mono text-xs text-text-faintest">screenshot do projeto — {name}</span>
    </div>
  );
}

function Icon({ icon, size }: { icon: string; size: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-primary to-primary-dark ${size}`}
    >
      {isImagePath(icon) ? (
        <Image src={icon} alt="" width={44} height={44} className="h-full w-full object-cover" />
      ) : (
        <span>{icon}</span>
      )}
    </div>
  );
}

export function ProjectCard({
  variant,
  slug,
  icon,
  title,
  name,
  summary,
  description,
  image,
  href,
  reverse = false,
  showRequestAccess = false,
  viewMoreLabel = "VER MAIS",
  requestAccessLabel = "SOLICITAR ACESSO",
  requestAccessHref = "/contato",
  tags,
  className = "",
}: ProjectCardProps) {
  const resolvedHref = href ?? `/projetos/${slug}`;

  if (variant === "showcase") {
    return (
      <Link
        href={resolvedHref}
        className={`group relative block h-[240px] w-full overflow-hidden rounded-2xl border border-border content:h-[340px] ${className}`}
      >
        {image ? (
          <Image
            src={image}
            alt={name ?? title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #1c1c1c 0px, #1c1c1c 10px, #171717 10px, #171717 20px)",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5 transition-opacity duration-300 group-hover:opacity-0">
          <h4 className="m-0 font-display text-lg font-bold text-white content:text-xl">{title}</h4>
          {tags && tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-[0.04em] text-white uppercase backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {summary ? (
          <div className="absolute inset-0 flex items-end bg-black/75 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="m-0 font-body text-sm leading-[1.5] text-white content:text-base">{summary}</p>
          </div>
        ) : null}
      </Link>
    );
  }

  if (variant === "card") {
    return (
      <Link
        href={resolvedHref}
        className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-5 no-underline transition-colors hover:border-primary hover:bg-surface-alt"
      >
        <Thumbnail image={image} name={name ?? title} rounded="rounded-[10px]" />
        <div className="flex items-center gap-2.5">
          <Icon icon={icon} size="h-8 w-8 rounded-[9px] text-base" />
          <h4 className="m-0 font-display text-lg font-bold text-text">{title}</h4>
        </div>
        <p className="m-0 flex-1 font-body text-base leading-[1.55] text-text-mutedalt">{summary}</p>
        <span className="font-mono text-base font-semibold tracking-[0.04em] text-primary">
          {viewMoreLabel}
        </span>
      </Link>
    );
  }

  return (
    <div
      className={`flex flex-col flex-wrap items-center gap-7 content:flex-row content:gap-14 ${
        reverse ? "content:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full min-w-0 content:min-w-[300px] content:flex-1 content:basis-[380px]">
        <Thumbnail image={image} name={name ?? title} rounded="rounded-[14px]" />
      </div>
      <div className="w-full min-w-0 content:min-w-[300px] content:flex-1 content:basis-[380px]">
        <div className="mb-5 flex items-center gap-4">
          <Icon icon={icon} size="h-11 w-11 rounded-xl text-xl" />
          <div className="h-px flex-1 bg-border" />
        </div>
        <h3 className="m-0 mb-3.5 font-display text-2xl font-bold text-text content:text-3xl">{title}</h3>
        <p className="m-0 mb-4 w-full box-border font-body text-base leading-[1.6] text-text-body">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={resolvedHref}
            className="font-mono text-base font-semibold tracking-[0.04em] text-primary no-underline transition-colors hover:text-primary-hover"
          >
            {viewMoreLabel}
          </Link>
          {showRequestAccess ? (
            isExternalHref(requestAccessHref) ? (
              <a
                href={requestAccessHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-primary px-5 py-2.5 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
              >
                {requestAccessLabel}
              </a>
            ) : (
              <Link
                href={requestAccessHref}
                className="rounded-lg bg-primary px-5 py-2.5 font-mono text-sm font-bold tracking-[0.04em] text-text-oninverted no-underline transition-colors hover:bg-primary-hover"
              >
                {requestAccessLabel}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
