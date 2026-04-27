'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostClient({ post }) {
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-background text-textMain flex flex-col relative">
            {/* Scroll Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary z-50 origin-left"
                style={{ scaleX }}
            />

            <Navbar />
            <main className="flex-grow pt-32 pb-24 relative z-10">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ x: 5 }}
                    >
                        <Link href="/blog" className="inline-flex items-center text-textMuted hover:text-primary transition-colors mb-10 group cursor-pointer font-medium">
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                            Retour au blog
                        </Link>
                    </motion.div>

                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.1)] hover:bg-primary/20 hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.3)] transition-all cursor-default">
                                {post.category}
                            </span>
                        </motion.div>

                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div 
                            className="flex flex-wrap items-center text-textMuted text-base gap-6 border-l-2 border-primary/50 pl-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <motion.div whileHover={{ scale: 1.05, color: "var(--color-primary)" }} className="flex items-center gap-2 transition-colors cursor-default">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <span>Publié le {post.date}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, color: "var(--color-primary)" }} className="flex items-center gap-2 transition-colors cursor-default">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{post.readTime} de lecture</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-primary/5 cursor-zoom-in group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        onClick={() => setIsImageZoomed(true)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent mix-blend-multiply pointer-events-none" />
                        
                        {/* Hover focus indicator */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <motion.div 
                                className="opacity-0 group-hover:opacity-100 bg-background/30 backdrop-blur-md border border-white/20 rounded-full p-4 transform scale-50 group-hover:scale-100 transition-all duration-300"
                            >
                                <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="prose prose-invert prose-lg md:prose-xl max-w-none text-textMuted leading-loose"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {post.content.split('\n\n').map((paragraph, index) => {
                            if (!paragraph.trim()) return null;
                            return (
                                <p key={index} className="mb-8 text-lg md:text-xl text-textMain/80 font-light text-justify">
                                    {paragraph.trim()}
                                </p>
                            );
                        })}
                    </motion.div>
                    
                    {/* Share / Tags section (Optional but looks good) */}
                    <motion.div 
                        className="mt-16 pt-8 border-t border-borderDark flex flex-col md:flex-row justify-between items-center gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-textMuted font-medium">
                            Merci d&apos;avoir lu cet article !
                        </div>
                        <Link href="/blog" className="px-6 py-3 bg-card border border-borderDark rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-bold text-textMain cursor-pointer">
                            Voir plus d&apos;articles
                        </Link>
                    </motion.div>
                </article>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {isImageZoomed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsImageZoomed(false)}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-contain bg-black/50"
                                    priority
                                />
                                <button 
                                    onClick={() => setIsImageZoomed(false)}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-primary text-white rounded-full p-2 transition-colors cursor-pointer border border-white/20"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
