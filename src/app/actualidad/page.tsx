interface NewsPageProps {
  searchParams?: {
    page?: string;
    search?: string;
    category?: string;
  };
}

export default function NewsPage({ searchParams }: NewsPageProps) {
  return (
    <>
      <section className="bg-spf-green-900 w-full py-20">
        <div className="container mx-auto mt-[180px] space-y-4">
          <h2 className="text-4xl text-white">Actualidad</h2>
          <p className="text-muted w-1/2">
            Las últimas noticias sobre trabajos de investigación en áreas
            relacionadas a la forestación, sanidad forestal, prácticas en el
            manejo de suelos, protección contra incendios o economía.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="container mx-auto mt-[180px] space-y-4">
          {/* Filters */}
          {/* <NewsFilters initialSearch={search} initialCategory={category} /> */}

          {/* News grid */}
          {/* <Suspense fallback={<NewsArchiveSkeleton />}>
          <NewsArchive
            page={page}
            pageSize={9}
            search={search}
            category={category}
          />
        </Suspense> */}
        </div>
      </section>
    </>
  );
}
