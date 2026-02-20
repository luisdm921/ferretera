"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";
import {
  FaHardHat,
  FaHandshake,
  FaTrophy,
  FaTools,
} from "react-icons/fa";

const values = [
  {
    icon: FaTools,
    title: "Surtido Completo",
    description:
      "Más de 10,000 productos en 8 departamentos para cubrir cualquier proyecto, desde una reparación en casa hasta obra mayor.",
    color: "from-primary-500 to-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: FaHardHat,
    title: "Experiencia Comprobada",
    description:
      "Con más de 20 años en el mercado, conocemos cada tornillo, cada herramienta, cada solución para tu proyecto.",
    color: "from-accent-500 to-accent-600",
    bg: "bg-accent-50",
  },
  {
    icon: FaHandshake,
    title: "Atención Personalizada",
    description:
      "Nuestro equipo te asesora para encontrar exactamente lo que necesitas. No vendemos, ayudamos a construir.",
    color: "from-steel-600 to-steel-700",
    bg: "bg-steel-50",
  },
  {
    icon: FaTrophy,
    title: "Precios Competitivos",
    description:
      "Trabajamos directamente con las mejores marcas para ofrecerte los mejores precios de la región. Garantizado.",
    color: "from-primary-600 to-accent-500",
    bg: "bg-primary-50",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-transparent to-steel-50/50"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Sobre Nosotros"
          badgeEmoji="🏗️"
          title="La Ferretería de los que Saben"
          subtitle="Desde hace más de dos décadas, Don Fierro ha sido el aliado de constructores, plomeros, electricistas y familias que buscan calidad y buen precio"
        />

        {/* Story + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-50 rounded-3xl -rotate-2" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">👷</span>
                  <div>
                    <h3 className="text-2xl font-bold text-steel-800">
                      Don Fierro
                    </h3>
                    <p className="text-primary-500 font-semibold text-sm">
                      Ferretería & Materiales desde 2004
                    </p>
                  </div>
                </div>

                <p className="text-steel-600 leading-relaxed mb-4">
                  Lo que empezó como un pequeño local con un puñado de
                  herramientas, hoy es la ferretería más completa de Saltillo.
                  <strong className="text-primary-600"> Don Fierro</strong> nació
                  de la pasión por ayudar a la gente a construir sus proyectos,
                  desde una repisa hasta una casa entera.
                </p>

                <p className="text-steel-600 leading-relaxed mb-6">
                  Nuestro compromiso es simple: que encuentres todo lo que
                  necesitas, al mejor precio, con la mejor asesoría. Ya seas
                  profesional o quieras arreglar algo en casa, aquí estamos
                  para ti. 💪
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-primary-50 rounded-xl">
                    <p className="text-2xl font-black text-primary-600">20+</p>
                    <p className="text-xs text-steel-500 font-medium">Años</p>
                  </div>
                  <div className="text-center p-3 bg-accent-50 rounded-xl">
                    <p className="text-2xl font-black text-accent-600">
                      10K+
                    </p>
                    <p className="text-xs text-steel-500 font-medium">
                      Productos
                    </p>
                  </div>
                  <div className="text-center p-3 bg-steel-50 rounded-xl">
                    <p className="text-2xl font-black text-steel-700">
                      5K+
                    </p>
                    <p className="text-xs text-steel-500 font-medium">
                      Clientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {values.map((value, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-steel-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon
                    className={`text-xl bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                    style={{ WebkitTextFillColor: "initial" }}
                  />
                </div>
                <h3 className="text-lg font-bold text-steel-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
