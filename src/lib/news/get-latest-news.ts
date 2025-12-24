import "server-only";
import { NewsItem } from "./news.types";
import { getPosts } from "../wp/get-posts";

export async function getLatestNews(limit: number = 6): Promise<NewsItem[]> {
  const { posts } = await getPosts({
    page: 1,
    perPage: limit,
  });

  return posts;
}
