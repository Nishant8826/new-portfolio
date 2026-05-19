import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { ArrowRight, Box, Sparkles } from "lucide-react";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative pb-10 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px]"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--secondary)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto ">
        {/* Premium Section Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 md:mb-24 text-center w-full shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-4 sm:mb-6"
          >
            <Sparkles size={12} className="text-[var(--primary)]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Featured Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6"
            style={{ color: "var(--text)" }}
          >
            Selected{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))"
              }}
            >
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Practical solutions to complex problems, built with a focus on <span className="text-[var(--text)] font-bold">performance</span> and <span className="text-[var(--text)] font-bold">user experience</span>.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {featured.map((p, i) => (
            <div key={i} className="flex flex-col">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          className="mt-5 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--border)] to-transparent" />

          <Link
            to="/projects"
            className="group relative flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden transition-all duration-500"
          >
            {/* Button Background */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(45deg, var(--primary), var(--secondary))",
              }}
            />

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
              View All Projects
              <ArrowRight className="transition-transform duration-500 group-hover:translate-x-2" size={20} strokeWidth={3} />
            </span>
          </Link>

          <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">
            Curated selection of latest works
          </p>
        </motion.div>
      </div>
    </section>
  );
}
