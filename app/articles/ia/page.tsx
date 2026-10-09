import type { Metadata } from "next";
import "./article.css";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleChrome from "@/components/article/ArticleChrome";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleFooter from "@/components/article/ArticleFooter";
import ArticleHeader from "@/components/article/ArticleHeader";
import RevealObserver from "@/components/RevealObserver";

const TITLE = "L’Intelligence Artificielle : Menace redoutée ou coéquipier d'exception ?";
const DESCRIPTION =
  "Et si l'IA était simplement le partenaire de travail le plus performant de notre époque ?";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/articles/ia" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: "/articles/ia",
    images: [{ url: "/images/article-1.png", alt: "Représentation conceptuelle de l'IA" }],
    publishedTime: "2026-09-21",
    authors: ["Mor Faye"],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-09-21",
  image: "/images/article-1.png",
  author: { "@type": "Person", name: "Mor Faye" },
};

export default function ArticleIaPage() {
  return (
    <div className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleChrome />
      <main className="max-w-3xl w-full mx-auto pb-20 pt-32 px-4 sm:px-6 relative z-10">
        <article>
          <ArticleHeader />
          <ArticleCover />
          <ArticleBody />
        </article>
        <ArticleFooter />
      </main>
      <RevealObserver rootMargin="0px 0px -50px 0px" />
    </div>
  );
}
