"use client";
import Link from "next/link";
import StarRating from "@/components/common/StarRating";
import Badge from "@/components/common/Badge";
import { ROUTES } from "@/constants";
import type { Product } from "@/types/product.d";

export type { Product };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={ROUTES.PRODUCT(product.id)} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <StarRating value={product.rating} />
      <div className="product-card__pricing">
        <span className="product-card__price">${product.price}</span>
        {product.originalPrice && (
          <span className="product-card__original-price">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && <Badge label={product.discount} />}
      </div>
    </Link>
  );
}
