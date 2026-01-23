import HeroImageBackground from "@/components/layout/hero-image-background";
import HeroTitle from "@/components/layout/hero-title";
import { Button } from "@/components/ui/button";
import { generateNewsMetadata } from "@/lib/metadata";
import { getNewsBySlug } from "@/lib/news/get-news-by-slug";
import { NewsItem } from "@/lib/news/news.types";
import { formatDate } from "@/lib/utils";
import { RiArrowLeftLine } from "@remixicon/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const newsPost: NewsItem | null = await getNewsBySlug(params.slug);

  return generateNewsMetadata(newsPost);
}

interface NewsSinglePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsSinglePage({ params }: NewsSinglePageProps) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  console.log(news);

  return (
    <article className="w-full">
      <div className="relative min-h-screen w-full">
        <HeroImageBackground
          imageSrc={news.image ? news.image : "/news/news-placeholder.webp"}
        />
        <div className="relative z-10 flex flex-col">
          <HeroTitle
            staticTitle={news.title}
            titlePosition="end"
            categoryBadge={
              news.category?.name ? news.category.name : "Sin categorización"
            }
            postDate={formatDate(news.publishedAt)}
          />

          <section className="bg-white py-20">
            <div className="container mx-auto max-w-3xl px-4">
              <Link href="/actualidad">
                <Button variant="outline" size="lg">
                  <RiArrowLeftLine />
                  Volver a actualidades
                </Button>{" "}
              </Link>
              <div className="prose prose-lg prose-headings:font-semibold prose-a:text-spf-highlight-400 mx-auto mt-12 [&_h2]:text-3xl">
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
