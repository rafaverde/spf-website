import { fetchWp } from "@/lib/wp/wp.client";
import { mapWpStatisticToDomain } from "./statistics.wp.mapper";
import { StatisticDatum } from "./statistics.types";
import { WpStatistic } from "./statistics.wp.types";

export async function getStatistics(): Promise<StatisticDatum[]> {
  const { data } = await fetchWp<WpStatistic[]>("statistics", {
    params: {
      per_page: 100,
    },
    revalidate: 60,
  });

  return data.map(mapWpStatisticToDomain);
}
