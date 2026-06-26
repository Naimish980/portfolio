import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{
            scale: 1.15,
            rotate: 10,
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[99999] flex h-16 w-16 items-center justify-center rounded-full border border-red-400 bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 text-white shadow-2xl"
          style={{
            boxShadow: "0 0 30px rgba(239,68,68,0.7)",
          }}
        >
          <FaArrowUp className="text-3xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;