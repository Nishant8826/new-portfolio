import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Zap, MapPin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Docker", "AWS", "Three.js", "Framer", "Supabase", "PostgreSQL", "MongoDB", "Figma"];

  return (
    <footer className="relative pt-32 pb-12 bg-[var(--bg)] border-t border-[rgba(var(--border-rgb),0.05)] overflow-hidden">
      
      {/* Subtle Technology Scroller */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-4 border-b border-[rgba(var(--border-rgb),0.02)] bg-[var(--bg-soft)]/10">
        <div className="flex whitespace-nowrap animate-marquee select-none pointer-events-none">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center mx-12 gap-3 opacity-20">
              <span className="w-1 h-1 rounded-full bg-[var(--primary)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text)]">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-[var(--text)] flex items-center justify-center text-[var(--bg)] shadow-lg transition-transform group-hover:rotate-6">
                  <Zap size={22} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-[var(--text)]">Nishant Rathore.</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">Creative Developer</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[var(--text-muted)] leading-relaxed max-w-[240px]">
                Building high-performance digital experiences with focus on clean code and elegant design.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">explore</h4>
            <nav className="flex flex-col gap-4">
              {['About', 'Projects', 'Experience', 'Services'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-[var(--text-muted)] hover:text-[var(--primary)] transition-all flex items-center gap-2 group">
                  <div className="w-0 group-hover:w-4 h-[1px] bg-[var(--primary)] transition-all duration-300" />
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Connection */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:nishant8826@gmail.com" className="flex flex-col group">
                <span className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">nishant8826@gmail.com</span>
                <span className="text-[10px] font-medium text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">Contact Me <ExternalLink size={10} className="inline ml-1" /></span>
              </a>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/Nishant8826" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/nishant8826" },
                  { icon: <Twitter size={18} />, href: "#" },
                ].map((soc, i) => (
                  <motion.a 
                    key={i} 
                    href={soc.href} 
                    whileHover={{ y: -4, color: "var(--primary)" }}
                    className="w-10 h-10 rounded-xl bg-[var(--bg-soft)] border border-[rgba(var(--border-rgb),0.1)] flex items-center justify-center text-[var(--text-muted)] transition-all shadow-sm"
                  >
                    {soc.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability & Time */}
          <div className="space-y-8 p-8 rounded-3xl bg-[var(--bg-soft)]/40 border border-[rgba(var(--border-rgb),0.05)] shadow-inner">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Active</span>
                </div>
                <span className="text-[10px] font-bold text-[var(--text-muted)] opacity-50 uppercase tracking-widest">New Delhi, IN</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50">Local Time</span>
                <span className="text-3xl font-bold text-[var(--text)] block">{localTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 border-t border-[rgba(var(--border-rgb),0.05)]">
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5, backgroundColor: "var(--primary)", borderColor: "var(--primary)", color: "#fff" }}
            className="group flex items-center gap-4 py-3.5 px-8 rounded-full bg-transparent border border-[var(--text-muted)]/20 text-[var(--text-muted)] font-bold uppercase tracking-widest text-[9px] transition-all shadow-sm"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </motion.button>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
              <span>© {new Date().getFullYear()} Nishant Rathore</span>
              <span className="w-1 h-1 rounded-full bg-[var(--primary)]" />
              <span className="text-[var(--text)] opacity-60">Handcrafted in India</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 60s linear infinite; }
      `}</style>
    </footer>
  );
}




