import Link from "next/link";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import NewsCarousel from "../news/news-carousel";
import { Suspense } from "react";
import NewsCarouselSkeleton from "../news/news-carousel-skeleton";

export default async function NewsSection() {
  return (
    <section className="bg-spf-highlight-400 w-full py-20">
      <div className="container mx-auto flex flex-col items-end justify-between gap-8 px-4 md:flex-row md:items-start lg:px-0">
        <div className="lg:max-w-3xl">
          <h2 className="text-4xl text-white">Actualidad</h2>
          <p className="text-white">
            Las últimas noticias sobre trabajos de investigación en áreas
            relacionadas a la forestación, sanidad forestal, prácticas en el
            manejo de suelos, protección contra incendios o economía
          </p>
        </div>
        <Link href="/actualidad" title="Ver más noticias">
          <Button size="lg">
            Ver más <RiArrowRightUpLine className="size-6" />
          </Button>
        </Link>
      </div>
      <div className="container mx-auto mt-6 px-4 lg:px-0">
        <Suspense fallback={<NewsCarouselSkeleton />}>
          <NewsCarousel />
        </Suspense>
      </div>
    </section>
  );
}
