import { Publication } from "../publications/publication.types";
import { mapWpPublication } from "./mappers";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

interface GetPublicationsParams {
  page?: number;
  perPage?: number;
}

export async function getPublications({
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

  console.log(data);

  return data.map(mapWpPublication);
}
