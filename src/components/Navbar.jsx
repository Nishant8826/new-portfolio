import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar({ resumeUrl }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY && currentY > 80) setIsVisible(false);
            else setIsVisible(true);

            setLastScrollY(currentY);
            setIsScrolled(currentY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 origin-left z-[100]"
                style={{
                    scaleX,
                    background: `linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))`,
                }}
            />

            {/* Navbar */}
            <motion.nav
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-[1000px]:w-[95%] 
                    rounded-2xl px-6 md:px-8 py-4 flex justify-between items-center
                    backdrop-blur-2xl border transition-all duration-500`}
                style={{
                    backgroundColor: isScrolled
                        ? "rgba(var(--bg-rgb),0.8)"
                        : "rgba(var(--bg-rgb),0.4)",
                    borderColor: isScrolled
                        ? "rgba(var(--border-rgb),0.3)"
                        : "rgba(var(--border-rgb),0.2)",
                    boxShadow: isScrolled
                        ? "0 10px 25px rgba(0,0,0,0.1)"
                        : "0 4px 12px rgba(0,0,0,0.05)",
                }}
            >
                {/* Logo */}
                <Logo />

                {/* Desktop Nav - Hide for screen <= 1000px */}
                <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
                    {navLinks.map((name) => (
                        <motion.a
                            key={name}
                            href={`#${name.toLowerCase()}`}
                            className="relative group transition-all duration-300"
                            style={{ color: "var(--text)" }}
                        >
                            <span
                                className="absolute inset-0 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    backgroundImage: `linear-gradient(to right, var(--primary), var(--secondary))`,
                                }}
                            >
                                {name}
                            </span>
                            <span className="group-hover:opacity-0 transition-opacity duration-300">
                                {name}
                            </span>
                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 rounded-full group-hover:w-full"
                                style={{
                                    background: `linear-gradient(to right, var(--primary), var(--secondary))`,
                                }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Resume Button - Hide for screen <= 1000px */}
                <button
                    onClick={() => window.open(resumeUrl, "_blank")}
                    className="hidden lg:flex  items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                    style={{
                        background: `linear-gradient(to right, var(--primary), var(--secondary))`,
                        color: "var(--text-on-primary)",
                    }}
                >
                    <FileText size={18} />
                    Resume
                </button>

                {/* Mobile Menu Button - Show for screen <= 1000px */}
                <button
                    className="flex lg:hidden items-center justify-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ color: "var(--text)" }}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </motion.nav>

            {/* Mobile Dropdown Menu + Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl shadow-lg border p-6 flex flex-col items-center gap-4 z-50 md:hidden"
                            style={{
                                backgroundColor: "rgba(var(--bg-rgb),0.95)",
                                borderColor: "rgba(var(--border-rgb),0.2)",
                                backdropFilter: "blur(15px)",
                            }}
                        >
                            {navLinks.map((name, i) => (
                                <motion.a
                                    key={name}
                                    href={`#${name.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full text-center py-2 font-medium rounded-xl transition-all"
                                    style={{ color: "var(--text)" }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{
                                        background: `linear-gradient(to right, var(--primary), var(--secondary))`,
                                        color: "var(--text-on-primary)",
                                    }}
                                >
                                    {name}
                                </motion.a>
                            ))}

                            {/* Resume Button - Always inside Mobile Menu */}
                            <motion.button
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.open(resumeUrl, "_blank");
                                }}
                                className="mt-3 flex items-center gap-2 px-6 py-2 rounded-xl font-medium shadow-md transition-all"
                                style={{
                                    background: `linear-gradient(to right, var(--primary), var(--secondary))`,
                                    color: "var(--text-on-primary)",
                                }}
                            >
                                <FileText size={18} /> Resume
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
