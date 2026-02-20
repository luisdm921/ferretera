import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import FloatingCart from "@/components/cart/FloatingCart";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Don Fierro - Ferretería y Materiales | Todo para Construir 🔧",
  description:
    "Ferretería con el más amplio surtido en herramientas, materiales de construcción, plomería, electricidad, pinturas y más. Cotiza por WhatsApp. Envíos a domicilio.",
  keywords:
    "ferretería, herramientas, materiales, construcción, plomería, electricidad, pinturas, tornillería, Don Fierro, cotización WhatsApp",
  authors: [{ name: "Don Fierro Ferretería" }],
  creator: "Don Fierro",
  publisher: "Don Fierro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.donfierro.mx",
    siteName: "Don Fierro - Ferretería y Materiales",
    title: "Don Fierro - Ferretería y Materiales | Todo para Construir 🔧",
    description:
      "El surtido más completo en herramientas y materiales. Arma tu lista de productos y cotiza por WhatsApp al instante.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Don Fierro - Ferretería y Materiales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Fierro - Ferretería y Materiales | Todo para Construir 🔧",
    description:
      "Ferretería completa. Herramientas, materiales, plomería, electricidad y más. Cotiza por WhatsApp.",
    images: ["/images/og-image.jpg"],
    creator: "@donfierro",
  },
  alternates: {
    canonical: "https://www.donfierro.mx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "@id": "https://www.donfierro.mx",
    name: "Don Fierro - Ferretería y Materiales",
    description:
      "Ferretería con amplio surtido en herramientas, materiales de construcción, plomería, electricidad, pinturas y más.",
    url: "https://www.donfierro.mx",
    telephone: "+52-844-584-1876",
    email: "ventas@donfierro.mx",
    image: "https://www.donfierro.mx/images/logo.jpg",
    priceRange: "$-$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blvd. Fundadores 500, Col. Centro",
      addressLocality: "Saltillo",
      addressRegion: "Coahuila",
      postalCode: "25000",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.4232,
      longitude: -100.9924,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/DonFierroMx",
      "https://www.instagram.com/donfierromx",
      "https://www.tiktok.com/@donfierromx",
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCart />
        </Providers>
      </body>
    </html>
  );
}
