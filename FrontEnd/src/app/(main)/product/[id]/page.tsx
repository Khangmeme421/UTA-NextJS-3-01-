import styles from "./page.module.scss";
import type { Product, Review } from "@/types/product.d";
import StarRating from "@/components/common/StarRating";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGallery from "@/components/common/features/product/ProductGallery";
import ProductGrid from "@/components/common/features/product/ProductGrid";
import ProductPricing from "@/components/common/features/product/ProductPricing";
import ProductReviewsHeader from "@/components/common/features/product/ProductReviewsHeader";
import ReviewCard from "@/components/common/features/review/ReviewCard";
import NewsletterSection from "@/components/common/NewsletterSection";

const DEFAULT_DESCRIPTION =
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.";
const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "T-SHIRT WITH TAPE DETAILS",
        image: "/images/products/na-1.png",
        images: [
            "/images/products/na-1.png",
            "/images/products/na-1.png",
            "/images/products/na-1.png",
        ],
        price: 120,
        rating: 4.5,
    },
    {
        id: "2",
        name: "SKINNY FIT JEANS",
        image: "/images/products/na-2.png",
        images: [
            "/images/products/na-2.png",
            "/images/products/na-2.png",
            "/images/products/na-2.png",
        ],
        price: 240,
        originalPrice: 260,
        discount: "-8%",
        rating: 3.5,
    },
    {
        id: "3",
        name: "CHECKERED SHIRT",
        image: "/images/products/na-3.png",
        images: [
            "/images/products/na-3.png",
            "/images/products/na-3.png",
            "/images/products/na-3.png",
        ],
        price: 180,
        rating: 4.5,
    },
    {
        id: "4",
        name: "SLEEVE STRIPED T-SHIRT",
        image: "/images/products/na-4.png",
        images: [
            "/images/products/na-4.png",
            "/images/products/na-4.png",
            "/images/products/na-4.png",
        ],
        price: 130,
        originalPrice: 160,
        discount: "-20%",
        rating: 4.5,
    },
    {
        id: "5",
        name: "VERTICAL STRIPED SHIRT",
        image: "/images/products/ts-1.png",
        images: [
            "/images/products/ts-1.png",
            "/images/products/ts-1.png",
            "/images/products/ts-1.png",

        ],
        price: 212,
        originalPrice: 232,
        discount: "-20%",
        rating: 5.0,
    },
    {
        id: "6",
        name: "COURAGE GRAPHIC T-SHIRT",
        image: "/images/products/ts-2.png",
        images: [
            "/images/products/ts-2.png",
            "/images/products/ts-2.png",
            "/images/products/ts-2.png",
        ],
        price: 145,
        rating: 4.0,
    },
    {
        id: "7",
        name: "LOOSE FIT BERMUDA SHORTS",
        image: "/images/products/ts-3.png",
        images: [
            "/images/products/ts-3.png",
            "/images/products/ts-3.png",
            "/images/products/ts-3.png",
        ],
        price: 80,
        rating: 3.0,
    },
    {
        id: "8",
        name: "FADED SKINNY JEANS",
        image: "/images/products/ts-4.png",
        images: [
            "/images/products/ts-4.png",
            "/images/products/ts-4.png",
            "/images/products/ts-4.png",
        ],
        price: 210,
        rating: 4.5,
    },
];

const REVIEWS: Review[] = [
    {
        id: "1",
        name: "Samantha D.",
        rating: 4.5,
        comment:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "August 14, 2023",
        verified: true,
    },
    {
        id: "2",
        name: "Alex M.",
        rating: 5,
        comment:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "August 15, 2023",
        verified: true,
    },
    {
        id: "3",
        name: "Ethan R.",
        rating: 4.5,
        comment:
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "August 16, 2023",
        verified: true,
    },
    {
        id: "4",
        name: "Olivia P.",
        rating: 5,
        comment:
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: "August 17, 2023",
        verified: true,
    },
    {
        id: "5",
        name: "Liam K.",
        rating: 5,
        comment:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        date: "August 18, 2023",
        verified: true,
    },
    {
        id: "6",
        name: "Ava H.",
        rating: 4.5,
        comment:
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        date: "August 19, 2023",
        verified: true,
    },
];

