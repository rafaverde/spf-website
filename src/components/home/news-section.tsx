import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import NewsCarousel from "../news/news-carousel";
import { Suspense } from "react";
import NewsCarouselSkeleton from "../news/news-carousel-skeleton";
import { useTranslations } from "next-intl";

export default function NewsSection() {
  const tNews = useTranslations("news");
  const tCommon = useTranslations("common");

  return (
    <section className="bg-spf-highlight-400 w-full py-20">
      <div className="container mx-auto flex flex-col items-end justify-between gap-8 px-4 md:flex-row md:items-start">
        <div className="lg:max-w-3xl">
          <h2 className="text-4xl text-white">{tNews("title")}</h2>
          <p className="text-white">{tNews("description")}</p>
        </div>
        <Link href="/actualidad" title="Ver más noticias">
          <Button size="lg">
            {tCommon("actions.seeMore")}{" "}
            <RiArrowRightUpLine className="size-6" />
          </Button>
        </Link>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <Suspense fallback={<NewsCarouselSkeleton />}>
          <NewsCarousel />
        </Suspense>
      </div>
    </section>
  );
}
