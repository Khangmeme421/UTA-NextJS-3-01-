//Footer Sections
export const FOOTER_SECTIONS = [
  { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
  {
    title: "HELP",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "RESOURCES",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
] as const;

//Payment Methods
export const PAYMENT_METHODS = [
  "VISA",
  "MC",
  "PayPal",
  "Apple Pay",
  "Google Pay",
] as const;

//Social Icons (placeholder labels)
export const SOCIAL_ICONS = ["T", "f", "in", "G"] as const;

//Hero Stats
export const HERO_STATS = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
] as const;

//Sort Options
export const SORT_OPTIONS = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low", value: "price_asc" },
  { label: "Price: High", value: "price_desc" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];
