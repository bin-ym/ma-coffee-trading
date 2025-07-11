// app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

const products: Product[] = [
  { id: 1, name: "Ethiopian Yirgacheffe", description: "Light roast, floral notes", image: "/images/yirgacheffe.jpg" },
  // Add more products
];

export default function Products() {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">Our Products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}