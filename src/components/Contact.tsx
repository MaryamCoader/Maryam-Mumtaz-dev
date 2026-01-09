"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, User, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const mailtoLink = `mailto:maryamqureshimumtazm.a@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section id="contact" className="bg-[#030014] relative py-20 md:py-32 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Impactful Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter">
                                Let&apos;s Build <br />
                                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 italic">
                                    Something
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                Have a project in mind? Let&apos;s collaborate to create something exceptional.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <ContactItem
                                href="mailto:maryamqureshimumtazm.a@gmail.com"
                                icon={<Mail size={20} />}
                                label="Email"
                                value="maryamqureshimumtazm.a@gmail.com"
                            />
                            <ContactItem
                                href="https://linkedin.com/in/maryam-mumtaz-315358361/"
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                                value="in/maryam-mumtaz"
                            />
                            <ContactItem
                                href="https://github.com/MaryamMumtaz-piaic"
                                icon={<Github size={20} />}
                                label="GitHub"
                                value="@MaryamMumtaz-piaic"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">
                                Currently accepting new projects
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side: Glassmorphic Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glow effect behind card */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-2xl opacity-50 rounded-[3rem]" />

                        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email address"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Your message..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none placeholder:text-slate-700"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:bg-cyan-400 active:scale-[0.98] disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}

function ContactItem({ href, icon, label, value }: any) {
    return (
        <a
            href={href}
            target="_blank"
            className="flex items-center gap-5 group"
        >
            <div className="w-11 h-11 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">
                {icon}
            </div>
            <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-0.5 group-hover:text-cyan-400 transition-colors">{label}</span>
                <p className="text-white font-bold text-sm tracking-tight">{value}</p>
            </div>
        </a>
    );
}
