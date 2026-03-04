import type { Metadata } from "next";
import { Funnel_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${funnel.variable} ${publicSans.variable} font-sans antialiased`}
      >
        <main>{children}</main>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />

        <Script
          src="https://hub.fromdoppler.com/public/dhtrack.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
