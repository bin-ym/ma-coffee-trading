"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/products";

export default function Shop() {
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container flex justify-center py-8 mx-auto">
      <main className="flex flex-col w-full max-w-5xl gap-6">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6 text-center">
          Our Coffee Products
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-2 mb-6 border rounded-lg"
          />
        </div>
        <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}