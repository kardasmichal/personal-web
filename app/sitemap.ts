import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kardas.cz",
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://kardas.cz/michal-kardas-dark.png"],
    },
  ];
}
