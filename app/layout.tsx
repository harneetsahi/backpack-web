import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileView from "./components/MobileView";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backpack: Crypto Exchange & Wallet | Solana, Ethereum & BTC",
  description:
    "Backpack offers a robust, user-friendly platform for seamlessly trading, managing, and securing your cryptocurrency assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <MobileView />
        <div className="hidden sm:block">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
