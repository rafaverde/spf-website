import { AppLocale } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.spf.com.uy";

export function getLocaleSeo(locale: AppLocale) {
  if (locale === "en") {
    return {
      titleDefault:
        "Driving opportunities across Uruguay | SPF - Forestry Producers Society",
      description:
        "We are the Forestry Producers Society of Uruguay (SPF), a civil association founded in 1959 that brings together key players in Uruguay's forestry value chain.",
      ogLocale: "en_US",
      keywords: [
        "uruguay forestry sector",
        "forestation in uruguay",
        "society of forestry producers",
        "forestry industry",
        "forest economy",
        "forestry project",
        "forest exports",
        "forest statistics",
        "forest news",
        "forest publications",
        "sustainable forest management",
        "forest health",
        "forest development",
        "environment and forestry",
      ],
    };
  }

  return {
    titleDefault:
      "Impulsamos oportunidades en todo Uruguay | SPF - Sociedad de Productores Forestales",
    description:
      "Somos la Sociedad de Productores Forestales del Uruguay (SPF), una asociación civil fundada en 1959 que reúne a los principales actores de la cadena forestal uruguaya.",
    ogLocale: "es_UY",
    keywords: [
      "sector forestal uruguay",
      "forestación en uruguay",
      "sociedad de productores forestales",
      "industria forestal",
      "economía forestal",
      "empleo forestal",
      "exportaciones forestales",
      "estadísticas forestales",
      "noticias forestales",
      "publicaciones forestales",
      "manejo forestal sostenible",
      "sanidad forestal",
      "desarrollo forestal",
      "medio ambiente y forestación",
    ],
  };
}
