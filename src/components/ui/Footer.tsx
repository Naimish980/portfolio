import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              {portfolio.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              {portfolio.role}
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-zinc-800 pt-6">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {portfolio.name}. All Rights Reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-500"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;