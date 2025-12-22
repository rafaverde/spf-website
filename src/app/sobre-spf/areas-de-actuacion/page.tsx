import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import Image from "next/image";

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
          </div>
        </section>
      </div>
    </div>
  );
}
