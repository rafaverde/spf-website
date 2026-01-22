import type { Metadata } from "next";
import { Funnel_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MacondoSignature from "@/components/layout/macondo-signature";
import { GoogleTagManager } from "@next/third-parties/google";

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SPF - Sociedad de Productores Forestales",
    default: "Impulsamos oportunidades en todo Uruguay.",
  },

  description:
    "Somos la Sociedad de Productores Forestales del Uruguay (SPF), una asociación civil fundada en 1959 que reúne a los principales actores de la cadena forestal uruguaya. ",

  keywords: [
    "sector forestal uruguay",
    "forestación en uruguay",
    "sociedad de productores forestales",
    "industria forestal",
    "economía forestal",
    "empleo forestal",
    "exportaciones forestales",
    "estadísticas forestales",
    "noticias forestales",
    "publicaciones forestales",
    "manejo forestal sostenible",
    "sanidad forestal",
    "desarrollo forestal",
    "medio ambiente y forestación",
  ],

  openGraph: {
    title: "SPF - Sociedad de Productores Forestales",
    description:
      "Somos la Sociedad de Productores Forestales del Uruguay (SPF), una asociación civil fundada en 1959 que reúne a los principales actores de la cadena forestal uruguaya. ",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.spf.com.uy",
    siteName: "SPF - Sociedad de Productores Forestales",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${funnel.variable} ${publicSans.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <MacondoSignature className="bg-spf-green-900 relative" />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </body>
    </html>
  );
}
