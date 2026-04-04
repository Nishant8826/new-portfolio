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
        {/* Section Header */}
        <div className="relative mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--primary)] to-transparent" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)]">
                  Portfolio Highlights
                </span>
              </motion.div>


              <motion.p
                className="mt-8 text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Practical solutions to complex problems, built with a focus on <span className="text-[var(--text)] font-bold">performance</span> and <span className="text-[var(--text)] font-bold">user experience</span>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <div className="p-8 rounded-[2.5rem] bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.3)] backdrop-blur-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />
                <Sparkles className="text-[var(--primary)] mb-4" size={32} />
                <div className="text-3xl font-black text-[var(--text)] mb-1">10+</div>
                <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Successful Projects</div>
              </div>
            </motion.div>
          </div>
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
