import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award, GraduationCap, Code, Monitor } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer - Tallento.ai (Remote)",
        duration: "December 2025 – March 2026",
        icon: <Code size={20} />,
        details: [
            "Architected a role- and permission-based access control (RBAC) system supporting multiple roles per user, ensuring secure, granular authorization; streamlined access management, minimized unauthorized data exposure, and enhanced system scalability.",
            "Simplified media handling by migrating from multiple media tables to a single centralized media table, enabling faster and more reliable media fetching while reducing database complexity.",
            "Designed and implemented a comprehensive Feed module enabling users to upload and manage posts with support for multiple media types (photos and videos), along with interactive features such as likes, comments, and shares. Incorporated configurable visibility controls (public/private) to enhance user privacy and engagement.",
            "Implemented performance optimization strategies across the stack, including integrating Redis caching to reduce database load and improve API response times, introducing frontend debouncing to limit redundant API calls, and minimizing unnecessary component re-renders to enhance overall application performance and scalability.",
            "Contributed to the successful database and web application migration initiative, assisting in the transition from a deprecated PHP stack to a modern, maintainable technology framework, improving system security, performance, and long-term scalability.",
            "Implemented a real-time chat system between employers and candidates using WebSockets (e.g., Socket.io) to enable instant communication, reducing delays from traditional channels and improving engagement, which led to faster decision-making and a more efficient hiring process.",
            "Developed browser push notifications using Firebase Cloud Messaging (FCM) to notify employers when candidates apply and update candidates on application status changes, ensuring real-time alerts without manual checks, which improved user retention, reduced missed updates, and enhanced overall platform experience.",
            "Implemented CI/CD pipelines to automate build, testing, and deployment workflows, reducing manual intervention and accelerating release cycles."
        ],
    },
    {
        role: "MERN Stack Developer - Freelance (Remote)",
        duration: "June 2025 – September 2025",
        icon: <Monitor size={20} />,
        details: [
            "Designed the system architecture (HLD and LLD) for scalability and performance and developed a trading-learning app using React Native with stage-based lessons, quizzes, and gamification, applying modular architecture, optimized API responses, lazy loading, and engagement mechanics such as streaks, badges, challenges, and leaderboards — resulting in reduced load time, improved responsiveness, higher user engagement, and longer session durations.",
            "Integrated Firebase Authentication including email, phone, and social login to simplify onboarding and enhance security using OAuth providers, token-based authentication, and real-time identity verification, which reduced login friction and lowered user drop-off during registration.",
            "Added Razorpay payment gateway for subscriptions and in-app purchases to enable smooth monetization and premium unlocks by configuring order creation, webhook validation, and secure transaction flow, resulting in faster checkout and an increase in completed transactions."
        ],
    },
    {
        role: "React-Native Developer, ENotaryOnCall - GDKN/Techrev (Remote)",
        duration: "March 2024 – June 2025",
        icon: <Briefcase size={20} />,
        details: [
            "Built a production-ready React Native (Expo) mobile application with cross-platform compatibility and reusable component architecture, enabling faster development cycles and reducing long-term maintenance effort.",
            "Integrated backend APIs with optimized state management and on-device performance tuning using Redux Toolkit, memoization, and render profiling, which improved load times and significantly enhanced UI responsiveness.",
            "Delivered a responsive and intuitive UI/UX through Tailwind styling, scalable component patterns, and modular code structure, accelerating feature development and simplifying future expansion."
        ],
    },
    {
        role: "MEAN Stack Developer, KeepFluent - GDKN/Techrev (Remote)",
        duration: "January 2023 – June 2025",
        icon: <Award size={20} />,
        details: [
            "Built RESTful APIs using Express.js with modular routing, middleware, and secure authentication to support scalable backend architecture.",
            "Delivered front-end with Angular-based web app and Ionic-based mobile app with reusable component architecture and API integration.",
            "Created responsive UIs using Bootstrap and Material UI, improving accessibility and user experience across device breakpoints.",
            "Optimized SQL database performance through index tuning, query optimization, and structured relational schema design.",
            "Managed server deployments and updates using PuTTY by securely accessing cloud instances, configuring environments, and ensuring smooth production releases with minimal downtime.",
            "Developed a centralized logging system using Winston and Morgan to capture application and server logs, enabling better debugging, monitoring, and traceability.",
            "Monitored server health and application performance on cloud infrastructure using logs and diagnostics, proactively identifying and resolving production issues to improve system reliability."
        ],
    },
    {
        role: "Teaching Assistant - FunctionUp (Remote)",
        duration: "August 2022 – December 2022",
        icon: <GraduationCap size={20} />,
        details: [
            "Mentored students on Node.js, MongoDB, AWS, and backend development fundamentals, ensuring conceptual clarity and hands-on implementation.",
            "Assisted students in live coding sessions, demonstrating problem-solving approaches, debugging, and best practices for writing clean and efficient code.",
            "Provided 1-on-1 doubt resolution and technical guidance, helping students to overcome blockers and complete assignments and capstone projects."
        ],
    },
];

const ExperienceSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="experience"
            className="relative py-20 sm:py-28 overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, var(--bg), var(--bg-soft), var(--bg))",
            }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 sm:mb-20 text-center bg-clip-text text-transparent"
                    style={{
                        background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Experience
                </motion.h2>

                {/* Timeline */}
                <div ref={ref} className="relative flex flex-col items-center">
                    {/* Vertical line - hidden on very small screens for better space */}
                    <div
                        className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-[2px] sm:w-[3px] rounded-full h-full overflow-hidden"
                        style={{ backgroundColor: "rgba(var(--border-rgb), 0.5)" }}
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
                    <div className="flex flex-col gap-16 sm:gap-24 w-full">
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
    const inView = useInView(ref, { amount: 0.3, once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Connector Dot */}
            <motion.div
                className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-1/2 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center z-10"
                style={{
                    backgroundColor: "var(--bg)",
                    borderWidth: "3px",
                    borderColor: "var(--primary)",
                }}
                animate={{
                    boxShadow: [
                        "0 0 0 rgba(var(--primary-rgb), 0.2)",
                        "0 0 15px rgba(var(--secondary-rgb), 0.6)",
                        "0 0 0 rgba(var(--primary-rgb), 0.2)",
                    ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="scale-75 text-[var(--primary)]">{exp.icon}</div>
            </motion.div>

            {/* Card */}
            <motion.div
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-6 sm:p-8 md:w-[45%] w-[calc(100%-3rem)] ml-12 sm:ml-16 md:ml-0 transition-all duration-300 border"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "rgba(var(--border-rgb), 0.3)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
                }}
            >
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), rgba(var(--secondary-rgb), 0.05), transparent)",
                    }}
                />

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2 mb-1" style={{ color: "var(--text)" }}>
                    {exp.role}
                </h3>
                <p className="text-xs sm:text-sm md:text-base mb-4 font-medium" style={{ color: "var(--primary)" }}>
                    {exp.duration}
                </p>

                <ul className="list-disc list-inside space-y-2 leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                    {exp.details.map((item, i) => (
                        <li key={i} className="pl-1">
                            <span className="relative -left-2" style={{ color: "var(--text)" }}>{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default ExperienceSection;
