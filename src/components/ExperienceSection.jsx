import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Briefcase, Award, GraduationCap, Code, Monitor, Calendar, CheckCircle2, Building, ArrowRight, Sparkles, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Tallento.ai",
        location: "Remote",
        date: "Dec 2025 – Mar 2026",
        icon: <Code size={24} />,
        details: [
            "Designed and implemented CI/CD pipelines using Jenkins, Docker, and AWS infrastructure, reducing deployment time and minimizing manual deployment effort.",

            "Built a scalable RBAC authorization system supporting multiple roles and permission layers, improving security and access management.",

            "Developed a production-grade social feed module supporting media uploads, comments, likes, shares, and configurable visibility controls.",

            "Improved backend performance using Redis caching, frontend debouncing, and render optimization, reducing API latency and database load.",

            "Implemented real-time chat functionality using Socket.IO for instant communication between employers and candidates.",

            "Integrated Firebase Cloud Messaging (FCM) push notifications for real-time hiring and application status updates.",

            "Contributed to migration from legacy PHP architecture to a modern scalable MERN stack, improving maintainability and long-term scalability.",

            "Centralized media handling architecture by migrating multiple media tables into a unified storage structure, simplifying database operations and improving media retrieval."
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Freelance",
        location: "Global",
        date: "Jun 2025 – Sep 2025",
        icon: <Monitor size={24} />,
        details: [
            "Architected and managed AWS cloud infrastructure using EC2, VPC, and Security Groups to support secure and scalable deployments.",

            "Designed scalable HLD and LLD architecture for a React Native trading-learning platform.",

            "Developed gamified learning systems including quizzes, streaks, badges, leaderboards, and challenge modules to improve user engagement.",

            "Optimized frontend performance using lazy loading, modular architecture, and optimized API integration strategies.",

            "Integrated Firebase Authentication with email, phone, and social login using secure OAuth authentication flows.",

            "Implemented Razorpay payment gateway with webhook validation and secure subscription-based payment processing."
        ],
    },
    {
        role: "React Native Developer",
        company: "ENotaryOnCall",
        location: "Techrev",
        date: "Mar 2024 – Jun 2025",
        icon: <Briefcase size={24} />,
        details: [
            "Built and maintained a production-ready React Native (Expo) mobile application with reusable and scalable component architecture.",

            "Managed Android and iOS deployment pipelines including production builds, app signing, release management, and store publishing.",

            "Integrated backend APIs with Redux Toolkit state management and frontend performance optimization techniques.",

            "Improved application responsiveness through memoization, render optimization, and scalable UI architecture.",

            "Delivered responsive cross-platform mobile UI using Tailwind CSS and modular frontend design principles."
        ],
    },
    {
        role: "MEAN Stack Developer",
        company: "KeepFluent",
        location: "Techrev",
        date: "Jan 2023 – Jun 2025",
        icon: <Award size={24} />,
        details: [
            "Managed AWS EC2 and S3 infrastructure for scalable application hosting and secure cloud-based media storage.",

            "Developed scalable REST APIs using Express.js with modular architecture, middleware integration, and secure authentication.",

            "Built Angular web applications and Ionic mobile applications with reusable component architecture and optimized API integration.",

            "Designed responsive user interfaces using Bootstrap and Material UI across multiple device breakpoints.",

            "Optimized SQL database performance using query optimization, indexing strategies, and relational schema improvements.",

            "Implemented Redis caching for API responses and database queries, improving backend performance and reducing redundant database calls.",

            "Managed production deployments, server monitoring, and cloud configuration using secure Linux server administration.",

            "Built centralized logging systems using Winston and Morgan for application monitoring, debugging, and traceability."
        ],
    },
    {
        role: "Teaching Assistant",
        company: "FunctionUp",
        location: "Remote",
        date: "Aug 2022 – Dec 2022",
        icon: <GraduationCap size={24} />,
        details: [
            "Mentored students on Node.js, MongoDB, AWS, and backend engineering concepts.",

            "Conducted live coding sessions focused on debugging, clean code practices, and backend architecture.",

            "Provided 1-on-1 technical guidance for assignments, backend projects, and capstone implementations."
        ],
    },
];

const ExperienceSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });

    // Smooth horizontal translation based on vertical scroll
    const xTransform = useTransform(scrollYProgress, [0, 1], ["calc(0% - 0vw)", "calc(-100% + 100vw)"]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const handleNodeClick = (index) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const scrollableDistance = rect.height - window.innerHeight;
        const progress = index / (experiences.length - 1);
        window.scrollTo({
            top: sectionTop + (scrollableDistance * progress),
            behavior: "smooth"
        });
    };

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative h-[600vh] bg-[var(--bg)]"
        >
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-12 md:pt-0">

                {/* Visual Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[var(--primary)]/5 rounded-full blur-[120px]" />
                    <div
                        className="absolute inset-0 opacity-[0.4]"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(var(--border-rgb), 0.05) 1px, transparent 1px),
                                              linear-gradient(to bottom, rgba(var(--border-rgb), 0.05) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                        }}
                    />
                </div>

                <div className="relative z-10 w-full flex flex-col">
                    {/* Premium Header Section */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-4 md:mb-10 text-center w-full shrink-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-3 sm:mb-6"
                        >
                            <Sparkles size={12} className="text-[var(--primary)]" />
                            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Career Path</span>
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                            style={{ color: "var(--text)" }}
                        >
                            Professional{" "}
                            <span 
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))"
                                }}
                            >
                                Experience
                            </span>
                        </motion.h2>

                        {/* <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
                        >
                            A visual journey through my professional roles, highlighting the impactful projects, scalable architectures, and modern technologies I've worked with.
                        </motion.p> */}
                    </div>

                    {/* Timeline Progress Tracker */}
                    <div className="max-w-7xl mx-auto px-6 mb-12 hidden md:block w-full">
                        <div className="relative h-[2px] bg-[var(--text)]/10 rounded-full">
                            <motion.div
                                className="absolute h-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
                                style={{ width: progressWidth }}
                            />
                            {experiences.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleNodeClick(i)}
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--border)] hover:border-[var(--primary)] hover:scale-125 transition-all duration-300 z-20 group shadow-md"
                                    style={{ left: `${(i / (experiences.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                >
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all text-[8px] font-black uppercase tracking-widest text-[var(--text)] whitespace-nowrap bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--border)] shadow-xl">
                                        {experiences[i].company}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal Scroller */}
                    <div className="flex items-start mt-2 md:mt-0">
                        <motion.div
                            style={{ x: xTransform }}
                            className="flex items-start gap-4 sm:gap-8 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-24 w-max"
                        >
                            {experiences.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .details-scroll::-webkit-scrollbar { width: 4px; }
                .details-scroll::-webkit-scrollbar-track { background: transparent; }
                .details-scroll::-webkit-scrollbar-thumb { 
                    background: rgba(var(--primary-rgb), 0.2); 
                    border-radius: 10px; 
                }
                .details-scroll::-webkit-scrollbar-thumb:hover { background: var(--primary); }
            `}</style>
        </section>
    );
};

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[600px] lg:w-[700px] group relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-[65vh] sm:h-[60vh] flex flex-col p-5 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[rgba(var(--bg-rgb),0.5)] border border-[rgba(var(--border-rgb),0.1)] backdrop-blur-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/5 rounded-full -translate-y-8 translate-x-8 blur-2xl" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 md:mb-8 shrink-0">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] flex shrink-0 items-center justify-center text-[var(--primary)] shadow-inner group-hover:scale-105 transition-transform duration-500">
                            {exp.icon}
                        </div>
                        <div className="space-y-0.5">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] transition-colors line-clamp-2 md:line-clamp-1">
                                {exp.role}
                            </h3>
                            <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest opacity-80">
                                <Building size={12} className="text-[var(--primary)] shrink-0" /> <span className="truncate">{exp.company}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements List - Scrollable */}
                <div className="flex-grow overflow-y-auto pr-4 mb-10 details-scroll">
                    <ul className="space-y-4">
                        {exp.details.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-start gap-3 group/item"
                            >
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 group-hover/item:scale-125 transition-transform" />
                                <p className="text-sm md:text-base font-medium leading-relaxed text-[var(--text-muted)] group-hover/item:text-[var(--text)] transition-colors">
                                    {item}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Footer Info Sticky */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 bg-gradient-to-t from-[rgba(var(--bg-rgb),0.9)] via-[rgba(var(--bg-rgb),0.7)] to-transparent flex items-center justify-between pointer-events-none rounded-b-[2rem] md:rounded-b-[2.5rem]">
                    <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] pointer-events-auto">
                        <Calendar size={10} className="text-[var(--primary)] shrink-0" />
                        <span className="whitespace-nowrap">{exp.date}</span>
                    </div>
                    <ArrowRight size={16} className="text-[var(--primary)] opacity-20 -rotate-45 group-hover:rotate-0 group-hover:opacity-100 transition-all pointer-events-auto md:w-[18px] md:h-[18px]" />
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
