import { getAllNews } from "@/lib/news/get-all-news";
import { RiEmotionSadLine } from "@remixicon/react";
import NewsCard from "./news-card";
import Pagination from "./pagination";
import { AppLocale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface NewsArchiveProps {
  page: number;
  pageSize: number;
  search?: string;
  category?: string;
  locale?: AppLocale;
}

export default async function NewsArchive({
  page,
  pageSize,
  search,
  category,
  locale = "es",
}: NewsArchiveProps) {
  const { news, totalPages } = await getAllNews({
    page,
    perPage: pageSize,
    search,
    category: category,
    locale,
  });

  const tNews = await getTranslations("news");

  return (
    <div className="space-y-12">
      {/* Grid */}
      {news.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-1 py-10 text-center">
          <RiEmotionSadLine className="text-spf-green-500 size-10" />
          <div
            dangerouslySetInnerHTML={{ __html: tNews.raw("warnings.noNews") }}
          ></div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </div>
  );
}
