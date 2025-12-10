import type { Metadata } from "next";
import { Funnel_Display, Vend_Sans } from "next/font/google";
import "./globals.css";

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

const vend = Vend_Sans({
  subsets: ["latin"],
  variable: "--font-vend-sans",
});

export const metadata: Metadata = {
  title: "SPF - Sociedad de Productores Forestales",
  description: "Impulsamos oportunidades en todo Uruguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnel.variable} ${vend.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
