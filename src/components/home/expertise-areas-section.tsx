import { RiArrowRightUpLine } from "@remixicon/react";
import { Button } from "../ui/button";
import AreasGrid from "../areas/areas-grid";
import Link from "next/link";

export default function ExpertiseAreasSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:px-0">
        <div className="flex flex-col items-end-safe justify-between gap-8 md:flex-row">
          <h2 className="text-4xl">Áreas de actuación</h2>
          <Link href="sobre-spf/areas-de-actuacion">
            <Button size="lg">
              Más información <RiArrowRightUpLine />
            </Button>
          </Link>
        </div>

        <AreasGrid />
      </div>
    </section>
  );
}
