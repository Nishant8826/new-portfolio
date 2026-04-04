import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award, GraduationCap, Code, Monitor, Calendar, CheckCircle2, Building } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Tallento.ai (Remote)",
        date: "Dec 2025 – Mar 2026",
        icon: <Code size={24} strokeWidth={1.5} />,
        details: [
            "Architected a role- and permission-based access control (RBAC) system supporting multiple roles per user, ensuring secure, granular authorization; streamlined access management, minimized unauthorized data exposure, and enhanced system scalability.",
            "Simplified media handling by migrating from multiple media tables to a single centralized media table, enabling faster and more reliable media fetching while reducing database complexity.",
            "Designed and implemented a comprehensive Feed module enabling users to upload and manage posts with support for multiple media types, with interactive features such as likes, comments, and shares.",
            "Implemented performance optimization strategies across the stack, including integrating Redis caching, introducing frontend debouncing, and minimizing unnecessary component re-renders.",
            "Contributed to database and web app migration from a deprecated PHP stack to a modern, maintainable technology framework.",
            "Implemented a real-time chat system between employers and candidates using WebSockets (Socket.io) to enable instant communication.",
            "Developed browser push notifications using Firebase Cloud Messaging (FCM) to notify employers and candidates, ensuring real-time alerts.",
            "Implemented CI/CD pipelines to automate build, testing, and deployment workflows, reducing manual intervention."
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Freelance (Remote)",
        date: "Jun 2025 – Sep 2025",
        icon: <Monitor size={24} strokeWidth={1.5} />,
        details: [
            "Designed the system architecture (HLD and LLD) for scalability and performance and developed a trading-learning app using React Native with stage-based lessons, quizzes, and gamification.",
            "Integrated Firebase Authentication including email, phone, and social login to simplify onboarding and enhance security using OAuth providers.",
            "Added Razorpay payment gateway for subscriptions and in-app purchases to enable smooth monetization and secure transaction flow."
        ],
    },
    {
        role: "React-Native Developer",
        company: "ENotaryOnCall, Techrev",
        date: "Mar 2024 – Jun 2025",
        icon: <Briefcase size={24} strokeWidth={1.5} />,
        details: [
            "Built a production-ready React Native (Expo) mobile application with cross-platform compatibility and reusable component architecture.",
            "Integrated backend APIs with optimized state management and on-device performance tuning using Redux Toolkit, memoization, and render profiling.",
            "Delivered a responsive and intuitive UI/UX through Tailwind styling, scalable component patterns, and modular code structure."
        ],
    },
    {
        role: "MEAN Stack Developer",
        company: "KeepFluent, Techrev",
        date: "Jan 2023 – Jun 2025",
        icon: <Award size={24} strokeWidth={1.5} />,
        details: [
            "Built RESTful APIs using Express.js with modular routing, middleware, and secure authentication to support scalable backend architecture.",
            "Delivered front-end with Angular-based web app and Ionic-based mobile app with reusable component architecture and API integration.",
            "Created responsive UIs using Bootstrap and Material UI, improving accessibility and user experience across device breakpoints.",
            "Optimized SQL database performance through index tuning, query optimization, and structured relational schema design.",
            "Managed server deployments and updates using PuTTY, configuring environments, and ensuring smooth production releases.",
            "Developed a centralized logging system using Winston and Morgan to capture application and server logs.",
            "Monitored server health and application performance on cloud infrastructure proactively identifying and resolving production issues."
        ],
    },
    {
        role: "Teaching Assistant",
        company: "FunctionUp (Remote)",
        date: "Aug 2022 – Dec 2022",
        icon: <GraduationCap size={24} strokeWidth={1.5} />,
        details: [
            "Mentored students on Node.js, MongoDB, AWS, and backend development fundamentals.",
            "Assisted students in live coding sessions, demonstrating problem-solving approaches, debugging, and best practices.",
            "Provided 1-on-1 doubt resolution and technical guidance to complete assignments and capstone projects."
        ],
    },
];

