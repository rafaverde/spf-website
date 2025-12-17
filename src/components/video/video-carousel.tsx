"use client";

import { YoutubePlaylistVideo } from "@/lib/youtube/youtube.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import VideoCarouselItem from "./video-carousel-item";
import { useState } from "react";
import VideoDialog from "./video-dialog";

interface VideoCarouselProps {
  videos: YoutubePlaylistVideo[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [selectedVideo, setSelectedVideo] =
    useState<YoutubePlaylistVideo | null>(null);
  const [open, setOpen] = useState(false);

  function handleSelect(video: YoutubePlaylistVideo) {
    setSelectedVideo(video);
    setOpen(true);
  }

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem
              key={video.id}
              className="w-full basis-full md:basis-1/2 lg:basis-1/3"
            >
              <VideoCarouselItem video={video} onSelect={handleSelect} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute right-1/2 -bottom-12 flex translate-x-1/2 gap-2">
          <CarouselPrevious className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
          <CarouselNext className="border-spf-green-900/30 text-spf-green-900 hover:bg-spf-green-900 hover:border-spf-green-900 bg-spf-green-100/50 static translate-y-0 hover:text-white" />
        </div>
      </Carousel>

      <VideoDialog
        video={selectedVideo}
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedVideo(null);
          setOpen(isOpen);
        }}
      />
    </>
  );
}
