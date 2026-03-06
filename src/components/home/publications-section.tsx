import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { getPublications } from "@/lib/wp/get-publications";
import PublicationCard from "../publications/publication-card";
import { getLocale, getTranslations } from "next-intl/server";
import { AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

export default async function PublicationsSection() {
  const locale = (await getLocale()) as AppLocale;
  const { publications } = await getPublications({ perPage: 6, locale });

  const tPubli = await getTranslations("publications");
  const tCommon = await getTranslations("common");

  return (
    <section className="bg-spf-green-300 relative w-full py-20">
      <Image
        src="/bg-publicaciones.webp"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col justify-between gap-6 p-2 md:order-2 lg:col-span-2">
          <div className="space-y-3">
            <h2 className="text-spf-green-900 text-3xl md:text-4xl">
              {tPubli("title")}
            </h2>

            <p>{tPubli("sectionDescription")}</p>
          </div>
          <div className="text-right">
            <Link href="/publicaciones">
              <Button size="lg">
                {tCommon("actions.viewAllPosts")} <RiArrowRightUpLine />
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 mb-8 lg:col-span-3">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {publications.map((item, i) => (
                <CarouselItem key={i} className="lg:basis-1/3">
                  <PublicationCard publication={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-1/2 -bottom-12 flex translate-x-1/2 gap-2">
              <CarouselPrevious className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
              <CarouselNext className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
