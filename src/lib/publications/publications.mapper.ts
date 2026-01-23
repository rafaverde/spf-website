// publications.mapper.ts
export interface Publication {
  id: number;
  title: string;
  slug: string;
  pdfUrl?: string;
  documentDate?: string;
}
