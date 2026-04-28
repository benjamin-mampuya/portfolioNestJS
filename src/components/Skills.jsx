'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language].skills;

    const skills = [
        { name: 'HTML 5', percentage: 95 },
        { name: 'CSS 3', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 85 },
        { name: 'Java Script', percentage: 80 },
        { name: 'React', percentage: 75 },
        { name: 'Figma', percentage: 70 },
        { name: 'WordPress', percentage: 80 },
        { name: 'Adobe premier pro', percentage: 65 },
        { name: 'Power BI', percentage: 60 },
        { name: 'Excel', percentage: 85 },
    ];

    return (
        <section id="skills" className="py-12 md:py-16 bg-background relative border-b border-borderDark z-30 transition-colors duration-300">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-textMain font-medium text-lg">{skill.name}</span>
                                <motion.span
                                    className="text-textMuted text-sm"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {skill.percentage}%
                                </motion.span>
                            </div>
                            <div className="w-full bg-borderDark rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    className="bg-primary h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percentage}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
