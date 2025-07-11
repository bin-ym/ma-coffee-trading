// File: src/components/FeaturedProducts.tsx
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/types";

export default function FeaturedProducts() {
  const featured = allProducts.filter((product) => product.featured);

  return (
    <section id="products" className="w-full px-4 py-20 bg-gradient-to-b from-white via-[#fdfcfb] to-[#f0f0f0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[var(--foreground)] mb-10 tracking-tight">
          ✨ Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <div
              key={product.id}
              className="transform transition duration-500 hover:scale-[1.03] hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/shop">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-[var(--primary)] rounded-2xl shadow-md transition hover:bg-[var(--primary-hover)] hover:shadow-lg">
              🛖 View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
