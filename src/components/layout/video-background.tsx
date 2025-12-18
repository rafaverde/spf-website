"use client";

import { cn } from "@/lib/utils";
import { RiLoader4Line } from "@remixicon/react";
import { useState, useRef, useEffect } from "react";

interface VideoBackgroundProps {
  videoSrc?: string;
  className?: string;
}

export function VideoBackground({
  videoSrc = "/spf-hero-video.mp4",
  className,
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Verifica cache para vídeo
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, [videoRef]);

  return (
    <div
      className={cn(
        "bg-spf-green-900 fixed inset-0 z-0 h-full w-full",
        className,
      )}
    >
      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="bg-spf-green-900 absolute inset-0 z-10 flex items-center justify-center">
          <RiLoader4Line className="text-spf-green-500 size-12 animate-spin" />
        </div>
      )}
      {/* Video Player */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-1000",
          isVideoLoaded ? "opacity-100" : "opacity-0",
        )}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* Brand Overlay (Verde Multiply) */}
      <div className="bg-spf-green-900/60 absolute inset-0 mix-blend-multiply" />
      {/* Readability Overlay (Gradiente inferior) */}
      <div className="from-spf-green-900/90 absolute inset-0 bg-linear-to-t via-transparent to-black/20" />
    </div>
  );
}
