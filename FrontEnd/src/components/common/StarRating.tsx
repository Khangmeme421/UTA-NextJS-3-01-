interface StarRatingProps {
  value: number;
  max?: number;
}

export default function StarRating({ value, max = 5 }: StarRatingProps) {
  return (
    <div className="star-rating">
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
            fill={i < Math.round(value) ? "#FFC633" : "#e5e7eb"}
          />
        </svg>
      ))}
      {showValue && (
        <span className="star-rating__value">
          {value.toFixed(1)}/{max}
        </span>
      )}
    </div>
  );
}