import { AppLocale } from "@/i18n/routing";
import { getPostBySlug } from "../wp/get-post-by-slug";
import { NewsItem } from "./news.types";

export async function getNewsBySlug(
  slug: string,
  locale: AppLocale = "es",
): Promise<NewsItem | null> {
  return getPostBySlug(slug, locale);
}
