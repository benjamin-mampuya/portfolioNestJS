import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostPage({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-textMain flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="text-primary hover:underline mb-8 inline-block cursor-hover">
                        &larr; Retour au blog
                    </Link>

                    <div className="mb-8">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-textMuted text-sm gap-4">
                            <span>Publié le {post.date}</span>
                            <span>•</span>
                            <span>{post.readTime} de lecture</span>
                        </div>
                    </div>

                    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-textMuted leading-relaxed">
                        {post.content.split('\n\n').map((paragraph, index) => {
                            if (!paragraph.trim()) return null;
                            return <p key={index} className="mb-6">{paragraph.trim()}</p>
                        })}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
