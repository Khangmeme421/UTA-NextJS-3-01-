import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product.d";
import styles from "./ProductGridCategory.module.scss";

interface ProductGridProps {
  products: Product[];
  category?: string;
  color?: string;
  totalProducts ?: number;
  itemsPerPage?: number;
  totalPage?: number;
  currentPage?: number;

}

export default function ProductGrid({
  products,
  category,
  totalProducts = products.length,
  itemsPerPage = 9,
  totalPage = Math.ceil(totalProducts / itemsPerPage),
  currentPage = 1

}: ProductGridProps) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

    const currentProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
  return (
    <div className={styles["product-grid"]}>
      <div className={styles["product-grid__header"]}>
        <h2 className={styles["product-grid__title"]}>{category}</h2>

        <div className={styles["product-grid__count"]}>
          <span>
              Showing {startIndex + 1}-{endIndex} of {totalProducts} Products
          </span>

          <span className="product-grid__sort">
              Sort by: Most Popular
          </span>
        </div>
      </div>

      <div className={styles["product-grid__items"]}>
        {currentProducts.map((p) => (
          <div className={styles["category-card"]}>
            <ProductCard key={p.id} product={p}/>
          </div>
        ))}
    </div>

      <div className={styles["product-grid__pagination"]}>
        <div className={styles["product-grid__pagination-side"]}>
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className={styles["product-grid__pagination-btn"]}
            >
              ← Previous
            </Link>
          )}
        </div>

        <div className={styles["product-grid__pagination-pages"]}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`?page=${i + 1}`}
              className={`${styles["product-grid__pagination-link"]} ${
                currentPage === i + 1 ? styles.active : ""
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>

        <div
          className={`${styles["product-grid__pagination-side"]} ${
            styles["product-grid__pagination-side--right"]
          }`}
        >
          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className={styles["product-grid__pagination-btn"]}
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
