'use client'; // Mark as client component
import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm'; // Adjust path as needed

export default function QuotePage() {
  return (
    <div className="container flex justify-center min-h-screen py-8 mx-auto">
      <main className="flex flex-col w-full max-w-5xl gap-10">
        <section className="text-center" /> 
        <Suspense fallback={<div>Loading...</div>}>
          <QuoteForm />
        </Suspense>
      </main>
    </div>
  );
}