import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8b6f47] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MA Coffee Trading PLC</h3>
            <p>Premium coffee exports from Ethiopia.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/quote">Request Quote</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: info@macoffeetrading.com</p>
            <p>Phone: +251-123-456-789</p>
            <a
              href="https://wa.me/251123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="coffee-button mt-4 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <p className="text-center mt-8">
          © 2025 MA Coffee Trading PLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}