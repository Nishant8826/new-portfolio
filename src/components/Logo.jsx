import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center gap-3 select-none cursor-pointer group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* Animated Symbol */}
      <motion.div
        initial={{ rotate: -10, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="relative flex items-center justify-center w-11 h-11 rounded-2xl 
                   shadow-lg transition-all duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, var(--primary), var(--secondary), var(--accent-2))`,
          boxShadow: `0 10px 15px rgba(var(--primary-rgb), 0.3)`,
        }}
      >
        {/* Glossy Shine */}
        <div
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background: `linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent)`,
          }}
        />
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="text-white font-extrabold text-lg tracking-wider drop-shadow-sm"
        >
          NR
        </motion.span>
      </motion.div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent-2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nishant Rathore
        </motion.span>



        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[13px] font-medium group-hover:transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          Full Stack Developer
        </motion.span>
      </div>
    </motion.div>
  );
}
