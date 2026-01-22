import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import StatisticsCounter from "@/components/statistics/statistics-counter";
import { getStatistics } from "@/lib/statistics/get-statistics";
import { mapStatisticsByKey } from "@/lib/statistics/statistics.helper";
import Image from "next/image";

export default async function StatisticsPage() {
  const stats = await getStatistics();
  const statsByKey = mapStatisticsByKey(stats);

  return (
    <article className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/sector/bg-header-sector.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle="El Sector Forestal" titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto flex flex-col items-start justify-center gap-8 space-y-11 px-4 lg:flex-row">
            <div className="flex flex-col gap-4">
              <p>
                El sector forestal es un pilar estratégico de la economía
                nacional, con un impacto significativo en el producto interno
                bruto, el empleo, las exportaciones y el desarrollo territorial
                sostenible.
              </p>
              <p>
                Esta relevancia se sustenta en una expansión sostenida del
                patrimonio forestal a lo largo de las últimas tres décadas. El
                impulso inicial más expresivo se registró entre 1990 y 2000,
                período en el que el área plantada se triplicó, escalando de{" "}
                <b>178.925 hectáreas a casi 600.000 hectáreas.</b>
              </p>
              <p>
                La tendencia de crecimiento se mantuvo constante en la década
                siguiente y se consolidó hacia 2020, año en el que el sector
                superó la barrera simbólica del millón de hectáreas (registrando
                un acumulado superior a <b>1,16 millones de ha</b>). Según datos
                de la Dirección General Forestal (MGAP, 2024), actualmente el{" "}
                <b>
                  6,6% de la superficie agropecuaria nacional está destinada a
                  la forestación.
                </b>
              </p>
            </div>

            <div className="bg-muted-foreground w-full rounded-xl p-10 lg:min-w-xs">
              <StatisticsCounter
                value={6.6}
                sufix="%"
                title="Superficie agropecuaria"
                decimals={1}
              />
            </div>
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

          <div className="relative container mx-auto space-y-16 px-4">
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
                title="Valor bruto de producción"
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
          <div className="container mx-auto space-y-16 px-4">
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
          <div className="container mx-auto space-y-16 px-4">
            <header className="max-w-3xl space-y-2">
              <h2 className="text-3xl">
                Productividad y competitividad sectorial
              </h2>
              <p className="text-muted-foreground">
                Indicadores que destacan la eficiencia económica del sector
                forestal frente a otros rubros agroindustriales.
              </p>
            </header>

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="bg-muted-foreground rounded-xl p-10">
                <StatisticsCounter
                  value={4275}
                  prefix="US$"
                  title="Valor agregado por hectárea"
                />
              </div>

              <div className="space-y-6">
                <p>
                  El sector forestal <b>genera 42 empleos cada mil hectáreas</b>
                  , lo que equivale a <b>un empleo por cada 23 hectáreas</b>,
                  principalmente en actividades que combinan labores de
                  silvicultura, industria, logísticas y de servicios. Se trata,
                  en su mayoría, <b>de empleos estables</b>, con niveles de
                  formalidad superiores al promedio nacional, y con
                  oportunidades de formación y desarrollo de capacidades en los
                  territorios donde opera la cadena.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
