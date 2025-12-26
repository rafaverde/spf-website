export interface WpPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  categories: number[];

  acf?: {
    pdf_file?: number;
    pdf_file_source?: {
      formatted_value?: string;
    };
    document_date?: string;
    document_date_source?: {
      formatted_value?: string;
    };
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;

    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}
