import { mapWPPostToNews } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

export async function getPostBySlug(slug: string) {
  const { data } = await fetchWp<WpPost[]>("posts", {
    params: {
      slug,
    },
    revalidate: 60,
  });

  if (!data.length) return null;

  return mapWPPostToNews(data[0]);
}
