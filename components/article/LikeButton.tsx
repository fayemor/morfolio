"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "article_ia_morfaye_liked";
// Valeur de départ affichée (compteur local, sans serveur)
const BASE_LIKES = 342;

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    try {
      setLiked(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // stockage indisponible
    }
  }, []);

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      // stockage indisponible
    }
    if (next) {
      setBurst(true);
      window.setTimeout(() => setBurst(false), 300);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      id="likeBtnBottom"
      aria-pressed={liked}
      className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full border text-sm font-bold hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 transition-all shadow-sm group ${
        liked
          ? "text-red-500 border-red-500 bg-[rgba(239,68,68,0.1)]"
          : "text-[var(--text)] border-[var(--border)] bg-[var(--panel)]"
      }`}
    >
      <i
        className={`${liked ? "fa-solid" : "fa-regular"} fa-heart text-xl group-hover:scale-110 transition-transform ${burst ? "liked-anim" : ""}`}
        id="likeIconBottom"
      ></i>
      <span>
        J&apos;ai apprécié cet article (<span id="likeCountBottom">{BASE_LIKES + (liked ? 1 : 0)}</span>)
      </span>
    </button>
  );
}
