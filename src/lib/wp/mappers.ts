import { NewsItem } from "../news/news.types";
import { WpPost } from "./wp.types";

export function mapWPPostToNews(post: WpPost): NewsItem {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: generateExcerptFromHtml(post.excerpt.rendered, 75),
    content: post.content.rendered,
    publishedAt: post.date,
    image,
    category: {
      id: post.categories[0],
      name: "",
    },
  };
}

// Gerador de excerpt, caso não exista
export function generateExcerptFromHtml(
  html: string,
  maxLength: number = 160,
): string {
  const text = html
    .replace(/<[^>]+>/g, "") // remove HTML
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trim() + "…";
}
