import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-hover)] text-white py-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-semibold">MA Coffee Trading PLC</h3>
            <p className="text-gray-200">Premium coffee exports from Ethiopia.</p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-100">
              {[
                { href: "/#about", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/quote", label: "Request Quote" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Contact Us</h3>
            <p>Email: <a href="mailto:info@macoffeetrading.com" className="hover:underline">info@macoffeetrading.com</a></p>
            <p>Phone: +251-123-456-789</p>
            <a
              href="https://wa.me/251123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 coffee-button"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <hr className="my-6 border-white/20" />
        <p className="text-sm text-center text-gray-300">
          © {new Date().getFullYear()} MA Coffee Trading PLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}