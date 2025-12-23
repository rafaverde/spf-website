"use client";

import { cn } from "@/lib/utils";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}
export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageUrl(page: number) {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* Previous */}
      <Link
        href={createPageUrl(currentPage - 1)}
        aria-disabled={currentPage === 1}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors",
          currentPage === 1
            ? "text-muted-foreground pointer-events-none"
            : "hover:bg-muted",
        )}
        scroll={false}
      >
        <RiArrowLeftSLine />
        Anterior
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={createPageUrl(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md text-sm transition-colors",
              page === currentPage
                ? "bg-spf-green-900 text-white"
                : "hover:bg-muted",
            )}
            scroll={false}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next */}
      <Link
        href={createPageUrl(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors",
          currentPage === totalPages
            ? "text-muted-foreground pointer-events-none"
            : "hover:bg-muted",
        )}
        scroll={false}
      >
        Siguiente
        <RiArrowRightSLine className="size-5" />
      </Link>
    </nav>
  );
}

/**
 * Retorna um range de páginas visíveis
 * Ex: 1 … 4 5 6 … 10
 */
function getVisiblePages(
  currentPage: number,
  totalPages: number,
  delta = 1,
): number[] {
  const pages: number[] = [];

  const start = Math.max(1, currentPage - delta);
  const end = Math.min(totalPages, currentPage + delta);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}
