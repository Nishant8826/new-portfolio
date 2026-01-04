import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { useEffect, useState, useMemo } from "react";
import ThemeSelector from "./ThemeSelector";

export default function Skills() {
    const [speed, setSpeed] = useState(25);

    useEffect(() => {
        const updateSpeed = () => {
            const width = window.innerWidth;
            if (width < 640) setSpeed(5);
            else if (width < 1024) setSpeed(18);
            else setSpeed(25);
        };
        updateSpeed();
        window.addEventListener("resize", updateSpeed);
        return () => window.removeEventListener("resize", updateSpeed);
    }, []);

    const marquee = useMemo(
        () => (direction = "left") => ({
            animate: {
                x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                },
            },
        }),
        [speed]
    );

    const frontend = skills.filter((s) => s.category === "frontend");
    const backend = skills.filter((s) => s.category === "backend");
    const other = skills.filter((s) => s.category === "other");

    return (
        <section
            id="skills"
            className="relative py-20 sm:py-24 overflow-hidden"
        >

            {/* Heading */}
            <div className="relative text-center mb-10 sm:mb-14 px-4">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                    bg-clip-text text-transparent leading-[1.2]"
                    style={{
                        backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    My Tech Stack
                </motion.h2>

                <motion.p
                    className="mt-3 sm:mt-4 text-sm sm:text-base max-w-xl md:max-w-2xl mx-auto"
                    style={{ color: "var(--text-muted)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A curated mix of modern tools and technologies I use to build fast, beautiful, and scalable
                    digital experiences.
                </motion.p>
            </div>

            {/* Carousel Rows */}
            <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-12 overflow-hidden px-2 sm:px-6">
                {/* Frontend Row */}
                <motion.div
                    key={`frontend-${speed}`}
                    className="flex gap-8 sm:gap-12 whitespace-nowrap"
                    variants={marquee("left")}
                    animate="animate"
                >
                    {[...frontend, ...frontend].map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={i}
                                className="inline-flex flex-col items-center justify-center text-center min-w-[90px] sm:min-w-[120px]"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl
                                    bg-[var(--bg-soft)] shadow-md hover:shadow-xl transition-all"
                                >
                                    <Icon className="text-2xl sm:text-3xl" style={{ color: "var(--primary)" }} />
                                </div>
                                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                                    {skill.name}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Backend Row */}
                <motion.div
                    key={`backend-${speed}`}
                    className="flex gap-8 sm:gap-12 whitespace-nowrap"
                    variants={marquee("right")}
                    animate="animate"
                >
                    {[...backend, ...backend].map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={i}
                                className="inline-flex flex-col items-center justify-center text-center min-w-[90px] sm:min-w-[120px]"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl
                                    bg-[var(--bg-soft)] shadow-md hover:shadow-xl transition-all"
                                >
                                    <Icon className="text-2xl sm:text-3xl" style={{ color: "var(--secondary)" }} />
                                </div>
                                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                                    {skill.name}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Other Row */}
                <motion.div
                    key={`other-${speed}`}
                    className="flex gap-8 sm:gap-12 whitespace-nowrap"
                    variants={marquee("left")}
                    animate="animate"
                >
                    {[...other, ...other].map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={i}
                                className="inline-flex flex-col items-center justify-center text-center min-w-[90px] sm:min-w-[120px]"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl
                                    bg-[var(--bg-soft)] shadow-md hover:shadow-xl transition-all"
                                >
                                    <Icon className="text-2xl sm:text-3xl" style={{ color: "var(--accent-2)" }} />
                                </div>
                                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                                    {skill.name}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
                className="mt-12 sm:mt-16 text-center text-[11px] sm:text-sm tracking-wider uppercase px-4"
                style={{ color: "var(--text-muted)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
            >
                ⚡ Constantly Evolving. Continuously Learning.
            </motion.div>
        </section>
    );
}
