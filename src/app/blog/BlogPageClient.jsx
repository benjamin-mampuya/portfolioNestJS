'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function BlogPageClient() {
    return (
        <div className="min-h-screen bg-background text-textMain flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

            <Navbar />
            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Blog</span>
                        </h1>
                        <p className="text-textMuted max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Partages d&apos;expériences, astuces de développement et réflexions sur le design UI/UX.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {blogPosts.map((post, index) => (
                            <motion.article 
                                key={post.id} 
                                variants={itemVariants}
                                className="group relative bg-card border border-borderDark rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute top-5 left-5 z-20">
                                            <span className="px-4 py-1.5 bg-background/60 backdrop-blur-md text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-primary/20 shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-background/40">
                                        <div className="flex justify-between items-center text-sm text-textMuted mb-4 font-medium">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-textMuted text-base line-clamp-3 mb-6 flex-grow leading-relaxed text-justify">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto inline-flex items-center text-primary font-semibold text-sm group/btn">
                                            Lire l&apos;article 
                                            <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
