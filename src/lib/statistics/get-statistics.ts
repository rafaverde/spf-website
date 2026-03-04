import { fetchWp } from "@/lib/wp/wp.client";
import { mapWpStatisticToDomain } from "./statistics.wp.mapper";
import { StatisticDatum } from "./statistics.types";
import { WpStatistic } from "./statistics.wp.types";
import { AppLocale } from "@/i18n/routing";

export async function getStatistics(
  locale: AppLocale = "es",
): Promise<StatisticDatum[]> {
  const { data } = await fetchWp<WpStatistic[]>("statistics", {
    params: {
      per_page: 100,
    },
    locale,
    revalidate: 60,
  });

  return data.map(mapWpStatisticToDomain);
}
