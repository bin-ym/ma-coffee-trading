'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { allProducts as products } from "@/lib/types";

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) return notFound();

  return (
    <div className="container min-h-screen px-4 py-12 mx-auto animate-fade-in-up">
      <main className="flex flex-col max-w-6xl gap-12 mx-auto lg:flex-row">
        
        {/* Left: Image */}
        <div className="relative flex items-center justify-center flex-1 group">
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-[#6B4F4F] text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
              New
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-contain max-h-[500px] transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 flex flex-col justify-center gap-6 text-[var(--foreground)]">
          <h1 className="relative inline-block font-serif text-4xl font-bold">
            {product.name}
            {/* Animated underline */}
            <span className="block h-1 bg-[var(--primary)] rounded-full mt-1 w-16 animate-pulse"></span>
          </h1>

          {/* Price */}
          {product.price && (
            <p className="text-xl font-semibold text-[#d4af37]">
              ${product.price.toFixed(2)}
            </p>
          )}

          <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-400">
            {product.description}
          </p>

          <hr className="my-4 border-gray-600" />

          {/* Extra details */}
          <div className="space-y-2 text-gray-400">
            <p><strong>Origin:</strong> Ethiopia</p>
            <p><strong>Grade:</strong> Specialty</p>
            <p><strong>Process:</strong> Washed</p>
          </div>

          <Link
            href={`/quote?productId=${product.id}`}
            className="mt-8 inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition shadow-md hover:shadow-[0_0_15px_3px_rgba(107,79,49,0.7)]"
          >
            Request a Quote
          </Link>
        </div>
      </main>
    </div>
  );
}