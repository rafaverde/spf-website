import { NewsItem } from "@/lib/news/news.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import NewsCard from "./news-card";
import { getLatestNews } from "@/lib/news/get-latest-news";
import { RiEmotionSadLine } from "@remixicon/react";

export default async function NewsCarousel() {
  let news: NewsItem[] = [];

  try {
    news = await getLatestNews(12);
  } catch (error) {
    console.error("Failed to load news: ", error);
  }

  return (
    <>
      {news.length > 0 ? (
        <Carousel opts={{ align: "center" }} className="w-full">
          <CarouselContent>
            {news.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/3 lg:basis-1/4"
              >
                <NewsCard news={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute right-1/2 -bottom-12 flex translate-x-1/2 gap-2">
            <CarouselPrevious className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
            <CarouselNext className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
          </div>
        </Carousel>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-1 py-10 text-center">
          <RiEmotionSadLine className="text-spf-green-500 size-10" />
          <p className="text-muted-foreground text-sm">
            Las noticias no están disponibles en este momento. <br />
            <strong>Inténtalo de nuevo más tarde.</strong>
          </p>
        </div>
      )}
    </>
  );
}
