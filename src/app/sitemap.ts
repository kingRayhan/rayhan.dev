import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rayhan.dev",
      lastModified: new Date(),
    },
  ];
}
