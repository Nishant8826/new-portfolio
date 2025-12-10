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
    const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / innerWidth;
        const y = (e.clientY - innerHeight / 2) / innerHeight;
        setMouse({ x, y });
    };

    return (
        <motion.section ref={ref} onMouseMove={handleMouseMove} style={{ opacity: fade }} id="home" className="hero-gradient flex justify-center items-center p-32 relative" >

            <div className="absolute top-10 right-10 z-50">
                <ThemeSelector />
            </div>


            {/* === LEFT CONTENT === */}
            <div className="relative z-10 flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0">
                <motion.h1
                    style={{ x: mouse.x * 20, y: mouse.y * 20 }}
                    className="text-4xl sm:text-6xl font-extrabold leading-tight hero-title-gradient bg-[length:200%_200%] animate-gradientMove"
                >
                    Turning Ideas Into <br /> Scalable Digital Realities
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    I’m a{" "}
                    <span className="font-semibold text-indigo-600">Full Stack Developer</span>{" "}
                    who blends <span className="font-semibold text-purple-600">modern frontend</span> technologies like{" "}
                    <span className="font-semibold">React, React Native, and Tailwind</span> with{" "}
                    <span className="font-semibold text-indigo-600">powerful backend</span> stacks —{" "}
                    <span className="font-semibold">Node.js, Express, and MongoDB</span>. Passionate about
                    performance, animation, and clean architecture.
                </motion.p>

                {/* === CTA BUTTONS === */}
                <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <motion.button
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-3 rounded-full font-semibold text-white 
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg 
                       hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0"
                            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">Explore My Projects</span>
                    </motion.button>

                    <motion.button
                        onClick={() =>
                            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-8 py-3 rounded-full font-semibold border border-indigo-500 
                       text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 
                       shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-transparent opacity-0"
                            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">View My Skills</span>
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
                {/* Floating glow behind image */}
                <motion.div
                    style={{
                        x: mouse.x * 25,
                        y: mouse.y * 25,
                    }}
                    className="absolute w-96 h-96 bg-gradient-to-r from-indigo-300/30 to-pink-300/30 
               rounded-full blur-[100px] -z-10"
                />

                {/* Profile image + glow */}
                <motion.div
                    whileHover={{ scale: 1.08 }} // 👈 scales both image and glow together
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative group"
                >
                    {/* Image */}
                    <motion.img
                        src={myPic}
                        alt="Profile"
                        className="w-96 h-96 rounded-full object-cover border-4 border-white shadow-xl"
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />

                    {/* Glow around image */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 
                 blur-3xl opacity-60 group-hover:opacity-80 transition"
                        whileHover={{ scale: 1.2, opacity: 0.8 }} // 👈 smooth glow expansion
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </motion.div>
            </motion.div>


            {/* === Decorative Parallax Glows === */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-24 left-24 w-72 h-72 bg-indigo-400/30 rounded-full blur-[120px] opacity-60"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 right-24 w-80 h-80 bg-purple-400/30 rounded-full blur-[140px] opacity-60"
            />

            {/* === Scroll Indicator === */}
            <motion.div
                className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="tracking-wide uppercase text-[12px]">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
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
        </motion.section>
    );
}
