import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

// Alternative: Vibrant fonts
// import { Poppins, Montserrat } from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
// const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });

// Alternative: Unique fonts
// import { Raleway, Cinzel } from "next/font/google";
// const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
// const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "MA Coffee Trading PLC",
  description: "Premium coffee export from Ethiopia and beyond. Request quotes for high-quality coffee products.",
  openGraph: {
    title: "MA Coffee Trading PLC",
    description: "Explore our premium coffee products and request a quote today.",
    url: "https://ma-coffee-trading.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lora.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}