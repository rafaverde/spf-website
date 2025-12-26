import Image from "next/image";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import StatisticsCounter from "../statistics/statistics-counter";
import Link from "next/link";

export default function StatisticsSection() {
  return (
    <section className="bg-spf-green-500 relative w-full py-20">
      <Image
        src="/bg-cifras.webp"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative container mx-auto px-4 lg:px-0">
        <h2 className="text-spf-green-100 text-4xl">El sector en cifras</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <StatisticsCounter
            value={6.6}
            sufix="%"
            title="Áreas forestadas"
            decimals={1}
          />
          <StatisticsCounter value={46000} title="Puestos de trabajo" />
          <StatisticsCounter
            value={3000}
            sufix="M"
            prefix="US$"
            title="Exportaciones"
          />
        </div>

        <div className="text-right">
          <Link href={"/el-sector-forestal"}>
            <Button
              size="lg"
              className="border-spf-green-100 border bg-transparent"
            >
              Más cifras <RiArrowRightUpLine />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
