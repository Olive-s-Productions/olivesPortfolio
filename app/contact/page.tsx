import type { Metadata } from "next";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for internships, freelance work, or collaboration.`,
};

export default function ContactPage() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to internships, freelance projects, and collaboration — reach out below."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection className="space-y-4">
          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
              <Mail size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-ash-800 dark:text-ash-200 hover:text-signal"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-circuit/10 text-circuit">
              <MapPin size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">
                Location
              </p>
              <p className="text-sm font-medium text-ash-800 dark:text-ash-200">
                {site.location}
              </p>
            </div>
          </div>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ash-500/10 text-ash-500">
              <Github size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">
                GitHub
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-ash-800 dark:text-ash-200 hover:text-signal"
              >
                {site.github.replace("https://", "")}
              </a>
            </div>
          </div>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ash-500/10 text-ash-500">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">
                LinkedIn
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-ash-800 dark:text-ash-200 hover:text-signal"
              >
                {site.linkedin.replace("https://", "")}
              </a>
            </div>
          </div>

          <a href={site.resumeUrl} className="btn-primary w-full">
            <Download size={16} /> Download CV
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
