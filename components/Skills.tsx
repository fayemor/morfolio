import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

function NextIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <path d="M11.5 10.5v11M11.5 10.5l9.5 12" fill="none" strokeWidth="2.2" strokeLinecap="round" style={{ stroke: "var(--panel-2)" }} />
      <path d="M20.5 10.5v6" fill="none" strokeWidth="2.2" strokeLinecap="round" style={{ stroke: "var(--panel-2)" }} />
    </svg>
  );
}

const TOOLS: { name: string; icon?: string; node?: ReactNode }[] = [
  { icon: "fa-brands fa-html5", name: "HTML & CSS" },
  { icon: "fa-brands fa-js", name: "JavaScript" },
  { node: <NextIcon />, name: "Next.js" },
  { icon: "fa-brands fa-python", name: "Python" },
  { icon: "fa-brands fa-java", name: "Java" },
  { icon: "fa-solid fa-database", name: "MySQL" },
  { icon: "fa-brands fa-wordpress", name: "WordPress" },
  { icon: "fa-solid fa-paintbrush", name: "Adobe" },
];

const TILE =
  "w-14 h-14 rounded-2xl bg-[var(--accent-dim)] text-accent flex items-center justify-center text-2xl transition-all duration-300";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative border-t border-[var(--border)]">
      <SectionHeading titleKey="skills_title" />
      <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {TOOLS.map((tool) => (
          <div
            key={tool.name}
            className="group relative overflow-hidden bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-5 flex flex-col items-center gap-4 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_18px_36px_rgba(242,107,29,0.14)] transition-all duration-300"
          >
            <span
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[var(--accent-dim)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></span>
            <div className={`${TILE} group-hover:bg-[var(--accent)] group-hover:text-white group-hover:rotate-6 group-hover:scale-105 relative`}>
              {tool.node ?? <i className={tool.icon}></i>}
            </div>
            <div className="text-sm font-bold relative">{tool.name}</div>
          </div>
        ))}
        <div className="bg-transparent border-2 border-dashed border-[var(--border-strong)] rounded-3xl p-5 flex flex-col items-center justify-center gap-4 text-mute">
          <div className="w-14 h-14 rounded-2xl border border-[var(--border)] flex items-center justify-center text-2xl">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <Tr as="div" k="skills_more" className="text-sm font-bold" />
        </div>
      </div>
    </section>
  );
}
