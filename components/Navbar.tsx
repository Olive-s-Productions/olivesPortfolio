"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-ash-300/50 dark:border-ink-border bg-paper/80 dark:bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-10"
      >
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-ash-900 dark:text-ash-100"
        >
          Olive<span className="text-signal">.</span>Tomilola
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  active
                    ? "text-signal"
                    : "text-ash-500 hover:text-ash-900 dark:hover:text-ash-100"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-signal"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <a
            href={site.resumeUrl}
            className="hidden rounded-full border border-ash-400/50 dark:border-ink-border px-4 py-2 font-mono text-xs uppercase tracking-wide text-ash-700 dark:text-ash-300 transition-colors hover:border-signal hover:text-signal md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ash-300/50 dark:border-ink-border text-ash-700 dark:text-ash-300 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ash-300/50 dark:border-ink-border bg-paper dark:bg-ink md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 font-mono text-sm uppercase tracking-wide ${
                    pathname === link.href
                      ? "bg-signal/10 text-signal"
                      : "text-ash-600 dark:text-ash-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between px-3">
                <span className="font-mono text-xs uppercase tracking-wide text-ash-500">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
