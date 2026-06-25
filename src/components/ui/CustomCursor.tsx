import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-red-500"
      />

      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-red-500"
      />
    </>
  );
};

export default CustomCursor;