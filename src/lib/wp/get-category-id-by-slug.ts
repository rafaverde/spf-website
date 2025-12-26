import { fetchWp } from "./wp.client";

interface WpCategory {
  id: number;
  slug: string;
}

export async function getCategoryIdBySlug(
  slug: string,
): Promise<number | undefined> {
  const { data } = await fetchWp<WpCategory[]>("categories", {
    params: {
      slug,
      per_page: 1,
    },
    revalidate: 60 * 60,
  });

  return data.length > 0 ? data[0].id : undefined;
}
