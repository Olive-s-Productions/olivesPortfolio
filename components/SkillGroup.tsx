"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/data";

export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div className="card p-6">
      <p className="eyebrow">{title}</p>
      <div className="mt-5 space-y-4">
        {skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-medium text-ash-800 dark:text-ash-200">
                {skill.name}
              </span>
              <span className="font-mono text-xs text-ash-400">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ash-200 dark:bg-ink-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-circuit to-signal"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