const ExperienceSection = () => {
    const sectionRef = useRef(null);
    
    // Track the vertical scroll progress of the entire section (which is heavily heightened)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
    });
    
    // Map the scroll progress to width for the top tracking line
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    
    // Map the vertical scroll to negative horizontal movement for the cards.
    // This perfectly binds the X-axis tracking to the Y-axis scroll.
    // Notice that both mapping strings must have IDENTICAL CSS syntax structure for Framer Motion to animate them seamlessly.
    const xTransform = useTransform(scrollYProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

    const handleNodeClick = (index) => {
        if (!sectionRef.current) return;
        
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate the absolute top position of the section on the page
        const sectionTop = rect.top + window.scrollY;
        
        // Using "start start" and "end end" mapping:
        // The total scrollable distance is the section's height minus the viewport height
        const scrollableDistance = rect.height - window.innerHeight;
        const progress = index / (experiences.length - 1);
        
        const targetY = sectionTop + (scrollableDistance * progress);
        
        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    };

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative h-[400vh]"
            style={{ backgroundColor: "var(--bg)" }}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* SaaS Faint Grid Background */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-40 z-0" 
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(var(--border-rgb), 0.1) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(var(--border-rgb), 0.1) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 80%)'
                    }} 
                />

                {/* Neon Glow spots */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[150px] opacity-10 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[150px] opacity-10 pointer-events-none" />

                <div className="relative w-full z-10 pt-10 sm:pt-0">
                    {/* Title */}
                    <div className="text-center px-4 mb-10 sm:mb-16">
                        <h2 
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
                            style={{ color: "var(--text)" }}
                        >
                            Professional <span style={{
                                background: "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent-2))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>Journey</span>
                        </h2>
                        <p className="text-sm sm:text-base font-medium text-[var(--primary)] tracking-widest uppercase opacity-80 mb-3">
                            A timeline of technical evolution
                        </p>
                        <p className="text-xs font-bold tracking-wider text-[var(--text-muted)] animate-pulse hidden sm:block">
                            SCROLL DOWN TO EXPLORE ↓
                        </p>
                        <p className="text-xs font-bold tracking-wider text-[var(--text-muted)] animate-pulse sm:hidden">
                            SWIPE UP TO EXPLORE ↓
                        </p>
                    </div>

                    {/* Tracking Line Map container */}
                    <div className="relative max-w-[1400px] mx-auto mb-10 px-6 sm:px-10 lg:px-20 hidden md:block z-20">
                         <div className="relative w-full h-[1px] bg-[rgba(var(--border-rgb),0.2)]">
                            {/* Glow Progress Line */}
                            <motion.div 
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
                                style={{ 
                                    width: progressWidth,
                                    background: "linear-gradient(to right, var(--primary), var(--secondary))" 
                                }}
                            />

                            {/* Timeline Nodes */}
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="absolute top-1/2 -translate-y-1/2"
                                    style={{ left: `${(index / (experiences.length - 1)) * 100}%` }}
                                >
                                    <button
                                        onClick={() => handleNodeClick(index)}
                                        className="relative -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--card-bg)] border-2 transition-all duration-300 hover:scale-[1.7] focus:outline-none group cursor-pointer"
                                        style={{ 
                                            borderColor: "rgba(var(--border-rgb), 0.8)",
                                            boxShadow: "0 0 10px rgba(0,0,0,0.2)"
                                        }}
                                        aria-label={`Scroll to ${exp.company}`}
                                    >
                                        {/* Hover Tooltip */}
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[rgba(var(--border-rgb),0.05)] backdrop-blur-xl px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap border border-[rgba(var(--border-rgb),0.1)] shadow-xl pointer-events-none tracking-wide" style={{ color: "var(--text)" }}>
                                            {exp.date.split(" ")[0]} {exp.date.split(" ")[1]} <span className="text-[var(--primary)] mx-1">•</span> {exp.company.replace(" (Remote)", "").split(",")[0]}
                                        </span>
                                    </button>
                                </div>
                            ))}

                            {/* Interactive Moving Dot */}
                            <motion.div 
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--bg)] border-[3px] border-[var(--primary)] rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),1)] z-10 pointer-events-none"
                                style={{ 
                                    left: progressWidth,
                                    x: "-50%"
                                }}
                            />
                         </div>
                    </div>

                    {/* Horizontal Scrolling Area via Y-Axis Transform */}
                    <div className="relative w-full overflow-hidden flex items-start py-8">
                        <motion.div 
                            style={{ x: xTransform }}
                            className="flex items-start gap-6 sm:gap-8 lg:gap-14 px-4 sm:px-10 lg:px-20 w-max pb-14 pt-4 relative"
                        >
                            {experiences.map((exp, index) => (
                                <div key={index} className="shrink-0 w-[90vw] md:w-[650px] lg:w-[750px]">
                                    <SaaSTimelineCard exp={exp} index={index} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SaaSTimelineCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative flex flex-col rounded-3xl overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(var(--border-rgb), 0.2)",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
            }}
        >
            {/* The SaaS Glow on Hover */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                style={{
                    background: "radial-gradient(1200px circle at top left, rgba(var(--primary-rgb),0.06), transparent 60%)"
                }}
            />
            
            {/* Top Border Neon Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[rgba(var(--border-rgb),0.2)] group-hover:via-[var(--primary)] to-transparent transition-all duration-700 opacity-50 group-hover:opacity-100" />
            
            <div className="flex flex-col relative z-10 p-6 sm:p-8 md:p-10">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* Premium Icon box */}
                        <div 
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-shrink-0 items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                            style={{
                                backgroundColor: "rgba(var(--primary-rgb), 0.05)",
                                border: "1px solid rgba(var(--primary-rgb), 0.2)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                            <div className="text-[var(--primary)] z-10 transition-transform duration-500 group-hover:scale-110">
                                {exp.icon}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]" style={{ color: "var(--text)" }}>
                                {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-[rgba(var(--border-rgb),0.05)] rounded-md text-sm font-semibold border" style={{ borderColor: 'rgba(var(--border-rgb),0.1)', color: "var(--text)" }}>
                                    <Building size={14} className="text-[var(--primary)]" />
                                    {exp.company}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Date Badge */}
                    <div className="shrink-0 self-start mt-2 md:mt-0">
                        <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[rgba(var(--primary-rgb),0.03)]"
                              style={{ 
                                  backgroundColor: "rgba(var(--border-rgb), 0.02)", 
                                  color: "var(--text-muted)",
                                  border: "1px solid rgba(var(--border-rgb), 0.15)"
                              }}>
                            <Calendar size={12} className="text-[var(--primary)]" />
                            {exp.date}
                        </span>
                    </div>
                </div>

                {/* Details Array */}
                <ul className="flex flex-col space-y-3.5 mt-2">
                    {exp.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group/item transition-transform duration-300 hover:translate-x-1.5">
                            <span className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(var(--border-rgb),0.1)] border border-[rgba(var(--border-rgb),0.1)] group-hover/item:bg-[var(--primary)] group-hover/item:border-transparent group-hover/item:shadow-[0_0_10px_rgba(var(--primary-rgb),0.4)] transition-all duration-300">
                                <CheckCircle2 size={12} className="text-[var(--text-muted)] group-hover/item:text-[var(--bg)] transition-colors duration-300" strokeWidth={3} />
                            </span>
                            <span className="text-sm sm:text-base leading-relaxed group-hover/item:text-[var(--text)] transition-colors duration-300" style={{ color: "var(--text-muted)" }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
