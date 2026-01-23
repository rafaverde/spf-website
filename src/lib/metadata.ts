import { Metadata } from "next";
import { NewsItem } from "./news/news.types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function generateNewsMetadata(news: NewsItem | null): Metadata {
  if (!news) {
    return {
      title: "Noticia no encontrada",
      description: "Esta noticia ha sido eliminada o no existe.",
    };
  }

  return {
    title: news?.title,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `${siteUrl}/actualidad/${news.slug}`,
      images: [{ url: news.image || "/news/news-placeholder.webp" }],
    },
  };
}
