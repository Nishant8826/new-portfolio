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
            className="relative py-24 px-6 bg-gradient-to-b from-white via-indigo-50 to-pink-50 overflow-hidden"
        >
            {/* Background glows */}
            <motion.div
                className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-5xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                    Let’s Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 max-w-xl mx-auto mb-12"
                >
                    Have a project in mind, a collaboration, or just want to say hi?
                    Drop a message below — I’d love to connect.
                </motion.p>

                {/* Contact form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-indigo-100 max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="relative text-left">
                            <User className="absolute top-3 left-3 text-indigo-500" size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full pl-10 p-3 rounded-xl border ${errors.name ? "border-red-400" : "border-indigo-100"
                                    } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white`}
                            />
                            {errors.name && (
                                <motion.p className="text-red-500 text-sm mt-1 pl-2">{errors.name}</motion.p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="relative text-left">
                            <Mail className="absolute top-3 left-3 text-indigo-500" size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full pl-10 p-3 rounded-xl border ${errors.email ? "border-red-400" : "border-indigo-100"
                                    } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white`}
                            />
                            {errors.email && (
                                <motion.p className="text-red-500 text-sm mt-1 pl-2">{errors.email}</motion.p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="relative text-left md:col-span-2">
                            <Phone className="absolute top-3 left-3 text-indigo-500" size={20} />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pl-10 p-3 rounded-xl border ${errors.phone ? "border-red-400" : "border-indigo-100"
                                    } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white`}
                            />
                            {errors.phone && (
                                <motion.p className="text-red-500 text-sm mt-1 pl-2">{errors.phone}</motion.p>
                            )}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative mt-6 text-left">
                        <MessageSquare className="absolute top-3 left-3 text-indigo-500" size={20} />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full pl-10 p-3 rounded-xl border ${errors.message ? "border-red-400" : "border-indigo-100"
                                } focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white`}
                        ></textarea>
                        {errors.message && (
                            <motion.p className="text-red-500 text-sm mt-1 pl-2">{errors.message}</motion.p>
                        )}
                    </div>

                    {/* Submit button */}
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={status === "sending"}
                        className={`mt-8 w-full md:w-auto px-8 py-3 font-semibold text-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto ${status === "error"
                            ? "bg-red-500"
                            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            } disabled:opacity-70`}
                    >
                        {status === "sending" ? (
                            <>Sending...</>
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
                <div className="mt-10 text-slate-600 flex flex-col md:flex-row justify-center gap-6">
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
                </div>
            </div>
        </section>
    );
}
