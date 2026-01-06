"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import {
    User,
    Code,
    GraduationCap,
    Award,
    Brain,
    Shield
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("ai-journey");

    const tabs = [
        { id: "story", label: "My Story", icon: <User size={20} /> },
        { id: "experience", label: "Experience", icon: <Code size={20} /> },
        { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
        { id: "skills", label: "Skills", icon: <Award size={20} /> },
        { id: "ai-journey", label: "AI Journey", icon: <Brain size={20} /> },
        { id: "certifications", label: "Certifications", icon: <Shield size={20} /> },
    ];

    return (
        <Section id="about" className="bg-[#030014] relative py-20 md:py-28 overflow-hidden">
            {/* Background Orbs for Consistency */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="relative inline-block mb-4">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-white/5 uppercase tracking-tighter select-none">
                            About
                        </span>
                        <h2 className="relative text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                            About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic font-light">Me</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide">
                        Full Stack Developer crafting exceptional digital experiences with modern technologies
                    </p>
                </motion.div>

                {/* Main Content - Equal Height Columns */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left: Profile Card - Larger Fixed Width */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[320px] flex-shrink-0"
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full flex flex-col">
                            {/* Header matched with card background */}
                            <div className="h-32 bg-white/5 border-b border-white/10 flex-shrink-0" />

                            {/* Profile Image - Super Large */}
                            <div className="relative -mt-24 px-6 mb-6 flex-shrink-0">
                                <div className="w-48 h-48 rounded-full border-4 border-[#030014] overflow-hidden bg-slate-900 mx-auto shadow-2xl">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Maryam Mumtaz"
                                        width={192}
                                        height={192}
                                        className="object-cover w-full h-full scale-105"
                                    />
                                </div>
                            </div>

                            {/* Profile Info - Grow to fill */}
                            <div className="px-6 pb-8 text-center flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-white mb-1">Maryam Mumtaz</h3>
                                <p className="text-blue-400 text-sm font-semibold mb-5">
                                    AI Agent Engineer & Full-Stack Developer
                                </p>

                                {/* Tech Badges - Larger & Animated */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[
                                        { name: "Agentic AI", color: "bg-purple-600" },
                                        { name: "Kubernetes", color: "bg-blue-600" },
                                        { name: "Cloud & DevOps", color: "bg-cyan-600" },
                                        { name: "Next.js 15", color: "bg-slate-700" },
                                        { name: "FastAPI", color: "bg-teal-600" },
                                        { name: "Full-Stack", color: "bg-blue-600" },
                                    ].map((tech) => (
                                        <motion.span
                                            key={tech.name}
                                            whileHover={{ scale: 1.1, translateY: -2 }}
                                            className={`px-3 py-1.5 ${tech.color} text-white rounded text-xs font-semibold cursor-default shadow-lg shadow-black/20 uppercase tracking-tighter`}
                                        >
                                            {tech.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Tabbed Content - Flexible Width */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex overflow-x-auto gap-1 p-2 border-b border-white/10 bg-white/[0.02] scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 border ${activeTab === tab.id
                                        ? "text-cyan-400 bg-cyan-400/10 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                                        : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5"
                                        }`}
                                >
                                    <span className={activeTab === tab.id ? "text-cyan-400" : "text-slate-500"}>
                                        {tab.icon}
                                    </span>
                                    <span>{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-8 h-full">
                            {activeTab === "story" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-5 text-slate-300 text-base"
                                >
                                    <p className="leading-relaxed">
                                        I am an <span className="text-blue-400 font-semibold">AI Agent Engineer & Full-Stack Developer</span> based
                                        in Karachi, Sindh. I specialize in architecting <span className="text-purple-400 font-bold uppercase tracking-tight">Agentic Infrastructure</span>—leveraging reusable intelligence and cloud-native systems to build the next generation of autonomous applications.
                                    </p>
                                    <p className="leading-relaxed">
                                        As a top-performing participant in national-level hackathons, I have achieved significant milestones, including being among the <span className="text-cyan-400 font-bold">first to submit across multiple stages</span> of the Eventon Hackathon series. My expertise spans from building AI-native textbook platforms to complex microservices architectures on Kubernetes.
                                    </p>
                                    <p className="leading-relaxed">
                                        I have successfully delivered 50+ real-world projects, mastering advanced tools like <span className="text-white font-bold italic">Claude Code, Goose, Kafka, and Dapr</span>. My technical journey is defined by a 90%+ reduction in token usage through optimized execution patterns and the creation of portable AI skills for autonomous infrastructure.
                                    </p>
                                </motion.div>
                            )}

                            {activeTab === "experience" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Cloud-Native AI Architect</h4>
                                        <p className="text-cyan-400 text-sm mb-3 font-black uppercase tracking-widest">Eventon Hackathon Submission Specialist</p>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• Pioneered "Reusable Intelligence" skills for autonomous infrastructure management.</li>
                                            <li>• Mastered Spec-Driven Development (SDD) to architect complex systems without manual boilerplate.</li>
                                            <li>• Deployed distributed AI microservices using Kafka, Dapr, and Helm on DigitalOcean Kubernetes (DOKS).</li>
                                            <li>• Achieved historic "early-submission" status across all three stages of national hackathons.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">AI Agent Engineer & Full-Stack Developer</h4>
                                        <p className="text-purple-400 text-sm mb-3">2023 - Present</p>
                                        <ul className="space-y-2 text-slate-300 text-sm">
                                            <li>• Engineered 150+ advanced AI agents using OpenAI SDK, LangChain, and MCP protocols.</li>
                                            <li>• Built 50+ full-stack projects including production-ready RAG platforms and E-commerce sites.</li>
                                            <li>• Integrated advanced payment gateways (Stripe) and AI-driven supply chain solutions.</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "education" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-5"
                                >
                                    <div className="border-l-2 border-blue-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Agentic & Robotic AI Engineering</h4>
                                        <p className="text-blue-400 text-sm mb-2">PIAIC</p>
                                        <p className="text-slate-500 text-sm mb-2">April 2025 - October 2026</p>
                                        <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-purple-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Diploma in Information Technology</h4>
                                        <p className="text-purple-400 text-sm mb-2">Govt. of Sindh VTC</p>
                                        <p className="text-slate-500 text-sm mb-2">February 2023 - September 2024</p>
                                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>

                                    <div className="border-l-2 border-pink-500 pl-4">
                                        <h4 className="text-lg font-bold text-white mb-1">Intermediate in Engineering</h4>
                                        <p className="text-pink-400 text-sm mb-2">Govt. Degree College for Women</p>
                                        <p className="text-slate-500 text-sm mb-2">April 2020 - November 2022</p>
                                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "skills" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Cloud & Platforms</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["AWS", "GCP", "Vercel", "DigitalOcean", "Firebase", "Neon", "Supabase", "Cloudflare"].map((tech, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-cyan-600/10 text-cyan-400 rounded-md text-[10px] border border-cyan-600/20 font-bold uppercase">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">DevOps & Tooling</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Docker", "K8s", "Helm", "Kafka", "Dapr", "Argo CD", "Claude Code", "Goose"].map((tool, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-purple-600/10 text-purple-400 rounded-md text-[10px] border border-purple-600/20 font-bold uppercase">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">AI Execution Patterns</h4>
                                        <div className="grid grid-cols-2 gap-3 text-slate-300 text-sm font-medium italic">
                                            {[
                                                "Spec-Driven Development (SDD)",
                                                "MCP Code Execution",
                                                "Reusable Intelligence (Skills)",
                                                "System Triage Orchestration",
                                                "Autonomous Infrastructure",
                                                "GitOps Deployment"
                                            ].map((skill, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                                    <span className="text-xs">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "ai-journey" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                                            The Architect&apos;s <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 italic">Odyssey</span>
                                        </h3>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Engineering Intelligence</p>
                                    </div>

                                    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                                        <p>
                                            My AI journey began with a simple question: <span className="text-cyan-400 italic">"How can we move beyond static code to systems that think?"</span> This curiosity led me to pivot from traditional full-stack development to the frontier of <span className="text-purple-400 font-bold">Agentic AI</span>. I started by mastering the basics of LLM integration, but quickly realized that the future belongs to autonomous agents capable of complex reasoning and independent execution.
                                        </p>

                                        <p>
                                            Over the past year, I have engineered over <span className="text-blue-400 font-bold text-lg">150+ Advanced AI Agents</span>, moving from simple chatbots to sophisticated <span className="text-purple-400 font-bold">multi-agent orchestrations</span>. I have mastered the <span className="text-cyan-400 font-bold uppercase tracking-tight">Model Context Protocol (MCP)</span>, allowing my agents to interact with real-world databases and local system resources, and pioneered <span className="text-white font-bold italic">Spec-Driven Development (SDD)</span> workflows that automate the architectural heavy-lifting of software engineering.
                                        </p>

                                        <div className="relative px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-cyan-500/30 transition-all duration-500">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                            <p className="relative z-10 italic text-slate-300 text-sm md:text-base">
                                                &quot;I don&apos;t just build agents; I architect ecosystems where intelligence is a reusable skill, and infrastructure is managed by the very systems it supports.&quot;
                                            </p>
                                        </div>

                                        <p>
                                            A defining milestone in my journey has been my consistency in national technical arenas. In the <strong className="text-white">Eventon Hackathon series</strong>, I achieved a historic record by being among the <span className="text-cyan-400 font-bold">first to submit across all three stages</span>, proving my ability to architect and deploy complex, cloud-native AI systems under intense pressure.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { title: "LearnFlow Platform", desc: "Multi-agent tutor with struggle detection.", color: "bg-purple-500" },
                                                { title: "AI-Native Textbooks", desc: "RAG-powered educational systems.", color: "bg-blue-500" },
                                                { title: "Distributed Todo", desc: "K8s-deployed Cloud-Native system.", color: "bg-cyan-500" },
                                                { title: "Reusable Skills", desc: "20+ coding skills for Claude Code.", color: "bg-teal-500" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                                                    <div className={`w-1 h-full ${item.color} rounded-full flex-shrink-0`} />
                                                    <div>
                                                        <h5 className="text-xs font-black text-white uppercase tracking-wider">{item.title}</h5>
                                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-cyan-500/50 transition-colors">
                                            <div className="text-2xl font-black text-cyan-400 mb-0.5">150+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Agents Built</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-blue-500/50 transition-colors text-center">
                                            <div className="text-2xl font-black text-blue-400 mb-0.5">1st</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Hackathon Submissions</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-purple-500/50 transition-colors">
                                            <div className="text-2xl font-black text-purple-400 mb-0.5">90%+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Token Efficiency</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group hover:border-cyan-500/50 transition-colors">
                                            <div className="text-2xl font-black text-cyan-400 mb-0.5">50+</div>
                                            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Deployment Success</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "certifications" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-3"
                                >
                                    <div className="bg-[#0f0f0f] p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-white font-bold mb-1 text-sm">PIAIC - Agentic AI Engineering</h4>
                                        <p className="text-slate-400 text-xs mb-2">Presidential Initiative for AI & Computing</p>
                                        <span className="inline-block px-2 py-0.5 bg-cyan-600 text-white text-[10px] font-semibold rounded-full">
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="bg-[#0f0f0f] p-4 rounded-xl border border-slate-800">
                                        <h4 className="text-white font-bold mb-1 text-sm">DIT - Information Technology</h4>
                                        <p className="text-slate-400 text-xs mb-2">Government of Sindh VTC</p>
                                        <span className="inline-block px-2 py-0.5 bg-green-600 text-white text-[10px] font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
