import "server-only";
import { NewsItem } from "./news.types";
import { getPosts } from "../wp/get-posts";
import { AppLocale } from "@/i18n/routing";

export async function getLatestNews(
  limit: number = 6,
  locale: AppLocale = "es",
): Promise<NewsItem[]> {
  const { posts } = await getPosts({
    page: 1,
    perPage: limit,
    locale,
  });

  return posts;
}
