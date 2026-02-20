"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Roberto Hernández",
    role: "Contratista",
    text: "Llevo 8 años comprando todo mi material en Don Fierro. El surtido es increíble y los precios son los mejores de la zona. Mi ferretería de cabecera.",
    stars: 5,
    emoji: "👷",
  },
  {
    name: "Ana María Gutiérrez",
    role: "Ama de casa",
    text: "Remodelé toda mi cocina con productos de aquí. Me asesoraron en todo, desde la pintura hasta los accesorios de plomería. ¡Excelente servicio!",
    stars: 5,
    emoji: "🏠",
  },
  {
    name: "Carlos Mendoza",
    role: "Electricista",
    text: "El mejor surtido en material eléctrico. Cables, contactos, centros de carga... todo a buen precio y de marca. Siempre tienen lo que necesito.",
    stars: 5,
    emoji: "⚡",
  },
  {
    name: "Patricia López",
    role: "Diseñadora de interiores",
    text: "La variedad en pinturas y acabados es impresionante. Además, su sistema de cotización por WhatsApp me ahorra mucho tiempo. ¡Súper práctico!",
    stars: 5,
    emoji: "🎨",
  },
  {
    name: "Miguel Ángel Torres",
    role: "Plomero",
    text: "Como profesional, necesito material de calidad y rápido. En Don Fierro encuentro todo y además me lo llevan a la obra. No cambio de ferretería.",
    stars: 5,
    emoji: "🔧",
  },
  {
    name: "Laura Sánchez",
    role: "Propietaria de negocio",
    text: "Instalé el sistema de seguridad de mi local con productos de aquí. Cámaras, cerraduras, sensores... todo excelente calidad y precio justo.",
    stars: 4,
    emoji: "🔒",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-steel-50"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Testimonios"
          badgeEmoji="⭐"
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="La confianza de miles de clientes nos respalda. Esto es lo que opinan de Don Fierro"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-steel-100 p-6 hover:shadow-xl hover:shadow-steel-900/5 hover:border-primary-200 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary-200 text-2xl mb-4 group-hover:text-primary-400 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar
                    key={j}
                    className={`text-sm ${
                      j < testimonial.stars
                        ? "text-primary-400"
                        : "text-steel-200"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-steel-600 text-sm leading-relaxed mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-steel-100">
                <span className="text-2xl">{testimonial.emoji}</span>
                <div>
                  <p className="font-bold text-steel-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-steel-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
