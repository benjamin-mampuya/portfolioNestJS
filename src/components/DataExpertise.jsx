'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const data = [
  { subject: 'React / Next.js', A: 90, fullMark: 100 },
  { subject: 'UI/UX Design', A: 85, fullMark: 100 },
  { subject: 'Data Analysis', A: 75, fullMark: 100 },
  { subject: 'Backend (Node)', A: 70, fullMark: 100 },
  { subject: 'Performance', A: 80, fullMark: 100 },
  { subject: 'Animations', A: 85, fullMark: 100 },
];

const DataExpertise = () => {
    return (
        <section id="expertise" className="py-16 md:py-24 bg-background relative border-b border-borderDark z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        Mon <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="mt-4 text-textMuted max-w-2xl mx-auto">
                        Une vision holistique du développement, combinant design, ingénierie et analyse de données.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-[300px] sm:h-[400px] w-full bg-card rounded-2xl border border-borderDark p-4 shadow-xl"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Expertise"
                                    dataKey="A"
                                    stroke="#00E5FF"
                                    fill="#00E5FF"
                                    fillOpacity={0.3}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                                    itemStyle={{ color: '#00E5FF' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-card p-6 rounded-xl border border-borderDark hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-textMain mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">💻</span>
                                Front-End & UI/UX
                            </h3>
                            <p className="text-textMuted">
                                Création d&apos;interfaces utilisateur performantes et esthétiques avec React, Next.js et Framer Motion. Focus sur l&apos;expérience utilisateur et l&apos;accessibilité.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border border-borderDark hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-textMain mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">📊</span>
                                Analyse & Data
                            </h3>
                            <p className="text-textMuted">
                                Intégration d&apos;outils analytiques, optimisation des performances (Web Vitals) et création de tableaux de bord interactifs pour le suivi des KPI.
                            </p>
                        </div>
                        
                        <div className="bg-card p-6 rounded-xl border border-borderDark hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-textMain mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">⚙️</span>
                                Architecture & Backend
                            </h3>
                            <p className="text-textMuted">
                                Conception d&apos;architectures robustes, intégration d&apos;API RESTful/GraphQL et gestion de l&apos;état global des applications.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DataExpertise;
