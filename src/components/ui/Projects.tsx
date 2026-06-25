import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaArrowRight, FaServer } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <SectionTitle
        title="Featured Projects"
        subtitle="Real-world IT infrastructure, networking, and cloud projects."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#ef4444"
              scale={1.04}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,0.35)]">

                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-red-500/20 blur-[90px]" />
                  <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-orange-500/20 blur-[80px]" />
                </div>

                {/* Shine */}
                <div className="absolute -left-40 top-0 h-full w-20 -skew-x-12 bg-white/10 transition-all duration-1000 group-hover:left-[130%]" />

                <div className="relative z-10">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-pink-500 shadow-lg shadow-red-500/30">
                    <FaServer className="text-2xl text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm text-red-300 transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">

                    <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-5 py-3 font-semibold transition hover:scale-105">
                      <FaGithub />
                      GitHub
                    </button>

                    <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-red-500 hover:text-red-400">
                      View Project
                      <FaArrowRight />
                    </button>

                  </div>

                </div>

              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;