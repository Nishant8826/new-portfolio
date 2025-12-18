import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden border backdrop-blur-xl shadow-lg transition-all duration-500"
            style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card-bg)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 },
            }}
        >
            {/* Animated Gradient Border Glow */}
            <div
                className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 blur-md pointer-events-none transition-opacity duration-500"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent-2))",
                }}
            />

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={project.banner}
                    alt={project.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ rotate: 1 }}
                />
                <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity"
                    style={{
                        background: "linear-gradient(to top, rgba(var(--text-on-bg-rgb),0.7), rgba(var(--text-on-bg-rgb),0.3), transparent)",
                    }}
                />

                {/* Shine animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div
                        className="absolute top-0 left-[-75%] w-[50%] h-full skew-x-[-20deg] animate-shine"
                        style={{
                            background: "linear-gradient(to right, transparent, rgba(var(--text-on-bg-rgb),0.4), transparent)",
                        }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <h3
                    className="font-bold text-2xl mb-2 transition-colors group-hover:text-primary"
                    style={{ color: "var(--text)" }}
                >
                    {project.name}
                </h3>
                <p
                    className="text-sm mb-5 leading-relaxed line-clamp-3"
                    style={{ color: "var(--text-muted)" }}
                >
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:shadow-md"
                            style={{
                                backgroundColor: "var(--tag-bg)",
                                color: "var(--tag-text)",
                                borderColor: "var(--tag-border)",
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300"
                            style={{
                                backgroundColor: "var(--button-bg)",
                                color: "var(--button-text)",
                                backdropFilter: "var(--button-backdrop)",
                                boxShadow: "var(--button-shadow)",
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </motion.a>
                    )}

                    {project.projectLink && (
                        <motion.a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, var(--primary), var(--secondary))",
                                color: "var(--text-on-primary)",
                                boxShadow: "var(--accent-shadow)",
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={18} />
                            Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
