"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/types";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const initialProduct = products.find((p) => p.id === parseInt(productId || ""))?.name || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: initialProduct,
    quantity: "",
    message: "",
  });

  useEffect(() => {
    if (productId) {
      const productName = products.find((p) => p.id === parseInt(productId))?.name || "";
      setFormData((prev) => ({ ...prev, product: productName }));
    }
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "quantity" ? value : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", {
      ...formData,
      quantity: parseInt(formData.quantity) || 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-black/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-semibold text-[var(--foreground)] mb-2"
          >
            Full Name <span className="text-[var(--primary)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black rounded-lg p-3 sm:p-4 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm sm:text-base font-semibold text-[var(--foreground)] mb-2"
          >
            Email Address <span className="text-[var(--primary)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black rounded-lg p-3 sm:p-4 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="product"
            className="block text-sm sm:text-base font-semibold text-[var(--foreground)] mb-2"
          >
            Product Name
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full border border-black rounded-lg p-3 sm:p-4 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
          >
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm sm:text-base font-semibold text-[var(--foreground)] mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-black rounded-lg p-3 sm:p-4 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            min="1"
            step="1"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm sm:text-base font-semibold text-[var(--foreground)] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-black rounded-lg p-3 sm:p-4 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            rows={6}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="coffee-button px-10 py-4 sm:px-12 sm:py-5 text-base sm:text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Submit Quote Request
          </button>
        </div>
      </form>
    );
}