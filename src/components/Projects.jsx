'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return (
        <section id="projects" className="py-12 md:py-16 bg-background relative border-b border-borderDark z-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        {t.title} <span className="text-primary">{t.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-borderDark hover:border-primary transition-all duration-500 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project[language].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/projets/${project.slug}`}
                                        className="inline-flex items-center text-white font-semibold group/link"
                                    >
                                        {t.viewProject}
                                        <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 block">{project[language].category}</span>
                                <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors font-heading">{project[language].title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
