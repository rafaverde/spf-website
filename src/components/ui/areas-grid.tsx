"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import AreasCard from "./areas-card";

// Dados mockados
const AREAS = [
  {
    id: "sanidad",
    title: "Sanidad Forestal",
    image: "/areas/sanidad.webp",
    href: "/areas/sanidad",
  },
  {
    id: "paif",
    title: "Operativo PAIF",
    image: "/areas/paif.webp",
    href: "/areas/paif",
  },
  {
    id: "laborales",
    title: "Asuntos Laborales",
    image: "/areas/laborales.webp",
    href: "/areas/laborales",
  },
  {
    id: "comunicacion",
    title: "Comunicación",
    image: "/areas/comunicacion.webp",
    href: "/areas/comunicacion",
  },
];

export default function AreasGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
