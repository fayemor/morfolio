import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

const ITEMS = [
  { icon: "fa-robot", key: "int_ai" },
  { icon: "fa-palette", key: "int_visual" },
  { icon: "fa-newspaper", key: "int_web" },
];

export default function Interests() {
  return (
    <section id="interests" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <SectionHeading titleKey="int_title" />
      <ul className="reveal grid sm:grid-cols-3 gap-4">
        {ITEMS.map((item) => (
          <li
            key={item.key}
            className="group flex items-center gap-4 bg-[var(--panel-2)] border border-[var(--border)] rounded-3xl p-5 hover:border-accent hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--panel)] border border-[var(--border)] text-accent flex items-center justify-center text-xl group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-accent transition-colors">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <Tr as="div" k={item.key} className="font-display font-extrabold leading-snug" />
          </li>
        ))}
      </ul>
    </section>
  );
}
