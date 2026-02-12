import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartProvider } from "@/context/cart-context";
import { CartSheet } from "@/components/cart/cart-sheet";
import "./globals.css";

// [NEW] Configure custom fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drakkar Active | Strength Woven Into Every Thread",
  description: "Premium gym wear engineered for resilience. Shop the latest All-in-One Leggings and Fusion Tees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
