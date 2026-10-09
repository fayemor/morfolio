"use client";

import { useEffect } from "react";

/** Active l'animation d'apparition des éléments `.reveal` au scroll. */
export default function RevealObserver({ rootMargin = "0px" }: { rootMargin?: string }) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal:not([data-reveal-managed])");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin]);

  return null;
}
