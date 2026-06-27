"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    // TODO: connect to Spring Boot API
    console.log("Newsletter subscribe:", email);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2 className="newsletter__title">
        Stay Upto Date About Our Latest Offers
      </h2>

      <div className="newsletter__form">
        <div className="newsletter__input-wrap">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="3"
              width="16"
              height="12"
              rx="2"
              stroke="#9ca3af"
              strokeWidth="1.5"
            />
            <path
              d="M1 6l8 5 8-5"
              stroke="#9ca3af"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="newsletter__submit" onClick={handleSubscribe}>
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
}
