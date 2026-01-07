"use client";

import { useParams, useRouter } from "next/navigation";
import { hackathonProjects } from "@/lib/hackathonProjects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Github, ExternalLink, Cpu, Layers, Star, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const project = hackathonProjects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                </div>
                <div className="text-center relative z-10">
                    <h1 className="text-4xl text-white font-black mb-4 uppercase tracking-tighter">Project Not Found</h1>
                    <button onClick={() => router.back()} className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors uppercase tracking-widest text-sm underline decoration-cyan-500/30 underline-offset-8">Go Back</button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 font-sans selection:bg-cyan-500/30">
            <Navbar />

            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
                />
            </div>

            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <Link href="/#hackathon-projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-bold uppercase tracking-widest text-[10px] transition-all mb-12 group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/10 shadow-3xl group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 px-4 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20 w-fit backdrop-blur-md shadow-lg shadow-cyan-500/5">
                                Hackathon Project
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none bg-clip-text">
                                {project.title}
                            </h1>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all transform hover:-translate-y-1"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </Link>
                                <Link
                                    href={project.links.github}
                                    target="_blank"
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/10 hover:border-cyan-500/50 transition-all transform hover:-translate-y-1"
                                >
                                    <Github size={18} /> Source Code
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-12">
                            {/* Challenge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-4 group-hover:text-cyan-400 transition-colors">
                                    <div className="p-2 border border-cyan-500/20 bg-cyan-500/10 rounded-xl"><Zap className="text-yellow-400" size={20} /></div>
                                    The Challenge
                                </h2>
                                <p className="text-slate-300 leading-relaxed text-lg bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            {/* What I Built */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-4 group-hover:text-blue-400 transition-colors">
                                    <div className="p-2 border border-blue-500/20 bg-blue-500/10 rounded-xl"><Cpu className="text-blue-400" size={20} /></div>
                                    What I Built
                                </h2>
                                <p className="text-slate-300 leading-relaxed text-lg bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
                                    {project.builtDetails}
                                </p>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <h2 className="text-2xl font-black text-white mb-8 uppercase flex items-center gap-4 group-hover:text-cyan-400 transition-colors">
                                    <div className="p-2 border border-cyan-500/20 bg-cyan-500/10 rounded-xl"><Star className="text-cyan-400" size={20} /></div>
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex gap-4 text-slate-300 p-5 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group/feat">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500/50 group-hover/feat:bg-cyan-400 shrink-0 transition-colors" />
                                            <span className="text-[13px] font-bold uppercase tracking-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-3xl -mr-12 -mt-12" />
                                <h2 className="text-xl font-black text-white mb-8 uppercase flex items-center gap-4 group-hover:text-blue-400 transition-colors">
                                    <div className="p-2 border border-blue-500/20 bg-blue-500/10 rounded-xl"><Layers className="text-blue-400" size={18} /></div>
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-white/5 text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all cursor-default shadow-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-cyan-500/5 backdrop-blur-md p-8 rounded-[2rem] border border-cyan-500/10 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 blur-3xl -ml-12 -mb-12" />
                                <h2 className="text-xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-3 group-hover:text-cyan-400 transition-colors">
                                    Achievements
                                </h2>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium italic relative z-10">
                                    &quot;{project.achievements}&quot;
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
