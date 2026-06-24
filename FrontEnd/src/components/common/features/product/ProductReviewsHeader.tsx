"use client";

import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import { SlidersVertical } from "lucide-react";
import styles from "./ProductReviewsHeader.module.scss";

interface ProductReviewsHeaderProps {
  total?: number;
}

export default function ProductReviewsHeader({
  total = 451,
}: ProductReviewsHeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className={styles.reviewsHeader}>
      <h2 className={styles.reviewsTitle}>
        All Reviews <span className={styles.reviewCount}>({total})</span>
      </h2>
      <div className={styles.reviewsActions}>
        <button type="button" className={styles.filterBtn} aria-label="Filter">
          <SlidersVertical size={18} />
        </button>
        {!isMobile && (
          <button type="button" className={styles.sortBtn}>
            Latest
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
        <Button className={styles.writeReviewBtn}>Write a Review</Button>
      </div>
    </div>
  );
}
