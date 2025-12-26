export const dynamic = "force-dynamic";

import NewsArchive from "@/components/news/news-archive";
import NewsArchiveSkeleton from "@/components/news/news-archive-skeleton";
import NewsFilters from "@/components/news/news-filter";
import { getCategories } from "@/lib/wp/get-categories";
import { Suspense } from "react";

interface NewsPageProps {
  searchParams?: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;

  const page = Number(params?.page ?? "1");
  const search = params?.search ?? "";
  const category = params?.category ?? "";

  const categories = await getCategories();

  return (
    <>
      <section className="bg-spf-green-900 w-full py-20">
        <div className="container mx-auto mt-[180px] space-y-4 px-4 lg:px-0">
          <h2 className="text-4xl text-white">Actualidad</h2>
          <p className="text-muted w-1/2">
            Las últimas noticias sobre trabajos de investigación en áreas
            relacionadas a la forestación, sanidad forestal, prácticas en el
            manejo de suelos, protección contra incendios o economía.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="container mx-auto space-y-4 px-4 lg:px-0">
          {/* Filters */}
          <NewsFilters
            initialSearch={search}
            initialCategory={category}
            categories={categories}
          />

          {/* News grid */}
          <Suspense fallback={<NewsArchiveSkeleton />}>
            <NewsArchive
              page={page}
              pageSize={9}
              search={search}
              category={category}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
