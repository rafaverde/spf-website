import { WpPost } from "./wp.types";
import { mapWPPostToNews } from "./mappers";
import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "./wp.client";

const WP_BASE_URL = process.env.WORDPRESS_API_URL;

export async function getPostBySlugForMetadata(
  slug: string,
  locale: AppLocale = "es",
) {
  const { data } = await fetchWp<WpPost[]>("posts", {
    params: {
      slug,
      _embed: "wp:featuredmedia,wp:term",
    },
    locale,
    revalidate: 60,
  });

  if (!data.length) return null;

  return mapWPPostToNews(data[0]);
}
