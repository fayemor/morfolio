"use client";

import Image from "next/image";
import { gallery } from "@/lib/data";
import { usePortfolio } from "./PortfolioProvider";
import Tr from "./Tr";

export default function DesignGridModal() {
  const { gridOpen: open, closeGrid, openLightbox } = usePortfolio();

  return (
    <div
      id="designGridModal"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[100] flex flex-col p-4 sm:p-8 bg-[rgba(var(--bg-rgb),0.95)] backdrop-blur-md transition-all duration-300 select-none overflow-y-auto${open ? "" : " opacity-0 pointer-events-none"}`}>
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between mb-8 mt-4 sticky top-0 bg-[rgba(var(--bg-rgb),0.90)] backdrop-blur-xl z-20 py-4 border-b border-[var(--border)] rounded-b-xl px-4 sm:px-0 transition-colors duration-300">
        <div>
          <Tr as="h3" k="gallery_title" className="font-display text-2xl font-bold text-[var(--text)]" />
          <Tr as="p" k="gallery_subtitle" className="text-mute text-xs mt-1" />
        </div>
        <button onClick={closeGrid} aria-label="Fermer la grille" className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all shadow-lg">
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20 px-4 sm:px-0" id="designGridContainer">
      {open &&
        gallery.map((item, index) => (
          <div
            key={item.img}
            role="button"
            tabIndex={0}
            aria-label={item.title}
            onClick={() => openLightbox("gallery", index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox("gallery", index);
              }
            }}
            className="group cursor-pointer relative overflow-hidden rounded-[16px] aspect-[4/5] bg-[var(--panel-2)] border border-[var(--border)] shadow-md transition-colors duration-300"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-expand text-lg"></i>
              </div>
              <span className="text-white font-display font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.title}
              </span>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}
