"use client";

import Image from "next/image";
import { useState } from "react";

/** Image de couverture avec squelette de chargement puis fondu. */
export default function ArticleCover() {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="relative w-full aspect-[21/9] sm:aspect-[16/9] rounded-[28px] overflow-hidden mb-14 border border-[var(--border)] shadow-[0_18px_44px_rgba(0,0,0,0.12)] reveal">
      {!loaded && <div className="absolute inset-0 bg-[var(--surface)] animate-pulse" id="skel-hero"></div>}
      <Image
        src="/images/article-1.png"
        alt="Représentation conceptuelle de l'IA"
        fill
        priority
        sizes="(min-width: 768px) 768px, 100vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-1000 relative z-10 ${loaded ? "" : "opacity-0 scale-105"}`}
      />
    </figure>
  );
}
