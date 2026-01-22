import { StatisticDatum } from "./statistics.types";

export function splitStatisticKey(stat: StatisticDatum) {
  const { statsKey, ...props } = stat;

  return {
    reactKey: statsKey,
    props,
  };
}
