"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="card flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden border-b border-ash-300/50 dark:border-ink-border">
        <Image
          src={project.image}
          alt={`Screenshot placeholder for ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute bottom-2 right-3 rounded-full bg-ink/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ash-100">
          Replace screenshot
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-ash-900 dark:text-ash-100">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ash-500 dark:text-ash-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 !py-2 text-sm"
            >
              <Github size={15} /> GitHub
            </a>
          ) : (
            <span
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-ash-300/60 dark:border-ink-border py-2 text-sm text-ash-400"
              title="Add repository URL in lib/data.ts"
            >
              <Github size={15} /> Repo link needed
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-1 !py-2 text-sm"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : (
            <span
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-ash-300/60 dark:border-ink-border py-2 text-sm text-ash-400"
              title="Add live demo URL in lib/data.ts"
            >
              <ExternalLink size={15} /> Demo pending
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
