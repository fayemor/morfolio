"use client";

import Image from "next/image";
import { usePortfolio } from "./PortfolioProvider";
import Tr from "./Tr";

// Trois de tes créations en couverture (fichiers de public/images)
const COVERS = [
  { src: "/images/dsg29.jpg", alt: "Journée Khassida Touba", cls: "-rotate-6 -translate-x-[58%] z-10 group-hover:-rotate-[9deg] group-hover:-translate-x-[66%]" },
  { src: "/images/dsg34.jpg", alt: "Affiche Gamou", cls: "rotate-6 translate-x-[58%] z-10 group-hover:rotate-[9deg] group-hover:translate-x-[66%]" },
  { src: "/images/dsg1.jpg", alt: "Raffet'Art Studio", cls: "z-20 group-hover:-translate-y-2" },
];

export default function GalleryCta() {
  const { openGrid } = usePortfolio();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openGrid}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openGrid();
        }
      }}
      className="reveal group cursor-pointer relative overflow-hidden bg-[var(--panel-2)] border border-[var(--border)] rounded-[32px] grid md:grid-cols-2 items-center gap-8 p-8 sm:p-12 hover:border-accent hover:shadow-[0_22px_44px_rgba(242,107,29,0.12)] transition-all duration-300"
    >
      <span aria-hidden="true" className="absolute -left-20 -bottom-24 w-72 h-72 rounded-full bg-[var(--accent-dim)] blur-2xl"></span>

      {/* Couverture : affiches en éventail */}
      <div className="relative h-64 sm:h-72 flex items-center justify-center order-1">
        {COVERS.map((c) => (
          <div
            key={c.src}
            className={`absolute w-36 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[var(--panel)] shadow-[0_14px_32px_rgba(0,0,0,0.22)] bg-[var(--panel)] transition-all duration-500 ${c.cls}`}
          >
            <Image src={c.src} alt={c.alt} fill sizes="180px" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="relative order-2">
        <Tr
          as="span"
          k="gallery_badge"
          className="inline-block mb-3 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-accent text-xs font-bold"
        />
        <Tr as="h3" k="open_gallery" className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" />
        <Tr as="p" k="open_gallery_desc" className="text-mute leading-relaxed max-w-md" />
        <button
          type="button"
          tabIndex={-1}
          className="mt-6 px-6 py-3.5 rounded-xl bg-[var(--text)] text-[var(--bg)] text-sm font-semibold group-hover:bg-[var(--accent)] group-hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <Tr k="btn_view_all" /> <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  );
}
