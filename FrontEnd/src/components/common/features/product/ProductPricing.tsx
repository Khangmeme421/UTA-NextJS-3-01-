import Badge from "@/components/common/Badge";

interface ProductPricingProps {
  price: number;
  originalPrice?: number;
  discount?: string;
  variant?: "card" | "detail";
}

export default function ProductPricing({
  price,
  originalPrice,
  discount,
  variant = "card",
}: ProductPricingProps) {
  if (variant === "detail") {
    return (
      <div className="product-pricing product-pricing--detail">
        <span className="product-pricing__price">${price}</span>
        {originalPrice != null && (
          <span className="product-pricing__original-price">
            ${originalPrice}
          </span>
        )}
        {discount && <Badge label={discount} />}
      </div>
    );
  }

  return (
    <div className="product-card__pricing">
      <span className="product-card__price">${price}</span>
      {originalPrice != null && (
        <span className="product-card__original-price">${originalPrice}</span>
      )}
      {discount && <Badge label={discount} />}
    </div>
  );
}
