import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
    >
      {/* Header */}
      <div className="relative text-center mb-20">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent drop-shadow-sm"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent-2))",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="mt-5 max-w-2xl mx-auto text-lg"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my most refined creations — where performance meets design.
        </motion.p>

        {/* Subtle gradient underline */}
        <motion.div
          className="mx-auto mt-6 w-24 h-1 rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
          }}
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
          className="inline-block font-semibold px-10 py-3.5 rounded-full shadow-lg transition-all duration-300"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
            color: "var(--text-on-primary)",
            boxShadow: "0 10px 20px var(--accent-shadow)",
          }}
        >
          Show All Projects →
        </Link>
      </motion.div>

      {/* Floating light overlay for premium depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(var(--light-overlay-rgb), 0.3) 0%, transparent 50%)",
        }}
      />
    </section>
  );
}
