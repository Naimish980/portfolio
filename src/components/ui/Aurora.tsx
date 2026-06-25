import { motion } from "framer-motion";

const Aurora = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -120, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -180, 150, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[180px]"
      />

    </div>
  );
};

export default Aurora;