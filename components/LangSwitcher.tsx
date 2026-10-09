"use client";

import type { Lang } from "@/lib/i18n";
import { usePortfolio } from "./PortfolioProvider";

const OPTIONS: { lang: Lang; label: string }[] = [
  { lang: "en", label: "EN" },
  { lang: "fr", label: "FR" },
];

export default function LangSwitcher() {
  const { lang, setLang } = usePortfolio();

  return (
    <div
      className="flex rounded-full border border-[var(--border)] overflow-hidden text-xs font-bold"
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.lang}
          type="button"
          onClick={() => setLang(option.lang)}
          aria-pressed={lang === option.lang}
          id={option.lang === "en" ? "langBtnEn" : "langBtnFr"}
          className={`px-3 py-2 transition-colors ${
            lang === option.lang
              ? "bg-[var(--accent-dim)] text-accent"
              : "text-mute hover:text-[var(--text)]"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
