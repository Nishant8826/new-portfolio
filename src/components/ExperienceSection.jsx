import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const experiences = [
    {
        role: "MERN Stack Developer - Freelance (Remote)",
        duration: "July 2025 – Sept 2025",
        icon: <Briefcase size={20} />,
        details: [
            "Built a React Native trading-learning app with gamification.",
            "Integrated Razorpay, Firebase Auth, and push notifications.",
            "Delivered Web and Mobile MERN applications.",
        ],
    },
    {
        role: "Software Developer — GDKN (Remote, Bhopal)",
        duration: "April 2022 – June 2025",
        icon: <Award size={20} />,
        details: [
            "Built full-stack apps with Angular/Node.js and React/Express.",
            "Developed REST APIs and WebSocket-based real-time features.",
            "Awarded “Employee of the Month” 6× for high performance.",
        ],
    },
    {
        role: "Teaching Assistant (Intern) — FunctionUp (Remote)",
        duration: "Feb 2022 – April 2022",
        icon: <GraduationCap size={20} />,
        details: [
            "Mentored students on Node.js, MongoDB, and AWS.",
            "Supported live coding sessions and doubt resolution.",
        ],
    },
];

const ExperienceSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 150px", "end 150px"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section
            id="experience"
            className="relative py-20 sm:py-28 overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, var(--bg), var(--bg-soft))",
            }}
        >
            {/* Background glows */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 30% 20%, var(--primary) 0%, transparent 40%)",
                }}
            />
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 70% 80%, var(--secondary) 0%, transparent 40%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 sm:mb-20 text-center bg-clip-text text-transparent"
                    style={{
                        background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Experience
                </motion.h2>

                {/* Timeline */}
                <div ref={ref} className="relative flex flex-col md:flex-row">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-[2.5px] sm:w-[3px] rounded-full h-full overflow-hidden"
                        style={{ backgroundColor: "var(--border)" }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full rounded-full"
                            style={{
                                height: lineHeight,
                                background: "linear-gradient(to bottom, var(--primary), var(--secondary), var(--accent-2))",
                            }}
                        />
                    </div>

                    {/* Timeline Cards */}
                    <div className="flex flex-col gap-20 sm:gap-24 w-full">
                        {experiences.map((exp, index) => (
                            <TimelineCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineCard = ({ exp, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.4, once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Connector Dot */}
            <motion.div
                className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center z-10"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderWidth: "3px",
                    borderColor: "var(--primary)",
                }}
                animate={{
                    boxShadow: [
                        "0 0 0 rgba(var(--primary-rgb),0.5)",
                        "0 0 20px rgba(var(--secondary-rgb),0.8)",
                        "0 0 0 rgba(var(--primary-rgb),0.5)",
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {exp.icon}
            </motion.div>

            {/* Card */}
            <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative rounded-2xl p-6 sm:p-8 md:w-[45%] w-[90%] ml-14 md:ml-0 transition-all duration-300"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                }}
            >
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: "linear-gradient(to bottom right, var(--primary)/10, var(--secondary)/10, transparent)",
                    }}
                />

                <h3 className="text-xl sm:text-2xl font-semibold flex flex-wrap items-center gap-2" style={{ color: "var(--text)" }}>
                    {exp.role}
                </h3>
                <p className="text-sm sm:text-base mt-1" style={{ color: "var(--text-muted)" }}>
                    {exp.duration}
                </p>

                <ul className="list-disc list-inside mt-4 space-y-2 leading-relaxed text-sm sm:text-base" style={{ color: "var(--text)" }}>
                    {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default ExperienceSection;
