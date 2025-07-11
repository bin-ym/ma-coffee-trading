import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-b from-[#f7f3f0] to-[#fff] flex items-center justify-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
          ☕ Welcome to MA Coffee Trading PLC
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-700 sm:text-lg lg:text-xl">
          Discover premium Ethiopian coffee, grown with care and crafted for excellence.
        </p>
        <div className="mt-6">
          <Link href="#products" className="px-6 py-3 text-base coffee-button sm:px-8 sm:py-4 sm:text-lg">
            Explore Products
          </Link>
        </div>
      </div>
      {/* Decorative background (optional, ensure /coffee-pattern.png exists in src/public/) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/coffee-pattern.png')] bg-cover bg-center pointer-events-none" />
    </section>
  );
}