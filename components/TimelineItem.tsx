"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import type { TimelineEntry } from "@/lib/data";

const iconMap = {
  work: Briefcase,
  academic: GraduationCap,
  achievement: Trophy,
};

export default function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const Icon = iconMap[entry.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-14"
    >
      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-signal/40 bg-signal/10 text-signal">
        <Icon size={17} />
      </span>

      <div className="card p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100">
            {entry.title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-wide text-ash-400">
            {entry.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-signal-dim dark:text-signal">
          {entry.organization}
        </p>
        <ul className="mt-4 space-y-2">
          {entry.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm text-ash-600 dark:text-ash-400"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-circuit" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
