import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";

const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Light roast, floral notes",
    image: "/images/yirgacheffe.jpg",
  },
  {
    id: 2,
    name: "Sidamo Guji",
    description: "Medium roast, fruity undertones",
    image: "/images/sidamo.jpg",
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 flex justify-center">
      <main className="flex flex-col gap-6 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6 text-center">
          {product.name}
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded mx-auto"
          />
          <div className="flex flex-col gap-4 max-w-md">
            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
              <Link href="/quote" className="coffee-button">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}