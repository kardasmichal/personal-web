import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kardas.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Michal Kardaš | E-commerce, B2B, AI & Digital Business",
    template: "%s | Michal Kardaš",
  },
  description:
    "Pomáhám firmám růst v digitálu. E-commerce, B2B, AI a lepší rozhodování — od diagnózy přes priority až po roadmapu a business case.",
  keywords: [
    "Michal Kardaš",
    "e-commerce",
    "B2B digitalizace",
    "AI adoption",
    "AI use cases",
    "digital business",
    "business case",
    "ROI",
    "product strategy",
    "roadmapa",
    "prioritizace",
    "Strategic Account Lead",
    "Product Lead",
    "Digital Lead",
    "Brno",
    "Jižní Morava",
  ],
  authors: [{ name: "Michal Kardaš", url: siteUrl }],
  creator: "Michal Kardaš",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Michal Kardaš | E-commerce, B2B, AI & Digital Business",
    description: "Pomáhám firmám růst v digitálu. E-commerce, B2B, AI a lepší rozhodování.",
    siteName: "Michal Kardaš",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michal Kardaš | E-commerce, B2B, AI & Digital Business",
    description: "Pomáhám firmám růst v digitálu. E-commerce, B2B, AI a lepší rozhodování.",
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
