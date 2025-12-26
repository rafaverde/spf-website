import { Publication } from "../publications/publication.types";
import { mapWpPublication } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

interface GetPublicationsParams {
  page?: number;
  perPage?: number;
}

export async function getPublicationsParams({
  page,
  perPage,
}: GetPublicationsParams = {}): Promise<Publication[]> {
  const { data } = await fetchWp<WpPost[]>("publicacion", {
    params: {
      page,
      per_page: perPage,
    },
    revalidate: 60,
  });

  return data.map(mapWpPublication);
}
