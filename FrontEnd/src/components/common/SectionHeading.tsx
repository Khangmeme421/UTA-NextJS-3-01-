interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="section-heading">{title}</h2>;
}
