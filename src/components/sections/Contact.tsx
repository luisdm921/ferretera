"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";

const contactMethods = [
  {
    icon: FaPhoneAlt,
    title: "Teléfono",
    detail: "844 584 1876",
    subtitle: "Lun-Vie 8am-7pm, Sáb 8am-2pm",
    href: "tel:+528445841876",
    color: "from-primary-500 to-primary-600",
    bg: "from-primary-50 to-primary-100",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    detail: "844 584 1876",
    subtitle: "Respuesta inmediata",
    href: "https://wa.me/528445841876?text=¡Hola!%20Me%20gustaría%20información%20sobre%20sus%20productos%20🔧",
    color: "from-green-500 to-green-600",
    bg: "from-green-50 to-emerald-50",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    detail: "ventas@donfierro.mx",
    subtitle: "Respondemos en 24h",
    href: "mailto:ventas@donfierro.mx",
    color: "from-steel-600 to-steel-700",
    bg: "from-steel-50 to-gray-100",
  },
  {
    icon: FaTruck,
    title: "Envío a Domicilio",
    detail: "Saltillo y zona metro",
    subtitle: "Pregunta por costos",
    href: "https://wa.me/528445841876?text=¡Hola!%20Me%20gustaría%20información%20sobre%20envío%20a%20domicilio%20📦",
    color: "from-accent-500 to-accent-600",
    bg: "from-accent-50 to-orange-50",
  },
];

export default function Contact() {
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
    <section id="contacto" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Contacto"
          badgeEmoji="📞"
          title="¿Listo para Construir?"
          subtitle="Contáctanos por el medio que prefieras. Estamos para ayudarte con tu proyecto"
        />

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`bg-gradient-to-br ${method.bg} rounded-2xl p-6 border border-steel-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <method.icon className="text-white text-lg" />
              </div>
              <h3 className="font-bold text-steel-800 mb-1">{method.title}</h3>
              <p className="text-primary-600 font-semibold text-sm">
                {method.detail}
              </p>
              <p className="text-xs text-steel-400 mt-1">{method.subtitle}</p>
            </a>
          ))}
        </div>

        {/* Map + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div
            className={`bg-steel-100 rounded-2xl overflow-hidden h-80 relative group transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-steel-200 to-steel-300 flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-5xl text-primary-500 mb-3 mx-auto group-hover:animate-pulse" />
                <p className="text-steel-600 font-bold text-lg">
                  Blvd. Fundadores 500
                </p>
                <p className="text-steel-500 text-sm">
                  Col. Centro, Saltillo, Coah.
                </p>
                <a
                  href="https://maps.google.com/?q=Saltillo+Coahuila+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white text-primary-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-500 hover:text-white transition-all shadow-md"
                >
                  Ver en Google Maps
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-steel-800 to-steel-900 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <FaClock className="text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Horarios de Atención</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Lunes a Viernes</span>
                  <span className="font-bold text-primary-400">
                    8:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Sábado</span>
                  <span className="font-bold text-primary-400">
                    8:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Domingo</span>
                  <span className="font-bold text-rust-400">Cerrado</span>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-sm text-gray-300 mb-3">
                  ¿Tienes urgencia fuera de horario?
                </p>
                <a
                  href="https://wa.me/528445841876?text=¡Hola!%20Tengo%20una%20urgencia%20y%20necesito%20material%20🔧"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div
          className={`mt-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-5xl block mb-4">🔧</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            ¿Primera compra? ¡Llévate un{" "}
            <span className="underline decoration-wavy decoration-white/50">
              10% de descuento
            </span>
            !
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Menciona esta página al hacer tu pedido por WhatsApp y obtén tu
            descuento en tu primer compra
          </p>
          <a
            href="https://wa.me/528445841876?text=¡Hola!%20Vi%20su%20página%20web%20y%20quiero%20mi%2010%%20de%20descuento%20en%20mi%20primera%20compra%20🎉"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary-600 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-steel-50 transition-all duration-300 shadow-xl"
          >
            <FaWhatsapp className="text-xl text-green-500" />
            ¡Quiero mi descuento!
          </a>
        </div>
      </div>
    </section>
  );
}
