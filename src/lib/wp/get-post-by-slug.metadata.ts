import { WpPost } from "./wp.types";
import { mapWPPostToNews } from "./mappers";

const WP_BASE_URL = process.env.WORDPRESS_API_URL;

export async function getPostBySlugForMetadata(slug: string) {
  const url = new URL(`${WP_BASE_URL}/wp-json/wp/v2/posts`);
  url.searchParams.set("slug", slug);
  url.searchParams.set("_embed", "wp:featuredmedia,wp:term");

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) return null;

  const data: WpPost[] = await response.json();

  if (!data.length) return null;

  return mapWPPostToNews(data[0]);
}
