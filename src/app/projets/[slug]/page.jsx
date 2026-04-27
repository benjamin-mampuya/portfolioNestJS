'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectPage({ params }) {
    const project = projectsData.find(p => p.slug === params.slug);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!project) {
        notFound();
    }

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-background text-textMain flex flex-col selection:bg-primary/30">
            <Navbar />
            
            <main className="flex-grow pt-32 pb-16">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/#projects" className="text-primary hover:text-cyan-400 mb-10 inline-flex items-center gap-2 group cursor-hover transition-colors">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Retour aux projets
                        </Link>
                    </motion.div>
                    
                    {/* Header */}
                    <header className="mb-16">
                        <motion.div 
                            className="flex items-center gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold tracking-wider uppercase">
                                {project.category}
                            </span>
                        </motion.div>
                        <motion.h1 
                            className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {project.title}
                        </motion.h1>
                    </header>

                    {/* Main Image with Lightbox Trigger */}
                    <motion.div 
                        className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 cursor-hover group shadow-2xl shadow-primary/5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        onClick={() => setIsLightboxOpen(true)}
                        layoutId={`project-image-${project.id}`}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </motion.div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left column: Text content */}
                        <div className="lg:col-span-2 space-y-16">
                            <motion.section variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[2px] bg-primary"></div>
                                    <h2 className="text-3xl font-bold font-heading text-textMain">Le Défi</h2>
                                </div>
                                <p className="text-textMuted leading-relaxed text-lg lg:text-xl font-light text-justify">
                                    {project.problem}
                                </p>
                            </motion.section>

                            <motion.section variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[2px] bg-primary"></div>
                                    <h2 className="text-3xl font-bold font-heading text-textMain">La Solution</h2>
                                </div>
                                <p className="text-textMuted leading-relaxed text-lg lg:text-xl font-light text-justify">
                                    {project.solution}
                                </p>
                            </motion.section>

                            <motion.section variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[2px] bg-primary"></div>
                                    <h2 className="text-3xl font-bold font-heading text-textMain">L&apos;Impact</h2>
                                </div>
                                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                                    <p className="text-textMain leading-relaxed text-lg font-medium relative z-10 text-justify">
                                        {project.impact}
                                    </p>
                                </div>
                            </motion.section>
                        </div>

                        {/* Right column: Meta Info / Tech stack */}
                        <div className="lg:col-span-1">
                            <motion.div 
                                className="sticky top-32 p-8 rounded-3xl bg-card border border-borderDark shadow-xl shadow-black/5"
                                variants={fadeUpVariants} 
                                initial="hidden" 
                                whileInView="visible" 
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold font-heading mb-6 text-textMain border-b border-borderDark pb-4">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-background border border-borderDark/50 rounded-xl text-sm font-medium text-textMuted hover:text-primary hover:border-primary/50 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12 bg-background/80 backdrop-blur-xl"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-6 right-6 w-12 h-12 bg-card border border-borderDark rounded-full flex items-center justify-center text-textMain hover:text-primary hover:border-primary transition-colors z-[10001] cursor-hover"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsLightboxOpen(false);
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <motion.div 
                            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
                            layoutId={`project-image-${project.id}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
