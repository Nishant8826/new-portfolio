import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import myPic from "../assets/my-pic.jpg";
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
            className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden px-6 sm:px-10 md:px-28 pt-24 md:pt-0"
        >

            {/* === LEFT CONTENT === */}
            <div className="relative z-10 flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0">
                <motion.h1
                    style={{ x: mouse.x * 20, y: mouse.y * 20 }}
                    className="text-4xl sm:text-6xl font-extrabold leading-tight
                    bg-[linear-gradient(90deg,var(--accent-1),var(--secondary),var(--accent-2))]
                    bg-[length:200%_200%] animate-gradientMove
                    bg-clip-text text-transparent"
                >
                    Turning Ideas Into <br /> Scalable Digital Realities
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-[var(--text-muted)]
                    max-w-2xl leading-relaxed mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    I’m a{" "}
                    <span className="font-semibold text-[var(--primary)]">
                        Full Stack Developer
                    </span>{" "}
                    who blends{" "}
                    <span className="font-semibold text-[var(--secondary)]">
                        modern frontend
                    </span>{" "}
                    technologies like{" "}
                    <span className="font-semibold">
                        React, React Native, and Tailwind
                    </span>{" "}
                    with{" "}
                    <span className="font-semibold text-[var(--primary)]">
                        powerful backend
                    </span>{" "}
                    stacks —{" "}
                    <span className="font-semibold">
                        Node.js, Express, and MongoDB
                    </span>
                    . Passionate about performance, animation, and clean
                    architecture.
                </motion.p>

                {/* === CTA BUTTONS === */}
                <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
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
                        className="relative px-8 py-3 rounded-full font-semibold text-white
                        bg-[linear-gradient(90deg,var(--primary),var(--secondary),var(--accent-2))]
                        shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                        className="relative px-8 py-3 rounded-full font-semibold
                        border border-[var(--primary)]
                        text-[var(--primary)]
                        hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)]
                        transition-all duration-300 overflow-hidden"
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
                className="flex-1 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
                {/* Floating Glow */}
                <motion.div
                    style={{ x: mouse.x * 25, y: mouse.y * 25 }}
                    className="absolute w-96 h-96
                    bg-[linear-gradient(90deg,var(--primary),var(--accent-2))]
                    opacity-30 rounded-full blur-[100px] -z-10"
                />

                {/* Image + Glow */}
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative group"
                >
                    <motion.img
                        src={myPic}
                        alt="Profile"
                        className="w-96 h-96 rounded-full object-cover
                        border-4 border-[var(--bg)] shadow-xl"
                    />

                </motion.div>
            </motion.div>

            {/* === DECORATIVE PARALLAX BLOBS === */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-24 left-24 w-72 h-72
                bg-[color-mix(in_srgb,var(--primary)_30%,transparent)]
                rounded-full blur-[120px] opacity-60"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 right-24 w-80 h-80
                bg-[color-mix(in_srgb,var(--secondary)_30%,transparent)]
                rounded-full blur-[140px] opacity-60"
            />

            {/* === SCROLL INDICATOR === */}
            <motion.div
                className="absolute bottom-10 flex flex-col items-center gap-2
                text-[var(--text-muted)] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="tracking-wide uppercase text-[12px]">
                    Scroll Down
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.6,
                        ease: "easeInOut",
                    }}
                    className="w-[2px] h-8
                    bg-[linear-gradient(to_bottom,var(--primary),var(--secondary))]
                    rounded-full"
                />
            </motion.div>

            {/* === BOTTOM TAGLINE === */}
            <motion.div
                className="absolute bottom-4 text-xs
                text-[var(--text-muted)]
                tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.8 }}
            >
                🚀 Frontend | Backend | DevOps | Cloud | UI/UX
            </motion.div>
        </motion.section>
    );
}
