"use client";

import { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";
import Tr from "./Tr";

const LINKS = [
  { id: "home", key: "nav_home" },
  { id: "about", key: "nav_about" },
  { id: "skills", key: "nav_skills" },
  { id: "work", key: "nav_work" },
  { id: "experience", key: "nav_experience" },
  { id: "education", key: "nav_education" },
  { id: "contact", key: "nav_contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Met en évidence le lien de la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(var(--bg-rgb),0.9)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#home" className="font-display text-3xl font-extrabold tracking-tight">
          MF<span className="text-accent">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold" aria-label="Navigation principale">
          {LINKS.map((link) => (
            <Tr
              key={link.id}
              as="a"
              k={link.key}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative transition-colors hover:text-accent ${
                active === link.id
                  ? "text-accent after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 after:w-4 after:rounded-full after:bg-[var(--accent)]"
                  : ""
              }`}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
          <Tr
            as="a"
            k="nav_talk"
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-[var(--text)] text-[var(--bg)] text-sm font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors"
          />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            className="lg:hidden w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`${menuOpen ? "flex" : "hidden"} lg:hidden max-w-6xl mx-auto px-5 sm:px-8 pb-5 flex-col text-base font-semibold`}
      >
        {LINKS.map((link) => (
          <Tr
            key={link.id}
            as="a"
            k={link.key}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`py-2.5 border-b border-[var(--border)] ${active === link.id ? "text-accent" : ""}`}
          />
        ))}
      </div>
    </header>
  );
}
