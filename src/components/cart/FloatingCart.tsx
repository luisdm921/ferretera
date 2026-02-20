"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaTimes,
  FaTrash,
  FaWhatsapp,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    generateWhatsAppURL,
  } = useCart();

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-5 z-40 bg-gradient-to-br from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white p-4 rounded-2xl shadow-2xl shadow-primary-500/30 transition-all duration-300 hover:scale-110 group"
          aria-label="Ver lista de productos"
        >
          <FaShoppingCart className="text-2xl group-hover:animate-cart-bounce" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-rust-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              {totalItems}
            </span>
          )}
          {totalItems > 0 && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-steel-800 text-primary-400 text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow">
              Ver lista
            </span>
          )}
        </button>
      )}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-steel-800 to-steel-900 text-white p-5 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center">
              <FaShoppingCart className="text-lg text-primary-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Tu Lista</h2>
              <p className="text-xs text-gray-400">
                {totalItems} producto{totalItems !== 1 ? "s" : ""} seleccionado
                {totalItems !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-7xl block mb-4">🔧</span>
              <p className="text-steel-500 text-lg font-semibold">
                Tu lista está vacía
              </p>
              <p className="text-steel-400 text-sm mt-2 max-w-[250px] mx-auto">
                Explora nuestro catálogo y agrega los productos que necesites
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 text-primary-500 font-semibold hover:text-primary-600 transition-colors text-sm"
              >
                ← Ir al catálogo
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-steel-50 rounded-2xl p-4 flex items-center gap-3 group hover:bg-primary-50 transition-colors duration-200"
              >
                <span className="text-3xl flex-shrink-0">
                  {item.product.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-steel-800 text-sm truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-steel-500">{item.product.price}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="w-7 h-7 rounded-lg bg-steel-200 hover:bg-steel-300 flex items-center justify-center transition-colors"
                  >
                    <FaMinus className="text-[10px] text-steel-600" />
                  </button>
                  <span className="font-bold text-sm w-7 text-center text-steel-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="w-7 h-7 rounded-lg bg-primary-100 hover:bg-primary-200 text-primary-700 flex items-center justify-center transition-colors"
                  >
                    <FaPlus className="text-[10px]" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-steel-300 hover:text-rust-500 transition-colors ml-1 p-1"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-steel-100 p-4 space-y-3 flex-shrink-0 bg-white">
            <div className="flex justify-between items-center">
              <button
                onClick={clearCart}
                className="text-xs text-steel-400 hover:text-rust-500 transition-colors flex items-center gap-1.5 font-medium"
              >
                <FaTrash className="text-[10px]" /> Vaciar lista
              </button>
              <span className="font-bold text-steel-700 text-sm">
                📦 {totalItems} producto{totalItems !== 1 ? "s" : ""}
              </span>
            </div>
            <a
              href={generateWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2.5 text-base"
            >
              <FaWhatsapp className="text-xl" />
              Cotizar por WhatsApp
            </a>
            <p className="text-[11px] text-steel-400 text-center">
              Se abrirá WhatsApp con tu lista de productos para cotizar
            </p>
          </div>
        )}
      </div>
    </>
  );
}
