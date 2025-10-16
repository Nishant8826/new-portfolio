import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
        const x = (e.clientX - innerWidth / 2) / innerWidth;
        const y = (e.clientY - innerHeight / 2) / innerHeight;
        setMouse({ x, y });
    };

    const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (

        <motion.div style={{ opacity: fade, scale }}>

            <section
                ref={ref}
                id="home"
                onMouseMove={handleMouseMove}
                className="relative min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-purple-50"
            >



                {/* === Parallax Glows === */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 left-24 w-72 h-72 bg-indigo-400/40 rounded-full blur-[120px] opacity-60"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-20 right-24 w-80 h-80 bg-purple-400/40 rounded-full blur-[140px] opacity-60"
                />

                <motion.div
                    style={{
                        x: mouse.x * 50,
                        y: mouse.y * 50,
                    }}
                    className="absolute w-40 h-40 bg-indigo-300/30 rounded-full blur-3xl top-32 left-32"
                />
                <motion.div
                    style={{
                        x: mouse.x * -70,
                        y: mouse.y * -70,
                    }}
                    className="absolute w-56 h-56 bg-pink-300/30 rounded-full blur-3xl bottom-32 right-32"
                />
                {/* === Main Tagline === */}
                <motion.h1
                    style={{
                        x: mouse.x * 30,
                        y: mouse.y * 30,
                    }}
                    className="relative text-4xl sm:text-6xl font-extrabold leading-tight mb-6 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%]
             animate-gradientMove bg-clip-text text-transparent"
                >
                    Turning Ideas Into <br />
                    Scalable Digital Realities
                </motion.h1>

                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-10 h-10 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full blur-xl opacity-40"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, i % 2 === 0 ? 30 : -30, 0],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 18}%`,
                        }}
                    />
                ))}

                {/* === Subtext === */}
                <motion.p
                    className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    I’m a <span className="font-semibold text-indigo-600">Full Stack Developer</span> who blends{" "}
                    <span className="font-semibold text-purple-600">modern frontend</span> technologies like{" "}
                    <span className="font-semibold">React, React Native, and Tailwind</span> with{" "}
                    <span className="font-semibold text-indigo-600">powerful backend</span> stacks —{" "}
                    <span className="font-semibold">Node.js, Express, and MongoDB</span>.
                    Passionate about performance, animation, and clean architecture.
                </motion.p>

                {/* === CTA Buttons === */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {/* Primary Gradient Button */}
                    <motion.button
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05, }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden 
               bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md 
               hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Light Sweep Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
                            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">Explore My Projects</span>
                    </motion.button>

                    {/* Outline Button */}
                    <motion.button
                        onClick={() =>
                            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05, }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-3 rounded-full font-semibold border border-indigo-500 
               text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 
               shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                        {/* Animated Gradient Border Shine */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-transparent opacity-0"
                            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">View My Skills</span>
                    </motion.button>
                </motion.div>


                {/* === Scroll Indicator === */}
                <motion.div
                    className="absolute bottom-16 flex flex-col items-center gap-2 text-slate-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="tracking-wide uppercase text-[12px]">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.6,
                            ease: "easeInOut",
                        }}
                        className="w-[2px] h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"
                    />
                </motion.div>

                {/* === Bottom Tagline === */}
                <motion.div
                    className="absolute bottom-4 text-xs text-slate-500 tracking-wider uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.8 }}
                >
                    🚀 Frontend | Backend | DevOps | Cloud | UI/UX
                </motion.div>
            </section>

        </motion.div>
    );
}
