import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Cpu, Layout } from "lucide-react";

export default function ProjectCard({ project, index, viewMode = "grid" }) {
    const isList = viewMode === "list";

    return (
        <div className={`relative group flex flex-col h-full ${isList ? "md:flex-row" : ""}`}>
            {/* Dynamic Background Glow */}
            <div
                className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none transition-all duration-700 z-0 scale-105"
                style={{
                    background: `radial-gradient(circle at center, var(--primary), var(--secondary), transparent 70%)`,
                }}
            />

            <motion.div
                className={`relative rounded-[2rem] overflow-hidden border z-10 flex flex-col h-full transition-all duration-500 ${isList ? "md:flex-row md:w-full" : ""}`}
                style={{
                    borderColor: "rgba(var(--border-rgb), 0.2)",
                    backgroundColor: "var(--card-bg)",
                    backdropFilter: "blur(24px)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                    y: isList ? 0 : -10,
                    x: isList ? 10 : 0,
                    borderColor: "var(--primary)",
                    boxShadow: "0 30px 60px -20px rgba(var(--primary-rgb), 0.25)",
                }}
            >
                {/* Banner Section */}
                <div className={`relative overflow-hidden bg-[var(--bg-soft)] z-10 ${isList ? "md:w-1/3 h-56 md:h-full" : "h-56 sm:h-64"}`}>
                    <motion.img
                        src={project.banner}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            DEPLOYED
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-black text-2xl tracking-tighter group-hover:translate-x-1 transition-transform duration-500 drop-shadow-2xl uppercase italic">
                            {project.name}
                        </h3>
                    </div>
                </div>

                {/* Content Area */}
                <div className={`p-6 sm:p-8 relative z-20 flex flex-col flex-grow bg-inherit ${isList ? "md:w-2/3" : ""}`}>
                    {/* Summary & Stats Row */}
                    <div className={`flex flex-col ${isList ? "md:flex-row md:items-center" : ""} gap-6 mb-6`}>
                        <div className="flex items-start gap-4 flex-grow">
                            <div className="w-10 h-10 rounded-xl bg-[rgba(var(--primary-rgb),0.1)] flex items-center justify-center shrink-0 border border-[rgba(var(--primary-rgb),0.2)]">
                                <Layout className="text-[var(--primary)]" size={18} />
                            </div>
                            <p className="text-sm font-medium leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-300 line-clamp-2">
                                {project.summary}
                            </p>
                        </div>

                        {/* Quick Specs - Show prominent in list view */}
                        <div className={`flex gap-3 ${isList ? "md:border-l md:pl-6 border-[rgba(var(--border-rgb),0.2)]" : ""}`}>
                             <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-[var(--primary)] mb-1">
                                    <Terminal size={12} strokeWidth={3} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Stack</span>
                                </div>
                                <span className="text-[10px] font-bold text-[var(--text)]">FullStack</span>
                             </div>
                             <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-[var(--secondary)] mb-1">
                                    <Cpu size={12} strokeWidth={3} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Type</span>
                                </div>
                                <span className="text-[10px] font-bold text-[var(--text)]">Modern App</span>
                             </div>
                        </div>
                    </div>

                    {/* Tags & Actions Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 4).map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg text-[10px] font-black border transition-all duration-500 bg-[var(--bg)] text-[var(--text-muted)] border-[rgba(var(--border-rgb),0.4)] group-hover:border-[rgba(var(--primary-rgb),0.3)] group-hover:text-[var(--primary)] uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 shrink-0">
                            {project.liveLink && (
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--primary)] border border-transparent hover:border-[var(--primary)]/30 transition-all shadow-sm"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    title="Live Preview"
                                >
                                    <ExternalLink size={18} strokeWidth={2.5} />
                                </motion.a>
                            )}
                            {project.projectLink && (
                                <motion.a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:shadow-[var(--primary)]/20 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github size={16} strokeWidth={2.5} />
                                    Source
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
