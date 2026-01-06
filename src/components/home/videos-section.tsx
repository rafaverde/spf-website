import { RiEmotionSadLine, RiYoutubeLine } from "@remixicon/react";
import { Button } from "../ui/button";
import { getPlayListVideos } from "@/lib/youtube/get-playlist-videos";
import VideoCarousel from "../video/video-carousel";
import Link from "next/link";
import { YoutubePlaylistVideo } from "@/lib/youtube/youtube.types";

export default async function VideosSection() {
  let videos: YoutubePlaylistVideo[] = [];

  try {
    videos = await getPlayListVideos({ maxResults: 6 });
  } catch (error) {
    console.error("Failed to load YouTube videos", error);
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col items-end-safe justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-spf-yellow-400 text-4xl">Canal Forestal</h2>
            <p className="text-spf-green-900">
              Descubre por qué estamos orgullosos de ser forestales. 
            </p>
          </div>
          <Link
            href={`https://www.youtube.com/playlist?list=${process.env.YOUTUBE_PLAYLIST_ID}`}
            target="_blank"
            title="Ir a Youtube Playlist"
          >
            <Button size="lg">
              Ir a YouTube <RiYoutubeLine className="size-6" />
            </Button>
          </Link>
        </div>

        {/* Carrossel de vídeos */}
        {videos.length > 0 ? (
          <VideoCarousel videos={videos} />
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-1 py-10 text-center">
            <RiEmotionSadLine className="text-spf-green-500 size-10" />
            <p className="text-muted-foreground text-sm">
              Los videos no están disponibles en este momento. <br />
              <strong>Accede a nuestro canal usando el botón de arriba.</strong>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
