//Product
export interface Product {
  id: string;
  name: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewCount?: number;
  category?: string;
  style?: DressStyle;
  sizes?: Size[];
  colors?: Color[];
  description?: string;
  inStock?: boolean;
}

//Dress Style
export type DressStyle = "casual" | "formal" | "party" | "gym";

//Size
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL" | "4XL";

//Color
export interface Color {
  name: string;
  hex: string;
}

//Cart
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  size?: Size;
  color?: Color;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

//Review
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
  userId?: string;
}

//Filter 
export interface ProductFilters {
  category?: string;
  style?: DressStyle;
  minPrice?: number;
  maxPrice?: number;
  sizes?: Size[];
  colors?: string[];
  rating?: number;
  sort?: string;
  page?: number;
  limit?: number;
  search?: string;
}
