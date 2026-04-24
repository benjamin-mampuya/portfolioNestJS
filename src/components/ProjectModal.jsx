'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-borderDark rounded-2xl shadow-2xl custom-scrollbar"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-background text-textMain transition-colors backdrop-blur-md"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    </div>

                    <div className="p-6 sm:p-10 -mt-16 relative z-10">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                            {project.category}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-textMain font-heading mb-6">
                            {project.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-textMain mb-3 flex items-center">
                                        <span className="text-primary mr-2">01.</span> Le Problème
                                    </h3>
                                    <p className="text-textMuted leading-relaxed">
                                        {project.problem || "Description détaillée du problème que ce projet visait à résoudre. Les défis rencontrés par le client ou les utilisateurs (ex: interface obsolète, parcours utilisateur complexe, faibles performances)."}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-textMain mb-3 flex items-center">
                                        <span className="text-primary mr-2">02.</span> La Solution
                                    </h3>
                                    <p className="text-textMuted leading-relaxed">
                                        {project.solution || "Explication de la solution apportée. Comment les technologies ont été utilisées pour surmonter les défis et atteindre les objectifs (ex: refonte complète de l'UI avec React, implémentation d'animations pour fluidifier la navigation)."}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-textMain mb-3 flex items-center">
                                        <span className="text-primary mr-2">03.</span> L&apos;Impact
                                    </h3>
                                    <div className="bg-background rounded-xl p-6 border border-borderDark">
                                        <p className="text-textMuted leading-relaxed">
                                            {project.impact || "Résultats tangibles du projet : augmentation du trafic, amélioration du taux de conversion, temps de chargement réduit, retours positifs des utilisateurs finaux."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-background rounded-xl p-6 border border-borderDark">
                                    <h3 className="text-lg font-semibold text-textMain mb-4">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {(project.technologies || ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']).map((tech, index) => (
                                            <span key={index} className="px-3 py-1 text-sm bg-card border border-borderDark rounded-md text-textMuted">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <button className="w-full py-3 px-4 bg-primary text-gray-900 font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center group">
                                    Voir le projet en direct
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