const RELATED_PRODUCTS: Product[] = [
    {
        id: "10",
        name: "Polo with Contrast Trims",
        image: "/images/products/ym-1.png",
        price: 212,
        originalPrice: 242,
        discount: "-20%",
        rating: 4,
    },
    {
        id: "11",
        name: "Gradient Graphic T-shirt",
        image: "/images/products/ym-2.png",
        price: 145,
        rating: 3.5,
    },
    {
        id: "12",
        name: "Polo with Tipping Details",
        image: "/images/products/ym-3.png",
        price: 180,
        rating: 4.5,
    },
    {
        id: "13",
        name: "Black Striped T-shirt",
        image: "/images/products/ym-4.png",
        price: 120,
        originalPrice: 150,
        discount: "-30%",
        rating: 5,
    },
];

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];

    return (
        <div>
            <div className={styles.breadcrumb}>
                <span>Home</span>
                <span className={styles.separator}>›</span>
                <span>Shop</span>
                <span className={styles.separator}>›</span>
                <span>Men</span>
                <span className={styles.separator}>›</span>
                <span className={styles.active}>T-shirts</span>
            </div>

            <div className={styles.productMain}>
                <ProductGallery product={product} />

                <div className={styles.info}>
                    <h1 className={styles.name}>{product.name}</h1>

                    <div className={styles.ratingRow}>
                        <StarRating value={product.rating} showValue />
                    </div>
                    
                    <ProductPricing
                        variant="detail"
                        price={product.price}
                        originalPrice={product.originalPrice}
                        discount={product.discount}
                    />

                    <p className={styles.description}>
                        {product.description ?? DEFAULT_DESCRIPTION}
                    </p>

                    <hr className={styles.divider} />

                    <div className={styles.colors}>
                        <p className={styles.label}>Select Colors</p>
                        <div className={styles.colorOptions}>
                            <div
                                className={styles.colorSwatch}
                                style={{ background: "#4F4631" }}
                            >
                                ✓
                            </div>
                            <div
                                className={styles.colorSwatch}
                                style={{ background: "#314F4A" }}
                            ></div>
                            <div
                                className={styles.colorSwatch}
                                style={{ background: "#31344F" }}
                            ></div>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.sizes}>
                        <p className={styles.label}>Choose Size</p>
                        <div className={styles.sizeOptions}>
                            <span className={styles.sizeOption}>Small</span>
                            <span className={styles.sizeOption}>Medium</span>
                            <span className={`${styles.sizeOption} ${styles.sizeActive}`}>
                                Large
                            </span>
                            <span className={styles.sizeOption}>X-Large</span>
                        </div>
                    </div>

                    <div className={styles.actionRow}>
                        <div className={styles.quantity}>
                            <button type="button">-</button>
                            <span>1</span>
                            <button type="button">+</button>
                        </div>
                        <Button className={styles.addToCartBtn}>Add to Cart</Button>
                    </div>
                </div>
            </div>

            <div className={styles.tabs}>
                <span className={styles.tab}>Product Details</span>
                <span className={`${styles.tab} ${styles.tabActive}`}>
                    Rating & Reviews
                </span>
                <span className={styles.tab}>FAQs</span>
            </div>

            <ProductReviewsHeader total={451} />

            <div className={styles.reviewGrid}>
                {REVIEWS.map((review) => (
                    <ReviewCard key={review.id} review={review} showMenu showDate />
                ))}
            </div>

            <div className={styles.loadMoreWrapper}>
                <button type="button" className={styles.loadMoreBtn}>
                    Load More Reviews
                </button>
            </div>

            <section className={styles.relatedSection}>
                <SectionHeading title="YOU MIGHT ALSO LIKE" />
                <ProductGrid products={RELATED_PRODUCTS} />
            </section>

            <div className={styles.newsletterBleed}>
                <NewsletterSection />
            </div>
        </div>
    );
}