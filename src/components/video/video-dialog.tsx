"use client";

import { YoutubePlaylistVideo } from "@/lib/youtube/youtube.types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState } from "react";
import { RiLoader4Fill } from "@remixicon/react";

interface VideoDialogProps {
  video: YoutubePlaylistVideo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoDialog({
  video,
  open,
  onOpenChange,
}: VideoDialogProps) {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (open) {
      setIsloading(true);
    }
  }, [open, video]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl overflow-hidden p-0">
        {video && (
          <>
            <DialogHeader className="px-4 pt-4">
              <DialogTitle className="font-display text-lg">
                {video.title}
              </DialogTitle>
            </DialogHeader>

            <div className="relative aspect-video w-full">
              {isLoading && (
                <div className="bg-spf-green-900 absolute inset-0 z-10 flex items-center justify-center">
                  <RiLoader4Fill className="size-10 animate-spin text-white/80" />
                </div>
              )}

              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                onLoad={() => setIsloading(false)}
              ></iframe>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
