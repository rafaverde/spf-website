"use client";

import { motion } from "motion/react";
import Typewriter from "./typewriter";
import { ScrollIndicator } from "./scroll-indicator";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface HeroTitleProps {
  staticTitle?: string;
  titlePosition?: "center" | "end";
  dynamicWords?: string[];
  scrollIndicator?: boolean;
  categoryBadge?: string;
  postDate?: string;
}

export default function HeroTitle({
  staticTitle = "Impulsamos",
  titlePosition = "center",
  dynamicWords,
  scrollIndicator = false,
  categoryBadge,
  postDate,
}: HeroTitleProps) {
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
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {staticTitle} <br />
            <span className="text-spf-highlight-400 font-normal">
              <Typewriter
                words={dynamicWords}
                waitTime={3000}
                cursorClassName="bg-spf-highlight-400"
              />
            </span>
          </h2>

          <div className="mt-4 space-y-4">
            {categoryBadge && <Badge>{categoryBadge}</Badge>}
            {postDate && (
              <span className="block text-sm text-white uppercase">
                {postDate}
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {scrollIndicator && <ScrollIndicator />}
    </section>
  );
}
