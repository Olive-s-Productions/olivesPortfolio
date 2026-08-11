import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { site, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience, academic background, and technical achievements of ${site.name}.`,
};

export default function ExperiencePage() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Internships, academics & achievements"
        description="A timeline of where the work happened — professional, academic, and self-directed."
      />
      <div className="mx-auto mt-14 max-w-2xl space-y-8 border-l border-ash-300/50 dark:border-ink-border">
        {timeline.map((entry, i) => (
          <TimelineItem key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}
