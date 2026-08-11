import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/ProjectsGrid";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Featured web, mobile, and backend projects built by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        description="Filter by category to see how the same engineering habits show up across mobile, web, and backend work."
      />
      <div className="mt-12">
        <ProjectsGrid />
      </div>
    </div>
  );
}
