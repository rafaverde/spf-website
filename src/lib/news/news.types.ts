export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  slug: string;
  image: string;
  category: NewsCategory;
}
