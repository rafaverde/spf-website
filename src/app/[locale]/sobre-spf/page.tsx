import HeroTitle from "@/components/layout/hero-title";
import { HeroVideoBackground } from "@/components/layout/hero-video-background";
import LinkCard from "../../../components/about-us/link-card";
import VinculationsSection from "../../../components/about-us/vinculations-section";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  robots: {
    index: false,
  },
};

export default function AboutUsPage() {
  const tAreas = useTranslations("areas");

  return (
    <div className="relative min-h-screen w-full">
      <HeroVideoBackground />
      <div className="relative z-10 flex flex-col">
        <HeroTitle
          staticTitle={tAreas("sectionTitle")}
          titlePosition="end"
          scrollIndicator
        />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-6 px-4">
            <p>{tAreas("sectionDescription")}</p>
            <h4 className="text-2xl">{tAreas("sectionSubtitle")}</h4>

            <div className="grid grid-cols-1 gap-6 pt-5 md:grid-cols-2">
              <LinkCard
                title={tAreas("linkCardTeamTitle")}
                image="/about-us/bg-card-autoridades.webp"
                href="/sobre-spf/autoridades-y-equipo"
              />

              <LinkCard
                title={tAreas("linkCardAreasTitle")}
                image="/about-us/bg-card-areas-actuacion.webp"
                href="/sobre-spf/areas-de-actuacion"
              />
            </div>
          </div>
        </section>

        <VinculationsSection />
      </div>
    </div>
  );
}
