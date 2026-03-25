import ContactForm from "@/components/contact/contact-form";
import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import { AppLocale } from "@/i18n/routing";
import { getGlobalOptions } from "@/lib/site/get-global-options";
import * as Icons from "@remixicon/react";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as AppLocale;
  const tContact = await getTranslations({ locale, namespace: "contact" });

  return {
    title: tContact("title"),
    description: tContact("boxText"),
    alternates: {
      canonical: `/${typedLocale}/contacto`,
      languages: {
        es: "/es/contacto",
        en: "/en/contacto",
      },
    },
  };
}

export default async function ContactPage() {
  const locale = (await getLocale()) as AppLocale;
  const globalOptions = await getGlobalOptions(locale);

  const tContact = await getTranslations("contact");

  return (
    <section className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/sector/bg-header-sector.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle={tContact("title")} titlePosition="end" />
        <section className="scroll-m-30 bg-white py-20" id="contactForm">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="h-full lg:col-span-7">
                <ContactForm />
              </div>

              {/* Coluna 2: Dados Institucionais (Sidebar) */}
              <div className="bg-spf-green-500 flex h-full flex-col space-y-5 rounded-xl p-8 shadow-sm md:p-10 lg:col-span-5">
                <p className="text-spf-green-300">{tContact("boxText")}</p>

                {/* Dados vindos do Global (Backup/Reforço) */}
                <ul className="flex flex-col gap-6 text-white">
                  <li className="group hover:text-spf-highlight-400 flex gap-1 transition-colors duration-300 ease-in-out">
                    <Icons.RiMapPinLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                    <span className="select-none">
                      {globalOptions.contact?.address}
                    </span>
                  </li>

                  <li className="group hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out">
                    <Link
                      href={`mailto:${globalOptions.contact?.email}`}
                      className="flex gap-1"
                    >
                      <Icons.RiMailLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                      <span>{globalOptions.contact?.email}</span>
                    </Link>
                  </li>

                  {globalOptions.contact?.phones.map(({ phone }, index) => (
                    <li
                      key={`phones-${index}-${phone}`}
                      className="group hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out"
                    >
                      <Link href={`tel:${phone}`} className="flex gap-1">
                        <Icons.RiPhoneLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                        <span>{phone}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
