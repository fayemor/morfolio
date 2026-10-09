import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

export default function Articles() {
  return (
    <section id="articles" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <SectionHeading titleKey="articles_title" />
      <Link
        href="/articles/ia"
        className="reveal group bg-[var(--panel)] border border-[var(--border)] rounded-3xl overflow-hidden grid md:grid-cols-2 hover:border-accent hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
      >
        <div className="relative aspect-video md:aspect-auto md:min-h-64 bg-[var(--panel-2)] overflow-hidden">
          <Image
            src="/images/article-1.png"
            alt="Article Preview"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-3">
            <i className="fa-regular fa-clock"></i>
            <Tr k="read_time" />
          </div>
          <Tr as="h3" k="article_1_title" className="font-display text-xl sm:text-2xl font-bold leading-snug mb-3" />
          <Tr as="p" k="article_1_desc" className="text-mute leading-relaxed" />
          <span className="mt-5 text-sm font-semibold text-accent flex items-center gap-2">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </Link>
    </section>
  );
}
