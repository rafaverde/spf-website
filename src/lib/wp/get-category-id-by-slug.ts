import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "./wp.client";

interface WpCategory {
  id: number;
  slug: string;
}

export async function getCategoryIdBySlug(
  slug: string,
  locale: AppLocale = "es",
): Promise<number | undefined> {
  const { data } = await fetchWp<WpCategory[]>("categories", {
    params: {
      slug,
      per_page: 1,
    },
    locale,
    revalidate: 60 * 60,
  });

  return data.length > 0 ? data[0].id : undefined;
}
