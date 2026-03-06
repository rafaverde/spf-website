import NewsArchive from "@/components/news/news-archive";
import NewsArchiveSkeleton from "@/components/news/news-archive-skeleton";
import NewsFilters from "@/components/news/news-filter";
import { AppLocale } from "@/i18n/routing";
import { getCategories } from "@/lib/wp/get-categories";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";

interface NewsPageProps {
  searchParams?: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLocale;
  const tNews = await getTranslations({ locale, namespace: "news" });

  return {
    title: tNews("title"),
    description: tNews("description"),
    alternates: {
      canonical: `/${typedLocale}/actualidad`,
      languages: {
        es: "/es/actualidad",
        en: "/en/actualidad",
      },
    },
  };
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;

  const page = Number(params?.page ?? "1");
  const search = params?.search ?? "";
  const category = params?.category ?? "";
  const locale = (await getLocale()) as AppLocale;

  const tNews = await getTranslations("news");

  const categories = await getCategories(locale);

  return (
    <>
      <section className="bg-spf-green-900 w-full py-20">
        <div className="container mx-auto mt-[180px] space-y-4 px-4">
          <h2 className="text-4xl text-white">{tNews("title")}</h2>
          <p className="text-muted w-1/2">{tNews("description")}</p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="container mx-auto space-y-4 px-4">
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
              locale={locale}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
