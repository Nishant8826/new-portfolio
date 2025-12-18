import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ArrowLeft, Filter, Sparkles } from "lucide-react";
import Footer from "../components/Footer";
import { useEffect, useState, useMemo } from "react";
import ThemeSelector from "../components/ThemeSelector";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

    const [selectedTags, setSelectedTags] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [hoverGlow, setHoverGlow] = useState(false);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const tags = useMemo(() => {
        const allTags = projects.flatMap((p) => p.tags || []);
        return Array.from(new Set(allTags));
    }, []);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredProjects = projects.filter((p) =>
        selectedTags.length === 0 ? true : selectedTags.some((tag) => p.tags?.includes(tag))
    );

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen pt-6 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, var(--bg-soft) 0%, var(--primary)/10 50%, var(--secondary)/20 100%)`,
            }}
        >
            {/* Scroll Glow Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 rounded-b-lg z-50 shadow-2xl origin-left"
                style={{
                    scaleX,
                    background: `linear-gradient(to right, var(--accent-2), var(--secondary), var(--primary))`,
                }}
            />

            {/* Animated Ambient Blobs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl top-20 -left-40"
                style={{ backgroundColor: "var(--accent-2)/30" }}
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
            />
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl top-1/2 -right-40"
                style={{ backgroundColor: "var(--primary)/30" }}
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-2 flex flex-col gap-6">
                {/* Sticky Header */}
                <motion.div
                    className="flex items-center justify-between rounded-3xl shadow-2xl p-4 sticky top-4 z-20"
                    style={{
                        backgroundColor: "var(--bg)/60",
                        backdropFilter: "blur(16px)",
                        border: "1px solid var(--border)",
                    }}
                >
                    <motion.button
                        onClick={() => navigate(-1)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
                        style={{
                            backgroundColor: "var(--bg)",
                            border: "1px solid var(--primary)/30",
                            color: "var(--primary)",
                        }}
                    >
                        <ArrowLeft size={20} />
                    </motion.button>

                    <motion.h1
                        className="text-4xl font-extrabold flex items-center gap-2 drop-shadow-md"
                        animate={{ scale: hoverGlow ? 1.05 : 1 }}
                        onHoverStart={() => setHoverGlow(true)}
                        onHoverEnd={() => setHoverGlow(false)}
                        style={{
                            background: `linear-gradient(90deg, var(--accent-2), var(--secondary), var(--primary))`,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        <Sparkles size={26} style={{ color: "var(--accent-2)" }} />
                        All Projects
                    </motion.h1>

                    <motion.button
                        onClick={() => setShowFilters(!showFilters)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
                        style={{
                            backgroundColor: "var(--bg)",
                            border: "1px solid var(--secondary)/40",
                            color: "var(--secondary)",
                        }}
                    >
                        <Filter size={18} />
                        {showFilters ? "Hide" : "Show"}
                    </motion.button>
                </motion.div>

                {/* Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="rounded-2xl shadow-md p-4"
                            style={{
                                backgroundColor: "var(--bg)/60",
                                backdropFilter: "blur(16px)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <motion.div layout className="flex flex-wrap gap-2 pt-2">
                                {tags.map((tag) => {
                                    const active = selectedTags.includes(tag);
                                    return (
                                        <motion.button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            whileHover={{ scale: 1.06 }}
                                            className="px-3 py-1 text-xs rounded-full"
                                            style={{
                                                backgroundColor: active ? "var(--secondary)" : "var(--bg)",
                                                color: active ? "var(--bg)" : "var(--secondary)",
                                                border: active ? "none" : "1px solid var(--secondary)/30",
                                                boxShadow: active ? "0 4px 10px var(--secondary)/30" : "none",
                                            }}
                                        >
                                            {tag}
                                        </motion.button>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Projects Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
                    {filteredProjects.map((p) => (
                        <motion.div
                            key={p.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.07,
                                rotateX: 3,
                                rotateY: -3,
                                boxShadow: "0px 0px 20px var(--accent-2)/40",
                            }}
                        >
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </motion.div>

                <Footer />
            </div>
        </motion.section>
    );
}
