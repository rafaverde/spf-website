import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formata a data para padrão es-UY
export function formatDate(date: string) {
  const convertedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;

  const formattedDate = new Date(convertedDate).toLocaleDateString("es-UY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
