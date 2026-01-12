import { Button } from "@/components/ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function VinculationsSection() {
  return (
    <section className="bg-spf-green-100 py-20">
      <div className="text-spf-green-900 container mx-auto space-y-6 px-4">
        <h2 className="text-4xl">Impulsamos</h2>

        {/* Consorcio Forestal Maderero  */}
        <div className="border-spf-green-300 grid gap-6 border-b py-11 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-spf-green-500 text-2xl">
              Consorcio Forestal Maderero 
            </h3>
            <p>
              El consorcio, integrado por la SPF, INIA y Fundación Latitud –
              LATU, tiene como objetivo coordinar, complementar y promover
              capacidades entre los organismos públicos y privados, tanto
              nacionales como extranjeros, que se dedican a la investigación y
              el desarrollo tecnológico, junto con los productores forestales. 
            </p>
            <p>
              Su finalidad es mejorar la productividad y competitividad del
              sector forestal, fortaleciendo su inserción en el mercado
              internacional. 
            </p>
          </div>

          <div className="relative min-h-[380px] w-full overflow-hidden rounded-4xl">
            <div className="absolute inset-0">
              <Image
                src="/about-us/consorcio-forestal-maderero.webp"
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
            </div>
          </div>
        </div>

        {/* Centro Tecnológico Forestal Maderero  */}
        <div className="border-spf-green-300 grid gap-6 border-b py-11 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-spf-green-500 text-2xl">
              Centro Tecnológico Forestal Maderero 
            </h3>
            <p>
              El CENTRO TECNOLÓGICO FORESTAL MADERERO (CTFM) surge en el marco
              del Acuerdo de Inversión ROU – UPM, en el que se crea un
              fideicomiso y el Fondo de Innovación Sectorial (FIS). 
            </p>
            <p>
              La gobernanza del CTFM está constituida por el Ministerio de
              Industria, Energía y Minería (MIEM, quien preside), el Ministerio
              de Ganadería, Agricultura y Pesca (MGAP, a través de la Dirección
              General Forestal), la Oficina de Planeamiento y Presupuesto (OPP),
              la Sociedad de Productores Forestales (SPF) y la Asociación de
              Empresarios de la Madera y Afines (ADEMA). 
            </p>
            <p>
              La misión del CTFM es promover la articulación y coordinación de
              todos los actores de la cadena forestal-maderera, identificando
              desafíos y buscando soluciones innovadoras, mejorando la
              competitividad e impulsando el desarrollo sostenible.
            </p>
            <Link
              href="https://ctfm.uy/"
              title="Centro Tecnológico Forestal Maderero"
              target="_blank"
            >
              <Button size="lg">
                Más información <RiArrowRightUpLine className="size-6" />
              </Button>
            </Link>
          </div>

          <div className="relative min-h-[380px] w-full overflow-hidden rounded-4xl">
            <div className="absolute inset-0">
              <Image
                src="/about-us/centro-tec-forestal-maderero.webp"
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
            </div>
          </div>
        </div>

        {/* PEFC y FSC  */}
        <div className="border-spf-green-300 gap-6 border-b py-11 md:grid md:grid-cols-12">
          <div className="space-y-6 md:col-span-9">
            <h3 className="text-spf-green-500 text-2xl">
              PEFC y FSC<sup className="text-base">®</sup>
            </h3>
            <p>
              <span className="font-bold uppercase">
                ¿Qué significa estar certificados?
              </span>
              <br />
              Garantiza que la producción forestal cumple con estándares
              internacionales de manejo sostenible, conservación ambiental y
              responsabilidad social. Es clave para que los productos de madera
              y celulosa sean aceptados en mercados globales exigentes.
            </p>
            <p className="font-bold">
              FSC y PEFC son los dos sellos internacionales que certifican que
              el bosque cuide los estándares internacionales relacionados a la
              sostenibilidad 
            </p>
            <p>
              PEFC Uruguay es la instancia nacional del sistema internacional
              PEFC (Programme for the Endorsement of Forest Certification), que
              promueve la gestión sostenible de los bosques mediante un sistema
              de certificación reconocido globalmente. Su objetivo es asegurar
              que los productos forestales —como madera, papel y sus derivados—
              provengan de bosques manejados de forma ambientalmente
              responsable, socialmente beneficiosa y económicamente viable. En
              Uruguay, PEFC adapta estos estándares a la realidad local,
              garantizando trazabilidad, buenas prácticas y transparencia en
              toda la cadena forestal. 
            </p>
            <p>
              FSC (Forest Stewardship Council) es una organización internacional
              sin fines de lucro que promueve la gestión ambientalmente
              apropiada, socialmente beneficiosa y económicamente viable de los
              bosques del mundo. A través de su sistema de certificación, el FSC
              garantiza que los productos forestales —como madera, papel y
              derivados— provienen de bosques gestionados de manera responsable,
              siguiendo estrictos estándares que protegen la biodiversidad, los
              derechos de las comunidades y las condiciones laborales. Su sello
              es reconocido globalmente y representa un compromiso con la
              sostenibilidad en toda la cadena de valor forestal. 
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 md:col-span-3">
            <div className="flex w-full flex-col items-center gap-4">
              <Image
                src="/about-us/logo-pefc.webp"
                alt="PEFC Uruguay logo"
                width={100}
                height={144}
              />
              <Link href="https://www.pefc.org/" title="PEFC" target="_blank">
                <Button size="lg">
                  Más información <RiArrowRightUpLine className="size-6" />
                </Button>
              </Link>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <Image
                src="/about-us/logo-fsc.webp"
                alt="FSC Uruguay logo"
                width={100}
                height={144}
              />
              <Link href="https://fsc.org/es" title="FSC" target="_blank">
                <Button size="lg">
                  Más información <RiArrowRightUpLine className="size-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
