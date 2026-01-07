import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface MacondoSignatureProps {
  className?: string;
}

export default function MacondoSignature({ className }: MacondoSignatureProps) {
  return (
    <section className={cn("w-full bg-zinc-900 py-4 text-zinc-100", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex w-fit items-center justify-center gap-3">
          <p className="text-xs leading-0">Desarrollado por</p>
          <Link
            href="https://www.macondo.com.uy"
            target="_blank"
            className="-mt-1 transition-opacity duration-500 ease-in-out hover:opacity-70"
          >
            <Image
              src="/logo-macondo-marketing.svg"
              alt="Macondo Marketing y Comunicación"
              width={112}
              height={20}
            />
          </Link>
          <p className="text-xs leading-0">/</p>
          <Link
            href="https://rakhiestudio.com/"
            target="_blank"
            className="transition-opacity duration-500 ease-in-out hover:opacity-70"
          >
            <Image
              src="/rakhi-marca-negativa.svg"
              alt="Rakhi Comunicación y Marketing Digital"
              width={80}
              height={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
