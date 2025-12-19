import Hero from "@/components/home/hero";
import AboutUsSection from "@/components/home/about-us-section";
import ExpertiseAreasSection from "@/components/home/expertise-areas-section";
import PublicationsSection from "@/components/home/publications-section";
import StaticsSection from "@/components/home/statistics-section";
import { VideoBackground } from "@/components/layout/video-background";
import VideosSection from "@/components/home/videos-section";
import { Suspense } from "react";
import VideoCarouselSkeleton from "@/components/video/video-carousel-skeleton";
import NewsSection from "@/components/home/news-section";
import { HOME_HERO_PHRASES } from "@/lib/site/home.config";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <VideoBackground />
        <div className="relative z-10 flex flex-col">
          <Hero scrollIndicator dynamicWords={HOME_HERO_PHRASES} />
          <AboutUsSection />
          <ExpertiseAreasSection />
          <StaticsSection />
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
