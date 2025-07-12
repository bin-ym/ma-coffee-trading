"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="bg-[#6b4e31] shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image
            src="/images/logo.png"
            alt="MA Coffee Trading"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold text-[var(--foreground)]">
            MA Coffee Trading
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-6 text-lg font-bold md:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative text-[var(--foreground)] hover:text-[var(--primary)] transition-colors after:block after:h-[2px] after:bg-[var(--primary)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[var(--foreground)] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4 px-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 bg-[var(--background)] rounded-b-md shadow-md">
          {[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block py-2 px-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
