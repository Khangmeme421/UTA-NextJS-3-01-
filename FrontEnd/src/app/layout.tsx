import type { Metadata } from "next";
import "@/styles/global.scss";
import AnnouncementBar from "@/components/layout/Header/AnnouncementBar";
import Navbar from "@/components/layout/Header/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "SHOP.CO – Find Clothes That Match Your Style",
  description:
    "Browse our diverse range of meticulously crafted garments, designed to bring out your individuality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
