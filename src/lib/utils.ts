import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WpPost } from "./wp/wp.types";
import { NewsItem } from "./news/news.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formata a data para padrão es-UY
export function formatDate(date: string) {
  const formattedDate = new Date(date).toLocaleDateString("es-UY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
