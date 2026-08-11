import AnimatedSection from "./AnimatedSection";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <AnimatedSection className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-ash-900 dark:text-ash-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ash-500 dark:text-ash-400">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
