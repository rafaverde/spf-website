import { RiArrowRightUpLine } from "@remixicon/react";
import { Button } from "../ui/button";
import AreasGrid from "../areas/areas-grid";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ExpertiseAreasSection() {
  const tCommon = useTranslations("common");
  const tAreas = useTranslations("areas");

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col items-end-safe justify-between gap-8 md:flex-row">
          <h2 className="text-4xl">{tAreas("sectionTitle")}</h2>
          <Link href="/sobre-spf/areas-de-actuacion">
            <Button size="lg">
              {tCommon("actions.moreInfo")} <RiArrowRightUpLine />
            </Button>
          </Link>
        </div>

        <AreasGrid />
      </div>
    </section>
  );
}
