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
            className="relative pt-28 pb-10 px-6 bg-gradient-to-b from-indigo-50 via-white to-pink-50 overflow-hidden"
        >
            {/* Animated background blobs */}
            <motion.div
                className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
                animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-5xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm"
                >
                    Let’s Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Have a project, a collaboration idea, or just want to say hi?
                    Send me a message — I’d love to connect and create something awesome.
                </motion.p>

                {/* Contact form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/30 max-w-2xl mx-auto"
                >
                    {/* Glowing gradient border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-40 blur-md pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-6 relative">
                        {/* Animated Inputs */}
                        {[
                            { icon: <User />, name: "name", placeholder: "Your Name" },
                            { icon: <Mail />, name: "email", placeholder: "Your Email" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative text-left"
                            >
                                <span className="absolute top-3 left-3 text-indigo-500">{item.icon}</span>
                                <input
                                    type={item.name === "email" ? "email" : "text"}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    value={formData[item.name]}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3 rounded-xl border ${errors[item.name]
                                        ? "border-red-400"
                                        : "border-indigo-100"
                                        } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70`}
                                />
                                {errors[item.name] && (
                                    <p className="text-red-500 text-sm mt-1 pl-2">{errors[item.name]}</p>
                                )}
                            </motion.div>
                        ))}

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative text-left md:col-span-2"
                        >
                            <Phone className="absolute top-3 left-3 text-indigo-500" size={20} />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pl-10 p-3 rounded-xl border ${errors.phone ? "border-red-400" : "border-indigo-100"
                                    } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1 pl-2">{errors.phone}</p>}
                        </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative mt-6 text-left"
                    >
                        <MessageSquare className="absolute top-3 left-3 text-indigo-500" size={20} />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full pl-10 p-3 rounded-xl border ${errors.message ? "border-red-400" : "border-indigo-100"
                                } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1 pl-2">{errors.message}</p>}
                    </motion.div>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={status === "sending"}
                        className={`mt-8 w-full md:w-auto px-10 py-3 font-semibold text-white rounded-full shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto bg-gradient-to-r ${status === "error"
                            ? "from-red-500 to-red-600"
                            : "from-indigo-500 via-purple-500 to-pink-500"
                            } disabled:opacity-70`}
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
                    className="mt-12 text-slate-600 flex flex-col md:flex-row justify-center gap-6"
                >
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-indigo-500" />
                        <span>India</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={18} className="text-indigo-500" />
                        <a href="mailto:rnishant428@gmail.com" className="hover:text-indigo-600">
                            rnishant428@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
