import { Button } from "@/components/ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function VinculationsSection() {
  const tAreas = useTranslations("areas");
  const tCommon = useTranslations("common");

  return (
    <section className="bg-spf-green-100 py-20">
      <div className="text-spf-green-900 container mx-auto space-y-6 px-4">
        <h2 className="text-4xl">{tAreas("empowerSection.title")}</h2>

        {/* Consorcio Forestal Maderero  */}
        <div className="border-spf-green-300 grid gap-6 border-b py-11 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-spf-green-500 text-2xl">
              {tAreas("empowerSection.cfm.title")} 
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: tAreas.raw("empowerSection.cfm.description"),
              }}
              className="space-y-4"
            ></div>
          </div>

          <div className="relative min-h-[380px] w-full overflow-hidden rounded-4xl">
            <div className="absolute inset-0">
              <Image
                src="/about-us/consorcio-forestal-maderero.webp"
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
            </div>
          </div>
        </div>

        {/* Centro Tecnológico Forestal Maderero  */}
        <div className="border-spf-green-300 grid gap-6 border-b py-11 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-spf-green-500 text-2xl">
              {tAreas("empowerSection.ctfm.title")} 
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: tAreas.raw("empowerSection.ctfm.description"),
              }}
              className="space-y-4"
            ></div>

            <Link
              href="https://ctfm.uy/"
              title="Centro Tecnológico Forestal Maderero"
              target="_blank"
            >
              <Button size="lg">
                {tCommon("actions.moreInfo")}{" "}
                <RiArrowRightUpLine className="size-6" />
              </Button>
            </Link>
          </div>

          <div className="relative min-h-[380px] w-full overflow-hidden rounded-4xl">
            <div className="absolute inset-0">
              <Image
                src="/about-us/centro-tec-forestal-maderero.webp"
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
            </div>
          </div>
        </div>

        {/* PEFC y FSC  */}
        <div className="border-spf-green-300 gap-6 border-b py-11 md:grid md:grid-cols-12">
          <div className="space-y-6 md:col-span-9">
            <h3
              className="text-spf-green-500 text-2xl"
              dangerouslySetInnerHTML={{
                __html: tAreas.raw("empowerSection.pefc.title"),
              }}
            ></h3>
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{
                __html: tAreas.raw("empowerSection.pefc.description"),
              }}
            ></div>
          </div>
          <div className="flex flex-col items-center gap-10 md:col-span-3">
            <div className="flex w-full flex-col items-center gap-4">
              <Image
                src="/about-us/logo-pefc.webp"
                alt="PEFC Uruguay logo"
                width={100}
                height={144}
              />
              <Link href="https://www.pefc.org/" title="PEFC" target="_blank">
                <Button size="lg">
                  {tCommon("actions.moreInfo")}{" "}
                  <RiArrowRightUpLine className="size-6" />
                </Button>
              </Link>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <Image
                src="/about-us/logo-fsc.webp"
                alt="FSC Uruguay logo"
                width={100}
                height={144}
              />
              <Link href="https://fsc.org/es" title="FSC" target="_blank">
                <Button size="lg">
                  {tCommon("actions.moreInfo")}{" "}
                  <RiArrowRightUpLine className="size-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
