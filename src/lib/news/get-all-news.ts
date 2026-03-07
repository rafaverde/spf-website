import "server-only";

import { NewsItem } from "./news.types";
import { getPosts } from "../wp/get-posts";
import { AppLocale } from "@/i18n/routing";

interface GetAllNewsParams {
  page: number;
  perPage: number;
  search?: string;
  category?: string;
  locale?: AppLocale;
}

export async function getAllNews({
  page,
  perPage,
  search,
  category,
  locale = "es",
}: GetAllNewsParams): Promise<{ news: NewsItem[]; totalPages: number }> {
  const { posts, totalPages } = await getPosts({
    page,
    perPage,
    search,
    category,
    locale,
  });

  return {
    news: posts,
    totalPages,
  };
}
