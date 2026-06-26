import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

      {/* Background Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-red-600/20 blur-[140px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-red-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg font-semibold text-red-500"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl"
          >
            {portfolio.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="mt-6 text-2xl font-semibold text-red-400"
          >
            {portfolio.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
          >
            {portfolio.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.a
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 25px rgba(239,68,68,.6)",
  }}
  whileTap={{ scale: 0.95 }}
  href="/portfolio/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-7 py-4 font-semibold text-white"
>
  <FaDownload />
  Download Resume
</motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-3 rounded-xl border border-red-500 px-7 py-4 text-white transition hover:bg-red-500/10"
            >
              <FaEnvelope />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="mt-14 grid grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-red-500">2.5+</h3>
              <p className="mt-2 text-zinc-400">Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-500">18+</h3>
              <p className="mt-2 text-zinc-400">Skills</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-500">8+</h3>
              <p className="mt-2 text-zinc-400">Projects</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 1.2,
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-red-500 opacity-30 blur-[120px]" />

            <img
              src="https://naimish980.github.io/portfolio/profile.jpeg"
              alt={portfolio.name}
              className="relative h-80 w-80 rounded-full border-4 border-red-500 object-cover shadow-[0_0_60px_rgba(239,68,68,.5)] md:h-96 md:w-96"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-red-500"
      >
        <HiChevronDoubleDown size={34} />
      </motion.a>
    </section>
  );
};

export default Hero;