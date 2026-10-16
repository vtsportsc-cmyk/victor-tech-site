import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { person } from "./content";

// Equivalentes livres mais próximos das fontes da referência (Hotmart):
// Newsreader ≈ "Hotmart Display" (serif transicional elegante)
// Inter ≈ "Hotmart Sans" (grotesca neutra) — usada no corpo e nos labels.
const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Domínio canônico do site. No Vercel (victortech1.vercel.app) o site é servido na
// raiz, então não há basePath. Ajuste via NEXT_PUBLIC_SITE_URL se mudar de domínio.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://victortech1.vercel.app";
const TITLE = "Victor.Tech — Landing Pages que Convertem & Sites de Alta Performance";
const DESCRIPTION =
  "Landing pages e sites de alta performance que transformam visitantes em clientes. Copywriting estratégico, design premium, código nativo (até 10x mais rápido) e automações de IA sob medida.";
const OG_IMAGE = "/img/og-image.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Victor.Tech",
  authors: [{ name: "Victor.Tech" }],
  creator: "Victor.Tech",
  keywords: [
    "landing page de alta conversão",
    "criação de sites",
    "sites de alta performance",
    "automação com IA",
    "WhatsApp chatbot",
    "tráfego pago",
    "código nativo",
    "Victor.Tech",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/img/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Victor.Tech",
    title: "Victor.Tech — Ativos digitais que vendem 24h por dia",
    description:
      "Landing pages de alta conversão, sites premium em código nativo e automações de IA sob medida. +320% em conversões, 150+ projetos entregues.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Victor.Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Landing pages de alta conversão, sites premium em código nativo e automações de IA sob medida.",
    images: [OG_IMAGE],
  },
};

// Dados estruturados (schema.org) — mesma base do site anterior, com endereço correto.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Victor.Tech",
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/logo.webp`,
  image: `${SITE_URL}${OG_IMAGE}`,
  telephone: "+5521987215550",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "Seropédica",
    addressRegion: "RJ",
  },
  geo: { "@type": "GeoCoordinates", latitude: -22.7451945, longitude: -43.7144414 },
  sameAs: [person.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
