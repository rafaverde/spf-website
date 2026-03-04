import { Metadata } from "next";
import { NewsItem } from "./news/news.types";
import { siteUrl } from "./seo/seo.config";
import { AppLocale } from "@/i18n/routing";

export function generateNewsMetadata(
  news: NewsItem | null,
  locale: AppLocale,
): Metadata {
  if (!news) {
    return {
      title: locale === "en" ? "News not found" : "Noticia no encontrada",
      description:
        locale === "en"
          ? "This news item was removed or does not exists."
          : "Esta noticia ha sido eliminada o no existe.",
    };
  }

  return {
    title: news?.title,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `${siteUrl}/${locale}/actualidad/${news.slug}`,
      images: [{ url: news.image || "/news/news-placeholder.webp" }],
      locale: locale === "en" ? "en_US" : "es_UY",
      type: "article",
    },
    alternates: {
      canonical: `/${locale}/actualidad/${news.slug}`,
      languages: {
        es: `/es/actualidad/${news.slug}`,
        en: `/en/actualidad/${news.slug}`,
      },
    },
  };
}
