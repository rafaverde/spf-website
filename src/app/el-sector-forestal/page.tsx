import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import StatisticsCounter from "@/components/statistics/statistics-counter";
import Image from "next/image";

export default function StatisticsPage() {
  return (
    <article className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/sector/bg-header-sector.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle="El Sector Forestal" titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4 lg:px-0">
            <p className="max-w-2xl">
              El sector forestal es un pilar estratégico de la economía
              nacional, con un impacto significativo en el producto interno
              bruto, el empleo, las exportaciones y el desarrollo territorial
              sostenible.
            </p>
          </div>
        </section>

        {/* Contribución económica */}
        <section className="bg-spf-green-900 relative py-24">
          <Image
            src="/sector/bg-section-1.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
          />

          <div className="relative container mx-auto space-y-16 px-4 lg:px-0">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-muted text-3xl">
                Contribución económica del sector
              </h2>
              <p className="text-white">
                Principales indicadores económicos del sector forestal en 2024.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <StatisticsCounter
                value={4100}
                prefix="US$"
                sufix=" M"
                title="Valor Bruto de Producción"
              />
              <StatisticsCounter
                value={4700}
                prefix="US$"
                sufix=" M"
                title="Contribución total"
              />
              <StatisticsCounter
                value={5.8}
                sufix="%"
                decimals={1}
                title="Participación en el PIB"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-muted rounded-xl p-8">
                <p>
                  El valor agregado directo del sector alcanza los{" "}
                  <strong>US$ 2.730 millones</strong>, consolidando su
                  relevancia dentro de la estructura productiva del país.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-8">
                <p>
                  Las exportaciones forestales suman{" "}
                  <strong>US$ 3.000 millones</strong>, representando el{" "}
                  <strong>23%</strong> del total de bienes exportados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Empleo y tributos */}
        <section className="bg-spf-green-500/75 py-24">
          <div className="container mx-auto space-y-16">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-muted text-3xl">
                Empleo, salarios y tributos
              </h2>
              <p className="text-white">
                Impacto del sector forestal en el mercado laboral y la
                recaudación fiscal.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <StatisticsCounter value={23200} title="Empleos directos" />
              <StatisticsCounter value={46000} title="Empleos totales" />
              <StatisticsCounter
                value={2.7}
                sufix="%"
                decimals={1}
                title="Empleo nacional"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <p>
                  Las remuneraciones brutas del sector ascienden a{" "}
                  <strong>US$ 1.250 millones</strong>, reflejando su
                  contribución al ingreso de los hogares.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <p>
                  La contribución fiscal total alcanza los{" "}
                  <strong>US$ 715 millones</strong>, de los cuales{" "}
                  <strong>US$ 340 millones</strong> corresponden a impacto
                  directo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Productividad */}
        <section className="bg-white py-24">
          <div className="container mx-auto space-y-16">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-3xl">
                Productividad y competitividad sectorial
              </h2>
              <p className="text-muted-foreground">
                Indicadores que destacan la eficiencia económica del sector
                forestal frente a otros rubros agroindustriales.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="bg-muted-foreground rounded-xl p-10">
                <StatisticsCounter
                  value={4275}
                  prefix="US$"
                  title="Valor agregado por hectárea"
                />
              </div>

              <div className="space-y-6">
                <p>
                  El sector forestal genera en promedio más de{" "}
                  <strong>cuatro veces</strong> el valor agregado por hectárea
                  que la ganadería o la lechería.
                </p>
                <p>
                  Además, cada <strong>46 hectáreas forestadas</strong>{" "}
                  sostienen un empleo directo o indirecto, posicionando al
                  sector como uno de los más eficientes en términos de impacto
                  económico y social.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
