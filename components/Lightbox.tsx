"use client";

/* Les visuels de la galerie ont des dimensions inconnues et sont affichés en `contain` :
   une balise <img> est plus adaptée ici que next/image. */
/* eslint-disable @next/next/no-img-element */
import { gallery, projects, type GalleryItem, type Project } from "@/lib/data";
import { usePortfolio } from "./PortfolioProvider";

const NAV_BTN =
  "absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-[var(--accent)] hover:text-white hover:border-accent transition-all z-20";

export default function Lightbox() {
  const { lightbox, lang, t, closeLightbox, prevImage, nextImage } = usePortfolio();
  const open = lightbox !== null;
  const list: (Project | GalleryItem)[] = lightbox?.source === "projects" ? projects : gallery;
  const item = lightbox ? list[lightbox.index] : undefined;
  const siteUrl =
    item && "siteUrl" in item && typeof item.siteUrl === "string" ? item.siteUrl : undefined;
  const isWebSite = Boolean(item && "isWebSite" in item && item.isWebSite);
  const tag = item ? (lang === "fr" ? item.tag_fr : item.tag_en) : "";
  const desc = item ? (lang === "fr" ? item.desc_fr : item.desc_en) ?? "" : "";

  return (
    <div
      id="galleryModal"
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[110] flex flex-col items-center justify-center p-4 sm:p-8 bg-[rgba(var(--bg-rgb),0.96)] backdrop-blur-md transition-all duration-300 select-none${open ? "" : " opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={closeLightbox}
        aria-label="Fermer"
        className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] flex items-center justify-center shadow-sm hover:border-accent hover:text-white hover:bg-[var(--accent)] transition-all z-30"
      >
        <i className="fa-solid fa-xmark text-lg"></i>
      </button>

      <div className="relative w-full max-w-5xl h-[62vh] sm:h-[68vh] flex items-center justify-center">
        <button onClick={prevImage} aria-label="Précédent" className={`${NAV_BTN} left-1 sm:-left-6`}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div id="lightboxContentContainer" className="w-full h-full flex items-center justify-center px-6 sm:px-10 relative">
          {item &&
            (isWebSite ? (
              <div className="w-full h-full bg-[var(--panel)] rounded-3xl flex flex-col overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)] border border-[var(--border)] relative">
                <div className="h-11 bg-[var(--panel-2)] border-b border-[var(--border)] flex items-center px-4 gap-4 shrink-0 z-10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-[var(--panel)] rounded-full px-4 py-1 text-[11px] font-semibold text-mute flex items-center gap-2 w-3/4 sm:w-1/2 justify-center border border-[var(--border)]">
                      <i className="fa-solid fa-lock text-[10px] text-accent"></i>
                      {siteUrl ? siteUrl.replace("https://", "").replace("http://", "") : "localhost"}
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-auto bg-[var(--panel-2)] relative flex justify-center">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-cover object-top" />
                </div>
                {siteUrl && (
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 z-20 px-5 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-xl flex items-center gap-2 shadow-[0_10px_24px_rgba(242,107,29,0.35)] hover:bg-[var(--accent-2)] hover:-translate-y-0.5 transition-all"
                  >
                    {t.visit_site} <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                )}
              </div>
            ) : (
              <img
                id="lightboxImg"
                src={item.img}
                alt={item.title}
                className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.22)] border border-[var(--border)] bg-[var(--panel)]"
              />
            ))}
        </div>

        <button onClick={nextImage} aria-label="Suivant" className={`${NAV_BTN} right-1 sm:-right-6`}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="mt-5 text-center space-y-2 max-w-xl px-4">
        <div className="flex items-center justify-center gap-3">
          <span id="lightboxTag" className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--accent-dim)] text-accent">
            {tag}
          </span>
          <span id="lightboxCounter" className="text-xs font-semibold text-mute">
            {lightbox ? `${lightbox.index + 1} / ${list.length}` : ""}
          </span>
        </div>
        <h3 id="lightboxTitle" className="font-display text-xl font-extrabold text-[var(--text)] tracking-tight">
          {item ? `${item.title} (${item.year})` : ""}
        </h3>
        <p id="lightboxDesc" className="text-sm text-mute leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
