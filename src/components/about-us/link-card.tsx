"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface LinkCardProps {
  title: string;
  image: string;
  href: string;
}

export default function LinkCard({ title, image, href }: LinkCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <Link ref={ref} href={href} className="group relative">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex min-h-[258px] w-full items-end overflow-hidden rounded-4xl p-6"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-15">
            <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
            <div className="absolute h-full w-full bg-linear-to-t from-black/80 from-0% to-70%"></div>
          </div>
        </div>

        <div className="relative z-20 flex w-full items-center justify-between">
          <h3 className="text-4xl text-white transition-all duration-300 ease-in-out group-hover:opacity-0">
            {title}
          </h3>
          <div className="bg-spf-highlight-400 group-hover:bg-spf-green-500 flex size-10 items-center justify-center rounded-full text-white transition-all duration-500 ease-in-out group-hover:rotate-45">
            <RiArrowRightUpLine />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
