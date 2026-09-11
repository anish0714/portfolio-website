interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-base text-accent">{number}.</span>
      <h2 className="text-2xl font-bold tracking-tight text-fg">{title}</h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
