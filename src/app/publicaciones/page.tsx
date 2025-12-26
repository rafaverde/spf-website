import Pagination from "@/components/news/pagination";
import PublicationCard from "@/components/publications/publication-card";
import { getPublications } from "@/lib/wp/get-publications";
import { RiEmotionSadLine } from "@remixicon/react";

interface PublicationsPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function PublicationsPage({
  searchParams,
}: PublicationsPageProps) {
  const params = await searchParams;
  const page = Number(params?.page ?? "1");
  const { publications, totalPages } = await getPublications({
    page,
    perPage: 12,
  });

  return (
    <>
      <section className="bg-spf-green-900 w-full py-20">
        <div className="container mx-auto mt-[180px] space-y-4 px-4 lg:px-0">
          <h2 className="text-4xl text-white">Publicaciones</h2>
          <p className="text-muted w-1/2">
            Informes, estudios y documentos técnicos vinculados al sector
            forestal.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-20 lg:p-20">
        <div className="container mx-auto space-y-4 px-4 lg:px-0">
          {publications.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {publications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                  />
                ))}
              </div>

              <div className="mt-10">
                {totalPages > 1 && (
                  <Pagination currentPage={page} totalPages={totalPages} />
                )}
              </div>
            </>
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-1 py-10 text-center">
              <RiEmotionSadLine className="text-spf-green-500 size-10" />
              <p className="text-muted-foreground text-sm">
                No se encontraron documentos en este momento. <br />
                <strong>Inténtalo de nuevo más tarde.</strong>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
