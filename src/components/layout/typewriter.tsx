"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  words?: string[];
  className?: string;
  cursorClassName?: string;
  waitTime?: number;
}

export default function Typewriter({
  words,
  className,
  cursorClassName,
  waitTime = 2000,
}: TypewriterProps) {
  if (!words) {
    return;
  }

  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);

  // Ref para manipular o DOM diretamente (Performance + Type Safety)
  const spanRef = useRef<HTMLSpanElement>(null);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words[index] ? words[index].slice(0, latest) : "",
  );

  // Mágica aqui: Atualiza o texto sem passar pelo React Render Cycle
  useMotionValueEvent(displayText, "change", (latest) => {
    if (spanRef.current) {
      // Adicionamos o Zero Width Space (\u200B) aqui também
      spanRef.current.textContent = latest + "\u200B";
    }
  });

  useEffect(() => {
    let controls: any;

    const runLoop = async () => {
      const currentWord = words[index];
      if (!currentWord) return;

      // 1. Escreve
      count.set(0);
      controls = animate(count, currentWord.length, {
        type: "tween",
        duration: 1.5,
        ease: "linear",
      });

      try {
        await controls;
      } catch {
        return;
      }

      // 2. Espera
      await new Promise((resolve) => setTimeout(resolve, waitTime));

      // 3. Apaga
      controls = animate(count, 0, {
        type: "tween",
        duration: 0.8,
        ease: "linear",
      });

      try {
        await controls;
      } catch {
        return;
      }

      // 4. Troca
      setIndex((prev) => (prev + 1) % words.length);
    };

    runLoop();

    return () => {
      if (controls) controls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, waitTime, words]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <motion.span ref={spanRef} className="whitespace-normal">
        {/* Renderiza o espaço invisível inicialmente para manter altura */}
        {"\u200B"}
      </motion.span>

      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className={cn(
          "bg-spf-highlight-400 ml-1 inline-block h-[1em] w-[3px] align-middle",
          cursorClassName,
        )}
      />
    </span>
  );
}
