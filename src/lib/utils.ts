import { AppLocale } from "@/i18n/routing";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formata a data para padrão es-UY
export function formatDate(date: string, locale: AppLocale = "es") {
  const convertedDate =
    date.length === 8
      ? `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`
      : date;

  const localeCode = locale === "en" ? "en-US" : "es-UY";

  const options: Intl.DateTimeFormatOptions =
    locale === "en"
      ? { dateStyle: "medium" }
      : { day: "numeric", month: "long", year: "numeric" };

  return new Intl.DateTimeFormat(localeCode, options).format(
    new Date(convertedDate),
  );
}
