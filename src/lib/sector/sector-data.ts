export interface SectorStat {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export interface SectorSection {
  title: string;
  description?: string;
  stats: SectorStat[];
}

export const sectorSections: SectorSection[] = [
  {
    title: "Panorama General",
    description:
      "Principales cifras que describen la dimensión del sector forestal.",
    stats: [
      { label: "Hectáreas forestadas", value: 1200000, suffix: "ha" },
      { label: "Producción anual", value: 28, suffix: "M m³" },
      { label: "Exportaciones", value: 2500, suffix: "M USD" },
    ],
  },
  {
    title: "Impacto en el Empleo",
    stats: [
      { label: "Empleos directos", value: 25000 },
      { label: "Empleos indirectos", value: 100000 },
    ],
  },
];
