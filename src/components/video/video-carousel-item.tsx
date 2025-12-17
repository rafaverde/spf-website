"use client";

import { YoutubePlaylistVideo } from "@/lib/youtube/youtube.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { RiPlayCircleFill } from "@remixicon/react";
import { formatDate } from "@/lib/utils";

interface VideoCarouselItemProps {
  video: YoutubePlaylistVideo;
  onSelect?: (video: YoutubePlaylistVideo) => void;
}

export default function VideoCarouselItem({
  video,
  onSelect,
}: VideoCarouselItemProps) {
  return (
    <Card
      className="group h-full cursor-pointer overflow-hidden rounded-4xl p-0"
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(video)}
      aria-label={`Reproduzir vídeo: ${video.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(video);
        }
      }}
    >
      <CardHeader className="relative aspect-video">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />

        <div className="group absolute top-1/2 left-1/2 -translate-1/2">
          <RiPlayCircleFill className="text-spf-green-100/60 group-hover:text-spf-highlight-400/90 size-16 transition-all duration-700 group-hover:scale-110" />
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex h-full flex-col justify-between gap-2">
          <h3 className="text-spf-green-500 text-xl leading-tight tracking-tight">
            {video.title}
          </h3>
          <span className="text-spf-green-900/50 text-sm">
            {formatDate(video.publishedAt)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
