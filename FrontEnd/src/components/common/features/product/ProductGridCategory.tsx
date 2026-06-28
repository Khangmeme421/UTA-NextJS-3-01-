import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product.d";
import styles from "./ProductGridCategory.module.scss";
import ExpandButton from "@/components/icons/ExpandButton";
import FilterIcon from "@/components/icons/FilterIcon";

interface ProductGridProps {
  products: Product[];
  category?: string;
  color?: string;
  totalProducts ?: number;
  itemsPerPage?: number;
  currentPage?: number;
  onOpenFilter: () => void;
}

export default function ProductGrid({
  products,
  category,
  totalProducts = products.length,
  itemsPerPage = 9,
  currentPage = 1,
  onOpenFilter

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
              Sort by:
          </span>
          
          <span className="product-grid__sort">
              Most Popular <ExpandButton />
          </span>

          <div 
              onClick={onOpenFilter} className="filter-button">
              <FilterIcon color="black"/>
          </div>

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
