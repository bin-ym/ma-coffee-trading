import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-black">{product.description}</p>
      <Link href={`/shop/${product.id}`}>
        <button className="mt-2 coffee-button">View Details</button>
      </Link>
    </div>
  );
}