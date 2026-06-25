import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MouseGlow = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[120px]"
    />
  );
};

export default MouseGlow;