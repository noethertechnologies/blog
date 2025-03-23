import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/SessionProvider";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech, Investment & Trading Insights - Expert Blogs",
  description:
    "Stay updated with the latest trends in technology, investment strategies, and trading insights. Learn from industry experts and enhance your financial growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Explore expert opinions on technology trends, investment strategies, stock trading tips, and the latest in financial markets. Learn how to grow your wealth and stay ahead of the curve."
        />
        <meta
          name="keywords"
          content="tech blogs, investment strategies, trading tips, stock market, cryptocurrency, financial growth, technology insights, fintech, blockchain, AI trends"
        />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Tech, Investment & Trading Insights - Expert Blogs"
        />
        <meta
          property="og:description"
          content="Discover the latest in technology, investment strategies, and trading tips. Expert opinions to help you succeed in the financial world."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.brealthroughsdaily.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tech, Investment & Trading Insights - Expert Blogs"
        />
        <meta
          name="twitter:description"
          content="Stay informed with expert blogs on technology, trading, and investment. Maximize your financial growth with actionable insights."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="w-full">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
