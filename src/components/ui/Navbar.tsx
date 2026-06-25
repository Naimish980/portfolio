import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-red-500/20 shadow-lg shadow-red-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          Naimish Singh
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-zinc-300 hover:text-white transition group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/30"
          >
            <FaDownload />
            Resume
          </motion.a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden bg-black/90 backdrop-blur-xl md:hidden"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block border-b border-zinc-800 px-6 py-4 text-zinc-300 hover:bg-red-500/10 hover:text-white transition"
          >
            {link.name}
          </a>
        ))}

        <a
          href="/resume.pdf"
          download
          className="block px-6 py-5 text-red-400 font-semibold"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;