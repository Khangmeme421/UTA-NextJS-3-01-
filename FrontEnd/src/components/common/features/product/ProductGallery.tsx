import type { Product } from "@/types/product.d";
import styles from "./ProductGallery.module.scss";

interface ProductGalleryProps {
  product: Pick<Product, "name" | "image" | "images">;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {product.images?.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`${product.name} ${index + 1}`}
            className={styles.thumbnail}
          />
        ))}
      </div>
      <div className={styles.mainImageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.mainImage}
        />
      </div>
    </div>
  );
}
