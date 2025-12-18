import { getLatestNews } from "@/lib/news/get-latest-news";
import { NewsItem } from "@/lib/news/news.types";
import Link from "next/link";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";

export default async function NewsSection() {
  let news: NewsItem[] = [];

  try {
    news = await getLatestNews({ limit: 12 });
  } catch (error) {
    console.error("Failed to load news: ", error);
  }

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
        <Link href="/actualidad" target="_blank" title="Ir a Youtube Playlist">
          <Button size="lg">
            Ver más <RiArrowRightUpLine className="size-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
