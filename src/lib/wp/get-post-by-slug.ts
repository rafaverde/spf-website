import { AppLocale } from "@/i18n/routing";
import { mapWPPostToNews } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

export async function getPostBySlug(slug: string, locale: AppLocale = "es") {
  const { data } = await fetchWp<WpPost[]>("posts", {
    params: {
      slug,
      _embed: "wp:featuredmedia,wp:term",
      locale,
    },
    revalidate: 60,
  });

  if (!data.length) return null;

  return mapWPPostToNews(data[0]);
}
