"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Le thème initial est posé par le script du <head> (voir app/layout.tsx)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // stockage indisponible (navigation privée…) : le thème reste valable pour la session
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      id="themeToggleBtn"
      aria-label="Thème"
      className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-sm hover:border-accent hover:text-accent transition-colors"
    >
      <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`} id="themeIcon"></i>
    </button>
  );
}
