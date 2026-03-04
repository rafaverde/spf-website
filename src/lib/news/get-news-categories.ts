import { AppLocale } from "@/i18n/routing";
import { getCategories } from "../wp/get-categories";

export interface NewsCategory {
  slug: string;
  name: string;
}

export async function getNewsCategories(
  locale: AppLocale = "es",
): Promise<NewsCategory[]> {
  const categories = await getCategories(locale);

  return categories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
  }));
}
