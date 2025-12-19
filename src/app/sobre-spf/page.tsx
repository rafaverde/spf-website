import HeroTitle from "@/components/layout/hero-title";
import { HeroVideoBackground } from "@/components/layout/hero-video-background";
import LinkCard from "./components/link-card";
import VinculationsSection from "./components/vinculations-section";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen w-full">
      <HeroVideoBackground />
      <div className="relative z-10 flex flex-col">
        <HeroTitle
          staticTitle="Quiénes Somos"
          titlePosition="end"
          scrollIndicator
        />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-6">
            <p>
              Somos la Sociedad de Productores Forestales del Uruguay (SPF), una
              asociación civil fundada en 1959 que reúne a los principales
              actores de la cadena forestal uruguaya: productores rurales,
              empresas forestales, administradores de fondos de inversión y de
              pensión, viveristas, técnicos, empresas de servicios e industrias
              vinculadas al sector.
            </p>
            <h4 className="text-2xl">
              Hoy, cerca del 90% de los bosques plantados con destino industrial
              en Uruguay pertenecen a nuestros socios.
            </h4>

            <div className="grid grid-cols-1 gap-6 pt-5 md:grid-cols-2">
              <LinkCard
                title="Autoridades y Equipo"
                image="/about-us/bg-card-autoridades.webp"
                href="/sobre-spf/autoridades-y-equipo"
              />

              <LinkCard
                title="Áreas de Actuación"
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
