import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, User, MapPin, Globe, CheckCircle2, Phone, Github, Linkedin, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // "", "sending", "sent"
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "message") setCharCount(value.length);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        await new Promise(r => setTimeout(r, 2000));
        setStatus("sent");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="contact" className="relative py-24 lg:py-40 px-6 overflow-hidden bg-[var(--bg)]">
            {/* Elegant Background Gradients */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start"
                >
                    {/* Left: Content & Links */}
                    <div className="space-y-12 lg:sticky lg:top-24">
                        <div className="space-y-6">
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)]">Available for projects</span>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
                                Let's build <br /> 
                                <span className="text-[var(--primary)]">something great</span> together.
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-md italic opacity-80 font-serif">
                                "Design is not just what it looks like and feels like. Design is how it works."
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6">
                            {[
                                { icon: <Mail className="w-5 h-5" />, label: "Email Me", value: "rnishant428@gmail.com", href: "mailto:rnishant428@gmail.com" },
                                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "New Delhi, India", href: "#" },
                            ].map((info, i) => (
                                <a key={i} href={info.href} className="group flex items-center gap-6 p-1 hover:pl-2 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-sm">
                                        {info.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">{info.label}</span>
                                        <span className="text-base font-bold text-[var(--text)]">{info.value}</span>
                                    </div>
                                </a>
                            ))}
                        </motion.div>

                        {/* Social Links Bar */}
                        <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-[rgba(var(--border-rgb),0.05)]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">Follow me</span>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, href: "https://github.com/Nishant8826" },
                                    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/nishant8826" },
                                    { icon: <Twitter size={20} />, href: "#" },
                                ].map((soc, i) => (
                                    <a key={i} href={soc.href} className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors transform hover:scale-110">
                                        {soc.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Premium Glass Form */}
                    <motion.div 
                        variants={itemVariants}
                        className="relative group lg:mt-8"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--primary)]/30 via-transparent to-[var(--secondary)]/30 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                        
                        <form 
                            onSubmit={handleSubmit}
                            className="relative p-8 lg:p-12 rounded-[2.5rem] bg-[rgba(var(--bg-rgb),0.4)] border border-[rgba(var(--border-rgb),0.1)] backdrop-blur-xl shadow-2xl space-y-8"
                        >
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-[var(--text)]">Send Message</h3>
                                <p className="text-sm text-[var(--text-muted)] font-medium">I'll get back to you within 24 hours.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group/input">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1 group-focus-within/input:text-[var(--primary)] transition-colors">Full Name</label>
                                        <div className="relative">
                                            <input required name="name" type="text" placeholder="John Doe" onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-soft)]/50 border border-[rgba(var(--border-rgb),0.1)] focus:border-[var(--primary)]/50 outline-none transition-all font-semibold text-[var(--text)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1 group-focus-within/input:text-[var(--primary)] transition-colors">Email Address</label>
                                        <div className="relative">
                                            <input required name="email" type="email" placeholder="john@example.com" onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-soft)]/50 border border-[rgba(var(--border-rgb),0.1)] focus:border-[var(--primary)]/50 outline-none transition-all font-semibold text-[var(--text)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 group/input">
                                    <div className="flex justify-between px-1">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-focus-within/input:text-[var(--primary)] transition-colors">How can I help?</label>
                                        <span className="text-[9px] font-mono opacity-30">{charCount}/500</span>
                                    </div>
                                    <textarea required name="message" rows="6" placeholder="Tell me about your project..." onChange={handleChange} maxLength="500"
                                        className="w-full px-6 py-5 rounded-2xl bg-[var(--bg-soft)]/50 border border-[rgba(var(--border-rgb),0.1)] focus:border-[var(--primary)]/50 outline-none transition-all font-semibold text-[var(--text)] resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === "sending" || status === "sent"}
                                    className={`relative w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all duration-500 flex items-center justify-center shadow-lg ${
                                        status === "sent" ? "bg-emerald-500 text-white" : "bg-[var(--text)] text-[var(--bg)]"
                                    }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === "sending" ? (
                                            <motion.div key="sending" className="flex items-center gap-3">
                                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </motion.div>
                                        ) : status === "sent" ? (
                                            <motion.div key="sent" className="flex items-center gap-3">
                                                <CheckCircle2 size={16} /> Message Sent
                                            </motion.div>
                                        ) : (
                                            <motion.div key="idle" className="flex items-center gap-3 group-hover:gap-5 transition-all">
                                                Send Message <ArrowRight size={16} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .text-outline {
                    -webkit-text-stroke: 1px var(--text-muted);
                    opacity: 0.3;
                }
            `}</style>
        </section>
    );
}

