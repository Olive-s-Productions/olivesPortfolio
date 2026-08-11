import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import TimelineItem from "@/components/TimelineItem";
import { funFacts, interests, site, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Biography, skills, and career objectives of ${site.name}.`,
};

const techStack = [
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Flask",
  "PHP",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Firebase",
  "AWS S3",
  "Java",
  "Python",
  "C++",
  "C",
  "Git",
  "GitHub",
];

export default function AboutPage() {
  return (
    <div className="section space-y-24">
      <AnimatedSection className="grid gap-12 md:grid-cols-[280px_1fr] md:items-start">
        <div className="mx-auto w-56 md:w-full">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-ash-300/50 dark:border-ink-border bg-ash-100 dark:bg-ink-surface">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-ash-400">
            {site.email} | {site.phone}
          </p>
        </div>

        <div>
          <p className="eyebrow">About Me</p>
          <h1 className="mt-3 text-3xl font-semibold text-ash-900 dark:text-ash-100 sm:text-4xl">
            Building software that solves real problems
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ash-600 dark:text-ash-400">
            <p>
              I&apos;m {site.name}, a Software Engineering student and
              full-stack developer based in {site.location}. I specialize in
              building modern web applications, mobile applications, backend
              systems, and cloud-integrated solutions.
            </p>
            <p>
              I enjoy creating software that solves real-world problems and
              produces measurable impact — whether that&apos;s a devotional
              app used daily, a CMS that saves a church admin team hours of
              work, or a backend system that keeps surveillance footage safe
              and retrievable.
            </p>
            <p>
              My goal is to become a world-class software engineer while
              building products that positively affect people&apos;s lives.
              I&apos;m especially drawn to the space where clean engineering
              meets genuine usefulness.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section>
        <SectionHeading
          eyebrow="Technologies"
          title="The tools I reach for"
          description="A working set spanning frontend, backend, mobile, databases, and cloud."
        />
        <AnimatedSection
          delay={0.1}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {techStack.map((tech) => (
            <span key={tech} className="tag !text-xs">
              {tech}
            </span>
          ))}
        </AnimatedSection>
      </section>

      <section>
        <SectionHeading
          eyebrow="Journey"
          title="A quick timeline"
          description="The short version of how I got here."
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-8 border-l border-ash-300/50 dark:border-ink-border">
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Off the Clock" title="Fun facts" />
        <AnimatedSection
          delay={0.1}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {funFacts.map((fact) => (
            <div key={fact} className="card p-5 text-sm text-ash-600 dark:text-ash-400">
              {fact}
            </div>
          ))}
        </AnimatedSection>
      </section>
    </div>
  );
}
