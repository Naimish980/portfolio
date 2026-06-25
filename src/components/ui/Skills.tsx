import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "Windows 10/11", level: 95, icon: "🪟" },
  { name: "Desktop Support", level: 96, icon: "🖥️" },
  { name: "Hardware Troubleshooting", level: 92, icon: "🛠️" },
  { name: "Networking", level: 90, icon: "🌐" },
  { name: "TCP/IP", level: 88, icon: "📡" },
  { name: "DNS / DHCP", level: 90, icon: "🌍" },
  { name: "Active Directory", level: 90, icon: "👤" },
  { name: "Office 365", level: 90, icon: "📧" },
  { name: "Outlook", level: 89, icon: "📨" },
  { name: "Linux", level: 80, icon: "🐧" },
  { name: "AWS", level: 85, icon: "☁️" },
  { name: "VMware", level: 82, icon: "💻" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies and tools I use to deliver reliable IT solutions."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
            }}
            className="group rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]"
          >

            <div className="mb-5 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {skill.icon}
                </span>

                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              <span className="font-bold text-red-400">
                {skill.level}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="h-full rounded-full bg-gradient-to-r from-red-600 via-pink-500 to-orange-400"
              />

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;