import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types"; // Import Product type
import { allProducts } from "@/lib/products"; // Import your consolidated products data

export async function generateStaticParams() {
  // Use allProducts from your data file
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

/**
 * ProductDetail component for displaying individual product details.
 * It receives `params` as props, which contains the dynamic segment `id`.
 * @param {object} props - The component props.
 * @param {object} props.params - Object containing dynamic route parameters.
 * @param {string} props.params.id - The product ID from the URL.
 */
export default function ProductDetail({ params }: { params: { id: string } }) {
  // Find the product in the mock data based on the parsed ID from the URL.
  // Use parseInt to convert the string ID from params to a number.
  const product = allProducts.find((p) => p.id === parseInt(params.id)); // Use allProducts

  // If no product is found with the given ID, trigger Next.js's 404 page.
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
          {/* Next.js Image component for optimized images */}
          <Image
            src={product.image}
            alt={product.name}
            width={400} // Set a fixed width
            height={400} // Set a fixed height
            className="object-cover mx-auto rounded" // Added object-cover for better image fitting
            // Add priority prop if this image is above the fold for LCP optimization
            // priority={true}
          />
          <div className="flex flex-col max-w-md gap-4">
            {/* Display product description */}
            <p className="text-black">{product.description}</p>
            {/* Additional lorem ipsum text */}
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
              {/* Link to request a quote for the specific product */}
              <Link
                href={`/quote?productId=${product.id}`}
                className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg coffee-button hover:scale-105"
                // You'll need to define `coffee-button` styling in your global CSS or Tailwind config
                // For demonstration, added inline Tailwind classes to make it visible
                style={{ backgroundColor: 'var(--accent-color, #6F4E37)' }} // Example style, use your actual theme variable
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