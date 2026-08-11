"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/data";
import StackMap from "./StackMap";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-circuit/10 blur-[100px]"
      />

      <div className="section grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-circuit animate-pulse-node" />
            Available for internships &amp; freelance work
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold leading-[1.1] text-ash-900 dark:text-ash-100 sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm uppercase tracking-wide text-signal-dim dark:text-signal"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-ash-600 dark:text-ash-400"
          >
            {site.tagline} I work across web, mobile, backend, and cloud —
            turning ideas into products that solve real problems for real
            people.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wide text-ash-500"
          >
            <span>4+ shipped projects</span>
            <span>Web · Mobile · Backend</span>
            <span>Cloud-integrated</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <StackMap />
        </motion.div>
      </div>
    </section>
  );
}
