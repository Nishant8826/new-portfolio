import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const [direction, setDirection] = useState("down");
  const [lastY, setLastY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    return scrollY.on("change", (y) => {
      setDirection(y > lastY ? "down" : "up");
      setLastY(y);
    });
  }, [scrollY, lastY]);

  // Scroll-reactive transforms
  const yGlow1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yGlow2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1.02]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;
    setMouse({ x, y });
  };

  const directionScale = direction === "down" ? 1.02 : 0.98;
  const directionOpacity = direction === "down" ? 1 : 0.95;

  return (
    <motion.section
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        opacity,
        scale,
        transition: "all 0.5s ease-out",
        filter: direction === "down" ? "brightness(1)" : "brightness(0.98)",
        background: "linear-gradient(to bottom, var(--bg), var(--primary)/10, var(--secondary)/10)",
      }}
      id="about"
      className="relative py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Floating Glows */}
      <motion.div
        style={{
          y: yGlow1,
          x: mouse.x * 20,
          backgroundColor: "var(--primary)/30",
        }}
        animate={{
          opacity: direction === "down" ? [0.25, 0.6, 0.25] : [0.5, 0.3, 0.5],
          scale: directionScale,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-16 w-96 h-96 rounded-full blur-[150px]"
      />
      <motion.div
        style={{
          y: yGlow2,
          x: mouse.x * -20,
          backgroundColor: "var(--accent-2)/30",
        }}
        animate={{
          opacity: direction === "down" ? [0.25, 0.7, 0.25] : [0.5, 0.4, 0.5],
          scale: directionScale,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-16 w-[28rem] h-[28rem] rounded-full blur-[180px]"
      />

      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          x: mouse.x * 80, y: mouse.y * 80,
          background: "radial-gradient(circle, var(--bg)/10, transparent 60%)",
        }}
      />

      {/* Main Layout */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Text */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
            style={{
              background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-sm"
          >
            Crafting Code with Precision and Passion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: false }}
            style={{ color: "var(--text-muted)" }}
            className="text-lg md:text-xl leading-relaxed mb-6"
          >
            I’m a <span style={{ color: "var(--primary)", fontWeight: 600 }}>Full Stack Developer</span> with
            3+ years of experience transforming ideas into{" "}
            <span style={{ color: "var(--secondary)", fontWeight: 600 }}>high-performing</span> and{" "}
            <span style={{ color: "var(--accent-2)", fontWeight: 600 }}>design-driven</span> digital experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: false }}
            style={{ color: "var(--text-muted)" }}
            className="leading-relaxed mb-10"
          >
            I love merging clean architecture, fluid animation, and efficient code to build{" "}
            <span style={{ color: "var(--secondary)", fontWeight: 600 }}>premium interactive experiences</span> —
            where creativity meets performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: false }}
          >
            <button
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-10 py-3 rounded-full font-semibold shadow-lg overflow-hidden"
              style={{
                color: "var(--bg)",
                background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0"
                whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(to right, var(--bg)/40, transparent)",
                }}
              />
              <span className="relative z-10">View My Skills →</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Visual Accent */}
        <motion.div
          style={{ y: cardY, scale: directionScale, opacity: directionOpacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            style={{ x: mouse.x * 30, y: mouse.y * 30, background: "linear-gradient(to right, var(--primary)/30, var(--accent-2)/30)" }}
            className="absolute w-[22rem] h-[22rem] rounded-full blur-[120px] -z-10"
          />

          <div
            className="relative w-80 h-80 rounded-[2.5rem] p-[3px] shadow-lg overflow-hidden"
            style={{
              background: "linear-gradient(to top right, var(--primary), var(--secondary), var(--accent-2))",
            }}
          >
            <div className="w-full h-full rounded-[2.4rem] bg-var(--bg) flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(to bottom, var(--bg)/40, transparent)",
                }}
              />

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-64 h-64 rounded-full border-[2px] border-dashed"
                  style={{ borderColor: "var(--primary)/60" }}
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
                style={{ color: "var(--text)" }}
              >
                <span className="text-7xl">👨‍💻</span>
                <p className="mt-3 font-semibold text-lg">Passionate Developer</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
