import { getMediaByIds } from "./get-media-by-id";
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
  const { data: posts, headers } = await fetchWp<WpPost[]>("publicacion", {
    params: {
      page,
      per_page: perPage,
    },
    revalidate: 60,
  });

  const pdfIds = posts
    .map((p) => p.acf?.pdf_file)
    .filter((id): id is number => typeof id === "number");

  const pdfUrlsById = pdfIds.length > 0 ? await getMediaByIds(pdfIds) : {};

  const publications = posts.map((post) =>
    mapWpPublication(
      post,
      post.acf?.pdf_file ? pdfUrlsById[post.acf.pdf_file] : undefined,
    ),
  );

  const totalPages = Number(headers.get("X-WP-TotalPages"));

  return {
    publications,
    totalPages,
  };
}
