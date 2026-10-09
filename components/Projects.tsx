"use client";

import { projects } from "@/lib/data";
import { usePortfolio } from "./PortfolioProvider";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import Tr from "./Tr";

export default function Projects() {
  const { openLightbox, openGrid } = usePortfolio();

  return (
    <section id="work" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="flex items-end justify-between gap-4 mb-8">
        <SectionHeading titleKey="featured_projects" className="" />
        <button
          type="button"
          onClick={openGrid}
          className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors"
        >
          <Tr k="view_all_posters" /> <i className="fa-solid fa-arrow-right text-accent text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="projectsGrid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpen={() => openLightbox("projects", index)}
          />
        ))}
      </div>
    </section>
  );
}
