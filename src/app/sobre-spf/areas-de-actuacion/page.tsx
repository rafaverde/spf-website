import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import { Button } from "@/components/ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function ExpertiseAreasPage() {
  return (
    <div className="relative min-h-screen w-full">
      <HeroImageBackground imageSrc="/areas/bg-header-areas.webp" />
      <div className="relative z-10 flex flex-col">
        <HeroTitle staticTitle="Áreas de Actuación" titlePosition="end" />

        <section className="bg-white py-20">
          <div className="text-spf-green-900 container mx-auto space-y-11 px-4 lg:px-0">
            <p>
              Representamos a los distintos actores de la cadena forestal en
              Uruguay con el objetivo de fomentar el desarrollo sostenible del
              sector desde lo económico, social y ambiental. Promovemos el
              desarrollo de plantaciones y la conservación y manejo de bosques
              naturales en el país. Contribuimos en la mejora de la inserción
              comercial y el posicionamiento de la industria forestal uruguaya
              en el mundo.
            </p>

            <div
              id="comision-de-sanidad"
              className="border-spf-green-300 grid grid-cols-1 gap-8 border-t py-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  Comisión de sanidad
                </h3>
                <p>
                  La protección forestal es un tema de fundamental importancia
                  para el desarrollo sostenible del sector. Es en este sentido
                  que la Comisión de Sanidad Forestal de la SPF coordina
                  esfuerzos entre los distintos agentes involucrados, los que
                  considera clave a efectos de obtener los beneficios de las
                  importantes inversiones realizadas en implantar, desarrollar y
                  conservar el patrimonio forestal actual y futuro. 
                </p>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/sanidad-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="paif"
              className="border-spf-green-300 grid grid-cols-1 gap-8 border-t py-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">Operativo PAIF</h3>
                <p>
                  Es un sistema de alcance nacional, financiado por las empresas
                  socias, que cada verano trabaja para lograr la detección
                  inmediata de cualquier foco de incendio que pueda amenazar las
                  plantaciones protegidas.
                </p>
                <p>
                  Una vez identificado un foco, se activa de forma rápida y
                  coordinada la respuesta necesaria para impedir su propagación,
                  mediante un ataque inicial rápido y eficaz. 
                </p>
                <p>
                  Los pilares fundamentales del sistema son: prevención,
                  detección, coordinación y despacho, y combate. 
                </p>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/paif-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="asuntos-laborales"
              className="border-spf-green-300 grid grid-cols-1 gap-8 border-t py-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  Asuntos laborales 
                </h3>
                <p>
                  La SPF cuenta con asesoramiento legal en el tema laboral y una
                  Comisión que trabaja en esa área, integrada con representantes
                  de las empresas socias. Su principal función es elaborar las
                  pautas para la negociación tripartita como representante del
                  sector en el Consejo de Salarios, y atender otros asuntos de
                  índole laboral.
                </p>

                <Link
                  href="https://www.gub.uy/ministerio-trabajo-seguridad-social/tematica/trabajo-rural-0"
                  target="_blank"
                >
                  <Button size="lg">
                    Acta Consejo de Salarios Enero 2025 <RiArrowRightUpLine />
                  </Button>
                </Link>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/laborales-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="comunicacion"
              className="border-spf-green-300 grid grid-cols-1 gap-8 border-t py-12 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h3 className="text-spf-green-500 text-4xl">
                  Comisión de comunicación 
                </h3>
                <p>
                  La comunicación es un pilar fundamental en todos los ámbitos y
                  sectores empresariales. Desde esta área se elaboran los 
                  <b>planes anuales de comunicación</b> y se coordinan las 
                  <b>
                    herramientas digitales, las acciones de prensa, la Revista
                    Forestal y las estrategias definidas en los planes
                    institucionales.
                  </b>
                </p>
                <p>
                  También se impulsa el 
                  <b>
                    relacionamiento con distintos actores y públicos de interés
                  </b>
                  , promoviendo una comunicación clara, coherente y alineada con
                  los objetivos de la institución. 
                </p>
                <p>
                  El trabajo del área es 
                  <b>transversal a todas las áreas de la SPF</b>, acompañando y
                  fortaleciendo sus iniciativas. 
                </p>

                <Link href="https://www.revistaforestal.uy/" target="_blank">
                  <Button size="lg">
                    Ir a la Revista Forestal <RiArrowRightUpLine />
                  </Button>
                </Link>
              </div>

              <div className="relative min-h-[400px] w-full overflow-hidden rounded-4xl">
                <Image
                  src="/areas/carousel/comunicacion-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
