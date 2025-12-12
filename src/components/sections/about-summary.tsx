"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const SUMMARY_IMAGES = [
  "/summary-carousel/image-1.webp",
  "/summary-carousel/image-2.webp",
  "/summary-carousel/image-3.webp",
  "/summary-carousel/image-4.webp",
  "/summary-carousel/image-5.webp",
  "/summary-carousel/image-6.webp",
];

export default function AboutSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="border-spf-green-300 bg-spf-green-900/65 w-full border-t py-20 backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto flex flex-col items-end justify-center gap-8 px-4 lg:px-0"
      >
        <div className="space-y-3">
          <h2 className="text-spf-green-300 text-4xl">Quiéne Somos</h2>
          <p className="text-spf-green-100">
            Somos la Sociedad de Productores Forestales del Uruguay (SPF), una
            asociación civil fundada en 1959 que reúne a los principales actores
            de la cadena forestal uruguaya: productores rurales, empresas
            forestales, administradores de fondos de inversión y de
            pensión, viveristas, técnicos, empresas de servicios e industrias
            vinculadas al sector. 
          </p>
        </div>
        <div>
          <Button size="lg">
            Más información <RiArrowRightUpLine />
          </Button>
        </div>
      </motion.div>

      <div className="px-4 pt-11 lg:px-0">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent>
            {SUMMARY_IMAGES.map((img, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 2xl:basis-1/5"
              >
                <div className="bg-spf-green-900 relative aspect-square overflow-hidden rounded-4xl">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
