import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function ProjectsPage() {
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 20,
        restDelta: 0.001,
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white"
        >

            {/* 🔵 Scroll Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
            />
            {/* Animated background gradient blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-indigo-200 bg-white/40 hover:bg-white/60 cursor-pointer text-indigo-700 shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium hidden sm:inline">Back</span>
                </motion.button>

                {/* Gradient Overlay behind title */}
                <div className="relative text-center mb-20">
                    <motion.div
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-pink-300/20 blur-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    />

                    <motion.h1
                        className="relative text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-[1.5]"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        All Projects
                    </motion.h1>
                </div>

                {/* Project Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40, rotateX: 10 },
                                visible: { opacity: 1, y: 0, rotateX: 0 },
                            }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.03,
                                rotateX: 3,
                                rotateY: -3,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <ProjectCard project={p} index={i} />
                        </motion.div>
                    ))}
                </motion.div>
                <ScrollToTop />
            </div>
            <Footer />
        </motion.section>
    );
}
