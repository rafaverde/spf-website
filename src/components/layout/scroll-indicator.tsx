import { RiArrowDownWideLine } from "@remixicon/react";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

interface ScrollIndicatorProps {
  className?: string;
  delay?: number; // Tempo de atraso para entrada do indicador. Padrão 2s
  jumpTimes?: number; // Número de vezes que o indicador pula. Padrão 3
  repeatTimes?: number | "infinity"; // Número de vezes que se repete a sequência. Padrão 1
}

export function ScrollIndicator({
  className,
  delay = 2000,
  jumpTimes = 3,
  repeatTimes = 1,
}: ScrollIndicatorProps) {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true; // Flag para evitar updates se o componente desmontar

    const sequence = async () => {
      let repeated = 0;

      while (true) {
        repeated++;

        // Estado inicial: invisível
        controls.set({ opacity: 0, y: 0 });

        // Delay inicial 2s
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (!isMounted) return;

        // Aparece suavemente
        await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        // Pulos
        for (let i = 0; i < jumpTimes; i++) {
          if (!isMounted) return;
          // Desce
          await controls.start({
            y: 10,
            transition: { duration: 0.5, ease: "easeIn" },
          });
          // Sobe de volta
          await controls.start({
            y: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          });
        }

        // Fica 1 segundo parado
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!isMounted) return;

        // Some suavemente
        await controls.start({ opacity: 0, transition: { duration: 0.5 } });
        if (!isMounted) return;

        if (typeof repeatTimes === "number" && repeated === repeatTimes) break;
      }
    };

    sequence();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, delay, repeatTimes, jumpTimes]);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      animate={controls}
    >
      <div className="flex flex-col items-center">
        <span className="text-spf-green-100/50 text-xs tracking-widest uppercase">
          Ver más
        </span>
        <RiArrowDownWideLine className="text-spf-green-500/60" />
      </div>
    </motion.div>
  );
}
