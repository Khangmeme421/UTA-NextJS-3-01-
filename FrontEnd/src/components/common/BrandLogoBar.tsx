"use client";

const BRAND_LOGOS = [
  {
    name: "Versace",
    svg: (
      <svg
        height="28"
        viewBox="0 0 240 45"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="38"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="50"
          fontWeight="500"
          letterSpacing="2"
          fill="white"
        >
          VERSACE
        </text>
      </svg>
    ),
  },
  {
    name: "Zara",
    svg: (
      <img
        src="/images/brand/zara-logo.svg"
        alt="Zara"
        height={28}
        style={{ filter: "invert(1)" }}
      />
    ),
  },
  {
    name: "Gucci",
    svg: (
      <svg
        height="42"
        viewBox="0 0 160 40"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="30"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="35"
          fontWeight="600"
          letterSpacing="6"
          fill="white"
        >
          GUCCI
        </text>
      </svg>
    ),
  },
  {
    name: "Prada",
    svg: (
      <svg height="26" viewBox="0 0 200 38" xmlns="http://www.w3.org/2000/svg">
        <text
          x="0"
          y="37"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="52"
          fontWeight="800"
          letterSpacing="3"
          fill="white"
        >
          PRADA
        </text>
      </svg>
    ),
  },
  {
    name: "Calvin Klein",
    svg: (
      <svg
        height="22"
        viewBox="0 0 350 36"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="37"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontSize="50"
          fontWeight="300"
          letterSpacing="5"
          fill="white"
        >
          Calvin Klein
        </text>
      </svg>
    ),
  },
];

const ITEMS = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

export default function BrandLogoBar() {
  return (
    <div className="brand-bar">
      <div className="brand-bar__track">
        {ITEMS.map((brand, i) => (
          <span key={i} className="brand-bar__item">
            {brand.svg}
          </span>
        ))}
      </div>
    </div>
  );
}
