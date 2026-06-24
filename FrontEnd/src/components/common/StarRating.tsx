import { useId } from "react";

interface StarRatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
}

const STAR_PATH =
  "M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z";

function getStarType(
  index: number,
  value: number
): "full" | "half" | "empty" {
  const starValue = index + 1;
  if (value >= starValue) return "full";
  if (value >= starValue - 0.5) return "half";
  return "empty";
}

function Star({
  type,
  clipId,
}: {
  type: "full" | "half" | "empty";
  clipId: string;
}) {
  if (type === "full") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d={STAR_PATH} fill="#FFC633" />
      </svg>
    );
  }

  if (type === "empty") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d={STAR_PATH} fill="#e5e7eb" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="8" height="16" />
        </clipPath>
      </defs>
      <path d={STAR_PATH} fill="#e5e7eb" />
      <path d={STAR_PATH} fill="#FFC633" clipPath={`url(#${clipId})`} />
    </svg>
  );
}

export default function StarRating({
  value,
  max = 5,
  showValue = false,
}: StarRatingProps) {
  const baseId = useId();

  return (
    <div className="star-rating">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          type={getStarType(i, value)}
          clipId={`${baseId}-star-${i}`}
        />
      ))}
      {showValue && (
        <span className="star-rating__value">
          {value}/{max}
        </span>
      )}
    </div>
  );
}
