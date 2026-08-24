"use client";

import { useEffect, useId, useRef, useState } from "react";

export type PasswordGateTexts = {
  title: string;
  description: string;
  passwordLabel: string;
  submitLabel: string;
  cancelLabel: string;
  wrongPasswordMessage: string;
};

export type PasswordGateButtonProps = {
  href: string;
  password: string;
  label: string;
  className: string;
  texts: PasswordGateTexts;
  /** If true, opens `href` as a file download instead of a new tab. */
  download?: boolean;
};

export function PasswordGateButton({ href, password, label, className, texts, download = false }: PasswordGateButtonProps) {
  const { title, description, passwordLabel, submitLabel, cancelLabel, wrongPasswordMessage } = texts;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogTitleId = useId();

  const close = () => {
    setOpen(false);
    setValue("");
    setError(false);
  };

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value !== password) {
      setError(true);
      return;
    }

    close();
    if (download) {
      const link = document.createElement("a");
      link.href = href;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[360px] rounded-2xl border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <h2 id={dialogTitleId} className="m-0 mb-2 font-display text-lg font-bold text-text">
              {title}
            </h2>
            <p className="m-0 mb-5 font-body text-sm leading-relaxed text-text-muted">{description}</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor={`${dialogTitleId}-password`} className="sr-only">
                {passwordLabel}
              </label>
              <input
                ref={inputRef}
                id={`${dialogTitleId}-password`}
                type="password"
                inputMode="numeric"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError(false);
                }}
                className="mb-2 w-full rounded-lg border border-border-muted bg-bg-pure px-4 py-2.5 font-body text-sm text-text outline-none transition-colors focus:border-primary"
                placeholder={passwordLabel}
              />
              {error ? (
                <p className="m-0 mb-3 font-body text-xs text-red-400">{wrongPasswordMessage}</p>
              ) : (
                <div className="mb-3" />
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg px-4 py-2 font-mono text-xs font-bold tracking-[0.04em] text-text-secondary transition-colors hover:text-text"
                >
                  {cancelLabel}
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-5 py-2 font-mono text-xs font-bold tracking-[0.04em] text-text-oninverted transition-colors hover:bg-primary-hover"
                >
                  {submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
