import Image from "next/image";
import { Button } from "../ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";
import StatisticsCounter from "../statistics/statistics-counter";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const yearsAgroSurface = [
  { year: 1990, value: 178.925 },
  { year: 2000, value: 598.891 },
  { year: 2010, value: 870.424 },
  { year: 2020, value: 1087.109 },
  { year: 2020, value: 1161.851 },
];

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

      <div className="relative container mx-auto px-4">
        <h2 className="text-spf-green-100 text-4xl">El sector en cifras</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <StatisticsCounter
              value={6.6}
              sufix="%"
              title="Superficie Agropecuaria"
              decimals={1}
            />

            <div>
              <Table className="border">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-spf-green-300 text-center">
                      Año
                    </TableHead>
                    <TableHead className="text-spf-green-300 text-center">
                      Total Acumulado (ha)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {yearsAgroSurface.map((item) => (
                    <TableRow key={item.year}>
                      <TableCell className="text-spf-green-100 text-center">
                        {item.year}
                      </TableCell>
                      <TableCell className="text-spf-green-100 text-center">
                        {item.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <StatisticsCounter value={46000} title="Puestos de trabajo" />
          </div>

          <div>
            <StatisticsCounter
              value={3000}
              sufix="M"
              prefix="US$"
              title="Exportaciones"
            />
          </div>
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
