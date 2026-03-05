import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = (await import(`../../messages/${locale}/common.json`)).default;
  const aboutUs = (await import(`../../messages/${locale}/aboutUs.json`))
    .default;
  const slider = (await import(`../../messages/${locale}/slider.json`)).default;
  const areas = (await import(`../../messages/${locale}/areas.json`)).default;
  const sectorNumbers = (
    await import(`../../messages/${locale}/sectorNumbers.json`)
  ).default;
  const publications = (
    await import(`../../messages/${locale}/publications.json`)
  ).default;

  return {
    locale,
    messages: {
      common,
      aboutUs,
      slider,
      areas,
      sectorNumbers,
      publications,
    },
  };
});
