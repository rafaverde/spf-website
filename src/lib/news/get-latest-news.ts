import "server-only";
import { NewsItem } from "./news.types";
import { newsMock } from "./news.mock";
import { getPosts } from "../wp/get-posts";

interface GetLatestNewsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export async function getLatestNews(
  params: GetLatestNewsParams = {},
): Promise<{ news: NewsItem[]; totalPages: number }> {
  const { page = 1, limit = 9, search } = params;

  const { posts, totalPages } = await getPosts({
    page,
    perPage: limit,
    search,
  });

  return {
    news: posts,
    totalPages,
  };
}
