import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden border border-white/40 bg-white/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
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
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none"></div>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={project.banner}
                    alt={project.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ rotate: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-40 group-hover:opacity-70 transition-opacity"></div>

                {/* Shine animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"></div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <h3 className="font-bold text-2xl text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {project.name}
                </h3>
                <p className="text-sm text-slate-700/80 mb-5 leading-relaxed line-clamp-3">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm transition-all group-hover:shadow-md hover:bg-indigo-100"
                            whileHover={{ scale: 1.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Buttons (Always visible, glassy style) */}
                <div className="flex gap-3">
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-indigo-700 font-semibold text-sm shadow-md hover:bg-white/90 hover:shadow-lg transition-all duration-300"
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
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-md hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300"
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
