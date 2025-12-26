export interface NewsCategory {
  id: number;
  name?: string;
  slug?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  slug: string;
  image?: string;
  category: NewsCategory | undefined;
}
