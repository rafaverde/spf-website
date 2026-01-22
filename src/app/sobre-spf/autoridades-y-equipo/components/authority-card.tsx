import { RiUserLine } from "@remixicon/react";
import Image from "next/image";

interface AuthorityCardProps {
  imageSrc?: string;
  name: string;
  title?: string;
}

export default function AuthorityCard({
  imageSrc,
  name,
  title,
}: AuthorityCardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="relative h-[380px] w-full overflow-hidden rounded-4xl">
        <div className="absolute h-full w-full">
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="inset-0 z-0 object-cover"
              />
              <div className="bg-spf-green-500/20 relative h-full w-full"></div>
            </>
          ) : (
            <div className="bg-spf-green-900 flex h-full w-full flex-col items-center justify-center">
              <RiUserLine className="text-spf-green-300 size-10" />
            </div>
          )}
        </div>
      </div>
      <div className="text-spf-green-900 flex flex-col justify-center">
        <h3 className="text-4xl">{name}</h3>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  );
}
