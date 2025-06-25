import QuoteForm from "@/components/QuoteForm";

export default function Quote() {
  return (
    <div className="container mx-auto min-h-screen py-8 flex justify-center">
      <main className="flex flex-col gap-6 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-[var(--foreground)] text-center">
          Request a Quote
        </h1>
        <div className="flex justify-center">
          <QuoteForm />
        </div>
      </main>
    </div>
  );
}