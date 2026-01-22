export interface WpStatistic {
  id: number;
  acf: {
    key: string;
    value: number;
    title: string;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
}
