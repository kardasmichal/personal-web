import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kardas.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Michal Kardaš | Product, Delivery & Digital Business",
    template: "%s | Michal Kardaš",
  },
  description:
    "Seniorní product, delivery a digital business profil. Propojuji business, zákazníka, produkt a delivery. Otevřený nové roli v Brně, na jižní Moravě nebo remote v ČR.",
  keywords: [
    "Michal Kardaš",
    "Product Manager",
    "Product Lead",
    "Delivery Lead",
    "Strategic Account Lead",
    "Senior Project Manager",
    "E-commerce Manager",
    "Digital Lead",
    "digital business",
    "product strategy",
    "product discovery",
    "roadmapping",
    "AI Delivery",
    "AI adoption",
    "Brno",
    "Jižní Morava",
  ],
  authors: [{ name: "Michal Kardaš", url: siteUrl }],
  creator: "Michal Kardaš",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Michal Kardaš | Product, Delivery & Digital Business",
    description:
      "Propojuji business, produkt a delivery. Otevřený nové seniorní roli v Brně, na jižní Moravě nebo remote v ČR.",
    siteName: "Michal Kardaš",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michal Kardaš | Product, Delivery & Digital Business",
    description:
      "Seniorní product, delivery a digital business profil. Otevřený nové roli.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
