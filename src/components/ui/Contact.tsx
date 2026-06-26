import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import SectionTitle from "./SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
     className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build something amazing together."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-zinc-800 bg-white/5 px-4 py-3md:p-8 ..."
          >

            <h3 className="mb-6 text-2xl sm:text-3xl font-bold text-white">

              Let's Connect 🚀

            </h3>

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: portfolio.email,
                href: `mailto:${portfolio.email}`,
              },

              {
                icon: <FaPhone />,
                title: "Phone",
                value: portfolio.phone,
                href: `tel:${portfolio.phone}`,
              },

              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: portfolio.location,
              },

            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{
                  x: 8,
                }}
                className="mb-5 flex items-center gapx-4 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 transition hover:border-red-500 hover:bg-red-500/10"
              >

                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white">

                  {item.icon}

                </div>

                <div>

                  <p className="text-sm text-zinc-500">

                    {item.title}

                  </p>

                  {item.href ? (

                    <a
                      href={item.href}
                      className="font-semibold text-white hover:text-red-400"
                    >

                      {item.value}

                    </a>

                  ) : (

                    <p className="font-semibold text-white">

                      {item.value}

                    </p>

                  )}

                </div>

              </motion.div>

            ))}

            <div className="mt-10 flex gapx-4 py-3">

              {[
                {
                  icon: <FaLinkedin />,
                  link: portfolio.socials.linkedin,
                },

                {
                  icon: <FaGithub />,
                  link: portfolio.socials.github,
                },

                {
                  icon: <FaInstagram />,
                  link: portfolio.socials.instagram,
                },

              ].map((social, i) => (

                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-xl text-red-400 transition hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white"
                >

                  {social.icon}

                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-5 sm:p-8 backdrop-blur-xl"
          >

            <h3 className="mb-6 text-2xl sm:text-2xl md:text-3xl font-bold text-white">

              Send Message

            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-red-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-red-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-red-500"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .97,
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 py-4 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:shadow-red-500/60"
              >

                <FaPaperPlane />

                Send Message

              </motion.button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;