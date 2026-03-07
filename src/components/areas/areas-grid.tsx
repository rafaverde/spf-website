"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import AreasCard from "./areas-card";
import { useTranslations } from "next-intl";

export default function AreasGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const tAreas = useTranslations("areas");

  // Dados mockados
  const AREAS = [
    {
      id: "sanidad",
      title: tAreas("sanidadTitle"),
      image: "/areas/sanidad.webp",
      href: "/sobre-spf/areas-de-actuacion/#sanidad",
    },
    {
      id: "paif",
      title: tAreas("paifTitle"),
      image: "/areas/paif.webp",
      href: "/sobre-spf/areas-de-actuacion/#paif",
    },
    {
      id: "laborales",
      title: tAreas("laboralesTitle"),
      image: "/areas/laborales.webp",
      href: "/sobre-spf/areas-de-actuacion/#laborales",
    },
    {
      id: "comunicacion",
      title: tAreas("comunicacionTitle"),
      image: "/areas/comunicacion.webp",
      href: "/sobre-spf/areas-de-actuacion/#comunicacion",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-3 md:min-h-[400px] md:flex-row">
        {AREAS.map((area, index) => {
          const isHovered = hoveredId === area.id;
          const isDefaultLarge = hoveredId === null && index === 0;
          const isExpanded = isHovered || isDefaultLarge;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "bg-spf-green-500 relative h-52 overflow-hidden rounded-4xl transition-all duration-500 ease-in-out",
                isExpanded ? "md:h-auto md:flex-[2.5]" : "md:h-auto md:flex-1",
              )}
            >
              <AreasCard
                title={area.title}
                image={area.image}
                href={area.href}
                isExpanded={isExpanded}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
