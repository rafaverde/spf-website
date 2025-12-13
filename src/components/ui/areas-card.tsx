import { cn } from "@/lib/utils";
import { RiAddLine, RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

interface AreasCardProps {
  title: string;
  image: string;
  href: string;
  isExpanded: boolean;
  className?: string;
}

export default function AreasCard({
  title,
  image,
  href,
  isExpanded,
  className,
}: AreasCardProps) {
  return (
    <Link
      href={href}
      title={title}
      className={cn(
        "bg-spf-green-500 group relative block h-full w-full overflow-hidden",
      )}
    >
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover object-top transition-transform duration-500 md:object-center",
            isExpanded ? "scale-110 opacity-70" : "scale-100 opacity-50",
          )}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        {/* --- Botão expansível --- */}
        <div className="flex justify-end">
          <div className="bg-spf-highlight-400 group-hover:bg-spf-green-500 hover:bg-spf-green-900 flex size-12 items-center justify-center overflow-hidden rounded-full text-white transition-all duration-700 group-hover:w-auto">
            <div className="flex w-0 items-center gap-1 px-0 opacity-0 transition-all duration-300 group-hover:w-auto group-hover:px-6 group-hover:opacity-100">
              <span className="hidden whitespace-nowrap group-hover:block">
                Ver más
              </span>
              <RiArrowRightUpLine />
            </div>
            <RiAddLine className="size-8 opacity-100 transition-all duration-300 group-hover:w-0 group-hover:opacity-0" />
          </div>
        </div>

        <div className="absolute bottom-6 left-4">
          <h3
            className={cn(
              "absolute bottom-0 origin-bottom-left text-2xl leading-tight text-white transition-all duration-500 ease-in-out md:text-4xl md:leading-0 md:whitespace-nowrap",
              isExpanded
                ? "rotate-0 md:bottom-4 md:left-4"
                : "md:inset-0 md:left-5 md:-rotate-90",
            )}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
