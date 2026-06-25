import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;