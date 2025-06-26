import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { Product, Testimonial } from "@/lib/types";

const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Light roast, floral notes",
    image: "/images/yirgacheffe.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "&quot;MA Coffee Trading provides the best Ethiopian coffee I've ever tasted!&quot;",
    company: "Cafe Global",
  },
];

export default function Home() {
  return (
    <div className="container flex justify-center min-h-screen py-8 mx-auto">
      <main className="flex flex-col w-full max-w-5xl gap-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Welcome to MA Coffee Trading PLC
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-black">
            Discover premium coffee from Ethiopia.
          </p>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto text-black">
            MA Coffee Trading PLC is a leading exporter of premium Ethiopian
            coffee. We source directly from farmers to ensure quality and
            sustainability, delivering the finest coffee to international
            markets.
          </p>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="w-full">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 text-center">
            Featured Products
          </h2>
          <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/shop">
              <button className="mt-6 coffee-button">View All Products</button>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 text-center">
            Testimonials
          </h2>
          <div className="flex justify-center">
            <Testimonials testimonials={testimonials} />
          </div>
        </section>
      </main>
    </div>
  );
}
