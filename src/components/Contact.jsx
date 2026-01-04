import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            tempErrors.email = "Please enter a valid email.";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required.";
        } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
            tempErrors.phone = "Please enter a valid phone number.";
        }
        if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("sending");

        try {
            const res = await fetch("https://ecom-l0jv.onrender.com/api/portfolio-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setStatus(""), 3000);
            } else throw new Error("Failed to send");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="relative pt-28 pb-10 px-6 overflow-hidden"
        >

            <div className="relative max-w-5xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent drop-shadow-sm"
                    style={{
                        background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))", WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Let’s Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-xl mx-auto mb-12 leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                >
                    Have a project, a collaboration idea, or just want to say hi? Send me a message — I’d love to connect and create something awesome.
                </motion.p>

                {/* Contact form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative p-10 rounded-3xl max-w-2xl mx-auto border backdrop-blur-xl shadow-md"
                    style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
                >
                    {/* Glowing gradient border */}
                    <div
                        className="absolute inset-0 rounded-3xl pointer-events-none blur-md"
                        style={{
                            background: "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
                            opacity: 0.4,
                            border: "2px solid transparent",
                        }}
                    />

                    <div className="grid md:grid-cols-2 gap-6 relative">
                        {/* Animated Inputs */}
                        {[{ icon: <User />, name: "name", placeholder: "Your Name" }, { icon: <Mail />, name: "email", placeholder: "Your Email" }].map(
                            (item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative text-left"
                                >
                                    <span className="absolute top-3 left-3" style={{ color: "var(--primary)" }}>
                                        {item.icon}
                                    </span>
                                    <input
                                        type={item.name === "email" ? "email" : "text"}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        value={formData[item.name]}
                                        onChange={handleChange}
                                        className={`w-full pl-10 p-3 rounded-xl border focus:outline-none focus:ring-2`}
                                        style={{
                                            borderColor: errors[item.name] ? "var(--error)" : "var(--border)",
                                            backgroundColor: "var(--card-bg)",
                                            color: "var(--text)",
                                            focusRingColor: "var(--primary)",
                                        }}
                                    />
                                    {errors[item.name] && (
                                        <p className="text-sm mt-1 pl-2" style={{ color: "var(--error)" }}>
                                            {errors[item.name]}
                                        </p>
                                    )}
                                </motion.div>
                            )
                        )}

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative text-left md:col-span-2"
                        >
                            <Phone size={20} className="absolute top-3 left-3" style={{ color: "var(--primary)" }} />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-10 p-3 rounded-xl border focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: errors.phone ? "var(--error)" : "var(--border)",
                                    backgroundColor: "var(--card-bg)",
                                    color: "var(--text)",
                                    focusRingColor: "var(--primary)",
                                }}
                            />
                            {errors.phone && (
                                <p className="text-sm mt-1 pl-2" style={{ color: "var(--error)" }}>
                                    {errors.phone}
                                </p>
                            )}
                        </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative mt-6 text-left"
                    >
                        <MessageSquare className="absolute top-3 left-3" size={20} style={{ color: "var(--primary)" }} />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 rounded-xl border focus:outline-none focus:ring-2"
                            style={{
                                borderColor: errors.message ? "var(--error)" : "var(--border)",
                                backgroundColor: "var(--card-bg)",
                                color: "var(--text)",
                                focusRingColor: "var(--primary)",
                            }}
                        />
                        {errors.message && (
                            <p className="text-sm mt-1 pl-2" style={{ color: "var(--error)" }}>
                                {errors.message}
                            </p>
                        )}
                    </motion.div>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-8 w-full md:w-auto px-10 py-3 font-semibold rounded-full flex items-center justify-center gap-2 mx-auto shadow-md"
                        style={{
                            background:
                                status === "error"
                                    ? "linear-gradient(to right, var(--error), var(--error-dark))"
                                    : "linear-gradient(to right, var(--primary), var(--secondary), var(--accent-2))",
                            color: "var(--white)",
                            opacity: status === "sending" ? 0.7 : 1,
                        }}
                    >
                        {status === "sending" ? (
                            <>⏳ Sending...</>
                        ) : status === "sent" ? (
                            <>✅ Sent!</>
                        ) : status === "error" ? (
                            <>❌ Failed</>
                        ) : (
                            <>
                                <Send size={18} /> Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-col md:flex-row justify-center gap-6"
                    style={{ color: "var(--text-muted)" }}
                >
                    <div className="flex items-center gap-2">
                        <MapPin size={18} style={{ color: "var(--primary)" }} />
                        <span>India</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={18} style={{ color: "var(--primary)" }} />
                        <a href="mailto:rnishant428@gmail.com" style={{ color: "var(--text)" }} className="hover:underline">
                            rnishant428@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
