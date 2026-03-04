import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "./wp.client";

export interface WpCategory {
  id: number;
  name: string;
  slug: string;
}

export async function getCategories(
  locale: AppLocale = "es",
): Promise<WpCategory[]> {
  const { data } = await fetchWp<WpCategory[]>("categories", {
    params: {
      per_page: 100,
      hide_empty: 1,
    },
    locale,
    revalidate: 60 * 60 * 6, // 6 horas
  });

  return data;
}
