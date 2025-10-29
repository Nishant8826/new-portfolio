import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-white via-indigo-50/40 to-purple-50/60 overflow-hidden"
    >
      {/* Soft animated background orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-400/20 rounded-full blur-[120px]"
        animate={{ y: [0, 20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-400/25 rounded-full blur-[140px]"
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="relative text-center mb-20">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-slate-600 mt-5 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my most refined creations — where performance meets design.
        </motion.p>

        {/* Subtle gradient underline */}
        <motion.div
          className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Project Cards Grid */}
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {featured.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            className="transform-gpu"
          >
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </div>

      {/* Call-to-action Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg shadow-purple-300/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Show All Projects →
        </Link>
      </motion.div>

      {/* Floating light overlay for premium depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
    </section>
  );
}
