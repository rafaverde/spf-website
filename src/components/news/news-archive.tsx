import { getAllNews } from "@/lib/news/get-all-news";
import { RiEmotionSadLine } from "@remixicon/react";
import NewsCard from "./news-card";
import Pagination from "./pagination";

interface NewsArchiveProps {
  page: number;
  pageSize: number;
  search?: string;
  category?: string;
}

export default async function NewsArchive({
  page,
  pageSize,
  search,
  category,
}: NewsArchiveProps) {
  const allNews = await getAllNews();

  const normalizedSearch = search?.toLowerCase().trim();

  const filteredNews = allNews.filter((item) => {
    const matchesSearch = normalizedSearch
      ? item.title.toLowerCase().includes(normalizedSearch) ||
        item.excerpt.toLowerCase().includes(normalizedSearch)
      : true;

    const matchesCategory = category ? item.category.slug === category : true;

    return matchesSearch && matchesCategory;
  });

  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (page - 1) * pageSize;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-12">
      {/* Grid */}
      {paginatedNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {paginatedNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-1 py-10 text-center">
          <RiEmotionSadLine className="text-spf-green-500 size-10" />
          <p className="text-muted-foreground text-sm">
            No se encontraron noticias con los filtros seleccionados. <br />
            <strong>Inténtalo de nuevo con los otros filtros.</strong>
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </div>
  );
}
