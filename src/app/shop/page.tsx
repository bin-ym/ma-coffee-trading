"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/types";

const categories = [
  "All",
  ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean))),
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8 mx-auto">
      <main className="flex flex-col w-full max-w-6xl gap-6 mx-auto">
        <h1
          className="text-3xl font-bold text-[var(--foreground)] text-center"
          tabIndex={-1}
        >
          Our Coffee Products
        </h1>

        {/* Centered container for search + filter side-by-side */}
        <div className="flex items-center justify-center gap-4 my-4">
          <input
            type="text"
            aria-label="Search products"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />

          <select
            aria-label="Filter by category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p
              className="text-center text-gray-500 col-span-full"
              role="alert"
              aria-live="polite"
            >
              No products found matching your criteria.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
