import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/articles/ia`, lastModified: "2026-09-21", changeFrequency: "yearly", priority: 0.6 },
  ];
}
