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
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => router.back()} className="text-cyan-400 hover:underline">Go Back</button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <Link href="/#hackathon-projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors mb-8">
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group shadow-2xl"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center"
                        >
                            <span className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 w-fit">
                                Hackathon Project
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                                "{project.shortDescription}"
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </Link>
                                <Link
                                    href={project.links.github}
                                    target="_blank"
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
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
                            >
                                <h2 className="text-2xl font-black text-white mb-4 uppercase flex items-center gap-3">
                                    <Zap className="text-yellow-400" /> The Challenge
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg bg-white/5 p-6 rounded-2xl border border-white/5">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            {/* What I Built */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-black text-white mb-4 uppercase flex items-center gap-3">
                                    <Cpu className="text-purple-400" /> What I Built
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg bg-white/5 p-6 rounded-2xl border border-white/5">
                                    {project.builtDetails}
                                </p>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
                                    <Star className="text-cyan-400" /> Key Features
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex gap-3 text-slate-400 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                            <span className="text-sm font-medium">{feature}</span>
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
                                className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-3xl border border-white/10"
                            >
                                <h2 className="text-xl font-black text-white mb-6 uppercase flex items-center gap-3">
                                    <Layers className="text-blue-400" /> Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-lg border border-white/10">
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
                                className="bg-purple-500/5 p-6 rounded-3xl border border-purple-500/10"
                            >
                                <h2 className="text-xl font-black text-white mb-4 uppercase">Achievements</h2>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    {project.achievements}
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
