'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const fullData = [
    { subject: 'React / Next.js', A: 90, fullMark: 100 },
    { subject: 'UI/UX Design', A: 85, fullMark: 100 },
    { subject: 'Data Analysis', A: 75, fullMark: 100 },
    { subject: 'Agent MEAL', A: 80, fullMark: 100 },
    { subject: 'Performance', A: 80, fullMark: 100 },
    { subject: 'Animations', A: 85, fullMark: 100 },
];

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const DataExpertise = () => {
    const { language } = useLanguage();
    const t = translations[language].expertise;

    const fullData = [
        { subject: t.subjects.web, A: 90, fullMark: 100 },
        { subject: t.subjects.design, A: 85, fullMark: 100 },
        { subject: t.subjects.data, A: 75, fullMark: 100 },
        { subject: t.subjects.meal, A: 80, fullMark: 100 },
        { subject: t.subjects.perf, A: 80, fullMark: 100 },
        { subject: t.subjects.anim, A: 85, fullMark: 100 },
    ];

    // Initialiser les données à 0 pour que les axes s'affichent
    const initialChartData = fullData.map(d => ({ ...d, A: 0 }));
    const [chartData, setChartData] = useState(initialChartData);
    
    const chartRef = useRef(null);
    const isChartInView = useInView(chartRef, { once: true, margin: "-100px" });

    useEffect(() => {
        // Reset chart data when language changes or component mounts
        setChartData(fullData.map(d => ({ ...d, A: 0 })));
    }, [language]);

    useEffect(() => {
        if (isChartInView) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < fullData.length) {
                    setChartData(prev => {
                        const newData = [...prev];
                        newData[i] = fullData[i];
                        return newData;
                    });
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 800); // 0.8s par élément
            return () => clearInterval(interval);
        }
    }, [isChartInView, language]); // Re-trigger if language changes while in view

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 + (i * 0.2) }
        })
    };

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
                        {t.title} <span className="text-primary">{t.titleHighlight}</span>
                    </h2>
                    <p className="mt-4 text-textMuted max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* items-stretch pour avoir la même hauteur */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" ref={chartRef}>
                    
                    {/* Section Gauche : Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full min-h-[350px] sm:min-h-[450px] w-full bg-card rounded-2xl border border-borderDark p-4 shadow-xl flex items-center justify-center"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Expertise"
                                    dataKey="A"
                                    stroke="#00E5FF"
                                    fill="#00E5FF"
                                    fillOpacity={0.3}
                                    isAnimationActive={true} // Animation Recharts par défaut entre chaque mise à jour
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                                    itemStyle={{ color: '#00E5FF' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Section Droite : Cartes */}
                    <div className="flex flex-col justify-between h-full space-y-6">
                        {t.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-card p-6 rounded-xl border border-borderDark hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default flex-1 flex flex-col justify-center"
                            >
                                <h3 className="text-xl font-bold text-textMain mb-2 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-textMuted">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DataExpertise;
