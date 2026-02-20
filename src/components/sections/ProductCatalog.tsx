"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useCart, Product } from "@/context/CartContext";
import { SectionHeader } from "@/components/ui";
import { FaCheck, FaPlus, FaShoppingCart } from "react-icons/fa";

const categories = [
  { id: "all", name: "Todos", emoji: "🏪" },
  { id: "herramientas", name: "Herramientas", emoji: "🔨" },
  { id: "plomeria", name: "Plomería", emoji: "🔧" },
  { id: "electricidad", name: "Electricidad", emoji: "💡" },
  { id: "pinturas", name: "Pinturas", emoji: "🎨" },
  { id: "tornilleria", name: "Tornillería", emoji: "🔩" },
  { id: "jardin", name: "Jardín", emoji: "🌿" },
  { id: "seguridad", name: "Seguridad", emoji: "🔒" },
  { id: "construccion", name: "Construcción", emoji: "🧱" },
];

const products: Product[] = [
  // Herramientas
  {
    id: "h1",
    name: "Martillo de Bola 16oz",
    category: "herramientas",
    price: "Desde $89",
    emoji: "🔨",
    description: "Mango de fibra de vidrio, cabeza forjada",
  },
  {
    id: "h2",
    name: "Juego de Desarmadores 12pz",
    category: "herramientas",
    price: "Desde $149",
    emoji: "🪛",
    description: "Phillips y plano, punta magnética",
  },
  {
    id: "h3",
    name: "Llave Stilson 14\"",
    category: "herramientas",
    price: "Desde $189",
    emoji: "🔧",
    description: "Acero forjado, alta resistencia",
  },
  {
    id: "h4",
    name: "Taladro Inalámbrico 20V",
    category: "herramientas",
    price: "Desde $899",
    emoji: "🔩",
    description: "Con 2 baterías y cargador incluido",
  },
  {
    id: "h5",
    name: "Sierra Circular 7¼\"",
    category: "herramientas",
    price: "Desde $1,299",
    emoji: "⚙️",
    description: "1400W, disco incluido, guía láser",
  },
  {
    id: "h6",
    name: "Juego Llaves Allen 9pz",
    category: "herramientas",
    price: "Desde $79",
    emoji: "🔑",
    description: "1.5mm-10mm, métricas, cromo vanadio",
  },

  // Plomería
  {
    id: "p1",
    name: "Tubo PVC 2\" x 6m",
    category: "plomeria",
    price: "Desde $45",
    emoji: "🔧",
    description: "Sanitario, uso residencial",
  },
  {
    id: "p2",
    name: "Llave de Paso ½\"",
    category: "plomeria",
    price: "Desde $69",
    emoji: "🚿",
    description: "Bronce, cierre de esfera",
  },
  {
    id: "p3",
    name: "Cinta Teflón (12m)",
    category: "plomeria",
    price: "Desde $15",
    emoji: "🧻",
    description: "Sellado perfecto en roscas",
  },
  {
    id: "p4",
    name: "Válvula Check ¾\"",
    category: "plomeria",
    price: "Desde $129",
    emoji: "💧",
    description: "Latón, evita retorno de agua",
  },
  {
    id: "p5",
    name: "Flexibles para Lavabo",
    category: "plomeria",
    price: "Desde $49",
    emoji: "🚰",
    description: "Par, acero inoxidable 40cm",
  },

  // Electricidad
  {
    id: "e1",
    name: "Cable THW Cal. 12",
    category: "electricidad",
    price: "Desde $8/m",
    emoji: "⚡",
    description: "Cobre 100%, varios colores",
  },
  {
    id: "e2",
    name: "Contacto Doble con Tierra",
    category: "electricidad",
    price: "Desde $35",
    emoji: "🔌",
    description: "Color marfil, empotrable",
  },
  {
    id: "e3",
    name: "Foco LED 9W",
    category: "electricidad",
    price: "Desde $29",
    emoji: "💡",
    description: "Luz cálida/fría, ahorro 80%",
  },
  {
    id: "e4",
    name: "Centro de Carga 2 Polos",
    category: "electricidad",
    price: "Desde $299",
    emoji: "🔋",
    description: "Con interruptor principal 50A",
  },
  {
    id: "e5",
    name: "Canaleta para Cable 2m",
    category: "electricidad",
    price: "Desde $25",
    emoji: "📐",
    description: "Con adhesivo, color blanco",
  },

  // Pinturas
  {
    id: "pi1",
    name: "Pintura Vinílica 4L",
    category: "pinturas",
    price: "Desde $289",
    emoji: "🎨",
    description: "Interior/exterior, lavable, 50+ colores",
  },
  {
    id: "pi2",
    name: "Esmalte Secado Rápido 1L",
    category: "pinturas",
    price: "Desde $159",
    emoji: "🖌️",
    description: "Alto brillo, para metal y madera",
  },
  {
    id: "pi3",
    name: "Rodillo 9\" + Charola",
    category: "pinturas",
    price: "Desde $89",
    emoji: "🖼️",
    description: "Pelo corto, acabado liso perfecto",
  },
  {
    id: "pi4",
    name: "Brocha Profesional 4\"",
    category: "pinturas",
    price: "Desde $49",
    emoji: "✨",
    description: "Cerda natural, corte angular",
  },
  {
    id: "pi5",
    name: "Impermeabilizante 4L",
    category: "pinturas",
    price: "Desde $349",
    emoji: "☔",
    description: "5 años garantía, color terracota",
  },

  // Tornillería
  {
    id: "t1",
    name: "Tornillo Tablaroca #6",
    category: "tornilleria",
    price: "Desde $35/100",
    emoji: "🔩",
    description: "1¼\", punta fina, fosfatizado",
  },
  {
    id: "t2",
    name: "Taquete Plástico #10",
    category: "tornilleria",
    price: "Desde $25/50",
    emoji: "📌",
    description: "Para concreto y tabique",
  },
  {
    id: "t3",
    name: "Clavo 2½\" (1kg)",
    category: "tornilleria",
    price: "Desde $29/kg",
    emoji: "📍",
    description: "Cabeza plana, acero estándar",
  },
  {
    id: "t4",
    name: "Pija Autoperforante #8",
    category: "tornilleria",
    price: "Desde $45/100",
    emoji: "⚙️",
    description: "Punta broca,para lámina y perfil",
  },
  {
    id: "t5",
    name: "Ancla Mariposa p/Tablaroca",
    category: "tornilleria",
    price: "Desde $39/10",
    emoji: "🔗",
    description: "Alta resistencia, fácil instalación",
  },

  // Jardín
  {
    id: "j1",
    name: "Manguera Reforzada 15m",
    category: "jardin",
    price: "Desde $189",
    emoji: "🌿",
    description: "3 capas, anti-dobleces, con pistola",
  },
  {
    id: "j2",
    name: "Podadora Manual Bypass",
    category: "jardin",
    price: "Desde $149",
    emoji: "✂️",
    description: "Corte limpio, mango ergonómico",
  },
  {
    id: "j3",
    name: "Pala Cuadrada",
    category: "jardin",
    price: "Desde $129",
    emoji: "⛏️",
    description: "Mango largo madera, acero templado",
  },
  {
    id: "j4",
    name: "Fertilizante Triple 17 (2kg)",
    category: "jardin",
    price: "Desde $89",
    emoji: "🌱",
    description: "Uso general, granulado",
  },

  // Seguridad
  {
    id: "s1",
    name: "Candado Acero 50mm",
    category: "seguridad",
    price: "Desde $119",
    emoji: "🔒",
    description: "Anti-ganzúa, incluye 3 llaves",
  },
  {
    id: "s2",
    name: "Cerradura Doble Cerrojo",
    category: "seguridad",
    price: "Desde $349",
    emoji: "🚪",
    description: "5 llaves, acabado satinado",
  },
  {
    id: "s3",
    name: "Cámara WiFi 1080p",
    category: "seguridad",
    price: "Desde $499",
    emoji: "📹",
    description: "Visión nocturna, app en celular",
  },
  {
    id: "s4",
    name: "Sensor de Movimiento",
    category: "seguridad",
    price: "Desde $189",
    emoji: "🔔",
    description: "Con alarma sonora 110dB",
  },

  // Construcción
  {
    id: "c1",
    name: "Cemento Gris 50kg",
    category: "construccion",
    price: "Desde $189",
    emoji: "🧱",
    description: "CPC 30R, uso general",
  },
  {
    id: "c2",
    name: "Varilla ⅜\" Corrugada 12m",
    category: "construccion",
    price: "Desde $69",
    emoji: "📏",
    description: "Acero grado 42, certificada",
  },
  {
    id: "c3",
    name: "Block Ligero 15x20x40",
    category: "construccion",
    price: "Desde $12/pza",
    emoji: "🏗️",
    description: "Resistente, fácil manejo",
  },
  {
    id: "c4",
    name: "Alambre Recocido Cal. 18",
    category: "construccion",
    price: "Desde $39/kg",
    emoji: "🔗",
    description: "Para amarres de varilla",
  },
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { addItem, totalItems } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAddItem = useCallback(
    (product: Product) => {
      addItem(product);
      setAddedProducts((prev) => new Set([...prev, product.id]));
      setTimeout(() => {
        setAddedProducts((prev) => {
          const next = new Set(prev);
          next.delete(product.id);
          return next;
        });
      }, 1500);
    },
    [addItem]
  );

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-steel-50/50 to-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Catálogo"
          badgeEmoji="📦"
          title="Nuestros Productos"
          subtitle="Explora nuestro catálogo, selecciona lo que necesites y solicita tu cotización por WhatsApp. ¡Así de fácil!"
        />

        {/* How it works banner */}
        <div
          className={`mb-10 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl p-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-steel-600">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>Elige tus productos</span>
            </div>
            <span className="hidden sm:block text-primary-300">→</span>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>Revisa tu lista</span>
            </div>
            <span className="hidden sm:block text-primary-300">→</span>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>Cotiza por WhatsApp 📱</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap font-semibold text-sm transition-all duration-300 flex-shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 scale-105"
                  : "bg-white text-steel-600 hover:bg-steel-50 border border-steel-200 hover:border-primary-300"
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              {cat.name}
              {selectedCategory === cat.id && cat.id !== "all" && (
                <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                  {products.filter((p) => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) => {
            const isAdded = addedProducts.has(product.id);
            return (
              <div
                key={product.id}
                className={`bg-white rounded-2xl border border-steel-100 p-5 hover:shadow-xl hover:shadow-steel-900/5 hover:border-primary-200 transition-all duration-300 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${Math.min(i * 50, 400)}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </span>
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>
                <h3 className="font-bold text-steel-800 mb-1 text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-steel-500 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => handleAddItem(product)}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    isAdded
                      ? "bg-green-500 text-white scale-[1.02]"
                      : "bg-steel-50 text-steel-700 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white border border-steel-200 hover:border-transparent"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <FaCheck className="text-xs" /> ¡Agregado!
                    </>
                  ) : (
                    <>
                      <FaPlus className="text-xs" /> Agregar a lista
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Cart Summary Banner */}
        {totalItems > 0 && (
          <div className="mt-10 bg-gradient-to-r from-steel-800 to-steel-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-up border border-steel-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <FaShoppingCart className="text-xl text-primary-400" />
              </div>
              <div>
                <p className="font-bold text-lg">
                  Tienes{" "}
                  <span className="text-primary-400">{totalItems}</span>{" "}
                  producto{totalItems !== 1 ? "s" : ""} en tu lista
                </p>
                <p className="text-white/60 text-sm">
                  Haz clic en el botón del carrito para revisar y cotizar 👉
                </p>
              </div>
            </div>
            <div className="caution-stripe h-1 w-32 sm:h-12 sm:w-1 rounded-full opacity-30" />
          </div>
        )}
      </div>
    </section>
  );
}
