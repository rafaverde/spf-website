import { RiArrowRightUpLine, RiFilePdf2Fill } from "@remixicon/react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function PublicationsSection() {
  return (
    <section className="bg-spf-green-300 relative w-full py-20">
      <Image
        src="/bg-publicaciones.webp"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-5 lg:px-0">
        <div className="flex flex-col justify-between gap-6 p-2 md:order-2 lg:col-span-2">
          <div className="space-y-3">
            <h2 className="text-spf-green-900 text-3xl md:text-4xl">
              Publicaciones
            </h2>

            <p>
              SPF apoya el desarrollo y la difusión de investigaciones en áreas
              relacionadas con la silvicultura, como el uso del agua, las
              mejores prácticas en el manejo del suelo y los informes del
              sector. Manténgase al día con las últimas publicaciones, artículos
              y trabajos académicos.
            </p>
          </div>
          <div className="text-right">
            <Button size="lg">
              Ver todas las publicaciones <RiArrowRightUpLine />
            </Button>
          </div>
        </div>

        <div className="order-1 mb-8 lg:col-span-3">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, i) => (
                <CarouselItem key={i} className="lg:basis-1/3">
                  <Link href="#">
                    <Card className="bg-spf-green-100 group p-6">
                      <CardContent className="text-spf-green-900 flex flex-col items-center justify-center gap-3">
                        <RiFilePdf2Fill className="group-hover:text-spf-highlight-400 m-2 size-12 transition-all duration-500 ease-in-out" />
                        <h3 className="text-center leading-tight">
                          Sistema de información y monitoreo de la biodiversidad
                          en el sector forestal
                        </h3>

                        <Badge className="tracking-wide uppercase">
                          Ambiente
                        </Badge>

                        <span className="text-sm">Noviembre 2022</span>
                      </CardContent>
                    </Card>
                  </Link>
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
