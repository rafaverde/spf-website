import { cn } from "@/lib/utils";
import { RiAddLine, RiArrowRightUpLine } from "@remixicon/react";
import { hover, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import imgTeste from "../../../public/areas/paif.webp";

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
            "object-cover transition-transform duration-500",
            isExpanded ? "scale-105 opacity-70" : "scale-100 opacity-50",
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
      </div>
    </Link>
  );
}

// {
//   /* Imagem */
// }
// <motion.div className="h-full w-full" initial="idle" whileHover="hover">
//   <motion.div
//     layout
//     variants={{
//       idle: { scale: 1 },
//       hover: { scale: 1.1 },
//     }}
//     transition={{ duration: 0.4, ease: "easeInOut" }}
//     className="absolute inset-0 z-0 h-full w-full"
//   >
//     <div className="relative h-full w-full">
//       <Image
//         src={image}
//         alt={title}
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         className="object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-70"
//       />
//     </div>

//     <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//   </motion.div>
// </motion.div>;
