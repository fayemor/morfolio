import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

const ITEMS = [
  { icon: "fa-comments", key: "lang_wo", level: "lang_wo_lvl" },
  { icon: "fa-comment-dots", key: "lang_fr", level: "lang_fr_lvl" },
  { icon: "fa-language", key: "lang_en", level: "lang_en_lvl" },
];

export default function Languages() {
  return (
    <section id="languages" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <SectionHeading titleKey="lang_title" />
      <ul className="reveal grid sm:grid-cols-3 gap-4">
        {ITEMS.map((item) => (
          <li
            key={item.key}
            className="flex items-center gap-4 bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:border-accent hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--accent-dim)] text-accent flex items-center justify-center text-xl">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div>
              <Tr as="div" k={item.key} className="font-display font-extrabold" />
              <Tr as="div" k={item.level} className="mt-0.5 text-xs font-semibold text-mute" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
