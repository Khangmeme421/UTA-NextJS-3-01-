import { useEffect, useState } from "react";
import ProductGrid from "@/components/common/features/product/ProductGridCategory";
import { ROUTES } from "@/constants";
import type { Product } from "@/types/product.d";
import Filter from "@/components/common/features/filter/Filter";
import styles from "./page.module.scss";

const Casual: Product[] = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-1.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-2.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-3.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-4.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "5",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-5.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "6",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-6.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "7",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-7.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "8",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-8.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "9",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-9.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-1.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-2.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-3.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-4.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "5",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-5.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "6",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-6.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "7",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-7.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "8",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-8.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "9",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-9.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-1.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-2.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-3.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-4.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "5",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-5.png",
    price: 180,
    rating: 4.5,
  },
  {
    id: "6",
    name: "Black Striped T-shirt",
    image: "/images/products/cs-6.png",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: "7",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/cs-7.png",
    price: 145,
    rating: 3.5,
  },
  {
    id: "8",
    name: "Polo with Tipping Details",
    image: "/images/products/cs-8.png",
    price: 180,
    rating: 4.5,
  },
  
];


export default async function CasualPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryID: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { categoryID } = await params;
  const { page } = await searchParams;

  return (
    <main className={styles["category-page"]}>
      <div className={styles["category-page__content"]}>
        <aside className={styles["category-page__sidebar"]}>
          <Filter />
        </aside>

        <section className={styles["category-page__products"]}>
          <ProductGrid
            products={Casual}
            category={categoryID}
            currentPage={Number(page) || 1}
            itemsPerPage={9}
          />
        </section>
      </div>
    </main>
  );
}
