"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product, products } from "@/lib/types";

export default function Shop() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 flex justify-center">
      <main className="flex flex-col gap-6 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6 text-center">
          Our Coffee Products
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border rounded-lg p-2 mb-6"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}