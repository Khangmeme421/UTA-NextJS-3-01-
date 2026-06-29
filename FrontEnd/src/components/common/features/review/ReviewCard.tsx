import StarRating from "@/components/common/StarRating";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

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
      <div className="review-card__header">
        <StarRating value={review.rating} />
        {showMenu && (
          <button type="button" className="review-card__menu" aria-label="More options">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="4" r="1.5" fill="#999" />
              <circle cx="10" cy="10" r="1.5" fill="#999" />
              <circle cx="10" cy="16" r="1.5" fill="#999" />
            </svg>
          </button>
        )}
      </div>

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

      {showDate && <p className="review-card__date">Posted on {review.date}</p>}
    </div>
  );
}