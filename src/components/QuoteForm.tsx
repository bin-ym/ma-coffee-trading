"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (e.g., API call)
    console.log("Quote form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 p-6 border border-[var(--primary-hover)] rounded-xl">
      <h3 className="text-2xl font-bold text-[var(--foreground)] text-center mb-6">
        Request a Quote
      </h3>
      <div>
        <label htmlFor="name" className="block text-base font-semibold text-[var(--foreground)] mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-white dark:bg-gray-900 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-base font-semibold text-[var(--foreground)] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-white dark:bg-gray-900 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="product" className="block text-base font-semibold text-[var(--foreground)] mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-white dark:bg-gray-900 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-base font-semibold text-[var(--foreground)] mb-2">
          Quantity
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-white dark:bg-gray-900 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-base font-semibold text-[var(--foreground)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-white dark:bg-gray-900 text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
          rows={6}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="coffee-button px-8 py-4 text-lg transform hover:scale-105 transition-transform duration-200"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}