import { getPostBySlug } from "../wp/get-post-by-slug";
import { NewsItem } from "./news.types";

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  return getPostBySlug(slug);
}
