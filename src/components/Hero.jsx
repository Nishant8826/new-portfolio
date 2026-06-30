import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import myPic from "../assets/my-pic.png";
import ThemeSelector from "./ThemeSelector";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        setMouse({
            x: (e.clientX - innerWidth / 2) / innerWidth,
            y: (e.clientY - innerHeight / 2) / innerHeight,
        });
    };

    return (
        <motion.section
            ref={ref}
            id="home"
            onMouseMove={handleMouseMove}
            className="relative min-h-[100svh] flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 sm:px-10 lg:px-20 xl:px-28 pt-20 md:pt-0"
        >

            {/* === LEFT CONTENT === */}
            <div className="relative z-10 flex-1 text-center md:text-left space-y-6 md:space-y-8 mt-[10svh] md:mt-0">
                <motion.h1
                    style={{ x: mouse.x * 20, y: mouse.y * 20 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]
                    bg-[linear-gradient(to_right,var(--primary),var(--secondary),var(--accent-2),var(--primary))]
                    bg-[length:300%_auto] animate-gradientMove
                    bg-clip-text text-transparent drop-shadow-sm"
                >
                    Full Stack & <br className="hidden sm:block" /> DevOps Engineer
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-[var(--text-muted)]
                    max-w-2xl leading-relaxed mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Architecting scalable <span className="font-semibold text-[var(--primary)]">Web & Mobile</span> solutions on the <span className="font-semibold text-[var(--secondary)]">MERN / MEAN</span> stacks. Streamlining deployments with robust cloud infrastructure using <span className="font-semibold text-[var(--primary)]">AWS, Docker, Kubernetes, and Terraform</span>.
                </motion.p>

                {/* === CTA BUTTONS === */}
                <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 md:pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {/* Primary CTA */}
                    <motion.button
                        onClick={() =>
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 sm:px-8 py-3 rounded-full font-semibold text-white
                        bg-[linear-gradient(90deg,var(--primary),var(--secondary),var(--accent-2))]
                        shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-sm sm:text-base"
                    >
                        <motion.div
                            className="absolute inset-0
                            bg-[linear-gradient(90deg,rgba(255,255,255,0.35),transparent)]
                            opacity-0"
                            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">
                            Explore My Projects
                        </span>
                    </motion.button>

                    {/* Secondary CTA */}
                    <motion.button
                        onClick={() =>
                            document
                                .getElementById("skills")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 sm:px-8 py-3 rounded-full font-semibold
                        border border-[var(--primary)]
                        text-[var(--primary)]
                        hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)]
                        transition-all duration-300 overflow-hidden text-sm sm:text-base"
                    >
                        <motion.div
                            className="absolute inset-0
                            bg-[linear-gradient(90deg,var(--primary),var(--secondary),transparent)]
                            opacity-0"
                            whileHover={{ opacity: 0.15, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">
                            View My Skills
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            {/* === RIGHT PROFILE IMAGE === */}
            <motion.div
                className="flex-1 flex justify-center relative mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
                {/* Floating Glow */}
                <motion.div
                    style={{ x: mouse.x * 25, y: mouse.y * 25 }}
                    className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                    bg-[linear-gradient(90deg,var(--primary),var(--accent-2))]
                    opacity-30 rounded-full blur-[80px] lg:blur-[100px] -z-10"
                />

                {/* Image + Glow */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative group flex items-center justify-center"
                >
                    <motion.img
                        src={myPic}
                        alt="Profile"
                        className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[30rem] rounded-full object-cover
                        border-4 border-[var(--bg)] shadow-2xl relative z-10"
                    />

                    {/* Professional Stats Notifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8, type: 'spring', bounce: 0.4 }}
                        className="absolute -bottom-4 -left-2 sm:-bottom-2 sm:-left-6 lg:bottom-6 lg:-left-16 p-2 sm:p-3 rounded-xl bg-[var(--bg)]/80 backdrop-blur-xl border border-[var(--primary)]/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-2 sm:gap-3 z-20 hover:-translate-y-1 hover:shadow-[var(--primary)]/20 transition-all duration-300 w-40 sm:w-48"
                    >
                        {/* Speech Bubble Tail (Pointing Right) */}
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[var(--bg)] border-t border-r border-[var(--primary)]/20 rotate-45 z-[-1]" />

                        <div className="relative mt-0.5 shrink-0">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[var(--primary)] to-purple-500 flex items-center justify-center text-white font-bold shadow-lg text-[10px] sm:text-xs">
                                10+
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 border-2 border-[var(--bg)] rounded-full animate-pulse"></span>
                        </div>
                        <div className="text-left flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-0.5">
                                <p className="text-[7px] sm:text-[8px] uppercase tracking-wider text-[var(--primary)] font-bold truncate">Achievement</p>
                                <span className="text-[7px] sm:text-[8px] text-[var(--text-muted)] shrink-0 ml-1">Just now</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-bold text-[var(--text)] leading-tight mb-0.5 truncate">Enterprise Projects</p>
                            <p className="text-[8px] sm:text-[9px] text-[var(--text-muted)] leading-snug hidden sm:block">Successfully delivered and scaled.</p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1, type: 'spring', bounce: 0.4 }}
                        className="absolute -top-4 -right-2 sm:-top-2 sm:-right-6 lg:top-6 lg:-right-16 p-2 sm:p-3 rounded-xl bg-[var(--bg)]/80 backdrop-blur-xl border border-[var(--secondary)]/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-start gap-2 sm:gap-3 z-20 hover:-translate-y-1 hover:shadow-[var(--secondary)]/20 transition-all duration-300 w-40 sm:w-48"
                    >
                        {/* Speech Bubble Tail (Pointing Left) */}
                        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[var(--bg)] border-b border-l border-[var(--secondary)]/20 rotate-45 z-[-1]" />

                        <div className="relative mt-0.5 shrink-0">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[var(--secondary)] to-blue-500 flex items-center justify-center text-white font-bold shadow-lg text-xs sm:text-sm">
                                ☁️
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 border-2 border-[var(--bg)] rounded-full animate-pulse"></span>
                        </div>
                        <div className="text-left flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-0.5">
                                <p className="text-[7px] sm:text-[8px] uppercase tracking-wider text-[var(--secondary)] font-bold truncate">System Alert</p>
                                <span className="text-[7px] sm:text-[8px] text-[var(--text-muted)] shrink-0 ml-1">1m ago</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-bold text-[var(--text)] leading-tight mb-0.5 truncate">Cloud Mastery</p>
                            <p className="text-[8px] sm:text-[9px] text-[var(--text-muted)] leading-snug hidden sm:block">Deployed with 99.9% uptime.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* === DECORATIVE PARALLAX BLOBS === */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-12 left-12 sm:top-24 sm:left-24 w-48 h-48 sm:w-72 sm:h-72
                bg-[color-mix(in_srgb,var(--primary)_20%,transparent)]
                rounded-full blur-[80px] sm:blur-[120px] opacity-40 sm:opacity-60 -z-50"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-12 right-12 sm:bottom-20 sm:right-24 w-56 h-56 sm:w-80 sm:h-80
                bg-[color-mix(in_srgb,var(--secondary)_20%,transparent)]
                rounded-full blur-[100px] sm:blur-[140px] opacity-40 sm:opacity-60 -z-50"
            />

            {/* === BOTTOM ELEMENTS === */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-full">
                {/* === BOTTOM TAGLINE === */}
                <motion.div
                    className="text-[10px] sm:text-xs text-[var(--text-muted)] tracking-wider uppercase text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.8 }}
                >
                    🚀 Frontend | Backend | DevOps | Cloud | UI/UX
                </motion.div>

                {/* === SCROLL DOWN VERTICE / CHEVRON === */}
                <motion.div
                    className="flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{
                        delay: 1.5,
                        y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                    }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                </motion.div>
            </div>

        </motion.section>
    );
}
