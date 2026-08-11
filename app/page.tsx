import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { interests, projects, timeline } from "@/lib/data";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const latestExperience = timeline[0];

  return (
    <>
      <Hero />

      <section className="section">
        <SectionHeading
          eyebrow="What I Work On"
          title="Across the stack, on purpose"
          description="Every layer below feeds into the same goal: shipping software that solves a real problem for someone."
        />
        <AnimatedSection
          delay={0.1}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {interests.map((interest) => (
            <div
              key={interest}
              className="card px-4 py-5 text-center text-sm font-medium text-ash-700 dark:text-ash-300"
            >
              {interest}
            </div>
          ))}
        </AnimatedSection>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects worth a closer look"
          description="A mix of mobile, web, and backend systems — each one built to solve a specific, real problem."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <AnimatedSection className="mt-10 flex justify-center">
          <Link href="/projects" className="btn-secondary">
            View all projects
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>

      <section className="section">
        <div className="card grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <AnimatedSection>
            <p className="eyebrow">Currently</p>
            <h2 className="mt-3 text-2xl font-semibold text-ash-900 dark:text-ash-100 sm:text-3xl">
              {latestExperience.title}
            </h2>
            <p className="mt-2 text-sm text-ash-500 dark:text-ash-400">
              Building backend APIs, integrating cloud storage, and shipping
              mobile features — while finishing a software engineering degree.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex gap-4">
            <Link href="/experience" className="btn-secondary">
              See full timeline
            </Link>
            <Link href="/contact" className="btn-primary">
              Let&apos;s talk
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
