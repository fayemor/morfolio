import Image from "next/image";
import LikeButton from "./LikeButton";

export default function ArticleFooter() {
  return (
    <section id="comments-section" className="mt-16 pt-10 border-t border-[var(--border)] reveal">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 bg-[var(--panel)] p-6 sm:p-8 rounded-[28px] border border-[var(--border)] mb-10 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative w-20 h-20 rounded-full border-2 border-[var(--accent)] overflow-hidden shrink-0">
            <Image src="/images/morfaye.jpg" alt="Mor Faye" fill sizes="80px" className="object-cover object-top" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-[var(--text)] text-lg">
              Mor Faye
            </h4>
            <p className="text-sm font-semibold text-accent mb-2">
              Support IT, Développeur Web & Graphiste Designer · Fondateur @ Raffet&apos;Art
            </p>
            <p className="text-sm text-mute leading-relaxed max-w-md">
              Technicien IT et designer basé au Sénégal. Passionné par l&apos;intersection entre le code et l&apos;esthétique visuelle.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-2">
        <LikeButton />
        <a href="https://www.linkedin.com/in/morfaye/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[var(--panel)] border border-[var(--border)] flex items-center justify-center text-mute hover-li transition-colors shadow-sm" aria-label="Partager sur LinkedIn">
          <i className="fa-brands fa-linkedin-in text-lg"></i>
        </a>
        <a href="https://wa.me/221781492438" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[var(--panel)] border border-[var(--border)] flex items-center justify-center text-mute hover-wa transition-colors shadow-sm" aria-label="Partager sur WhatsApp">
          <i className="fa-brands fa-whatsapp text-lg"></i>
        </a>
      </div>
    </section>
  );
}
