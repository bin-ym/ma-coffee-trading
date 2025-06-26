import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define Product type directly within this file for self-containment
interface Product {
  id: number;
  name: string;
  description: string;
  image: string; // Path or URL to the product image
  price: number; // Example field, add/modify as needed
}

// Mock products data. In a real application, this would come from an API or database.
const products: Product[] = [
  { id: 1, name: "Ethiopian Yirgacheffe", description: "A bright and floral coffee with notes of citrus.", image: "/images/ethiopian_yirgacheffe.jpg", price: 22.50 },
  { id: 2, name: "Brazilian Santos", description: "Smooth and nutty, a classic medium roast.", image: "/images/brazilian_santos.jpg", price: 18.00 },
  { id: 3, name: "Sumatra Mandheling", description: "Rich, earthy, and full-bodied with low acidity.", image: "/images/sumatra_mandheling.jpg", price: 25.00 },
  { id: 4, name: "Colombian Supremo", description: "Balanced and clean, with hints of chocolate and nuts.", image: "/images/colombian_supremo.jpg", price: 19.75 },
];

export async function generateStaticParams() {
  return products.map((product) => ({
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
  const product = products.find((p) => p.id === parseInt(params.id));

  // If no product is found with the given ID, trigger Next.js's 404 page.
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
          {/* Next.js Image component for optimized images */}
          <Image
            src={product.image}
            alt={product.name}
            width={400} // Set a fixed width
            height={400} // Set a fixed height
            className="rounded mx-auto object-cover" // Added object-cover for better image fitting
            // Add priority prop if this image is above the fold for LCP optimization
            // priority={true}
          />
          <div className="flex flex-col gap-4 max-w-md">
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
                className="coffee-button px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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
