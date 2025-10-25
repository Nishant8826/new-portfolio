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

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY && currentY > 80) {
                // scrolling down
                setIsVisible(false);
            } else {
                // scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentY);
            setIsScrolled(currentY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 origin-left z-[100] 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                style={{ scaleX }}
            />

            {/* Navbar */}
            <motion.nav
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut"
                }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]
                    rounded-2xl px-6 md:px-8 py-4 flex justify-between items-center
                    backdrop-blur-2xl border transition-all duration-500
                    ${isScrolled
                        ? "bg-white/80 border-white/30 shadow-lg"
                        : "bg-white/40 border-white/20 shadow-md"
                    }`}
            >
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
                    {navLinks.map((name) => (
                        <motion.a
                            key={name}
                            href={`#${name.toLowerCase()}`}
                            className="relative group text-slate-700 transition-all duration-300"
                        >
                            <span
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                            >
                                {name}
                            </span>
                            <span className="group-hover:opacity-0 transition-opacity duration-300">
                                {name}
                            </span>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                                bg-gradient-to-r from-indigo-500 to-purple-500 
                                transition-all duration-300 group-hover:w-full rounded-full">
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Resume Button */}
                <button
                    onClick={() => window.open(resumeUrl, "_blank")}
                    className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl 
                        bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium 
                        shadow-md hover:shadow-lg hover:scale-105 active:scale-95 
                        transition-all duration-300"
                >
                    <FileText size={18} />
                    Resume
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center text-slate-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </motion.nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-xl 
                            rounded-2xl shadow-lg border border-white/20 p-6 z-[40] flex flex-col items-center gap-4"
                    >
                        {navLinks.map((name, i) => (
                            <motion.a
                                key={name}
                                href={`#${name.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-center py-2 font-medium rounded-xl 
                                    text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {name}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={() => {
                                setMenuOpen(false);
                                window.open(resumeUrl, "_blank");
                            }}
                            className="mt-3 flex items-center gap-2 px-6 py-2 rounded-xl 
                                bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium 
                                shadow-md hover:shadow-lg transition-all"
                        >
                            <FileText size={18} /> Resume
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
