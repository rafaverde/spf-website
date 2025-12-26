import { getCategories } from "../wp/get-categories";

export interface NewsCategory {
  slug: string;
  name: string;
}

export async function getNewsCategories(): Promise<NewsCategory[]> {
  const categories = await getCategories();

  return categories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
  }));
}
