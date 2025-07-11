// src/components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="relative p-4 transition-transform transform bg-[var(--background)] border border-[var(--primary)] shadow-lg group rounded-xl hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
      style={{ animationFillMode: "both" }}
    >
      {product.isNew && (
        <span
          className="absolute px-2 py-1 text-xs font-bold text-[var(--background)] bg-yellow-400 rounded top-2 left-2 shadow-md select-none"
          aria-label="New product badge"
        >
          NEW
        </span>
      )}
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover mx-auto rounded"
        priority
      />
      <h3 className="mt-4 text-lg font-bold text-[var(--foreground)] text-center">
        {product.name}
      </h3>
      <p className="mt-2 text-sm text-center text-[var(--foreground)]/80">
        {product.description.length > 60
          ? product.description.slice(0, 60) + "..."
          : product.description}
      </p>

      {product.price !== undefined && (
        <p className="mt-2 text-center text-[var(--foreground)] font-semibold text-lg">
          ${product.price.toFixed(2)}
        </p>
      )}

      <div className="flex justify-center mt-4">
        <Link
          href={`/shop/${product.id}`}
          className="px-4 py-2 text-sm font-semibold text-white bg-[var(--primary)] rounded-2xl shadow-md transition hover:bg-[var(--primary-hover)] hover:shadow-lg"
          aria-label={`View details for ${product.name}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
