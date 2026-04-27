import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog | Ben Mampuya',
    description: 'Articles et tutoriels sur le développement web, UI/UX design et la data analyse.',
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background text-textMain flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                            Mon <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-textMuted max-w-2xl mx-auto text-lg">
                            Partages d&apos;expériences, astuces de développement et réflexions sur le design UI/UX.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                            <article key={post.id} className="bg-card border border-borderDark rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col h-full cursor-hover">
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full cursor-none">
                                    <div className="relative w-full h-56 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center text-xs text-textMuted mb-3">
                                            <span>{post.date}</span>
                                            <span>{post.readTime} de lecture</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-textMuted text-sm line-clamp-3 mb-4 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto text-primary font-medium text-sm flex items-center">
                                            Lire l&apos;article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
