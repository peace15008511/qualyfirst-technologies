"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgStyle, setBgStyle] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const carouselHeight = 800; // adjust based on your carousel height

      if (scrollY < 50) {
        setBgStyle("bg-transparent");
      } else if (scrollY >= 50 && scrollY < carouselHeight) {
        setBgStyle("bg-black/30 backdrop-blur-md");
      } else {
        setBgStyle("bg-[#0056A6]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 md:px-20 py-4 text-white z-50 transition-all duration-300 ${bgStyle}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-white tracking-wide hover:text-[#FF9800] transition duration-300"
        >
          QUALYFIRST
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 font-semibold text-lg">
          <Link
            href="/services"
            className="hover:text-[#FF9800] transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-[#FF9800] transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#FF9800] transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-black/80 backdrop-blur-lg text-white flex flex-col items-center space-y-6 py-6 md:hidden z-40 transition-all duration-300">
          <Link
            href="/services"
            className="text-xl font-semibold hover:text-[#FF9800] transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-xl font-semibold hover:text-[#FF9800] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl font-semibold hover:text-[#FF9800] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
