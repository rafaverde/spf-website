import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MacondoSignature from "@/components/layout/macondo-signature";
import { getGlobalOptions } from "@/lib/site/get-global-options";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AppLocale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLocaleSeo, siteUrl } from "@/lib/seo/seo.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  const typedLocale = locale as AppLocale;
  const seo = getLocaleSeo(typedLocale);

  return {
    title: {
      template: "%s | SPF - Sociedad de Productores Forestales",
      default: seo.titleDefault,
    },
    description: seo.description,
    alternates: {
      canonical: `/${typedLocale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    keywords: seo.keywords,

    openGraph: {
      title: "SPF - Sociedad de Productores Forestales",
      description: seo.description,
      url: `${siteUrl}/${typedLocale}`,
      siteName: "SPF - Sociedad de Productores Forestales",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
        },
      ],
      locale: seo.ogLocale,
      type: "website",
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  const typedLocale = locale as AppLocale;
  const globalOptions = await getGlobalOptions(typedLocale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={typedLocale} messages={messages}>
      <Header globalOptions={globalOptions} />
      <main>{children}</main>
      <Footer globalOptions={globalOptions} />
      <MacondoSignature className="bg-spf-green-900 relative" />
    </NextIntlClientProvider>
  );
}
