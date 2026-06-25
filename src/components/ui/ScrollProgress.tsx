import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-red-500 via-pink-500 to-orange-500"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
};

export default ScrollProgress;