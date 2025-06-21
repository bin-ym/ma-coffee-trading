import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}