import Link from "next/link";
import Image from "next/image";
import coffee_bg from "@/assets/image/coffee-hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-b from-[#f7f3f0] to-[#fff] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax (requires JS for full effect) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          // src="/assets/image/coffee-hero.jpg" // High-res coffee beans or plantation image
          src={coffee_bg}
          alt="Coffee beans background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for text contrast */}
      </div>
      <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-4 tracking-wide animate-fade-in-down">
          ☕ Welcome to MA Coffee Trading PLC
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl lg:text-2xl animate-fade-in-up animation-delay-200">
          Discover premium Ethiopian coffee, grown with care and crafted for excellence.
        </p>
        <div className="flex justify-center gap-4 mt-8 animate-fade-in-up animation-delay-400">
          <Link href="#products" className="text-lg coffee-button sm:text-xl">
            Explore Products
          </Link>
          <Link href="/quote" className="coffee-button bg-[var(--primary-hover)] hover:bg-[var(--primary)] text-lg sm:text-xl">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}