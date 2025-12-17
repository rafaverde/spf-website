import Hero from "@/components/sections/hero";
import AboutSummarySection from "@/components/sections/about-summary-section";
import ExpertiseAreasSection from "@/components/sections/expertise-areas-section";
import PublicationsSection from "@/components/sections/publications-section";
import StaticsSection from "@/components/sections/statistics-section";
import { VideoBackground } from "@/components/ui/video-background";
import VideosSection from "@/components/sections/videos-section";
import { Suspense } from "react";
import VideoCarouselSkeleton from "@/components/video/video-carousel-skeleton";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <VideoBackground />
        <div className="relative z-10 flex flex-col">
          <Hero scrollIndicator />
          <AboutSummarySection />
          <ExpertiseAreasSection />
          <StaticsSection />
          <PublicationsSection />

          <Suspense fallback={<VideoCarouselSkeleton />}>
            <VideosSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
