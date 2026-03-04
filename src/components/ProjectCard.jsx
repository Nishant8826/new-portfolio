import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <div className="relative group flex flex-col h-full">
            {/* Outer Glow - Not clipped by overflow-hidden */}
            <div
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none transition-all duration-700 z-0 scale-105"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent-2))",
                }}
            />

            <motion.div
                className="relative rounded-3xl overflow-hidden border shadow-lg transition-all duration-500 z-10 flex flex-col h-full"
                style={{
                    borderColor: "rgba(var(--border-rgb), 0.3)",
                    backgroundColor: "var(--card-bg)",
                    backdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(var(--bg-rgb), 0.98)", // Almost solid to block light but keep theme feel
                    borderColor: "var(--primary)",
                    transition: { duration: 0.3 },
                }}
            >
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-[var(--bg-soft)] z-10 border-b border-[rgba(var(--border-rgb),0.1)]">
                    <motion.img
                        src={project.banner}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{
                            background: "linear-gradient(to top, rgba(var(--bg-rgb), 0.95), transparent)",
                        }}
                    />

                    {/* Shine animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                        <div
                            className="absolute top-0 left-[-75%] w-[50%] h-full skew-x-[-20deg]"
                            style={{
                                background: "linear-gradient(to right, transparent, rgba(var(--primary-rgb), 0.2), transparent)",
                                animation: "shine 2s infinite"
                            }}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 relative z-20 flex flex-col flex-grow bg-inherit">
                    <h3
                        className="font-bold text-xl sm:text-2xl mb-2 transition-colors text-[var(--text)]"
                    >
                        {project.name}
                    </h3>
                    <p
                        className="text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors"
                    >
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border transition-all shadow-sm"
                                style={{
                                    backgroundColor: "rgba(var(--bg-rgb), 0.05)",
                                    color: "var(--text)",
                                    borderColor: "rgba(var(--border-rgb), 0.5)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "var(--primary)",
                                    color: "white",
                                    borderColor: "var(--primary)"
                                }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* Buttons Section */}
                    <div className="flex gap-2 sm:gap-3">
                        {project.liveLink && (
                            <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all duration-300 border"
                                style={{
                                    backgroundColor: "rgba(var(--bg-rgb), 0.8)",
                                    color: "var(--text)",
                                    borderColor: "rgba(var(--border-rgb), 0.6)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "var(--bg)",
                                    borderColor: "var(--primary)",
                                    boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink size={16} />
                                Live
                            </motion.a>
                        )}

                        {project.projectLink && (
                            <motion.a
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-300 text-white"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, var(--primary), var(--secondary))",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    filter: "brightness(1.1)",
                                    boxShadow: "0 5px 15px rgba(var(--primary-rgb), 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={16} />
                                Code
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
