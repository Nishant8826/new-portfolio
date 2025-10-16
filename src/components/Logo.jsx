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
                   bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 
                   shadow-lg shadow-indigo-200 group-hover:shadow-purple-300 
                   transition-all duration-500 group-hover:scale-110"
      >
        {/* Glossy Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-50" />
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
          className="text-xl md:text-2xl font-extrabold 
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
                     bg-clip-text text-transparent tracking-tight"
        >
          Nishant Rathore
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[13px] text-slate-500 font-medium group-hover:text-slate-700 transition-colors"
        >
          Full Stack Developer
        </motion.span>
      </div>
    </motion.div>
  );
}
