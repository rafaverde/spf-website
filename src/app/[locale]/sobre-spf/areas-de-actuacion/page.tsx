import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import { Button } from "@/components/ui/button";
import { AppLocale } from "@/i18n/routing";
import { getGlobalOptions } from "@/lib/site/get-global-options";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLocale;
  const tAreas = await getTranslations({ locale, namespace: "areas" });

  return {
    title: tAreas("sectionTitle"),
    description: tAreas("sectionDescription"),
    alternates: {
      canonical: `/${typedLocale}/sobre-spf/areas-de-actuacion`,
      languages: {
        es: "/es/sobre-spf/areas-de-actuacion",
        en: "/en/sobre-spf/areas-de-actuacion",
      },
    },
  };
}

export default async function ExpertiseAreasPage() {
  const locale = (await getLocale()) as AppLocale;
  const globalOptions = await getGlobalOptions(locale);

  const tAreas = await getTranslations("areas");

  return (
    <div className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/areas/bg-header-areas.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle={tAreas("sectionTitle")} titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4">
            <p>{tAreas("sectionDescription")}</p>

            <div
              id="comision-de-sanidad"
              className="border-spf-green-300 grid scroll-mt-28 grid-cols-1 gap-8 border-t py-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  {tAreas("sanidadTitle")}
                </h3>
                <p>{tAreas("sanidadDescription")}</p>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/sanidad-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="paif"
              className="border-spf-green-300 grid scroll-mt-28 grid-cols-1 gap-8 border-t pt-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  {tAreas("paifTitle")}
                </h3>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: tAreas.raw("paifDescription"),
                  }}
                ></div>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/paif-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="laborales"
              className="border-spf-green-300 grid scroll-mt-28 grid-cols-1 gap-8 border-t pt-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  {tAreas("laboralesTitle")} 
                </h3>
                <p>{tAreas("laboralesDescription")}</p>

                <Link
                  href={globalOptions.general?.asuntos_laborales.file_url || ""}
                  target="_blank"
                >
                  <Button size="lg">
                    {globalOptions.general?.asuntos_laborales.label}
                    <RiArrowRightUpLine />
                  </Button>
                </Link>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/laborales-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="comunicacion"
              className="border-spf-green-300 grid scroll-mt-28 grid-cols-1 gap-8 border-t pt-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  {tAreas("comunicacionTitle")} 
                </h3>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: tAreas.raw("comunicacionDescription"),
                  }}
                ></div>

                <Link href="https://www.revistaforestal.uy/" target="_blank">
                  <Button size="lg">
                    {tAreas("comunicacionCta")} <RiArrowRightUpLine />
                  </Button>
                </Link>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/comunicacion-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
