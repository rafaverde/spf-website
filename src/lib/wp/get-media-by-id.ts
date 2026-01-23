import { fetchWp } from "@/lib/wp/wp.client";
import { WpMedia } from "./wp-media.types";

export async function getMediaByIds(
  ids: number[],
): Promise<Record<number, string>> {
  if (!ids.length) return {};

  const { data } = await fetchWp<WpMedia[]>("media", {
    params: {
      include: ids.join(","),
      per_page: ids.length,
    },
    revalidate: 60,
  });

  return data.reduce<Record<number, string>>((acc, media) => {
    acc[media.id] = media.source_url;
    return acc;
  }, {});
}
