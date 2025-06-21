"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[var(--background)] shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="MA Coffee Trading" width={40} height={40} />
            <span className="text-xl font-bold text-[var(--foreground)]">MA Coffee Trading</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 justify-end">
          <li>
            <Link href="/" className="hover:text-[var(--primary)]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[var(--primary)]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[var(--primary)]">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[var(--foreground)] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[var(--background)] px-4 py-4 shadow-md">
          <li>
            <Link href="/" className="hover:text-[var(--primary)]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[var(--primary)]" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[var(--primary)]" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}