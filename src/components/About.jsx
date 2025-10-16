import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-white via-indigo-50/40 to-purple-50/40 overflow-hidden"
    >
      {/* === Decorative Glows === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -top-20 left-10 w-64 h-64 bg-indigo-400/30 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-10 w-72 h-72 bg-purple-400/30 rounded-full blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === Left: Text Section === */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I’m a <span className="font-semibold text-indigo-600">Full Stack Developer</span> with
            3+ years of experience building intuitive, high-performance web and mobile applications.  
            I specialize in creating <span className="text-purple-600 font-semibold">beautifully
            scalable frontends</span> using React, React Native, and Tailwind — supported by robust{" "}
            <span className="text-indigo-600 font-semibold">Node.js + MongoDB</span> backends.
          </motion.p>

          <motion.p
            className="text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Beyond coding, I’m passionate about <span className="font-semibold text-purple-600">
            UI/UX design, performance optimization, and animation-driven experiences</span>.
            My approach blends clean architecture, usability, and creativity — bringing ideas
            to life with precision and polish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full font-semibold text-white 
                         bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md 
                         hover:scale-105 hover:shadow-xl transition-all"
            >
              View My Skills
            </button>
          </motion.div>
        </div>

        {/* === Right: Animated Profile / Visual Accent === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg shadow-indigo-200">
            <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-60 h-60 rounded-full border-2 border-dashed border-indigo-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
              >
                <span className="text-7xl">👨‍💻</span>
                <p className="text-slate-600 mt-3 font-semibold">
                  Passionate Developer
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
