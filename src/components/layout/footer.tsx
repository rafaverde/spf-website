import { cn } from "@/lib/utils";
import Image from "next/image";
import NextLink from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";

import * as Icons from "@remixicon/react";
import { Button } from "../ui/button";
import { GlobalOptions } from "@/lib/site/global.types";
import { useTranslations } from "next-intl";

interface FooterProps {
  globalOptions: GlobalOptions;
}

export default function Footer({ globalOptions }: FooterProps) {
  const localePrefixRegex = /^\/(es|en)(?=\/|$)/;

  const toLocaleHref = (href: string) => {
    const normalized = href.replace(localePrefixRegex, "");
    return normalized === "" ? "/" : normalized;
  };

  const tCommon = useTranslations("common");

  const isInternalHref = (href: string) => href.startsWith("/");

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
              src={
                globalOptions.branding?.logo_principal || "/spf-logo-color.svg"
              }
              alt={globalOptions.branding?.footer_description || ""}
              width={200}
              height={0}
              className="h-auto brightness-0 invert md:w-[300px]"
            />
            <p className="text-spf-green-300 text-xs">
              {globalOptions.footer?.copyright}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                {tCommon("footer.colTitles.menu")}
              </h2>

              <ul className="flex flex-col gap-1 text-white">
                {globalOptions.navigation?.map((link) => (
                  <li key={link.href} className="relative flex">
                    {isInternalHref(link.href) ? (
                      <LocaleLink
                        href={toLocaleHref(link.href)}
                        className="group relative flex gap-1 py-2"
                      >
                        {link.label}
                        <Icons.RiArrowRightUpLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                        <span
                          className={cn(
                            "bg-spf-highlight-400 absolute right-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                          )}
                        ></span>
                      </LocaleLink>
                    ) : (
                      <NextLink
                        href={link.href}
                        className="group relative flex gap-1 py-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <Icons.RiArrowRightUpLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                      </NextLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                {tCommon("footer.colTitles.social")}
              </h2>

              <div className="flex gap-2">
                {globalOptions.social?.map((item) => {
                  const Icon = Icons[item.icon as keyof typeof Icons];

                  return (
                    <NextLink key={item.label} href={item.href} target="_blank">
                      <Icon className="text-spf-green-300 hover:text-spf-highlight-400 size-6 transition-colors duration-300 ease-in-out" />
                    </NextLink>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                {tCommon("footer.colTitles.cta")}
              </h2>

              {globalOptions.footer?.cta.href &&
              isInternalHref(globalOptions.footer.cta.href) ? (
                <LocaleLink href={toLocaleHref(globalOptions.footer.cta.href)}>
                  <Button size="lg">
                    {globalOptions.footer?.cta.label}{" "}
                    <Icons.RiArrowRightUpLine />
                  </Button>
                </LocaleLink>
              ) : (
                <NextLink
                  href={globalOptions.footer?.cta.href || ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg">
                    {globalOptions.footer?.cta.label}{" "}
                    <Icons.RiArrowRightUpLine />
                  </Button>
                </NextLink>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-normal tracking-wide text-white uppercase">
                {tCommon("footer.colTitles.contact")}
              </h2>

              <ul className="flex flex-col gap-6 text-white">
                <li className="group hover:text-spf-highlight-400 flex gap-1 transition-colors duration-300 ease-in-out">
                  <Icons.RiMapPinLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                  <span className="select-none">
                    {globalOptions.contact?.address}
                  </span>
                </li>

                <li className="group hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out">
                  <NextLink
                    href={`mailto:${globalOptions.contact?.email}`}
                    className="flex gap-1"
                  >
                    <Icons.RiMailLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                    <span>{globalOptions.contact?.email}</span>
                  </NextLink>
                </li>

                {globalOptions.contact?.phones.map(({ phone }, index) => (
                  <li
                    key={`phone-numbers-${[index]}`}
                    className="group hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out"
                  >
                    <NextLink href={`tel:${[phone]}`} className="flex gap-1">
                      <Icons.RiPhoneLine className="text-spf-green-300 group-hover:text-spf-highlight-400 transition-colors duration-300 ease-in-out" />
                      <span>{phone}</span>
                    </NextLink>
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
