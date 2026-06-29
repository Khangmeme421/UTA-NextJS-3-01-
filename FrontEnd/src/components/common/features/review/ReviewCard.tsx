import StarRating from "@/components/common/StarRating";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="review-card">
      <StarRating value={review.rating} />
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
      <p className="review-card__date">Posted on {review.date}</p>
    </div>
  );
}