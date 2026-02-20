"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";
import {
  FaTruck,
  FaTag,
  FaHeadset,
  FaWarehouse,
  FaMedal,
  FaCreditCard,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaTag,
    title: "Precios de Mayoreo",
    description:
      "Compramos directo de fábrica para darte los mejores precios. Descuentos por volumen en todos los departamentos.",
    accent: "text-primary-400",
    bg: "bg-primary-500/10",
  },
  {
    icon: FaTruck,
    title: "Envío a Domicilio",
    description:
      "Pedidos grandes o pequeños, te los llevamos. Servicio de entrega rápida en Saltillo y zona metropolitana.",
    accent: "text-accent-400",
    bg: "bg-accent-500/10",
  },
  {
    icon: FaHeadset,
    title: "Asesoría Técnica Gratis",
    description:
      "¿No sabes qué material necesitas? Nuestro equipo de expertos te asesora sin costo. Llámanos o visítanos.",
    accent: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: FaWarehouse,
    title: "Amplio Inventario",
    description:
      "Más de 10,000 productos siempre disponibles. Si no lo tenemos, te lo conseguimos en tiempo récord.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: FaMedal,
    title: "Marcas de Calidad",
    description:
      "Trabajamos con las mejores marcas nacionales e internacionales. Herramientas y materiales con garantía.",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: FaCreditCard,
    title: "Múltiples Formas de Pago",
    description:
      "Efectivo, tarjeta, transferencia o crédito a clientes frecuentes. La forma que te sea más cómoda.",
    accent: "text-primary-400",
    bg: "bg-primary-500/10",
  },
];

export default function WhyChooseUs() {
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
      id="ventajas"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-steel-900 via-steel-800 to-steel-950 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 hex-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-5 animate-float">
        ⚙️
      </div>
      <div
        className="absolute bottom-20 left-10 text-5xl opacity-5 animate-float"
        style={{ animationDelay: "3s" }}
      >
        🔧
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Nuestras Ventajas"
          badgeEmoji="💪"
          title="¿Por Qué Elegir Don Fierro?"
          subtitle="No solo vendemos herramientas, construimos relaciones de confianza con cada cliente"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-12 h-12 ${reason.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className={`text-xl ${reason.accent}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-2xl px-8 py-5">
            <span className="text-4xl">🏆</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">
                Más de 5,000 clientes satisfechos
              </p>
              <p className="text-gray-400 text-sm">
                Constructores, electricistas, plomeros y familias confían en Don
                Fierro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
