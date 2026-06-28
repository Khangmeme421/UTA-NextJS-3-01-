"use client";

import { useState } from "react";
import Filter from "@/components/common/features/filter/Filter";
import ProductGridCategory from "@/components/common/features/product/ProductGridCategory";
import styles from "./page.module.scss";
import type { Product } from "@/types/product.d";

export const Casual: Product[] = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-1.png",
    price: 145,
    rating: 3.5,
    reviewCount: 42,
    category: "T-shirts",
    style: "casual",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Pink", hex: "#EC4899" },
      { name: "Green", hex: "#84CC16" },
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-2.png",
    price: 180,
    rating: 4.5,
    reviewCount: 128,
    category: "Polos",
    style: "casual",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Rose", hex: "#B76E79" },
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-3.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
    reviewCount: 87,
    category: "T-shirts",
    style: "casual",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Skinny Fit Jeans",
    image: "/images/products/cs-4.png",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
    reviewCount: 64,
    category: "Jeans",
    style: "casual",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Blue", hex: "#3B82F6" },
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Checkered Shirt",
    image: "/images/products/cs-5.png",
    price: 180,
    rating: 4.5,
    reviewCount: 92,
    category: "Shirts",
    style: "casual",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Red", hex: "#DC2626" },
      { name: "Blue", hex: "#2563EB" },
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Sleeve Striped T-shirt",
    image: "/images/products/cs-6.png",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
    reviewCount: 51,
    category: "T-shirts",
    style: "casual",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Orange", hex: "#F97316" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
  },
  {
    id: "7",
    name: "Vertical Striped Shirt",
    image: "/images/products/cs-7.png",
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    rating: 5,
    reviewCount: 112,
    category: "Shirts",
    style: "casual",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#6B8E23" },
    ],
    inStock: true,
  },
  {
    id: "8",
    name: "Courage Graphic T-shirt",
    image: "/images/products/cs-8.png",
    price: 145,
    rating: 4,
    reviewCount: 76,
    category: "T-shirts",
    style: "casual",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Orange", hex: "#EA580C" },
    ],
    inStock: true,
  },
  {
    id: "9",
    name: "Loose Fit Bermuda Shorts",
    image: "/images/products/cs-9.png",
    price: 80,
    rating: 3,
    reviewCount: 35,
    category: "Shorts",
    style: "casual",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Light Blue", hex: "#60A5FA" },
    ],
    inStock: true,
  },
];
export default function CategoryContent({
  categoryID,
  page,
}: {
  categoryID: string;
  page: number;
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
        <div className={styles["category-page__content"]}>
            <aside
                className={`category-page__sidebar ${
                isFilterOpen ? "is-open" : ""
                }`}
            >
                <Filter onClose={() => setIsFilterOpen(false)} />
            </aside>
                
            <section className={styles["category-page__products"]}>
                <ProductGridCategory
                    products={Casual}
                    category={categoryID}
                    currentPage={page || 1}
                    itemsPerPage={9}
                    onOpenFilter={() => setIsFilterOpen(true)}
                    />
            </section>
        </div>
    </>
  );
}