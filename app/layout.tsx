import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kardas.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Michal Kardaš",
  title: {
    default: "Michal Kardaš | E-commerce · B2B · AI · Digital Growth",
    template: "%s | Michal Kardaš",
  },
  description:
    "Pomáhám firmám růst v digitálu. Najdu, kde business ztrácí růst nebo efektivitu, určím správnou prioritu a projekt dotáhnu od zadání až k výsledku.",
  keywords: [
    "Michal Kardaš",
    "e-commerce",
    "ecommerce",
    "B2B digitalizace",
    "AI ve firmě",
    "AI use cases",
    "digital business",
    "digital growth",
    "business case",
    "ROI",
    "product strategy",
    "roadmapa",
    "prioritizace",
    "business owner",
    "project owner",
    "Product Lead",
    "Digital Lead",
    "Brno",
    "Jižní Morava",
  ],
  authors: [{ name: "Michal Kardaš", url: siteUrl }],
  creator: "Michal Kardaš",
  publisher: "Michal Kardaš",
  category: "Digital Business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Michal Kardaš | E-commerce · B2B · AI · Digital Growth",
    description: "Pomáhám firmám růst v digitálu — e-commerce, B2B, AI a lepší rozhodování.",
    siteName: "Michal Kardaš",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michal Kardaš | E-commerce · B2B · AI · Digital Growth",
    description: "Pomáhám firmám růst v digitálu — e-commerce, B2B, AI a lepší rozhodování.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-5TQC7R6B" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
