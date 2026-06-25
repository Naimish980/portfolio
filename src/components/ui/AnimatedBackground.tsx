import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090b]">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]"
      />

    </div>
  );
};

export default AnimatedBackground;