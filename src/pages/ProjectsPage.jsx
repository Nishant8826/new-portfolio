import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ArrowLeft, Filter, Sparkles, Search, LayoutGrid, List, X, MousePointer2 } from "lucide-react";
import Footer from "../components/Footer";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import ThemeSelector from "../components/ThemeSelector";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });
    const theme = useSelector((state) => state.theme.activeTheme);

    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    // Mouse Spotlight Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const tags = useMemo(() => {
        const allTags = projects.flatMap((p) => p.tags || []);
        return Array.from(new Set(allTags)).sort();
    }, []);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredProjects = useMemo(() => {
        return projects.filter((p) => {
            const matchesSearch = 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTags = 
                selectedTags.length === 0 ? true : selectedTags.some((tag) => p.tags?.includes(tag));
            return matchesSearch && matchesTags;
        });
    }, [searchQuery, selectedTags]);

    return (
        <div 
            ref={containerRef}
            className={`${theme} min-h-screen transition-colors duration-500 bg-[var(--bg)] relative overflow-hidden`}
        >
            {/* Mouse Spotlight Background */}
            <div 
                className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.08), transparent 80%)`,
                }}
            />

            {/* Theme Selector */}
            <div className="fixed left-5 bottom-5 z-50">
                <ThemeSelector />
            </div>

            {/* Reading Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
                style={{
                    scaleX,
                    background: `linear-gradient(to right, var(--primary), var(--secondary))`,
                }}
            />

            {/* Background Grain/Noise Effect */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-0 grayscale contrast-150" 
                 style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-4">
                {/* Single Row Responsive Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-[rgba(var(--border-rgb),0.1)] pb-8">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                        {/* Navigation */}
                        <motion.button
                            onClick={() => navigate("/")}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-2xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.2)] text-[var(--text-muted)] hover:text-[var(--primary)] transition-all"
                        >
                            <ArrowLeft size={18} />
                        </motion.button>
                        
                        {/* Main Title - Horizontal & Compact */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col"
                        >
                            <h1 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase flex items-center gap-3">
                                <span className="text-[var(--text)]">Archive</span>
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
                                    Projects.
                                </span>
                            </h1>
                            <motion.p 
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ delay: 0.3 }}
                                 className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mt-1"
                            >
                                Technical case-studies and deployments.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Highly Compact Stats */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 sm:gap-6 bg-[var(--bg-soft)] px-6 py-3 rounded-2xl border border-[rgba(var(--border-rgb),0.15)] shadow-sm"
                    >
                         <div className="flex flex-col">
                            <span className="text-xl font-black text-[var(--text)] leading-none mb-1">{projects.length}</span>
                            <span className="text-[8px] uppercase font-black tracking-widest text-[var(--text-muted)]">Total</span>
                         </div>
                         <div className="w-px h-6 bg-[var(--border)] opacity-20" />
                         <div className="flex flex-col">
                            <span className="text-xl font-black text-[var(--primary)] leading-none mb-1">{filteredProjects.length}</span>
                            <span className="text-[8px] uppercase font-black tracking-widest text-[var(--text-muted)]">Shown</span>
                         </div>
                    </motion.div>
                </div>

                {/* Professional Controls Bar - Sticky with blur */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12 items-stretch lg:items-center sticky top-2 z-40">
                    {/* Search Bar */}
                    <div className="relative flex-grow group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--primary)] transition-colors" size={18} />
                        <input 
                            type="text"
                            placeholder="Find projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-16 py-4 rounded-3xl bg-[var(--card-bg)] backdrop-blur-2xl border border-[rgba(var(--border-rgb),0.15)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 outline-none transition-all font-medium placeholder:text-[var(--text-muted)]/50 shadow-lg"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-[var(--bg-soft)] rounded-full transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* View Mode & Toggles */}
                    <div className="flex gap-1 p-1 rounded-2xl bg-[var(--card-bg)] backdrop-blur-2xl border border-[rgba(var(--border-rgb),0.15)] shadow-lg shrink-0 h-14 items-center px-1">
                        <button 
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-2 px-5 h-full rounded-xl transition-all duration-300 font-bold text-[10px] uppercase tracking-widest ${viewMode === "grid" ? "bg-[var(--primary)] text-white shadow-lg" : "text-[var(--text-muted)] hover:text-[var(--text)]"}`}
                        >
                            <LayoutGrid size={14} />
                            Grid
                        </button>
                        <button 
                            onClick={() => setViewMode("list")}
                            className={`flex items-center gap-2 px-5 h-full rounded-xl transition-all duration-300 font-bold text-[10px] uppercase tracking-widest ${viewMode === "list" ? "bg-[var(--primary)] text-white shadow-lg" : "text-[var(--text-muted)] hover:text-[var(--text)]"}`}
                        >
                            <List size={14} />
                            List
                        </button>
                    </div>
                </div>

                {/* Main Content Layout - Using items-start for sticky sidebar */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Responsive Filters - Sticky Sidebar Desktop */}
                    <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-24">
                        <div className="flex items-center gap-2 mb-4 lg:mb-6">
                            <Filter size={16} className="text-[var(--primary)]" />
                            <h3 className="font-black uppercase tracking-[0.2em] text-[10px] text-[var(--text-muted)]">Category_Filter</h3>
                        </div>
                        
                        {/* Horizontal scroll on mobile, flex-col on desktop */}
                        <div className="flex overflow-x-auto pb-4 lg:pb-0 lg:flex-col gap-2 no-scrollbar scroll-smooth">
                            <button
                                onClick={() => setSelectedTags([])}
                                className={`px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border text-left flex justify-between items-center whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                                    selectedTags.length === 0 
                                        ? "bg-[var(--text)] text-[var(--bg)] border-[#000]" 
                                        : "bg-transparent text-[var(--text-muted)] border-[rgba(var(--border-rgb),0.2)] hover:border-[var(--primary)]"
                                }`}
                            >
                                All Projects
                                <span className="ml-3 text-[9px] opacity-40 hidden lg:block">{projects.length}</span>
                            </button>
                            {tags.map((tag) => {
                                const active = selectedTags.includes(tag);
                                const count = projects.filter(p => p.tags?.includes(tag)).length;
                                return (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border text-left flex justify-between items-center whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                                            active 
                                                ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-[var(--primary)]/20" 
                                                : "bg-transparent text-[var(--text-muted)] border-[rgba(var(--border-rgb),0.2)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                        }`}
                                    >
                                        {tag}
                                        <span className="ml-3 text-[9px] opacity-40 hidden lg:block">{count}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Pro Tip Card - Sticky with aside */}
                        <div className="hidden lg:block mt-10 p-6 rounded-[2rem] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 shadow-sm">
                            <MousePointer2 size={24} className="text-[var(--primary)] mb-4" strokeWidth={3} />
                            <h4 className="font-black text-xs uppercase tracking-widest mb-2">Pro Tip</h4>
                            <p className="text-[10px] font-bold text-[var(--text-muted)] leading-relaxed italic">
                                Use 'Source' to explore architecture and 'Demo' for live implementations.
                            </p>
                        </div>
                    </aside>

                    {/* Project Feed - With Stacking Cards Effect */}
                    <main className="flex-grow">
                        <motion.div 
                            layout
                            className={viewMode === "grid" 
                                ? "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" 
                                : "flex flex-col gap-12 lg:gap-20" // More gap for stacking effect in list mode
                            }
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((p, index) => (
                                    <motion.div
                                        key={p.id}
                                        layout
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ 
                                            duration: 0.5,
                                            delay: (index % 4) * 0.1,
                                            ease: "easeOut"
                                        }}
                                        // Stacking Sticky Effect
                                        className={`${
                                            viewMode === "list" 
                                                ? "sticky top-32 md:min-h-[300px]" 
                                                : "h-full"
                                        }`}
                                        style={{
                                            zIndex: index + 10,
                                            // Optional: add a slight scale down or darken as it's covered
                                        }}
                                    >
                                        <ProjectCard project={p} index={index} viewMode={viewMode} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProjects.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-32 text-center">
                                <div className="p-10 rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] mb-8 shadow-inner relative group">
                                    <Search size={64} className="opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <Sparkles size={24} className="absolute top-6 right-6 text-[var(--primary)] animate-pulse" />
                                </div>
                                <h3 className="text-4xl font-black text-[var(--text)] tracking-tight">The void is empty</h3>
                                <p className="text-[var(--text-muted)] mt-4 text-lg font-medium">No projects match your current search parameters.</p>
                                <button 
                                    onClick={() => {
                                        setSelectedTags([]);
                                        setSearchQuery("");
                                    }}
                                    className="mt-10 px-8 py-4 rounded-2xl bg-[var(--text)] text-[var(--bg)] font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl"
                                >
                                    Refactor Search
                                </button>
                            </div>
                        )}
                    </main>
                </div>

                <div className="mt-40">
                    <Footer />
                </div>
            </div>
            
            {/* Styles for outline text */}
            <style jsx>{`
                .text-outline {
                    color: transparent;
                    -webkit-text-stroke: 1.5px var(--text);
                }
            `}</style>
        </div>
    );
}
