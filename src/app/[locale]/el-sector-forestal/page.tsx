import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import StatisticsCounter from "@/components/statistics/statistics-counter";
import { AppLocale } from "@/i18n/routing";
import { getStatistics } from "@/lib/statistics/get-statistics";
import { mapStatisticsByKey } from "@/lib/statistics/statistics.helper";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export const metadata = {
  title: "El Sector Forestal",
};

export default async function StatisticsPage() {
  const locale = (await getLocale()) as AppLocale;
  const stats = await getStatistics(locale);
  const statsByKey = mapStatisticsByKey(stats);

  const tNumbers = await getTranslations("sectorNumbers");

  return (
    <article className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/sector/bg-header-sector.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle={tNumbers("title")} titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto flex flex-col items-start justify-center gap-8 space-y-11 px-4 lg:flex-row">
            <div
              className="flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: tNumbers.raw("description") }}
            ></div>

            <div className="bg-muted-foreground w-full rounded-xl p-10 lg:min-w-xs">
              {statsByKey["sector.agriculture_surface"] && (
                <StatisticsCounter
                  {...statsByKey["sector.agriculture_surface"]}
                />
              )}
            </div>
          </div>
        </section>

        {/* Contribución económica */}
        <section className="bg-spf-green-900 relative py-24">
          <Image
            src="/sector/bg-section-1.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
          />

          <div className="relative container mx-auto space-y-16 px-4">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-muted text-3xl">
                {tNumbers("contribucion.title")}
              </h2>
              <p className="text-white">
                {tNumbers("contribucion.description")}
              </p>
            </header>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {statsByKey["sector.gross_production_value"] && (
                <StatisticsCounter
                  {...statsByKey["sector.gross_production_value"]}
                />
              )}

              {statsByKey["sector.total_contribution"] && (
                <StatisticsCounter
                  {...statsByKey["sector.total_contribution"]}
                />
              )}

              {statsByKey["sector.gdp_share"] && (
                <StatisticsCounter {...statsByKey["sector.gdp_share"]} />
              )}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div
                className="bg-muted rounded-xl p-8"
                dangerouslySetInnerHTML={{
                  __html: tNumbers.raw("contribucion.boxText.1"),
                }}
              ></div>
              <div
                className="bg-muted rounded-xl p-8"
                dangerouslySetInnerHTML={{
                  __html: tNumbers.raw("contribucion.boxText.2"),
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Empleo y tributos */}
        <section className="bg-spf-green-500/75 py-24">
          <div className="container mx-auto space-y-16 px-4">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-muted text-3xl">
                {tNumbers("empleo.title")}
              </h2>
              <p className="text-white">{tNumbers("empleo.description")}</p>
            </header>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {statsByKey["sector.direct_jobs"] && (
                <StatisticsCounter {...statsByKey["sector.direct_jobs"]} />
              )}
              {statsByKey["sector.total_jobs"] && (
                <StatisticsCounter {...statsByKey["sector.total_jobs"]} />
              )}
              {statsByKey["sector.national_employment_share"] && (
                <StatisticsCounter
                  {...statsByKey["sector.national_employment_share"]}
                />
              )}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div
                className="rounded-xl bg-white p-8 shadow-sm"
                dangerouslySetInnerHTML={{
                  __html: tNumbers.raw("empleo.boxText.1"),
                }}
              ></div>
              <div
                className="rounded-xl bg-white p-8 shadow-sm"
                dangerouslySetInnerHTML={{
                  __html: tNumbers.raw("empleo.boxText.2"),
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Productividad */}
        <section className="bg-white py-24">
          <div className="container mx-auto space-y-16 px-4">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-3xl">{tNumbers("productividad.title")}</h2>
              <p className="text-muted-foreground">
                {tNumbers("productividad.description")}
              </p>
            </header>

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="bg-muted-foreground rounded-xl p-10">
                {statsByKey["sector.value_per_hectare"] && (
                  <StatisticsCounter
                    {...statsByKey["sector.value_per_hectare"]}
                  />
                )}
              </div>

              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{
                  __html: tNumbers.raw("productividad.boxText.1"),
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
