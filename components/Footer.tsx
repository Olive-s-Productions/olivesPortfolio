import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navLinks, site, socials } from "@/lib/data";
import BackToTop from "./BackToTop";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-ash-300/50 dark:border-ink-border">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 sm:px-8 lg:px-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ash-900 dark:text-ash-100">
            {site.shortName}
          </p>
          <p className="mt-3 max-w-xs text-sm text-ash-500 dark:text-ash-400">
            {site.tagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ash-300/50 dark:border-ink-border text-ash-600 dark:text-ash-300 transition-colors hover:border-signal hover:text-signal"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="eyebrow">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ash-600 dark:text-ash-400 transition-colors hover:text-signal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get in Touch</p>
          <ul className="mt-4 space-y-2 text-sm text-ash-600 dark:text-ash-400">
            <li>{site.email}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ash-300/50 dark:border-ink-border px-6 py-6 sm:px-8 lg:px-10">
        <p className="mx-auto max-w-content font-mono text-xs text-ash-500 dark:text-ash-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}
