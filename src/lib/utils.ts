import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatar números pt-BR
export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    maximumFractionDigits: 2,
  }).format(value);
};
