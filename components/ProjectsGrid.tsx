"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectFilters, projects } from "@/lib/data";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by technology"
        className="flex flex-wrap justify-center gap-2"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              filter === f
                ? "border-signal bg-signal/10 text-signal"
                : "border-ash-300/50 dark:border-ink-border text-ash-500 dark:text-ash-400 hover:border-signal hover:text-signal"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-ash-500">
          No projects tagged with {filter} yet.
        </p>
      )}
    </div>
  );
}
