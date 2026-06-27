import Link from "next/link";
import Image from "next/image";

const ROW_1 = [
  {
    label: "Casual",
    href: "/casual",
    image: "/images/dress/Ca.png",
    small: true,
  },
  {
    label: "Formal",
    href: "/formal",
    image: "/images/dress/For.png",
    small: false,
  },
];

const ROW_2 = [
  {
    label: "Party",
    href: "/party",
    image: "/images/dress/Pa.png",
    small: false,
  },
  { label: "Gym", href: "/gym", image: "/images/dress/Gym.png", small: true },
];

function StyleCard({
  label,
  href,
  image,
}: {
  label: string;
  href: string;
  image: string;
}) {
  return (
    <Link href={href} className="dress-style__item">
      <span className="dress-style__label">{label}</span>
      <div className="dress-style__image">
        <Image
          src={image}
          alt={label}
          width={400}
          height={320}
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </Link>
  );
}

export default function DressStyleGrid() {
  return (
    <section className="dress-style">
      <div className="dress-style__inner">
        <h2 className="dress-style__title">Browse by Dress Style</h2>
        <div className="dress-style__row dress-style__row--1-2">
          {ROW_1.map((s) => (
            <StyleCard key={s.label} {...s} />
          ))}
        </div>
        <div className="dress-style__row dress-style__row--2-1">
          {ROW_2.map((s) => (
            <StyleCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
