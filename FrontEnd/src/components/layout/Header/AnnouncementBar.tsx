"use client";

import Link from "next/link";
import { useState } from "react";
import { ROUTES } from "@/constants";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="announcement-bar">
      Sign up and get 20% off to your first order.{" "}
      <Link href={ROUTES.SIGNUP} className="announcement-bar__link">
        Sign Up Now
      </Link>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="announcement-bar__close"
      >
        ×
      </button>
    </div>
  );
}
