"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaWrench,
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaTruck,
  FaClock,
  FaStar,
} from "react-icons/fa";

const floatingTools = ["🔨", "⚙️", "🔩", "🪛", "🔧", "💡", "🔒", "🎨"];

const stats = [
  { icon: FaClock, value: "20+", label: "Años de experiencia" },
  { icon: FaStar, value: "10,000+", label: "Productos disponibles" },
  { icon: FaTruck, value: "Envío", label: "A domicilio" },
  { icon: FaShieldAlt, value: "100%", label: "Calidad garantizada" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-900 via-steel-800 to-steel-950" />

      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-bg opacity-30" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-transparent to-primary-900/20" />

      {/* Static decorative tool emojis - no animations */}
      {floatingTools.map((tool, i) => (
        <div
          key={i}
          className="absolute text-4xl md:text-5xl opacity-5 pointer-events-none select-none"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        >
          {tool}
        </div>
      ))}

      {/* Caution stripe accents */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-primary-500/30">
              <FaWrench className="text-xs" />
              Tu ferretería de confianza en Saltillo
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Todo para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              construir
            </span>
            ,<br />
            todo en un{" "}
            <span className="relative">
              solo lugar
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Arma tu lista de productos desde nuestro catálogo y envíala por
            WhatsApp para cotización al instante. Herramientas, materiales,
            plomería, electricidad y mucho más 🔧
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="#productos"
              className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/40"
            >
              Ver Catálogo
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/528445841876?text=¡Hola!%20Me%20gustaría%20información%20sobre%20sus%20productos%20🔧"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-green-500 hover:border-green-500 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Directo
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <stat.icon className="text-primary-400 text-xl mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0,60 C360,20 720,80 1080,40 C1260,20 1380,60 1440,50 L1440,80 L0,80 Z"
            fill="#fafaf9"
          />
        </svg>
      </div>
    </section>
  );
}
