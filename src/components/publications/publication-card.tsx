import { Publication } from "@/lib/publications/publication.types";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { RiFilePdf2Fill } from "@remixicon/react";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/utils";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Link href={publication.pdfUrl} target="_blank">
      <Card className="bg-spf-green-100 group h-full p-6">
        <CardContent className="text-spf-green-900 flex h-full flex-col items-center justify-between gap-3">
          <RiFilePdf2Fill className="group-hover:text-spf-highlight-400 m-2 size-12 transition-all duration-500 ease-in-out" />
          <h3 className="text-center leading-tight">{publication.title}</h3>

          <span className="text-center text-sm">
            {formatDate(publication.documentDate)}
          </span>
          <Badge className="tracking-wide uppercase">vista</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
