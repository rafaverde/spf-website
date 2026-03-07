import { mapAuthorities } from "./authorities.mapper";
import { fetchWp } from "@/lib/wp/wp.client";
import { mapWpAuthorityToRaw, WpAuthority } from "./authority.wp.mapper";
import { AppLocale } from "@/i18n/routing";

export async function getAuthorities(locale: AppLocale = "es") {
  const { data } = await fetchWp<WpAuthority[]>("authority", {
    params: {
      per_page: 100,
      _embed: "wp:featuredmedia",
    },
    locale,
    revalidate: 60,
  });

  const rawItems = data.map(mapWpAuthorityToRaw);

  return mapAuthorities(rawItems);
}
