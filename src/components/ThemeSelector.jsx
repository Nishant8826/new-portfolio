import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { FaCircle, FaCheck } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
    // Essential Modern Trends
    { id: "theme-obsidian", label: "Obsidian Dark", color: "#020617" }, // Deep dark - #1 trend for dev portfolios
    { id: "theme-graphite", label: "Graphite Slate", color: "#374151" }, // Muted dark gray - sophisticated
    { id: "theme-ivory", label: "Minimal Light", color: "#E5E7EB" },    // Clean, high-contrast light mode
    { id: "theme-aurora", label: "Indigo SaaS", color: "#6366F1" },     // Classic modern SaaS primary
    { id: "theme-nebula", label: "Oceanic Tech", color: "#0EA5E9" },    // Trustworthy enterprise blue
    { id: "theme-forestmist", label: "Emerald Tech", color: "#10B981" }, // Fresh, tech-focused green
    { id: "theme-amberglow", label: "Amber Luxury", color: "#F59E0B" }, // Warm gold - premium & fintech
];

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.activeTheme);

    const [open, setOpen] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full shadow-lg transition z-50 hover:scale-110"
                style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--text-on-primary)"
                }}
            >
                <BsPalette size={24} />
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-[calc(100%+16px)] right-0 sm:right-auto sm:left-[-180px] w-52 p-2 rounded-2xl bg-[rgba(var(--bg-rgb),0.7)] backdrop-blur-2xl border border-[rgba(var(--border-rgb),0.15)] shadow-2xl z-50 origin-bottom-right sm:origin-bottom"
                    >
                        <div className="grid gap-1">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => {
                                        dispatch(setTheme(theme.id));
                                        setOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 group ${
                                        currentTheme === theme.id 
                                            ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-bold' 
                                            : 'hover:bg-[var(--bg-soft)] text-[var(--text)] hover:text-[var(--primary)]'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex items-center justify-center">
                                            <FaCircle size={14} color={theme.color} className="drop-shadow-sm" />
                                            {currentTheme === theme.id && (
                                                <motion.div 
                                                    layoutId="theme-active-ring"
                                                    className="absolute -inset-1 rounded-full border border-current opacity-50"
                                                    style={{ borderColor: theme.color }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </div>
                                        <span className="text-[13px] tracking-wide">{theme.label}</span>
                                    </div>

                                    {/* Checkmark */}
                                    {currentTheme === theme.id && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <FaCheck size={12} className="text-[var(--primary)]" />
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Invisible bridge to prevent mouseleave gap */}
            {open && (
                <div className="absolute bottom-full right-0 w-full h-4 z-40" />
            )}
        </div>
    );
};

export default ThemeSelector;
