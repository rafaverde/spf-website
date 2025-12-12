import AboutSummary from "@/components/sections/about-summary";
import Hero from "@/components/sections/hero";
import { VideoBackground } from "@/components/ui/video-background";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <VideoBackground />
        <div className="relative z-10 flex flex-col">
          <Hero scrollIndicator />
          <AboutSummary />
        </div>
      </div>
    </>
  );
}
