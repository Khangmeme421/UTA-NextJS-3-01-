"use client";
import Button from "@/components/common/Button";
import { HERO_STATS, ROUTES } from "@/constants";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="hero">
      {/* Star decorations */}
      <svg
        className="hero__star hero__star--top"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="
            M50 0
        C53 30 70 47 100 50
        C70 53 53 70 50 100
        C47 70 30 53 0 50
        C30 47 47 30 50 0
        Z

      "
        />
      </svg>

      <svg
        className="hero__star hero__star--bottom"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="
              M50 0
          C53 30 70 47 100 50
          C70 53 53 70 50 100
          C47 70 30 53 0 50
          C30 47 47 30 50 0
          Z

            "
        />
      </svg>
      {/* Left content */}
      <div className="hero__content">
        <h1 className="hero__title">
          Find Clothes <br /> That Matches <br /> Your Style
        </h1>
        <p className="hero__description">
          Browse through our diverse range of meticulously crafted garments,
          designed <br /> to bring out your individuality and cater to your
          sense of style.
        </p>
        <Link href={ROUTES.SHOP}>
          <Button>Shop Now</Button>
        </Link>

        {/* Stats */}
        <div className="hero__stats">
          {HERO_STATS.map((s, i) => (
            <div key={s.label} className="hero__stat-item">
              {i > 0 && <div className="hero__stat-divider" />}
              <div>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="hero__image-wrap">
        <img
          src="/images/hero-banner/hero-model.jpg"
          alt="Fashion model showcasing latest styles"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </section>
  );
}
