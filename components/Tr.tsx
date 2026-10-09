"use client";

import type { AllHTMLAttributes, ElementType } from "react";
import { usePortfolio } from "./PortfolioProvider";

type TrProps = Omit<AllHTMLAttributes<HTMLElement>, "children" | "dangerouslySetInnerHTML"> & {
  /** Balise rendue (span par défaut). */
  as?: ElementType;
  /** Clé du dictionnaire (lib/i18n.ts). */
  k: string;
};

/**
 * Texte traduit. Les valeurs du dictionnaire peuvent contenir du HTML
 * (<strong>, <span class="text-accent">…) : elles sont écrites par l'auteur du site,
 * jamais saisies par un visiteur.
 */
export default function Tr({ as: Tag = "span", k, ...props }: TrProps) {
  const { t } = usePortfolio();
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: t[k] ?? "" }} />;
}
