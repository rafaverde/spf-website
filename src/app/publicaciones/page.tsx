import { getPublications } from "@/lib/wp/get-publications";

export default async function PublicationsPage() {
  const publications = await getPublications({ perPage: 12 });

  return (
    <>
      <section className="bg-spf-green-900 w-full py-20">
        <div className="container mx-auto mt-[180px] space-y-4">
          <h2 className="text-4xl text-white">Publicaciones</h2>
          <p className="text-muted w-1/2">
            Informes, estudios y documentos técnicos vinculados al sector
            forestal.
          </p>
        </div>
      </section>
    </>
  );
}
