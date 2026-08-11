import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { site, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills across frontend, backend, mobile, database, cloud, and tools — ${site.name}.`,
};

export default function SkillsPage() {
  const groups = Object.entries(skillGroups);

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Skills"
        title="What I bring to a team"
        description="Grouped by layer of the stack — hover isn't required, the bars fill in as you scroll."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([title, skills]) => (
          <SkillGroup key={title} title={title} skills={skills} />
        ))}
      </div>
    </div>
  );
}
