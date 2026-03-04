import HeroTitle from "@/components/layout/hero-title";
import AboutUsSection from "@/components/home/about-us-section";
import ExpertiseAreasSection from "@/components/home/expertise-areas-section";
import PublicationsSection from "@/components/home/publications-section";
import StaticsSection from "@/components/home/statistics-section";
import { HeroVideoBackground } from "@/components/layout/hero-video-background";
import VideosSection from "@/components/home/videos-section";
import { Suspense } from "react";
import VideoCarouselSkeleton from "@/components/video/video-carousel-skeleton";
import NewsSection from "@/components/home/news-section";
import { HOME_HERO_PHRASES } from "@/lib/site/home.config";
import { getStatistics } from "@/lib/statistics/get-statistics";
import { getLocale } from "next-intl/server";
import { AppLocale } from "@/i18n/routing";

export default async function Home() {
  const locale = (await getLocale()) as AppLocale;
  const stats = await getStatistics(locale);

  return (
    <>
      <div className="relative min-h-screen w-full">
        <HeroVideoBackground />
        <div className="relative z-10 flex flex-col">
          <HeroTitle scrollIndicator dynamicWords={HOME_HERO_PHRASES} />
          <AboutUsSection />
          <ExpertiseAreasSection />
          <StaticsSection stats={stats} />
          <PublicationsSection />

          <Suspense fallback={<VideoCarouselSkeleton />}>
            <VideosSection />
          </Suspense>

          <NewsSection />
        </div>
      </div>
    </>
  );
}
