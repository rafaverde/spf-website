import { mapWpPublication } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

export async function getPublications({
  page = 1,
  perPage = 12,
}: {
  page?: number;
  perPage?: number;
}) {
  const { data, headers } = await fetchWp<WpPost[]>("publicacion", {
    params: {
      page,
      per_page: perPage,
    },
    revalidate: 60,
  });

  const totalPages = Number(headers.get("X-WP-TotalPages"));

  return {
    publications: data.map(mapWpPublication),
    totalPages,
  };
}
