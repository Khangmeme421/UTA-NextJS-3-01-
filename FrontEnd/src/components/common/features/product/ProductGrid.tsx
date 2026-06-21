import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product.d";

interface ProductGridProps {
  products: Product[];
  viewAllHref?: string;
}

export default function ProductGrid({
  products,
  viewAllHref,
}: ProductGridProps) {
  return (
    <div className="product-grid">
      <div className="product-grid__items">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {viewAllHref && (
        <div className="product-grid__view-all">
          <Link href={viewAllHref} className="product-grid__view-all-link">
            View All
          </Link>
        </div>
      )}
    </div>
  );
}
