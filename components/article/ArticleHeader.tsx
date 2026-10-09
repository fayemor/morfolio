import ReadingTime from "./ReadingTime";

export default function ArticleHeader() {
  return (
    <header className="mb-10 text-center sm:text-left reveal">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-mute text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-[var(--accent-dim)] text-accent font-bold">
          Réflexion
        </span>
        <span className="text-[var(--border)] hidden sm:inline">
          /
        </span>
        <time dateTime="2026-09-21" className="font-medium">
          Septembre 2026
        </time>
        <span className="text-[var(--border)] hidden sm:inline">
          /
        </span>
        <span className="font-medium flex items-center gap-1.5">
          <i className="fa-regular fa-clock text-accent"></i>
          <ReadingTime />
        </span>
      </div>
      <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)] mx-auto sm:mx-0"></div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text)] mb-8 leading-[1.1] tracking-tight">
        L’Intelligence Artificielle : Menace redoutée ou coéquipier d&apos;exception ?
      </h1>
    </header>
  );
}
