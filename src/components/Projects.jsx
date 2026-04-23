'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { title: 'Web Design', category: 'Portfolio', image: '/project1.avif' },
        { title: 'App Development', category: 'Mobile App', image: '/Projet 2.jpg' },
        { title: 'UI/UX Design', category: 'Design System', image: '/project3.png' },
        { title: 'E-commerce', category: 'Web App', image: '/projet4.png' },
        { title: 'Dashboard', category: 'Analytics', image: '/projet5.png' },
        { title: 'Landing Page', category: 'Marketing', image: '/Projet 6.jpg' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="projects" className="py-12 md:py-16 bg-background relative border-b border-borderDark z-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        Mes <span className="text-primary">Projets</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            className="group relative overflow-hidden rounded-xl bg-card border border-borderDark h-80 sm:h-[22rem] flex-shrink-0 cursor-pointer"
                            whileHover={{ y: -10 }}
                        >
                            {/* Project Image */}
                            <div className="absolute inset-1 sm:inset-1.5 rounded-lg overflow-hidden bg-background/30">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    priority={false}
                                />
                            </div>

                            {/* Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.h3
                                    className="text-xl font-bold text-white mb-1"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-primary text-sm"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.05 }}
                                >
                                    {project.category}
                                </motion.p>
                                <motion.div
                                    className="mt-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0, scale: 1.1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <span className="text-gray-900 font-bold">↗</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
