import { globalConfig } from "@/lib/site/global.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import * as Icons from "@remixicon/react";
import { Button } from "../ui/button";
import MacondoSignature from "./macondo-signature";

export default function Footer() {
  return (
    <footer className="bg-spf-green-900 relative w-full py-20">
      <Image
        src="/bg-footer.webp"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
        aria-hidden
      />

      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
          <div className="flex flex-col gap-6 self-start">
            <Image
              src={globalConfig.branding.logo}
              alt={globalConfig.branding.description}
              width={200}
              height={0}
              className="h-auto brightness-0 invert md:w-[300px]"
            />
            <p className="text-spf-green-300 text-xs">
              {globalConfig.copyright}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                Navegar
              </h2>

              <ul className="flex flex-col gap-1 text-white">
                {globalConfig.navigation.map((link) => (
                  <li key={link.href} className="relative flex">
                    <Link
                      href={link.href}
                      className="group relative flex gap-1 py-2"
                    >
                      {link.label}
                      <Icons.RiArrowRightUpLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                      <span
                        className={cn(
                          "bg-spf-highlight-400 absolute right-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                        )}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                Redes Sociales
              </h2>

              <div className="flex gap-2">
                {globalConfig.social.map((item) => {
                  const Icon = Icons[item.icon as keyof typeof Icons];

                  return (
                    <Link key={item.label} href={item.href} target="_blank">
                      <Icon className="text-spf-green-300 hover:text-spf-highlight-400 size-6 transition-colors duration-300 ease-in-out" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                ¿Te interesa ser socio? Escribinos. 
              </h2>

              <Link href={globalConfig.cta.footer.href}>
                <Button size="lg">
                  {globalConfig.cta.footer.label} <Icons.RiArrowRightUpLine />
                </Button>
              </Link>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                Contacto
              </h2>

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
      </div>
    </footer>
  );
}
