"use client";

/* Image de couverture : URL externe provisoire (placehold.co) → <img> plutôt que next/image. */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { articles } from "@/lib/data";
import { usePortfolio } from "./PortfolioProvider";

export default function ArticleModal() {
  const { articleIndex, closeArticle, lang, t } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const open = articleIndex !== null;
  const article = articleIndex !== null ? articles[articleIndex] : undefined;
  const isFr = lang === "fr";
  const title = article ? (isFr ? article.title_fr : article.title_en) : "";
  const content = article ? (isFr ? article.content_fr : article.content_en) : "";

  const shareArticle = () => {
    if (!article) return;
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({ title, text: "Découvrez cet article sur le portfolio de Mor Faye.", url })
        .catch(() => {});
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {});
    }
  };

  return (
    <div
      id="articleModal"
      role="dialog"
      aria-modal="true"
      aria-label="Article"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[120] flex flex-col p-4 sm:p-8 bg-[rgba(var(--bg-rgb),0.97)] backdrop-blur-md transition-all duration-300 overflow-y-auto${open ? "" : " opacity-0 pointer-events-none"}`}>
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between mt-4 sticky top-0 bg-[rgba(var(--bg-rgb),0.9)] backdrop-blur-xl z-20 py-4 border-b border-[var(--border)] rounded-b-xl px-4 sm:px-0 transition-colors duration-300">
        <div className="flex items-center gap-3 text-mute text-xs">
          <div className="w-9 h-9 rounded-xl bg-[var(--accent-dim)] text-accent flex items-center justify-center">
            <i className="fa-solid fa-feather-pointed"></i>
          </div>
          <span id="articleModalTag" className="font-bold text-accent px-3 py-1 rounded-full bg-[var(--accent-dim)]">{article ? (isFr ? article.tag_fr : article.tag_en) : ""}</span>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={shareArticle} aria-label="Partager l'article" className={`px-4 h-11 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-sm text-sm font-semibold gap-2${copied ? " text-green-400 border-green-400" : ""}`}>
            <i className="fa-solid fa-share-nodes"></i>
            {" "}
            <span id="shareText" className="hidden sm:inline">
      {copied ? t.share_success : t.share_btn}
    </span>
          </button>
          <button onClick={closeArticle} aria-label="Fermer l'article" className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-accent transition-all shadow-sm">
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      <div className="max-w-3xl w-full mx-auto pb-20 pt-8 px-4 sm:px-0">
        <h1
      id="articleModalTitle"
      className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-6 leading-tight"
      dangerouslySetInnerHTML={{ __html: title }}
    />
        <div className="relative w-full aspect-[21/9] sm:aspect-video rounded-[24px] sm:rounded-[32px] overflow-hidden mb-10 border border-[var(--border)] shadow-[0_18px_44px_rgba(0,0,0,0.12)]">
          {article && <img id="articleModalImg" src={article.img} alt="Couverture de l'article" className="w-full h-full object-cover" />}
        </div>
        <div
      id="articleModalContent"
      className="text-mute text-[15px] sm:text-[17px] font-sans"
      dangerouslySetInnerHTML={{ __html: content }}
    />
      </div>
    </div>
  );
}
