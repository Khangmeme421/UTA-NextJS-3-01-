"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, CircleUserRound, Menu, X, Search } from "lucide-react";
import { ROUTES } from "@/constants";
import AuthModal from "@/components/common/forms/authForm/AuthModal";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <button
          className="navbar__menu-btn"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={1.8} color="#000" />
          ) : (
            <Menu size={24} strokeWidth={1.8} color="#000" />
          )}
        </button>

        <Link href={ROUTES.HOME} className="navbar__logo">
          SHOP.CO
        </Link>

        <div className="navbar__links">
          <span className="navbar__link navbar__link--shop">
            Shop
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 4l4 4 4-4"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <Link href={ROUTES.SALE} className="navbar__link">
            On Sale
          </Link>
          <Link href={ROUTES.NEW_ARRIVALS} className="navbar__link">
            New Arrivals
          </Link>
          <Link href={ROUTES.BRANDS} className="navbar__link">
            Brands
          </Link>
        </div>

        <div className="navbar__search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="#6b7280" strokeWidth="1.5" />
            <path
              d="M12.5 12.5L16 16"
              stroke="#6b7280"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__icon-btn navbar__mobile-search-btn"
            aria-label="Search"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Search size={22} strokeWidth={1.8} color="#000" />
          </button>
          <Link
            href={ROUTES.CART}
            className="navbar__icon-btn"
            aria-label="Cart"
          >
            <ShoppingCart size={24} strokeWidth={1.8} color="#000" />
          </Link>
          <button
            className="navbar__icon-btn"
            aria-label="Account"
            onClick={() => setAuthModal("signin")}
          >
            <CircleUserRound size={24} strokeWidth={1.8} color="#000" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="navbar__mobile-panel">
            <div className="navbar__mobile-search">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="5.5"
                  stroke="#6b7280"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.5 12.5L16 16"
                  stroke="#6b7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
            </div>

            <span className="navbar__mobile-link navbar__link--shop">
              Shop
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Link
              href={ROUTES.SALE}
              className="navbar__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              On Sale
            </Link>
            <Link
              href={ROUTES.NEW_ARRIVALS}
              className="navbar__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href={ROUTES.BRANDS}
              className="navbar__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
          </div>
        )}
      </nav>

      {authModal && (
        <AuthModal initialTab={authModal} onClose={() => setAuthModal(null)} />
      )}
    </>
  );
}
