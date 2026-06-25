import { portfolio } from "../../data/portfolio";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Tilt from "react-parallax-tilt";
import {
  FaUserTie,
  FaLaptopCode,
  FaAward,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaUserTie />,
    title: "Experience",
    value: "1.5+ Years",
    color: "from-red-600 to-pink-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Projects",
    value: "8+ Completed",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaAward />,
    title: "Skills",
    value: "18+ Technologies",
    color: "from-pink-500 to-red-600",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "India",
    color: "from-red-500 to-orange-500",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <SectionTitle
          title="About Me"
          subtitle="Passionate IT Engineer with expertise in Desktop Support, Networking and Windows Administration."
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: .8,
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

<div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,.35)]">

<div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-500/20 blur-[100px]" />

<div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-pink-500/20 blur-[90px]" />

</div>

<div className="absolute -left-40 top-0 h-full w-20 -skew-x-12 bg-white/10 transition-all duration-1000 group-hover:left-[130%]" />

<div className="relative z-10">

<h3 className="mb-6 text-3xl font-bold text-white">

👨‍💻 About Me

</h3>

<p className="leading-9 text-zinc-400 whitespace-pre-line">

{portfolio.about}

</p>

<div className="mt-10 flex flex-wrap gap-3">

{[
"Windows",
"AWS",
"Linux",
"Networking",
"Office 365",
"Active Directory",
].map((item)=>(

<span
key={item}
className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white"
>

{item}

</span>

))}

</div>

<button className="mt-10 flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-4 font-semibold transition hover:scale-105">



<FaArrowRight />

</button>

</div>

</div>

</Tilt>

</motion.div>

          {/* Right */}

          <div className="grid gap-6">

            {cards.map((card, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 35px rgba(239,68,68,.25)",
                }}
                className="group rounded-3xl border border-zinc-800 bg-white/5 p-7 backdrop-blur-xl transition-all"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-pink-600 text-2xl text-white">

                    {card.icon}

                  </div>

                  <div>

                    <h4 className="text-zinc-500">
                      {card.title}
                    </h4>

                    <p className="text-xl font-bold text-white">
                      {card.value}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;