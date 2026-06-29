import StarRating from "@/components/common/StarRating";
import { MoreHorizontal } from "lucide-react";
import type { Review } from "@/types/product.d";

export type { Review };

interface ReviewCardProps {
  review: Review;
  showMenu?: boolean;
  showDate?: boolean;
}

export default function ReviewCard({
  review,
  showMenu = false,
  showDate = false,
}: ReviewCardProps) {
  return (
    <div className="review-card">
      {showMenu ? (
        <div className="review-card__top">
          <StarRating value={review.rating} />
          <button
            type="button"
            className="review-card__menu-btn"
            aria-label="Review options"
          >
            <MoreHorizontal size={20} strokeWidth={1.8} />
          </button>
        </div>
      ) : (
        <StarRating value={review.rating} />
      )}

      <div className="review-card__author-row">
        <span className="review-card__author">{review.name}</span>
        {review.verified && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-label="Verified"
          >
            <circle cx="8" cy="8" r="8" fill="#01AB31" />
            <path
              d="M4.5 8l2.5 2.5 4-4"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <p className="review-card__comment">&ldquo;{review.comment}&rdquo;</p>
      {showDate && (
        <p className="review-card__date">Posted on {review.date}</p>
      )}
    </div>
  );
}