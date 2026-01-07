"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    project: {
        title: string;
        category: string;
        description: string;
        tech: string[];
        links: { github: string; live: string };
        image?: string;
        color: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[2rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-3xl h-[480px] flex flex-col"
        >
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-transparent group-hover:from-cyan-500/5 group-hover:via-blue-500/5 transition-all duration-500 rounded-[2rem]" />

            {/* Project Image / Visual - Browser Mockup Style */}
            <div className="relative h-64 w-full overflow-hidden bg-[#050505] border-b border-white/5 flex flex-col group/browser">
                {/* Browser Header Bar */}
                <div className="h-6 w-full bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    <div className="ml-2 w-24 h-2 bg-white/5 rounded-full" />
                </div>

                <div className="flex-1 relative w-full p-2">
                    {project.image && project.image !== "/images/hero.jpg" ? (
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover/browser:scale-[1.02]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}>
                            <Folder className="text-white/20 w-16 h-16 group-hover:scale-110 transition-transform" />
                        </div>
                    )}
                </div>

                {/* Category Badge - Repositioned */}
                <div className="absolute top-10 left-4 z-10 transition-transform duration-500 group-hover:translate-x-1">
                    <span className="text-[8px] font-black px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-400 border border-cyan-500/40 uppercase tracking-[0.2em] shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 p-6 flex flex-col relative z-20">
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight leading-tight">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-[13px] mb-6 line-clamp-3 leading-relaxed font-medium italic">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tech.map(t => (
                        <span key={t} className="text-[9px] text-slate-400 font-bold bg-white/5 border border-white/10 px-2 py-1 rounded-md uppercase tracking-wider group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-all">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 pt-5 border-t border-white/5">
                    <Link
                        href={project.links.github}
                        target="_blank"
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all text-[10px] font-black uppercase tracking-widest group/link"
                    >
                        <Github size={14} className="group-hover/link:translate-y-[-2px] transition-transform" />
                        Code
                    </Link>
                    <Link
                        href={project.links.live}
                        target="_blank"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all text-[10px] font-black uppercase tracking-widest group/link"
                    >
                        <ExternalLink size={14} className="group-hover/link:translate-y-[-2px] group-hover/link:translate-x-[2px] transition-transform" />
                        Live Demo
                    </Link>
                </div>
            </div>

            {/* Subtle Gradient Glow Background */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mb-16 -z-0" />
        </motion.div>
    );
}
