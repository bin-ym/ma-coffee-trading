import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts } from "@/lib/products";
import type { GetServerSidePropsContext } from "next";

export default function ProductDetail({
  params,
}: {
  params: GetServerSidePropsContext["params"];
}) {
  const product = allProducts.find((p) => p.id === parseInt(params?.id as string));

  if (!product) {
    notFound();
  }

  return (
    <div className="container flex justify-center py-8 mx-auto">
      <main className="flex flex-col w-full max-w-5xl gap-6">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6 text-center">
          {product.name}
        </h1>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover mx-auto rounded"
          />
          <div className="flex flex-col max-w-md gap-4">
            <p className="text-black">{product.description}</p>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
              <Link
                href={`/quote?productId=${product.id}`}
                className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg coffee-button hover:scale-105"
                style={{ backgroundColor: "var(--accent-color, #6F4E37)" }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}