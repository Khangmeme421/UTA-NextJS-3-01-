"use client";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import ChevronRight from "@/components/icons/ChevronRight";
import FilterIcon from "@/components/icons/FilterIcon";
import CloseButton from "@/components/icons/CloseButton";
import CollapseButton from "@/components/icons/CollapseButton";
import SliderButton from "@/components/icons/SliderButton";

interface FilterProps {
  onClose: () => void;
}

const MIN_PRICE = 0;
const MAX_PRICE = 250;

const COLORS = [
  { value: "green", hex: "#16a34a" },
  { value: "red", hex: "#e11d2e" },
  { value: "yellow", hex: "#f3c40f" },
  { value: "orange", hex: "#f3791d" },
  { value: "sky", hex: "#3dc5f0" },
  { value: "blue", hex: "#1d4ed8" },
  { value: "purple", hex: "#7c3aed" },
  { value: "pink", hex: "#ec1ea0" },
  { value: "white", hex: "#ffffff", outline: true },
  { value: "black", hex: "#000000" },
];

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

export default function Filter({ onClose }: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Seed local state from the current URL so re-opening the menu reflects
  // whatever filters are already applied.
  const [minPrice, setMinPrice] = useState<number>(
    Number(searchParams.get("min")) || 50
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    Number(searchParams.get("max")) || 200
  );
  const [color, setColor] = useState<string>(
    searchParams.get("color") || "blue"
  );
  const [size, setSize] = useState<string>(
    searchParams.get("size") || "Large"
  );

  // Dragging state for the dual-handle slider: null, "min", or "max".
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const pctFor = (value: number) =>
    ((value - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const valueFromClientX = (clientX: number, trackEl: HTMLDivElement) => {
    const rect = trackEl.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(MIN_PRICE + ratio * (MAX_PRICE - MIN_PRICE));
  };

  const handleTrackPointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;
    const value = valueFromClientX(e.clientX, e.currentTarget);
    if (dragging === "min") {
      setMinPrice(Math.min(value, maxPrice - 1));
    } else {
      setMaxPrice(Math.max(value, minPrice + 1));
    }
  };

  const stopDragging = () => setDragging(null);

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("min", String(minPrice));
    params.set("max", String(maxPrice));
    params.set("color", color);
    params.set("size", size);

    // Any new filter selection should reset pagination back to page 1.
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
    onClose();
  };

  return (
    <div className="filter-menu">
      <div className="filter-menu__header">
        <h2 className="filter-menu__title">Filters</h2>
        <span className="filter-menu__icon">
          <FilterIcon />
        </span>
        <span className="filter-menu__close" onClick={onClose}>
          <CloseButton />
        </span>
      </div>

      {/* Category list */}
      <div className="filter-menu__categories">
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cat) => (
          <div
            className="category-dropdown"
            key={cat}
            onClick={() => router.push(`/category/${cat.toLowerCase()}?page=1`)}
          >
            <span>{cat}</span>
            <span className="category-dropdown__arrow">
              <ChevronRight />
            </span>
          </div>
        ))}
      </div>

      <hr className="divider divider--subtle" />

      {/* Price */}
      <div className="price-slider">
        <div className="price-slider__header">
          <h3 className="price-slider__title">Price</h3>
          <span className="price-slider__toggle">
            <CollapseButton />
          </span>
        </div>
        <div
          className="price-slider__track"
          onPointerMove={handleTrackPointerMove}
          onPointerUp={stopDragging}
          onPointerLeave={stopDragging}
        >
          <div
            className="price-slider__range"
            style={{
              left: `${pctFor(minPrice)}%`,
              right: `${100 - pctFor(maxPrice)}%`,
            }}
          />
          <div
            role="slider"
            aria-label="Minimum price"
            aria-valuemin={MIN_PRICE}
            aria-valuemax={MAX_PRICE}
            aria-valuenow={minPrice}
            tabIndex={0}
            className="price-slider__handle"
            style={{ left: `${pctFor(minPrice)}%` }}
            onPointerDown={() => setDragging("min")}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setMinPrice((v) => Math.max(MIN_PRICE, v - 1));
              if (e.key === "ArrowRight") setMinPrice((v) => Math.min(maxPrice - 1, v + 1));
            }}
          >
            <SliderButton />
          </div>
          <div
            role="slider"
            aria-label="Maximum price"
            aria-valuemin={MIN_PRICE}
            aria-valuemax={MAX_PRICE}
            aria-valuenow={maxPrice}
            tabIndex={0}
            className="price-slider__handle"
            style={{ left: `${pctFor(maxPrice)}%` }}
            onPointerDown={() => setDragging("max")}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setMaxPrice((v) => Math.max(minPrice + 1, v - 1));
              if (e.key === "ArrowRight") setMaxPrice((v) => Math.min(MAX_PRICE, v + 1));
            }}
          >
            <SliderButton />
          </div>
        </div>
        <div className="price-slider__labels">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <hr className="divider divider--subtle" />

      {/* Colors */}
      <div className="color-filter">
        <div className="color-filter__header">
          <h3 className="color-filter__title">Colors</h3>
          <span className="color-filter__toggle">
            <CollapseButton />
          </span>
        </div>
        <fieldset className="color-filter__grid">
          <legend className="sr-only">Choose a color</legend>
          {COLORS.map((c) => (
            <label className="color-swatch" key={c.value}>
              <input
                type="radio"
                name="color"
                value={c.value}
                checked={color === c.value}
                onChange={() => setColor(c.value)}
                className="sr-only"
              />
              <span
                className={`color-swatch__circle${c.outline ? " color-swatch__circle--outline" : ""}`}
                style={{ backgroundColor: c.hex }}
              />
              <span
                className={`color-swatch__check${c.value === "white" ? " color-swatch__check--dark" : ""}`}
              >
                ✓
              </span>
            </label>
          ))}
        </fieldset>
      </div>

      <hr className="divider divider--subtle" />

      {/* Size */}
      <div className="size-picker">
        <div className="size-picker__header">
          <h3 className="size-picker__title">Size</h3>
          <span className="size-picker__toggle">
            <CollapseButton />
          </span>
        </div>
        <fieldset className="size-picker__grid">
          <legend className="sr-only">Choose a size</legend>
          {SIZES.map((s) => (
            <label className="size-pill" key={s}>
              <input
                type="radio"
                name="size"
                value={s}
                checked={size === s}
                onChange={() => setSize(s)}
                className="sr-only"
              />
              <span className="size-pill__label">{s}</span>
            </label>
          ))}
        </fieldset>
      </div>

      <hr className="divider divider--subtle" />

      {/* Dress Style — module-scoped, so no clash with global .dress-style */}
      <div className="filter-dress-style">
        <div className="filter-dress-style__header">
          <h3 className="filter-dress-style__title">Dress Style</h3>
          <span className="filter-dress-style__toggle">
            <CollapseButton />
          </span>
        </div>
        <div className="filter-dress-style__list">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div
              className="category-dropdown"
              key={style}
              onClick={() => router.push(`/category/${style.toLowerCase()}?page=1`)}
            >
              <span>{style}</span>
              <span className="category-dropdown__arrow">
                <ChevronRight />
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider divider--subtle" />

      <div className="filter-menu__apply" onClick={handleApply}>
        Apply Filter
      </div>
    </div>
  );
}