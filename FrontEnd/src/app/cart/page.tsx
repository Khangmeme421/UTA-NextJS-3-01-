"use client";

import { useState } from "react";
import styles from "./cart.module.scss";
import NewsletterSection from "@/components/common/NewsletterSection";

interface CartItemData {
  id: number;
  name: string;
  size: string;
  color: string;
  image: string;
  price: number;
  qty: number;
}

const initialItems: CartItemData[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    image: "/images/products/ym-2.png",
    price: 145,
    qty: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    image: "/images/products/na-3.png",
    price: 180,
    qty: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    image: "/images/products/na-2.png",
    price: 240,
    qty: 1,
  },
];

function QuantityStepper({
  qty,
  onChange,
}: {
  qty: number;
  onChange: (qty: number) => void;
}) {
  return (
    <div className={styles.stepper}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, qty - 1))}
        aria-label="Decrease quantity"
      >
        &minus;
      </button>
      <span className={styles["qty-value"]}>{qty}</span>
      <button
        type="button"
        onClick={() => onChange(qty + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

function CartItem({
  item,
  onQtyChange,
  onRemove,
}: {
  item: CartItemData;
  onQtyChange: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["item-main"]}>
        <div className={styles["item-image"]}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles["item-details"]}>
          <h3 className={styles["item-name"]}>{item.name}</h3>
          <p className={styles["item-attr"]}>
            Size: <span>{item.size}</span>
          </p>
          <p className={styles["item-attr"]}>
            Color: <span>{item.color}</span>
          </p>
          <p className={styles["item-price"]}>${item.price}</p>
        </div>
      </div>

      <div className={styles["item-actions"]}>
        <button
          type="button"
          className={styles["remove-btn"]}
          aria-label="Remove item"
          onClick={() => onRemove(item.id)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <QuantityStepper
          qty={item.qty}
          onChange={(qty) => onQtyChange(item.id, qty)}
        />
      </div>
    </div>
  );
}

export default function Cart() {
  const [items, setItems] = useState<CartItemData[]>(initialItems);
  const [promo, setPromo] = useState("");

  const updateQty = (id: number, qty: number) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const discountRate = 0.2;
  const discount = Math.round(subtotal * discountRate);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className={styles["cart-page"]}>
      <div className={styles.breadcrumb}>
        Home <span className={styles.separator}>&gt;</span>{" "}
        <span className={styles.current}>Cart</span>
      </div>

      <h1 className={styles.title}>YOUR CART</h1>

      <div className={styles.content}>
        <div className={styles["cart-list"]}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQtyChange={updateQty}
              onRemove={removeItem}
            />
          ))}
          
        </div>

        <div className={styles.summary}>
          <h2 className={styles["summary-title"]}>Order Summary</h2>

          <div className={styles["summary-row"]}>
            <span>Subtotal</span>
            <span className={styles.value}>${subtotal}</span>
          </div>
          <div className={styles["summary-row"]}>
            <span>Discount (-{discountRate * 100}%)</span>
            <span className={styles["discount-value"]}>-${discount}</span>
          </div>
          <div className={styles["summary-row"]}>
            <span>Delivery Fee</span>
            <span className={styles.value}>${deliveryFee}</span>
          </div>

          <hr className={styles.divider} />

          <div className={styles["total-row"]}>
            <span className={styles["total-label"]}>Total</span>
            <span className={styles["total-value"]}>${total}</span>
          </div>

          <div className={styles["promo-row"]}>
            <div className={styles["promo-input"]}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.6 12.6 12 21.2 2.8 12a2 2 0 0 1 0-2.8L9.4 2.6A2 2 0 0 1 12 2l8.6 1.4a2 2 0 0 1 1.6 1.6L23.6 13a2 2 0 0 1-.6 1.6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="1.2" fill="currentColor" />
              </svg>
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Add promo code"
              />
            </div>
            <button type="button" className={styles["apply-btn"]}>
              Apply
            </button>
          </div>

          <button type="button" className={styles["checkout-btn"]}>
            Go to Checkout
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}