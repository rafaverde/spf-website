import { NewsItem } from "../news/news.types";
import { WpPost } from "./wp.types";

export function mapWPPostToNews(post: WpPost): NewsItem {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    publishedAt: post.date,
    image,
    category: {
      id: post.categories[0],
      name: "",
    },
  };
}
