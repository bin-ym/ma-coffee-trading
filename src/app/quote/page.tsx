'use client'; // Mark as client component
import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm'; // Adjust path as needed

export default function QuotePage() {
  return (
    <div className="container mx-auto min-h-screen py-8 flex justify-center">
      <main className="flex flex-col gap-12 w-full max-w-5xl">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Fill out the form below to request a quote for our coffee products.
          </p>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <QuoteForm />
        </Suspense>
      </main>
    </div>
  );
}