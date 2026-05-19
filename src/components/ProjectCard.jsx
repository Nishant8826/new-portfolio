import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index, viewMode = "grid" }) {
    const isList = viewMode === "list";

    return (
        <div className={`relative group flex flex-col h-full ${isList ? "md:flex-row" : ""}`}>
            {/* Dynamic Background Glow */}
            <div
                className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none transition-all duration-700 z-0 scale-105"
                style={{
                    background: `radial-gradient(circle at center, var(--primary), var(--secondary), transparent 70%)`,
                }}
            />

            <motion.div
                className={`relative rounded-[2rem] overflow-hidden border z-10 flex flex-col h-full transition-all duration-500 ${isList ? "md:flex-row md:w-full" : ""}`}
                style={{
                    borderColor: "rgba(var(--border-rgb), 0.15)",
                    backgroundColor: "var(--card-bg)",
                    backdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                    y: -5,
                    borderColor: "rgba(var(--primary-rgb), 0.3)",
                    boxShadow: "0 25px 50px -12px rgba(var(--primary-rgb), 0.15)",
                }}
            >
                {/* Banner Section */}
                <div className={`relative overflow-hidden bg-[var(--bg-soft)] shrink-0 ${isList ? "md:w-2/5 h-64 md:h-auto" : "h-56 sm:h-64"}`}>
                    <div className="absolute inset-0 bg-[var(--primary)]/5 mix-blend-overlay z-10 pointer-events-none" />
                    <img
                        src={project.banner}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Live Badge */}
                    {project.liveLink && (
                        <div className="absolute top-4 right-4 z-20">
                            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-bold text-white tracking-[0.2em] uppercase flex items-center gap-2 shadow-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                Live App
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className={`p-6 sm:p-8 relative z-20 flex flex-col flex-grow bg-gradient-to-b from-[var(--card-bg)] to-[var(--bg)] ${isList ? "md:w-3/5" : ""}`}>
                    
                    {/* Title & Description */}
                    <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-black text-[var(--text)] tracking-tight mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                            {project.name}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)] line-clamp-3">
                            {project.summary}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-[var(--primary)]/5 text-[var(--text)] border border-[var(--primary)]/10 uppercase tracking-wider group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/10 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Actions / Buttons - Push to bottom */}
                    <div className="mt-auto flex items-center gap-4 pt-5 border-t border-[rgba(var(--border-rgb),0.5)]">
                        {project.projectLink && (
                            <a
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-bold text-[var(--text)] hover:text-[var(--primary)] transition-colors group/btn"
                            >
                                <Github size={18} />
                                <span>Source Code</span>
                                <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all duration-300" />
                            </a>
                        )}
                        
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 hover:scale-110 hover:shadow-[var(--primary)]/40 transition-all duration-300"
                                title="View Live Project"
                            >
                                <ExternalLink size={18} strokeWidth={2.5} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
