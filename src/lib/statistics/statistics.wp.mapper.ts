import { StatisticDatum } from "./statistics.types";
import { WpStatistic } from "./statistics.wp.types";

export function mapWpStatisticToDomain(item: WpStatistic): StatisticDatum {
  return {
    statsKey: item.acf.key,
    value: Number(item.acf.value),
    title: item.title.rendered,
    prefix: item.acf.prefix || undefined,
    suffix: item.acf.suffix || undefined,
    decimals:
      typeof item.acf.decimals === "number" ? item.acf.decimals : undefined,
  };
}
