import { RiYoutubeLine } from "@remixicon/react";
import { Button } from "../ui/button";

export default function VideoCarouselSkeleton() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col items-end-safe justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-spf-yellow-400 text-4xl">Canal Forestal</h2>
            <p className="text-spf-green-900">
              Descubre por qué estamos orgullosos de ser forestales. 
            </p>
          </div>
          <div>
            <Button size="lg" disabled>
              Ir a YouTube <RiYoutubeLine className="size-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-spf-green-100/50 hidden h-[360px] animate-pulse rounded-4xl first:block lg:block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
