import "server-only";
import { NewsItem } from "./news.types";
import { newsMock } from "./news.mock";

interface GetLatestNewsParams {
  limit?: number;
}

export async function getLatestNews(
  params: GetLatestNewsParams = {},
): Promise<NewsItem[]> {
  const { limit = 4 } = params;

  await new Promise((resolve) => setTimeout(resolve, 10000));

  const sorted = [...newsMock].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return sorted.slice(0, limit);
}
