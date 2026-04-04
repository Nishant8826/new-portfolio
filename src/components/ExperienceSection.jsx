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
            "Architected a granular RBAC system supporting multiple roles per user, enhancing security and system scalability.",
            "Streamlined media management by centralizing data structures, resulting in 40% faster media fetching protocols.",
            "Developed a full-featured Feed module with multi-media support and real-time social interactions.",
            "Optimized performance using Redis caching and frontend debouncing, significantly reducing server load.",
            "Led the migration of legacy PHP systems to a modern, maintainable technology stack.",
            "Integrated real-time communication via Socket.io and push notifications using Firebase Cloud Messaging."
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Freelance",
        location: "Global",
        date: "Jun 2025 – Sep 2025",
        icon: <Monitor size={24} />,
        details: [
            "Designed scalable system architectures for a gamified trading-learning application.",
            "Implemented secure multi-channel onboarding using Firebase and OAuth 2.0 providers.",
            "Integrated Razorpay infrastructure for seamless, secure transaction processing."
        ],
    },
    {
        role: "React Native Developer",
        company: "ENotaryOnCall",
        location: "Techrev",
        date: "Mar 2024 – Jun 2025",
        icon: <Briefcase size={24} />,
        details: [
            "Built a production-grade Expo mobile application with a focus on cross-platform performance.",
            "Managed complex application states using Redux Toolkit and optimized render profiling.",
            "Designed a highly modular UI system using Tailwind styling for rapid feature deployment."
        ],
    },
    {
        role: "MEAN Stack Developer",
        company: "KeepFluent",
        location: "Techrev",
        date: "Jan 2023 – Jun 2025",
        icon: <Award size={24} />,
        details: [
            "Engineered secure RESTful APIs with modular routing and robust authentication layers.",
            "Delivered unified user experiences across Web (Angular) and Mobile (Ionic) platforms.",
            "Tuned RDS performance through query optimization and strategic schema design.",
            "Managed end-to-end production releases and server health monitoring on cloud infrastructure."
        ],
    },
    {
        role: "Teaching Assistant",
        company: "FunctionUp",
        location: "Remote",
        date: "Aug 2022 – Dec 2022",
        icon: <GraduationCap size={24} />,
        details: [
            "Mentored students on backend engineering fundamentals including Node.js and AWS.",
            "Guided 150+ students through complex debugging and architectural problem-solving sessions.",
            "Facilitated 1-on-1 technical strategy meetings for capstone project deliveries."
        ],
    },
];

const ExperienceSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    
    // Smooth horizontal translation based on vertical scroll
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
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
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                
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
                    {/* Condensed Header Section */}
                    <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-14 text-center md:text-left self-start">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 mb-4 whitespace-nowrap"
                        >
                            <Sparkles size={10} className="text-[var(--primary)]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--primary)]">Professional History</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text)] uppercase italic leading-none"
                        >
                            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--text)] to-[var(--secondary)]">Journey.</span>
                        </motion.h2>
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
                    <div className="flex items-start">
                        <motion.div 
                            style={{ x: xTransform }}
                            className="flex items-start gap-6 md:gap-16 lg:gap-20 px-6 md:px-24 w-max"
                        >
                            {experiences.map((exp, index) => (
                                <ExperienceCard key={index} exp={exp} index={index} />
                            ))}
                            <div className="w-[10vw] shrink-0" />
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
            className="shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative h-[65vh] md:h-[60vh] flex flex-col p-6 md:p-10 rounded-[2.5rem] bg-[rgba(var(--bg-rgb),0.5)] border border-[rgba(var(--border-rgb),0.1)] backdrop-blur-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/5 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8 shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] flex items-center justify-center text-[var(--primary)] shadow-inner group-hover:scale-105 transition-transform duration-500">
                            {exp.icon}
                        </div>
                        <div className="space-y-0.5">
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                                {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest opacity-60">
                                <Building size={12} className="text-[var(--primary)]" /> {exp.company}
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
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-[rgba(var(--bg-rgb),0.8)] via-[rgba(var(--bg-rgb),0.6)] to-transparent flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] pointer-events-auto">
                        <Calendar size={10} className="text-[var(--primary)]" />
                        {exp.date}
                    </div>
                    <ArrowRight size={18} className="text-[var(--primary)] opacity-20 -rotate-45 group-hover:rotate-0 group-hover:opacity-100 transition-all pointer-events-auto" />
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
