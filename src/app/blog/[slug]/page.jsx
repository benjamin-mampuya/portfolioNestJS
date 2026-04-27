import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

export function generateMetadata({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) {
        return {
            title: 'Article non trouvé | Ben Mampuya'
        }
    }
    return {
        title: `${post.title} | Blog de Ben Mampuya`,
        description: post.excerpt,
    }
}

export default function BlogPostPage({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
