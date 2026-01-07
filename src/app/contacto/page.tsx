import ContactForm from "@/components/contact/contact-form";
import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import { globalConfig } from "@/lib/site/global.config";
import * as Icons from "@remixicon/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/sector/bg-header-sector.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle="Contacto" titlePosition="end" />
        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="h-full lg:col-span-7">
                <ContactForm />
              </div>

              {/* Coluna 2: Dados Institucionais (Sidebar) */}
              <div className="bg-spf-green-500 flex h-full flex-col space-y-5 rounded-xl p-8 shadow-sm md:p-10 lg:col-span-5">
                <p className="text-spf-green-300">
                  Si tienes consultas, sugerencias o deseas contactarte con SPF,
                  completa el formulario y nos pondremos en contacto contigo.
                </p>

                {/* Dados vindos do Global (Backup/Reforço) */}
                <ul className="flex flex-col gap-6 text-white">
                  <li className="group hover:text-spf-highlight-400 flex gap-1 transition-colors duration-300 ease-in-out">
                    <Icons.RiMapPinLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                    <span className="select-none">
                      {globalConfig.contact.address}
                    </span>
                  </li>

                  <li className="group hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out">
                    <Link
                      href={`mailto:${globalConfig.contact.email}`}
                      className="flex gap-1"
                    >
                      <Icons.RiMailLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                      <span>{globalConfig.contact.email}</span>
                    </Link>
                  </li>

                  {globalConfig.contact.phones.map((phone) => (
                    <li
                      key={phone}
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
