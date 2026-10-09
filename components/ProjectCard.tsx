"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import Tr from "./Tr";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const [ref, active] = useReveal<HTMLDivElement>();
  const n = index + 1;

  return (
    <article
      ref={ref}
      data-reveal-managed
      role="button"
      tabIndex={0}
      aria-label={project.title}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className={`reveal ${active ? "active" : ""} group cursor-pointer flex flex-col bg-[var(--panel)] border border-[var(--border)] rounded-[28px] p-3 shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(242,107,29,0.16)] hover:border-accent transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]`}
    >
      <div className="relative aspect-[16/11] rounded-[20px] bg-[var(--panel-2)] overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
        <Tr
          as="span"
          k={`proj_${n}_badge`}
          className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--panel)] text-accent text-[11px] font-bold shadow-sm"
        />
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold">
          {project.year}
        </span>
        <span className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        </span>
      </div>

      <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
        <h3 className="font-display text-xl font-extrabold tracking-tight">{project.title}</h3>
        <Tr as="p" k={`proj_${n}_desc`} className="mt-2 text-sm text-mute leading-relaxed line-clamp-3" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Tr as="span" k={`proj_${n}_tag1`} className="tag" />
          <Tr as="span" k={`proj_${n}_tag2`} className="tag" />
        </div>
        <div className="mt-auto pt-5 flex items-center gap-2 text-sm font-bold text-accent">
          <Tr k="inspect" />
          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1.5 transition-transform"></i>
        </div>
      </div>
    </article>
  );
}
