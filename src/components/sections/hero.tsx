"use client";

import { cn } from "@/lib/utils";
import { RiLoader4Line } from "@remixicon/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Typewriter from "../ui/typewriter";

interface HeroProps {
  videoSrc?: string;
  staticTitle?: string;
  dynamicWords?: string[];
}

const DEFAULT_PHRASES = [
  "oportunidades en todo Uruguay",
  "un futuro sostenible",
  "el desarrollo del país",
];

export default function Hero({
  videoSrc = "/spf-hero-video.mp4",
  staticTitle = "Impulsamos",
  dynamicWords = DEFAULT_PHRASES,
}: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Verifica cache para vídeo
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, [videoRef]);

  return (
    <section className="bg-spf-green-900 relative h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
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

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto flex h-full flex-col justify-center px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl pt-20"
        >
          <h1 className="text-5xl font-bold text-white">
            {staticTitle} <br />
            <span className="text-spf-highlight-400 font-normal">
              <Typewriter
                words={dynamicWords}
                waitTime={3000}
                cursorClassName="bg-spf-highlight-400"
              />
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
