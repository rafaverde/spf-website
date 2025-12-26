import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroImageBackgroundProps {
  imageSrc: string;
  className?: string;
}
export default function HeroImageBackground({
  imageSrc,
  className,
}: HeroImageBackgroundProps) {
  return (
    <div
      className={cn(
        "bg-spf-green-900 fixed inset-0 z-0 h-full w-full",
        className,
      )}
    >
      <div className="h-full w-full">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="inset-0 top-0 left-0 z-0 h-full w-full object-cover opacity-65"
        />

        <div className="bg-spf-green-500/30 absolute h-full w-full"></div>
        <div className="absolute h-full w-full bg-linear-to-t from-black/80 from-0% to-25%"></div>
      </div>
    </div>
  );
}
