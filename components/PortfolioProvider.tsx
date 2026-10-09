"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { articles, gallery, projects } from "@/lib/data";
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n";

export type LightboxSource = "projects" | "gallery";

interface Lightbox {
  source: LightboxSource;
  index: number;
}

interface PortfolioContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Dictionnaire de la langue courante (repli sur le français pour une clé manquante). */
  t: Dictionary;
  gridOpen: boolean;
  openGrid: () => void;
  closeGrid: () => void;
  lightbox: Lightbox | null;
  openLightbox: (source: LightboxSource, index: number) => void;
  closeLightbox: () => void;
  prevImage: () => void;
  nextImage: () => void;
  articleIndex: number | null;
  openArticle: (index: number) => void;
  closeArticle: () => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio doit être utilisé dans <PortfolioProvider>");
  return ctx;
}

function lightboxLength(source: LightboxSource): number {
  return source === "projects" ? projects.length : gallery.length;
}

export default function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [gridOpen, setGridOpen] = useState(false);
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);
  const [articleIndex, setArticleIndex] = useState<number | null>(null);

  const t = useMemo<Dictionary>(() => ({ ...dictionaries.fr, ...dictionaries[lang] }), [lang]);

  const openGrid = useCallback(() => setGridOpen(true), []);
  const closeGrid = useCallback(() => setGridOpen(false), []);

  const openLightbox = useCallback(
    (source: LightboxSource, index: number) => setLightbox({ source, index }),
    [],
  );
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(
    () =>
      setLightbox((lb) => {
        if (!lb) return lb;
        const len = lightboxLength(lb.source);
        return { ...lb, index: (lb.index - 1 + len) % len };
      }),
    [],
  );
  const nextImage = useCallback(
    () =>
      setLightbox((lb) => {
        if (!lb) return lb;
        return { ...lb, index: (lb.index + 1) % lightboxLength(lb.source) };
      }),
    [],
  );

  const openArticle = useCallback((index: number) => {
    setArticleIndex(index);
    window.history.pushState(null, "", `#article-${index}`);
  }, []);
  const closeArticle = useCallback(() => {
    setArticleIndex(null);
    window.history.pushState(null, "", window.location.pathname + window.location.search);
  }, []);

  // Langue du document
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Verrouille le scroll quand une modale est ouverte
  const anyOpen = gridOpen || lightbox !== null || articleIndex !== null;
  useEffect(() => {
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [anyOpen]);

  // Clavier : Échap ferme la modale la plus haute, flèches dans la lightbox
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) closeLightbox();
        else if (gridOpen) closeGrid();
        else if (articleIndex !== null) closeArticle();
      }
      if (lightbox) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox, gridOpen, articleIndex, closeLightbox, closeGrid, closeArticle, prevImage, nextImage]);

  // Lien direct vers un article : /#article-0
  useEffect(() => {
    const { hash } = window.location;
    if (!hash.startsWith("#article-")) return;
    const index = parseInt(hash.replace("#article-", ""), 10);
    if (Number.isNaN(index) || !articles[index]) return;
    const timer = window.setTimeout(() => openArticle(index), 400);
    return () => window.clearTimeout(timer);
  }, [openArticle]);

  const value = useMemo<PortfolioContextValue>(
    () => ({
      lang,
      setLang,
      t,
      gridOpen,
      openGrid,
      closeGrid,
      lightbox,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
      articleIndex,
      openArticle,
      closeArticle,
    }),
    [lang, t, gridOpen, openGrid, closeGrid, lightbox, openLightbox, closeLightbox, prevImage, nextImage, articleIndex, openArticle, closeArticle],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}
