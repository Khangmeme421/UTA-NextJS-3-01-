"use client";

import { useEffect, useState } from "react";
import ReviewCard, {
  Review,
} from "@/components/common/features/review/ReviewCard";

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 14, 2023",
    verified: true,
  },
  {
    id: "2",
    name: "Alex K.",
    rating: 5,
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of colors they offer is truly remarkable, catering to a variety of tastes and occasions.",
    date: "August 15, 2023",
    verified: true,
  },
  {
    id: "3",
    name: "James L.",
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "August 16, 2023",
    verified: true,
  },
  {
    id: "4",
    name: "Mooen",
    rating: 4,
    comment:
      "Shop.co has completely transformed how I shop for clothes. The quality is outstanding and the delivery was faster than expected. Highly recommend!",
    date: "August 17, 2023",
    verified: true,
  },
];

interface CustomerReviewSliderProps {
  reviews?: Review[];
}

export default function CustomerReviewSlider({
  reviews = MOCK_REVIEWS,
}: CustomerReviewSliderProps) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    const update = () => {
      setPerPage(mq.matches ? 1 : 3);
      setPage(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="reviews-slider">
      <div className="reviews-slider__header">
        <h2 className="reviews-slider__title">Our Happy Customers</h2>
        <div className="reviews-slider__controls">
          <button
            className={`reviews-slider__arrow${page === 0 ? " reviews-slider__arrow--disabled" : ""}`}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            aria-label="Previous reviews"
          >
            ←
          </button>
          <button
            className={`reviews-slider__arrow${page >= totalPages - 1 ? " reviews-slider__arrow--disabled" : ""}`}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            aria-label="Next reviews"
          >
            →
          </button>
        </div>
      </div>

      <div className="reviews-slider__grid">
        {visible.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
