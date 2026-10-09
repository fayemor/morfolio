"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "article_ia_morfaye_views";
// Valeur de départ affichée (compteur local, sans serveur)
const BASE_VIEWS = 1245;

export default function ViewCount() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let count: number;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      count = stored ? parseInt(stored, 10) + 1 : BASE_VIEWS + Math.floor(Math.random() * 10);
      localStorage.setItem(STORAGE_KEY, String(count));
    } catch {
      count = BASE_VIEWS;
    }
    setViews(count);
  }, []);

  return <span id="viewCount">{views === null ? "..." : views.toLocaleString("fr-FR")}</span>;
}
