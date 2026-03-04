import { AppLocale } from "@/i18n/routing";
import { NewsItem } from "../news/news.types";
import { getCategoryIdBySlug } from "./get-category-id-by-slug";
import { mapWPPostToNews } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

interface GetPostsParams {
  page: number;
  perPage: number;
  search?: string;
  category?: string;
  locale?: AppLocale;
}

export async function getPosts({
  page,
  perPage,
  search,
  category,
  locale = "es",
}: GetPostsParams) {
  const categoryId = category
    ? await getCategoryIdBySlug(category, locale)
    : undefined;

  const { data, headers } = await fetchWp<WpPost[]>("posts", {
    params: {
      page,
      per_page: perPage,
      search,
      categories: categoryId,
      _embed: "wp:featuredmedia,wp:term",
    },
    locale,
    revalidate: 60,
  });
  const posts: NewsItem[] = data.map(mapWPPostToNews);
  const total = Number(headers.get("X-WP-Total"));
  const totalPages = Number(headers.get("X-WP-TotalPages"));

  return {
    posts,
    total,
    totalPages,
  };
}
