import { NewsItem } from "../news/news.types";
import { WpPost } from "./wp.types";

export function mapWPPostToNews(post: WpPost): NewsItem {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const category = post._embedded?.["wp:term"]
    ?.reduce((acc, terms) => acc.concat(terms), [])
    .find((term) => term.taxonomy === "category");

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: generateExcerptFromHtml(post.excerpt.rendered, 75),
    content: post.content.rendered,
    publishedAt: post.date,
    image,
    category: category
      ? {
          id: category.id,
          name: category.name,
          slug: category.slug,
        }
      : undefined,
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
