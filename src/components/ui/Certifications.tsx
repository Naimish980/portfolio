import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";
import {
  FaCertificate,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and continuous learning."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {portfolio.certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor="#ef4444"
                scale={1.03}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >

                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,.35)]">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-500/20 blur-[90px]" />
                    <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-orange-500/20 blur-[80px]" />
                  </div>

                  {/* Shine */}
                  <div className="absolute -left-40 top-0 h-full w-20 -skew-x-12 bg-white/10 transition-all duration-1000 group-hover:left-[130%]" />

                  <div className="relative z-10">

                    <div className="flex items-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-pink-600 shadow-lg shadow-red-500/30">

                        <FaCertificate className="text-2xl text-white" />

                      </div>

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-white">

                      {cert.title}

                    </h3>

                    <div className="mt-5 flex items-center gap-3 text-zinc-400">

                      <FaAward className="text-red-500" />

                      <span>
                        Issued by{" "}
                        <span className="font-semibold text-red-400">
                          {cert.issuer}
                        </span>
                      </span>

                    </div>

                   {cert.link ? (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
  >
    View Certificate
    <FaArrowRight />
  </a>
) : (
  <button
    disabled
    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 cursor-not-allowed opacity-50"
  >
    Certificate Unavailable
  </button>
)}
                  </div>

                </div>

              </Tilt>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;