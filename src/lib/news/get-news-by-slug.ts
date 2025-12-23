import { newsMock } from "./news.mock";
import { NewsItem } from "./news.types";

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const news = newsMock.find((item) => item.slug === slug);
  return news ?? null;
}
