import { siteUrl } from "@/lib/seo/seo.config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}sitemap.xml`,
    host: siteUrl,
  };
}
