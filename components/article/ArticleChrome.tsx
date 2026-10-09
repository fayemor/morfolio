"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import ViewCount from "./ViewCount";

export default function ArticleChrome() {
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState(false);

  // Barre de progression + navbar masquée en descendant, visible en remontant
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (barRef.current && scrollHeight > 0) {
        barRef.current.style.width = `${(scrollTop / scrollHeight) * 100}%`;
      }
      if (navRef.current) {
        navRef.current.style.transform =
          scrollTop > lastScrollY && scrollTop > 80 ? "translateY(-100%)" : "translateY(0)";
      }
      lastScrollY = scrollTop;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shareArticle = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {});
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setToast(true);
          window.setTimeout(() => setToast(false), 3000);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <header ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[rgba(var(--bg-rgb),0.9)] backdrop-blur-md border-b border-[var(--border)] transition-transform duration-300 will-change-transform" id="navbar">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <Link href="/" className="font-display text-3xl font-extrabold tracking-tight" aria-label="Accueil">
              MF<span className="text-accent">.</span>
            </Link>
            <Link href="/#articles" className="group hidden sm:flex items-center gap-2 text-sm font-semibold text-mute hover:text-accent transition-colors">
              <i className="fa-solid fa-arrow-left text-xs group-hover:-translate-x-0.5 transition-transform"></i>
              Retour aux articles
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-mute px-3.5 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)]">
              <i className="fa-regular fa-eye text-accent"></i>
              {" "}
              <ViewCount />
            </div>
            <ThemeToggle />
            <button type="button" onClick={shareArticle} className="px-5 h-9 rounded-xl bg-[var(--text)] text-[var(--bg)] text-sm font-semibold flex items-center gap-2 hover:bg-[var(--accent)] hover:text-white transition-colors">
              <i className="fa-solid fa-share-nodes text-xs"></i>
              {" "}
              <span>
                Partager
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="progressBarContainer">
        <div id="progressBar" ref={barRef}></div>
      </div>
      <div id="toast" className={toast ? "show" : ""} role="status">
        <i className="fa-solid fa-check text-green-400 mr-2"></i> Lien copié dans le presse-papier !
      </div>
    </>
  );
}
