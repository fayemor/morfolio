import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

export interface TimelineItem {
  n: number;
  icon: string;
  desc: boolean;
}

interface TimelineProps {
  id: string;
  titleKey: string;
  items: TimelineItem[];
}

/** Chronologie verticale (utilisée pour l'expérience et pour la formation). */
export default function Timeline({ id, titleKey, items }: TimelineProps) {
  return (
    <section id={id} className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <SectionHeading titleKey={titleKey} />
      <ol className="reveal relative grid gap-5 sm:pl-0">
        <span
          aria-hidden="true"
          className="absolute left-[27px] top-6 bottom-6 w-px border-l-2 border-dashed border-[var(--border-strong)]"
        ></span>
        {items.map((item) => (
          <li key={item.n} className="relative flex gap-5 items-start">
            <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center text-xl shadow-[0_8px_20px_rgba(242,107,29,0.28)]">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className="flex-1 bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-5 sm:p-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:border-accent hover:shadow-[0_14px_30px_rgba(242,107,29,0.1)] transition-all duration-300">
              <Tr
                as="span"
                k={`exp_${item.n}_period`}
                className="inline-block px-3 py-1 rounded-full bg-[var(--accent-dim)] text-accent text-xs font-bold"
              />
              <Tr as="h3" k={`exp_${item.n}_role`} className="mt-3 font-display text-lg font-extrabold leading-snug" />
              <Tr as="div" k={`exp_${item.n}_org`} className="mt-1 text-sm font-bold text-accent" />
              {item.desc && (
                <Tr as="p" k={`exp_${item.n}_desc`} className="mt-3 text-sm text-mute leading-relaxed" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
