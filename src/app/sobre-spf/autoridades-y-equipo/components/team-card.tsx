import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RiLinkedinFill, RiUserLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  jobTitle: string;
  imageSrc?: string;
  linkedInUrl: string;
  className?: string;
}

export default function TeamCard({
  name,
  jobTitle,
  imageSrc,
  linkedInUrl,
  className,
}: TeamCardProps) {
  return (
    <Card
      className={cn(
        "group h-full w-full overflow-hidden rounded-4xl p-0",
        className,
      )}
    >
      <CardHeader className="relative aspect-square p-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="rounded-3xl object-cover"
          />
        ) : (
          <div className="bg-spf-green-900 flex aspect-square h-full w-full flex-col items-center justify-center rounded-3xl">
            <RiUserLine className="text-spf-green-300 size-10" />
          </div>
        )}
      </CardHeader>
      <CardContent className="pb-6">
        <h4 className="text-spf-green-900 text-2xl">{name}</h4>
        <p className="text-spf-green-900">{jobTitle}</p>
        <Link href={linkedInUrl} target="_blank">
          <RiLinkedinFill className="text-spf-green-300 hover:text-spf-green-500 size-6 transition-all duration-500 ease-in-out" />
        </Link>
      </CardContent>
    </Card>
  );
}
