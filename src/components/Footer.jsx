import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: <Github size={20} />, link: "https://github.com/Nishant8826", label: "GitHub" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/nishant8826", label: "LinkedIn" },
    { icon: <Mail size={20} />, link: "mailto:nishant8826@gmail.com", label: "Email" },
    { icon: <Globe size={20} />, link: "https://nishantrathore.vercel.app", label: "Portfolio" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-12  border-t"
    >
      {/* Soft animated background shimmer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Gradient divider */}
        <div className="h-px w-2/3 mx-auto mb-8"/>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-8">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border shadow-sm hover:shadow-lg transition-all"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--primary)",
              }}
            >
              <span style={{ color: "var(--primary)" }}>{s.icon}</span>
            </motion.a>
          ))}
        </div>

        {/* Signature */}
        <motion.p
          whileHover={{ scale: 1.03 }}
          className="text-sm md:text-base font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nishant Rathore
          </span>{" "}
          • Built with ❤️ using{" "}
          <span style={{ color: "var(--primary)" }} className="font-semibold">
            React
          </span>
          ,{" "}
          <span style={{ color: "var(--secondary)" }} className="font-semibold">
            Tailwind
          </span>{" "}
          &{" "}
          <span style={{ color: "var(--accent-2)" }} className="font-semibold">
            Framer Motion
          </span>
        </motion.p>
      </div>

      {/* Floating subtle gradient blobs */}
      <motion.div
        className="absolute -bottom-8 left-1/3 w-28 h-28 rounded-full blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "var(--primary)/20" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "var(--accent-2)/20" }}
      />
    </motion.footer>
  );
}
