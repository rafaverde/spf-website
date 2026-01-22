export interface StatisticDatum {
  statsKey: string;
  value: number;
  title: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}
