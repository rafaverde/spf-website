"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";
import { Link as LocaleLink } from "@/i18n/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { RiMenuLine } from "@remixicon/react";
import { GlobalOptions } from "@/lib/site/global.types";
import LocaleSwitcher from "./locale-switcher";

interface HeaderProps {
  globalOptions: GlobalOptions;
}

export default function Header({ globalOptions }: HeaderProps) {
  const pathname = usePathname();
  const localePrefixRegex = /^\/(es|en)(?=\/|$)/;

  const toLocaleHref = (href: string) => {
    const normalized = href.replace(localePrefixRegex, "");
    return normalized === "" ? "/" : normalized;
  };

  const isInternalHref = (href: string) => href.startsWith("/");

  // Motion hook for Scroll event
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const wasScrolled = latest > 50; // Muda estado com 50px de scroll down
    if (wasScrolled !== isScrolled) {
      setIsScrolled(wasScrolled);
    }
  });

  return (
    <motion.header
      id="top"
      className="fixed top-0 right-0 left-0 z-50 w-full border-b border-transparent px-4"
      animate={{
        height: isScrolled ? "64px" : "100px",
      }}
    >
      <motion.div
        className={cn(
          "container mx-auto mt-8 flex h-full items-center justify-between rounded-4xl px-4 md:mt-15 md:px-6",
        )}
        animate={{
          backgroundColor: isScrolled
            ? "var(--color-spf-green-100)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled ? "0 3px 4px -1px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        {/* Logo */}
        <LocaleLink href={isScrolled ? "/#top" : "/"}>
          <Image
            src={
              globalOptions.branding?.logo_principal || "/spf-logo-color.svg"
            }
            alt="Sociedad de Productores Forestales de Uruguay"
            width={250}
            height={0}
            className={cn(
              "h-auto w-[140px] transition-all duration-300",
              !isScrolled && "h-auto brightness-0 invert md:w-[250px]",
            )}
            priority
          />
        </LocaleLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {globalOptions.navigation?.map((item, index) => {
            const href = toLocaleHref(item.href);
            const isActive =
              href === "/"
                ? /^\/(es|en)$/.test(pathname)
                : pathname.endsWith(href);

            return (
              <div key={index}>
                {isInternalHref(item.href) ? (
                  <LocaleLink
                    href={href}
                    className={cn(
                      "group relative",
                      isScrolled ? "py-1" : "py-2",
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm font-bold tracking-tight uppercase transition-colors duration-300",
                        isScrolled ? "text-spf-green-900" : "text-white",
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "absolute right-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                        isScrolled ? "bg-spf-green-500" : "bg-spf-yellow-400",
                        isActive && "w-full",
                      )}
                    ></span>
                  </LocaleLink>
                ) : (
                  <NextLink
                    href={item.href}
                    className={cn(
                      "group relative",
                      isScrolled ? "py-1" : "py-2",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className={cn(
                        "text-sm font-bold tracking-tight uppercase transition-colors duration-300",
                        isScrolled ? "text-spf-green-900" : "text-white",
                      )}
                    >
                      {item.label}
                    </span>
                  </NextLink>
                )}
              </div>
            );
          })}

          <LocaleSwitcher />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="group hover:bg-transparent lg:hidden"
            >
              <RiMenuLine
                className={cn(
                  "group-hover:text-spf-yellow-400 size-8 transition-colors duration-300",
                  isScrolled ? "text-spf-green-900" : "text-white",
                )}
              />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="bg-spf-green-900/90 h-full border-none text-white"
          >
            <SheetHeader className="border-spf-green-500/50 items-center border-b py-10">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Menu principal do site
              </SheetDescription>

              <Image
                src={
                  globalOptions.branding?.icon_marca || "/spf-icon-color.svg"
                }
                alt="SPF Icon"
                width={40}
                height={40}
                className="size-10"
              />
            </SheetHeader>

            <nav className="mx-auto flex h-full flex-col items-center justify-center gap-4 font-bold uppercase">
              {globalOptions.navigation?.map((item, index) => {
                const href = toLocaleHref(item.href);
                const isActive =
                  href === "/"
                    ? /^\/(es|en)$/.test(pathname)
                    : pathname.endsWith(href);

                return (
                  <div key={index}>
                    {isInternalHref(item.href) ? (
                      <LocaleLink
                        href={href}
                        className={cn("", isActive && "text-spf-yellow-400")}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </LocaleLink>
                    ) : (
                      <NextLink
                        href={item.href}
                        className={cn("", isActive && "text-spf-yellow-400")}
                        onClick={() => setIsMobileOpen(false)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.label}
                      </NextLink>
                    )}
                  </div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.header>
  );
}
