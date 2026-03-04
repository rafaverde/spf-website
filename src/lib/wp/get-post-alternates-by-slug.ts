import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "./wp.client";
import { WpPost } from "./wp.types";

type AlternatePaths = Partial<Record<"es" | "en", string>>;

export async function getPostAlternatesBySlug(
  slug: string,
  locale: AppLocale,
): Promise<AlternatePaths> {
  const { data: current } = await fetchWp<WpPost[]>("posts", {
    params: { slug, per_page: 1, _fields: "id,slug,lang,translations" },
    locale,
  });

  if (!current.length || !current[0].translations) return {};

  const ids = Array.from(new Set(Object.values(current[0].translations)));
  if (!ids.length) return {};

  const { data: translated } = await fetchWp<WpPost[]>("posts", {
    params: {
      include: ids.join(","),
      per_page: ids.length,
      _fields: "id,slug,lang",
    },
  });

  const byLang = translated.reduce<AlternatePaths>((acc, post) => {
    if (post.lang === "es" || post.lang === "en") {
      acc[post.lang] = `/${post.lang}/actualidad/${post.slug}`;
    }
    return acc;
  }, {});

  return byLang;
}
