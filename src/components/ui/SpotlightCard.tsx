import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard = ({
  children,
  className = "",
}: SpotlightCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) => {
    const rect = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(239,68,68,0.25),
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;