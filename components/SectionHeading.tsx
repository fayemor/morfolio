import Tr from "./Tr";

interface SectionHeadingProps {
  titleKey: string;
  className?: string;
}

/** Titre de section avec petit trait orange, comme sur le modèle. */
export default function SectionHeading({ titleKey, className = "mb-8" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Tr as="h2" k={titleKey} className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight" />
      <div className="mt-2 h-1 w-10 rounded-full bg-[var(--accent)]"></div>
    </div>
  );
}
