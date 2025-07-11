'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { allProducts as products } from '@/lib/types';

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const initialProduct =
    products.find((p) => p.id === parseInt(productId || ''))?.name || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: initialProduct,
    quantity: '',
    message: '',
  });

  useEffect(() => {
    if (productId) {
      const productName =
        products.find((p) => p.id === parseInt(productId))?.name || '';
      setFormData((prev) => ({ ...prev, product: productName }));
    }
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', {
      ...formData,
      quantity: parseInt(formData.quantity) || 0,
    });
    // TODO: Send to backend or email service
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl px-6 py-10 mx-auto space-y-8 bg-white border shadow-2xl border-black/10 rounded-2xl animate-fade-in-up"
    >
      <h2 className="text-2xl font-serif text-center font-bold text-[var(--foreground)] mb-2">
        Request a Coffee Quote
      </h2>
      <p className="text-center text-[var(--foreground)]/80 mb-4 text-sm">
        Fill out the form below to get a customized coffee quote from us.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[var(--foreground)] mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[var(--foreground)] border-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[var(--foreground)] mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[var(--foreground)] border-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Product */}
        <div>
          <label
            htmlFor="product"
            className="block text-sm font-semibold text-[var(--foreground)] mb-1"
          >
            Product
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-[var(--foreground)] border-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-semibold text-[var(--foreground)] mb-1"
          >
            Quantity <span className="text-red-500">*</span>
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[var(--foreground)] border-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
            placeholder="e.g., 100kg"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[var(--foreground)] mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Any special instructions or questions?"
          className="w-full p-3 border rounded-lg text-[var(--foreground)] border-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-10 py-4 text-base font-semibold transition-all duration-200 shadow-lg coffee-button hover:scale-105"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
