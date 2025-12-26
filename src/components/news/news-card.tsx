import { NewsItem } from "@/lib/news/news.types";
import Image from "next/image";
import { Card } from "../ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link href={`/actualidad/${news.slug}`}>
      <Card
        className="group relative cursor-pointer overflow-hidden p-0"
        role="article"
        aria-label={`Notícia: ${news.title}`}
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={news.image ? news.image : "/news/news-placeholder.webp"}
            alt={news.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            <div className="bg-spf-green-500/50 absolute h-full w-full"></div>
            <div className="absolute h-full w-full bg-linear-to-t from-black/80 from-0% to-70%"></div>
          </div>
        </div>

        <div className="z-20 flex min-h-[380px] w-full flex-col justify-end gap-2 p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          <h3 className="text-xl leading-tight text-white md:text-2xl">
            {news.title}
          </h3>
          <p className="text-white">{news.excerpt}</p>
          <p className="text-xs text-white uppercase">
            {formatDate(news.publishedAt)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
