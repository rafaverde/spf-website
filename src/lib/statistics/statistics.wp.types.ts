export interface WpStatistic {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    key: string;
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
}
