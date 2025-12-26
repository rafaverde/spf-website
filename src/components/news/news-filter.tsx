"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewsFiltersProps {
  initialSearch?: string;
  initialCategory?: string;
  categories: {
    slug: string;
    name: string;
  }[];
}

export default function NewsFilters({
  initialSearch = "",
  initialCategory = "",
  categories,
}: NewsFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);

  // debounce simples para busca
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateUrl();
    }, 400);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  function updateUrl() {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (category === "todas") params.delete("category");

    // reset page
    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      {/* Search */}
      <Input
        placeholder="Buscar noticias..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="md:max-w-lg"
        aria-label="Buscar noticias"
      />

      {/* Category */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="hover:text-white md:max-w-lg">
          <SelectValue placeholder="Filtrar por categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas las categorías</SelectItem>

          {categories.map((cat) => (
            <SelectItem key={cat.slug} value={cat.slug}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
