import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

interface GetPostsParams {
  page: number;
  perPage: number;
  search?: string;
  category?: number;
}

export async function GetPostsParams({
  page,
  perPage,
  search,
  category,
}: GetPostsParams) {
  const { data, headers } = await fetchWp<WpPost[]>("posts", {
    params: {
      page,
      per_page: perPage,
      search,
      categories: category,
    },
    revalidate: 60,
  });

  const total = Number(headers.get("X-WP-Total"));
  const totalPages = Number(headers.get("X-WP-TotalPages"));

  return {
    posts: data,
    total,
    totalPages,
  };
}
