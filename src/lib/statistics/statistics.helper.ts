import { StatisticDatum } from "./statistics.types";

export function mapStatisticsByKey(
  stats: StatisticDatum[],
): Record<string, StatisticDatum> {
  return stats.reduce<Record<string, StatisticDatum>>((acc, item) => {
    acc[item.key] = item;
    return acc;
  }, {});
}
