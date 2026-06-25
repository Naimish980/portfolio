import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and responsibilities."
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-red-600 via-pink-500 to-orange-400" />

        {portfolio.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="relative mb-12 ml-14"
          >

            {/* Timeline Dot */}
            <div className="absolute -left-12 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-pink-500 shadow-[0_0_25px_rgba(239,68,68,0.6)]">
              <FaBriefcase className="text-white" />
            </div>

            {/* Card */}
            <div className="group rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]">

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="mt-2 text-lg text-red-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-300">
                  <FaCalendarAlt />
                  {exp.duration}
                </div>

              </div>

              <p className="mt-6 leading-8 text-zinc-400">
                {exp.description}
              </p>

              <div className="mt-8 grid gap-4">

                {exp.responsibilities?.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 rounded-xl bg-zinc-900/50 p-3 transition hover:bg-red-500/10"
                  >
                    <FaCheckCircle className="mt-1 text-red-500" />

                    <span className="text-zinc-300">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;