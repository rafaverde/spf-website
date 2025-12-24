import "server-only";

import { NewsItem } from "./news.types";
import { getPosts } from "../wp/get-posts";

interface GetAllNewsParams {
  page: number;
  perPage: number;
  search?: string;
  category?: string;
}

export async function getAllNews({
  page,
  perPage,
  search,
  category,
}: GetAllNewsParams): Promise<{ news: NewsItem[]; totalPages: number }> {
  const { posts, totalPages } = await getPosts({
    page,
    perPage,
    search,
    category,
  });

  return {
    news: posts,
    totalPages,
  };
}
