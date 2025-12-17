import { RiYoutubeLine } from "@remixicon/react";
import { Button } from "../ui/button";
import { getPlayListVideos } from "@/lib/youtube/get-playlist-videos";
import VideoCarousel from "../video/video-carousel";

export default async function VideosSection() {
  const videos = await getPlayListVideos({ maxResults: 6 });

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:px-0">
        <div className="flex flex-col items-end-safe justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-spf-yellow-400 text-4xl">Canal Forestal</h2>
            <p className="text-spf-green-900">
              Descubre por qué estamos orgullosos de ser forestales. 
            </p>
          </div>
          <Button size="lg">
            Ir a YouTube <RiYoutubeLine className="size-6" />
          </Button>
        </div>

        {/* Carrossel de vídeos */}
        <VideoCarousel videos={videos} />
      </div>
    </section>
  );
}
