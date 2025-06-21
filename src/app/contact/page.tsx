"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (e.g., API call or email service)
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="container mx-auto min-h-screen py-8 flex justify-center">
      <main className="flex flex-col gap-12 w-full max-w-5xl">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with MA Coffee Trading PLC for inquiries, quotes, or partnership opportunities.
          </p>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    rows={4}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="coffee-button">Submit</button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 text-center">Our Contact Details</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Email: info@macoffeetrading.com</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Phone: +251-987-076-362</p>
              <a
                href="https://wa.me/251987076362"
                target="_blank"
                rel="noopener noreferrer"
                className="coffee-button"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}