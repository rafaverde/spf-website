"use client";

import { easeIn, motion, useAnimation } from "motion/react";
import Typewriter from "../ui/typewriter";
import { RiArrowDownWideLine } from "@remixicon/react";
import { useEffect } from "react";
import { ScrollIndicator } from "../ui/scroll-indicator";
import { cn } from "@/lib/utils";

interface HeroProps {
  staticTitle?: string;
  titlePosition?: "center" | "end";
  dynamicWords?: string[];
  scrollIndicator?: boolean;
}

const DEFAULT_PHRASES = [
  "oportunidades en todo Uruguay",
  "un futuro sostenible",
  "el desarrollo del país",
];

export default function Hero({
  staticTitle = "Impulsamos",
  titlePosition = "center",
  dynamicWords = DEFAULT_PHRASES,
  scrollIndicator = false,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-hidden",
        `justify-${titlePosition}`,
      )}
    >
      {/* Content Layer */}
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-20"
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

      {/* Scroll Indicator */}
      {scrollIndicator && <ScrollIndicator />}
    </section>
  );
}
