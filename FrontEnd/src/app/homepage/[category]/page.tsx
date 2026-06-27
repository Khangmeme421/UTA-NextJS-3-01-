"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/components/common/features/home/HeroBanner";
import BrandLogoBar from "@/components/common/BrandLogoBar";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/common/features/product/ProductGrid";
import DressStyleGrid from "@/components/common/features/home/DressStyleGrid";
import CustomerReviewSlider from "@/components/common/CustomerReviewSlider";
import NewsletterSection from "@/components/common/NewsletterSection";
import Loader from "@/components/Loader/loader";
import { ROUTES } from "@/constants";
import type { Product } from "@/types/product.d";

const NEW_ARRIVALS: Product[] = [
  {
    id: "1",
    name: "T-SHIRT WITH TAPE DETAILS",
    image: "/images/products/na-1.png",
    price: 120,
    rating: 4.5,
  },
  {
    id: "2",
    name: "SKINNY FIT JEANS",
    image: "/images/products/na-2.png",
    price: 240,
    originalPrice: 260,
    discount: "-8%",
    rating: 3.5,
  },
  {
    id: "3",
    name: "CHECKERED SHIRT",
    image: "/images/products/na-3.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "4",
    name: "SLEEVE STRIPED T-SHIRT",
    image: "/images/products/na-4.png",
    price: 130,
    originalPrice: 160,
    discount: "-20%",
    rating: 4.5,
  },
];

const TOP_SELLING: Product[] = [
  {
    id: "5",
    name: "VERTICAL STRIPED SHIRT",
    image: "/images/products/ts-1.png",
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    rating: 5,
  },
  {
    id: "6",
    name: "COURAGE GRAPHIC T-SHIRT",
    image: "/images/products/ts-2.png",
    price: 145,
    rating: 4,
  },
  {
    id: "7",
    name: "LOOSE FIT BERMUDA SHORTS",
    image: "/images/products/ts-3.png",
    price: 80,
    rating: 3,
  },
  {
    id: "8",
    name: "FADED SKINNY JEANS",
    image: "/images/products/ts-4.png",
    price: 210,
    rating: 4.5,
  },
];

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader spinning={isLoading} fullScreen />

      <main>
        {/* Top Selling */}
        <section className="homepage-section homepage-section--top-selling">
          <SectionHeading title="Top Selling" />
          <ProductGrid products={TOP_SELLING} viewAllHref={ROUTES.SHOP} />
        </section>

      </main>
    </>
  );
}
