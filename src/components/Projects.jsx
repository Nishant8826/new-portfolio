import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3); 

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/40 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-[120px]" />

      <div className="relative text-center mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.2]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-slate-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A showcase of some of my best full-stack and mobile apps.
        </motion.p>
      </div>

      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {featured.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Show All Projects →
        </Link>
      </div>
    </section>
  );
}
