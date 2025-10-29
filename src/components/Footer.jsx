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
      className="relative py-12 bg-gradient-to-b from-white via-indigo-50/60 to-pink-50/40 backdrop-blur-sm border-t border-indigo-100"
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
        className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Gradient divider */}
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent mb-8" />

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
              className="p-3 rounded-full bg-white border border-indigo-100 shadow-sm hover:shadow-lg transition-all"
            >
              <span className="text-indigo-600 hover:text-pink-500 transition-colors">
                {s.icon}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Signature */}
        <motion.p
          whileHover={{ scale: 1.03 }}
          className="text-sm md:text-base text-slate-600 font-medium"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Nishant Rathore
          </span>{" "}
          • Built with ❤️ using{" "}
          <span className="text-indigo-500 font-semibold">React</span>,{" "}
          <span className="text-purple-500 font-semibold">Tailwind</span> &{" "}
          <span className="text-pink-500 font-semibold">Framer Motion</span>
        </motion.p>
      </div>

      {/* Floating subtle gradient blobs */}
      <motion.div
        className="absolute -bottom-8 left-1/3 w-28 h-28 bg-indigo-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.footer>
  );
}
