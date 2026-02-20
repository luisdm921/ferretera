"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaWrench,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#ventajas", label: "¿Por qué elegirnos?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4 z-[110] p-3 rounded-xl bg-white/10"
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl text-white" />
          </button>

          <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
            <div className="absolute top-20 right-8 text-primary-500/10 text-5xl">
              ⚙️
            </div>
            <div className="absolute bottom-20 left-8 text-primary-500/10 text-4xl">
              🔩
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-white text-2xl font-bold hover:text-primary-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6">
              <a
                href="tel:+528445841876"
                className="flex items-center gap-3 bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg"
              >
                <FaPhoneAlt />
                844 584 1876
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Header - Siempre visible */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg shadow-steel-900/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <FaWrench
                  className={`text-2xl transition-colors duration-300 group-hover:rotate-45 ${
                    isScrolled ? "text-primary-500" : "text-primary-400"
                  }`}
                />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-500 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-extrabold transition-colors duration-300 ${
                    isScrolled ? "text-steel-800" : "text-white"
                  }`}
                >
                  Don Fierro
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isScrolled ? "text-primary-500" : "text-primary-300"
                  }`}
                >
                  Ferretería & Materiales
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-primary-500/10 ${
                    isScrolled
                      ? "text-steel-600 hover:text-primary-600"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+528445841876"
                className="ml-3 flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-300"
              >
                <FaPhoneAlt className="text-xs" />
                844 584 1876
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className={`lg:hidden p-2.5 rounded-xl ${
                isScrolled ? "bg-steel-100" : "bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <FaBars
                className={`text-xl ${
                  isScrolled ? "text-steel-700" : "text-white"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
