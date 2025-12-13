import { RiArrowRightUpLine } from "@remixicon/react";
import { Button } from "../ui/button";
import AreasGrid from "../ui/areas-grid";

export default function ExpertiseAreas() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:px-0">
        <div className="flex items-end-safe justify-between">
          <h2 className="text-4xl">Áreas de actuación</h2>
          <Button>
            Más información <RiArrowRightUpLine />
          </Button>
        </div>

        <AreasGrid />
      </div>
    </section>
  );
}
