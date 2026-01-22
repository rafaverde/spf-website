import { Button } from "@/components/ui/button";
import { RiArrowLeftLine, RiCloseCircleLine } from "@remixicon/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-spf-green-900 h-dvh w-full pt-28">
      <div className="container mx-auto grid h-full items-center justify-center gap-8 p-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-end">
          <RiCloseCircleLine className="size-32 text-red-500" />
          <p className="text-primary text-8xl font-black">404</p>
        </div>

        <div className="space-y-5">
          <h2 className="text-primary text-5xl font-bold">
            Ups. <br /> Algo salió mal.
          </h2>
          <p className="text-spf-green-300 text-2xl">
            La página que estás buscando no existe o se ha movido.
          </p>

          <Button asChild size="lg" className="mt-8">
            <Link href="/">
              <RiArrowLeftLine /> Volver arriba
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
