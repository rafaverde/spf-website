import { AppLocale } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo/seo.config";
import { fetchWp } from "@/lib/wp/wp.client";
import { WpPost } from "@/lib/wp/wp.types";
import { MetadataRoute } from "next";

const LOCALES: AppLocale[] = ["es", "en"];

const STATIC_PATHS = [
  "",
  "/actualidad",
  "/publicaciones",
  "/contacto",
  "/el-sector-forestal",
  "/sobre-spf",
  "/sobre-spf/areas-de-actuacion",
  "/sobre-spf/autoridades-y-equipo",
];

function withLocale(locale: AppLocale, path: string) {
  return `${siteUrl}${locale}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    STATIC_PATHS.map((path) => ({
      url: withLocale(locale, path),
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          es: withLocale("es", path),
          en: withLocale("en", path),
        },
      },
    })),
  );

  // Dinâmicas: notícias em ambos idiomas
  const dynamicEntries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    const { data: posts } = await fetchWp<WpPost[]>("posts", {
      params: {
        per_page: 100,
        _fields: "slug,date,modified,translations",
      },
      locale,
      revalidate: 3600,
    });

    for (const post of posts) {
      const path = `/actualidad/${post.slug}`;

      dynamicEntries.push({
        url: withLocale(locale, path),
        lastModified: post.modified ? new Date(post.modified) : now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return [...staticEntries, ...dynamicEntries];
}
