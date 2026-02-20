"use client";

import Link from "next/link";
import {
  FaWrench,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";

const serviceLinks = [
  { label: "Herramientas" },
  { label: "Plomería" },
  { label: "Electricidad" },
  { label: "Pinturas" },
  { label: "Tornillería" },
  { label: "Construcción" },
];

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/DonFierroMx", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/donfierromx", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com/@donfierromx", label: "TikTok" },
  { icon: FaWhatsapp, href: "https://wa.me/528445841876", label: "WhatsApp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-steel-900 via-steel-800 to-steel-950 text-white overflow-hidden">
      {/* Industrial top border */}
      <div className="h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      {/* Hex pattern background */}
      <div className="absolute inset-0 hex-bg opacity-[0.03]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <FaWrench className="text-2xl text-primary-400 group-hover:rotate-45 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold">Don Fierro</span>
                <span className="text-[10px] text-primary-400 font-bold uppercase tracking-widest">
                  Ferretería & Materiales
                </span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm">
              Más de 20 años surtiendo a los mejores constructores,
              plomeros, electricistas y hogares de la región. Tu proyecto,
              nuestras herramientas.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-primary-500 border border-white/10 hover:border-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full group-hover:bg-primary-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
              Departamentos
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href="#productos"
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full group-hover:bg-primary-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+528445841876"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                >
                  <FaPhoneAlt className="text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span>
                    844 584 1876
                    <span className="block text-xs text-gray-500">
                      Ventas y cotizaciones
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                >
                  <FaClock className="text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span>
                    Lun - Vie: 8:00 - 19:00
                    <span className="block text-xs text-primary-400 font-semibold">
                      Sáb: 8:00 - 14:00
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@donfierro.mx"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                >
                  <FaEnvelope className="text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="break-all text-sm">
                    ventas@donfierro.mx
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Blvd. Fundadores 500, Col. Centro
                  <span className="block">Saltillo, Coahuila 25000</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left flex items-center gap-1">
              © {currentYear} Don Fierro — Ferretería & Materiales. Construido con{" "}
              <FaHeart className="text-primary-400 inline" /> y mucho acero.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
