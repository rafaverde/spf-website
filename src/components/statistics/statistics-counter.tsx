"use client";

import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

interface StatisticsCounterProps {
  value: number;
  title?: string;
  prefix?: string;
  sufix?: string;
  decimals?: number;
  className?: string;
}

export default function StatisticsCounter({
  value,
  title,
  prefix,
  sufix,
  decimals,
  className,
}: StatisticsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) => {
    const isFloat = value % 1 !== 0;
    const numDecimals = decimals ?? (isFloat ? 1 : 0);

    return new Intl.NumberFormat("es-UY", {
      minimumFractionDigits: numDecimals,
      maximumFractionDigits: numDecimals,
    }).format(latest);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center py-10",
        className,
      )}
    >
      {prefix && (
        <span className="font-display text-4xl leading-5 font-extrabold text-white">
          {prefix}
        </span>
      )}
      <div className="flex">
        <motion.span className="font-display text-7xl font-extrabold text-white">
          {displayValue}
        </motion.span>
        {sufix && (
          <span className="font-display text-7xl font-extrabold text-white">
            {sufix}
          </span>
        )}
      </div>
      {title && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-spf-yellow-400 mt-1"
        >
          {title}
        </motion.span>
      )}
    </div>
  );
}
