"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  items: string[];
}

const nodes: Node[] = [
  {
    id: "frontend",
    label: "Frontend",
    x: 300,
    y: 60,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    x: 500,
    y: 190,
    items: ["React Native", "Expo", "EAS Build"],
  },
  {
    id: "backend",
    label: "Backend",
    x: 430,
    y: 400,
    items: ["Node.js", "Express.js", "Flask", "PHP"],
  },
  {
    id: "database",
    label: "Database",
    x: 170,
    y: 400,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    id: "cloud",
    label: "Cloud",
    x: 100,
    y: 190,
    items: ["AWS S3"],
  },
];

const center = { x: 300, y: 230 };

export default function StackMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 600 460"
        role="img"
        aria-label="Diagram showing how Olive's product core connects to the frontend, mobile, backend, database, and cloud layers of the stack"
        className="w-full overflow-visible"
      >
        {nodes.map((n) => {
          const isActive = active === n.id;
          return (
            <line
              key={`line-${n.id}`}
              x1={center.x}
              y1={center.y}
              x2={n.x}
              y2={n.y}
              className={
                isActive
                  ? "stroke-signal"
                  : "stroke-ash-300 dark:stroke-ink-border"
              }
              strokeWidth={isActive ? 2 : 1.2}
              strokeDasharray="6 6"
              style={isActive ? { animation: "dash-flow 1.2s linear infinite" } : undefined}
            />
          );
        })}

        <g>
          <circle
            cx={center.x}
            cy={center.y}
            r={44}
            className="fill-ink dark:fill-ink-surface stroke-signal"
            strokeWidth={1.5}
          />
          <text
            x={center.x}
            y={center.y - 4}
            textAnchor="middle"
            className="fill-white dark:fill-ash-100 font-display text-[13px] font-semibold"
          >
            Product
          </text>
          <text
            x={center.x}
            y={center.y + 14}
            textAnchor="middle"
            className="fill-signal font-mono text-[9px] uppercase tracking-wider"
          >
            core
          </text>
        </g>

        {nodes.map((n) => {
          const isActive = active === n.id;
          return (
            <g
              key={n.id}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={`${n.label}: ${n.items.join(", ")}`}
              className="cursor-pointer outline-none"
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={isActive ? 40 : 36}
                className={
                  isActive
                    ? "fill-signal/15 stroke-signal transition-all"
                    : "fill-white dark:fill-ink-surface stroke-ash-300 dark:stroke-ink-border transition-all"
                }
                strokeWidth={1.5}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={3}
                className={isActive ? "fill-signal" : "fill-circuit"}
                style={{ animation: "pulse-node 2.4s ease-in-out infinite" }}
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                className="fill-ash-900 dark:fill-ash-100 font-mono text-[11px] font-medium select-none"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <motion.div
        key={active ?? "idle"}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-2 text-center"
      >
        {(active
          ? nodes.find((n) => n.id === active)?.items
          : ["Hover or tab through a node to see what powers it"]
        )?.map((item) => (
          <span key={item} className={active ? "tag" : "text-xs text-ash-400"}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
