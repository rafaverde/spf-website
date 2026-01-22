"use client";

import ErrorDataLoading from "@/components/errors/error-data-loading";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center gap-4">
      <ErrorDataLoading errorTitle="Algo salió mal. Inténtalo de nuevo más tarde o vuelve al principio." />

      <Link href="/">
        <Button>
          <RiArrowLeftLine />
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
