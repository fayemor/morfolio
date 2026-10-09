/**
 * URL publique du site (sitemap, robots, Open Graph).
 * Valeur par défaut reprise de l'ancien article-1.html (og:url) ; à surcharger
 * avec NEXT_PUBLIC_SITE_URL si le domaine change.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://morfolio.vercel.app";

export const SITE_NAME = "Mor Faye";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/morfaye/",
  github: "https://github.com/fayemor",
  x: "https://x.com/mor__faye",
} as const;
