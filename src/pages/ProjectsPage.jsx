import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ArrowLeft, Filter, Sparkles } from "lucide-react";
import Footer from "../components/Footer";
import { useEffect, useState, useMemo } from "react";

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
            className="relative min-h-screen pt-6 overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-200"
        >
            {/* Scroll Glow Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-2xl shadow-purple-400/60 origin-left z-50 rounded-b-lg"
            />

            {/* Animated Ambient Blobs */}
            <motion.div
                className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl top-20 -left-40"
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl top-1/2 -right-40"
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-2 flex flex-col gap-6">
                {/* Sticky Header */}
                <motion.div className="flex items-center justify-between bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-4 sticky top-4 z-20">
                    <motion.button
                        onClick={() => navigate(-1)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-700 shadow-sm"
                    >
                        <ArrowLeft size={20} />
                    </motion.button>

                    <motion.h1
                        className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2 drop-shadow-md"
                        animate={{ scale: hoverGlow ? 1.05 : 1 }}
                        onHoverStart={() => setHoverGlow(true)}
                        onHoverEnd={() => setHoverGlow(false)}
                    >
                        <Sparkles size={26} className="text-yellow-400" />
                        All Projects
                    </motion.h1>

                    <motion.button
                        onClick={() => setShowFilters(!showFilters)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 shadow-sm"
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
                            className="bg-white/60 backdrop-blur-xl border border-purple-100 rounded-2xl shadow-md p-4"
                        >
                            <motion.div layout className="flex flex-wrap gap-2 pt-2">
                                {tags.map((tag) => {
                                    const active = selectedTags.includes(tag);
                                    return (
                                        <motion.button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            whileHover={{ scale: 1.06 }}
                                            className={`px-3 py-1 text-xs rounded-full ${active
                                                ? "bg-purple-600 text-white shadow-md shadow-purple-300"
                                                : "bg-white border border-purple-200 hover:bg-purple-50 text-purple-600"
                                                }`}
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
                                shadow: "0px 0px 20px rgba(150,0,250,0.4)",
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
