import React, { useRef } from "react";
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const experiences = [
    {
        role: "MERN Stack Developer - Freelance (Remote)",
        duration: "July 2025 – Sept 2025",
        icon: <Briefcase className="text-indigo-600" size={20} />,
        details: [
            "Built a React Native trading-learning app with gamification.",
            "Integrated Razorpay, Firebase Auth, and push notifications.",
            "Delivered Web and Mobile MERN applications.",
        ],
    },
    {
        role: "Software Developer — GDKN (Remote, Bhopal)",
        duration: "April 2022 – June 2025",
        icon: <Award className="text-purple-600" size={20} />,
        details: [
            "Built full-stack apps with Angular/Node.js and React/Express.",
            "Developed REST APIs and WebSocket-based real-time features.",
            "Awarded “Employee of the Month” 6× for high performance.",
        ],
    },
    {
        role: "Teaching Assistant (Intern) — FunctionUp (Remote)",
        duration: "Feb 2022 – April 2022",
        icon: <GraduationCap className="text-pink-500" size={20} />,
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
            className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#818cf8_0%,transparent_40%)] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#c084fc_0%,transparent_40%)] opacity-20 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 sm:mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"
                >
                    Experience
                </motion.h2>

                {/* Timeline */}
                <div ref={ref} className="relative flex flex-col md:flex-row">
                    {/* Vertical line */}
                    <div className="
                        absolute 
                        left-6 sm:left-8 
                        md:left-1/2 
                        transform 
                        md:-translate-x-1/2 
                        w-[2.5px] sm:w-[3px] 
                        bg-indigo-100 
                        rounded-full 
                        h-full 
                        overflow-hidden
                    ">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
                            style={{ height: lineHeight }}
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
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-10
                ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
            {/* Connector Dot */}
            <motion.div
                className="
                    absolute 
                    left-6 sm:left-8 
                    md:left-1/2 
                    transform 
                    md:-translate-x-1/2 
                    w-5 sm:w-6 h-5 sm:h-6 
                    bg-white border-[3px] sm:border-[4px] 
                    border-indigo-500 rounded-full 
                    shadow-md flex items-center justify-center 
                    z-10
                "
                animate={{
                    boxShadow: [
                        "0 0 0 rgba(99,102,241,0.5)",
                        "0 0 20px rgba(168,85,247,0.8)",
                        "0 0 0 rgba(99,102,241,0.5)",
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {exp.icon}
            </motion.div>

            {/* Card */}
            <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="
                    relative 
                    bg-white/70 backdrop-blur-xl 
                    border border-indigo-100 shadow-lg 
                    hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] 
                    rounded-2xl p-6 sm:p-8 
                    md:w-[45%] w-[90%] ml-14 md:ml-0 
                    transition-all duration-300
                "
            >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 flex flex-wrap items-center gap-2">
                    {exp.role}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1">{exp.duration}</p>

                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default ExperienceSection;
