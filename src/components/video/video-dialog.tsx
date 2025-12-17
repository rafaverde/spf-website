"use client";

import { YoutubePlaylistVideo } from "@/lib/youtube/youtube.types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

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
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
