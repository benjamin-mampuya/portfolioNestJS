'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faUsers, faServer } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
    const [activeTab, setActiveTab] = useState('education');

    const tabs = [
        { id: 'education', label: t.tabs.education },
        { id: 'courses', label: t.tabs.courses },
        { id: 'experience', label: t.tabs.experience },
        { id: 'skills', label: t.tabs.skills },
    ];

    const tabContents = {
        education: (
            <div className="text-textMuted space-y-6 animate-fadeIn h-full overflow-y-auto pr-2" style={{ maxHeight: '400px' }}>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.education.lsi}</h4>
                        <span className="text-primary text-sm mb-2">{t.education.lsiSub}</span>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.education.diplome}</h4>
                        <span className="text-primary text-sm mb-2">{t.education.diplomeSub}</span>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.education.meal}</h4>
                        <span className="text-primary text-sm mb-2">{t.education.mealSub}</span>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.education.bootcamp}</h4>
                        <span className="text-primary text-sm mb-2">{t.education.bootcampSub}</span>
                    </div>
                </div>
            </div>
        ),
        courses: (
            <div className="text-textMuted space-y-6 animate-fadeIn">
                <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.courses.title1}</h4>
                        <span className="text-primary text-sm block mb-2">{t.courses.sub1}</span>
                        <ul className="list-disc list-inside text-sm space-y-1 text-textMuted">
                            {t.courses.list1.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                        <h4 className="text-lg font-bold text-textMain font-heading">{t.courses.title2}</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 text-textMuted mt-2">
                            {t.courses.list2.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        ),
        experience: (
            <div className="text-textMuted space-y-6 animate-fadeIn h-full overflow-y-auto pr-2" style={{ maxHeight: '400px' }}>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-borderLight before:to-transparent">
                    {/* Item 1 */}
                    <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-start justify-center w-5 h-5 rounded-full border-2 border-primary bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hidden md:flex mt-6"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-borderDark bg-card backdrop-blur-sm z-10 transition-transform duration-300 hover:-translate-y-1">
                            <h4 className="text-lg font-bold text-textMain mb-2 font-heading">{t.experience.job1}</h4>
                            <div className="flex flex-col mb-3">
                                <span className="text-primary text-sm font-semibold">{t.experience.company1}</span>
                                <span className="text-textMuted text-xs">{t.experience.date1}</span>
                            </div>
                            <ul className="list-none text-xs text-textMuted space-y-1">
                                {t.experience.list1.map((item, idx) => (
                                    <li key={idx} className="flex items-start"><span className="text-primary mr-2">▸</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-start justify-center w-5 h-5 rounded-full border-2 border-primary bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hidden md:flex mt-6"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-borderDark bg-card backdrop-blur-sm z-10 transition-transform duration-300 hover:-translate-y-1">
                            <h4 className="text-lg font-bold text-textMain mb-2 font-heading">{t.experience.job2}</h4>
                            <div className="flex flex-col mb-3">
                                <span className="text-primary text-sm font-semibold">{t.experience.company2}</span>
                                <span className="text-textMuted text-xs">{t.experience.date2}</span>
                            </div>
                            <ul className="list-none text-xs text-textMuted space-y-1">
                                {t.experience.list2.map((item, idx) => (
                                    <li key={idx} className="flex items-start"><span className="text-primary mr-2">▸</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-start justify-center w-5 h-5 rounded-full border-2 border-primary bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hidden md:flex mt-6"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-borderDark bg-card backdrop-blur-sm z-10 transition-transform duration-300 hover:-translate-y-1">
                            <h4 className="text-lg font-bold text-textMain mb-2 font-heading">{t.experience.job3}</h4>
                            <div className="flex flex-col mb-3">
                                <span className="text-primary text-sm font-semibold">{t.experience.company3}</span>
                                <span className="text-textMuted text-xs">{t.experience.date3}</span>
                            </div>
                            <ul className="list-none text-xs text-textMuted space-y-1">
                                {t.experience.list3.map((item, idx) => (
                                    <li key={idx} className="flex items-start"><span className="text-primary mr-2">▸</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ),
        skills: (
            <div className="text-textMuted space-y-6 animate-fadeIn h-full overflow-y-auto pr-2" style={{ maxHeight: '400px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Category 1 */}
                    <div className="bg-card p-4 rounded-xl border border-borderDark flex flex-col h-full">
                        <h4 className="text-primary text-sm font-bold mb-3 border-b border-borderLight pb-2 uppercase tracking-wide font-heading">{t.skillsTab.tech}</h4>
                        <ul className="space-y-2 text-sm text-textMuted flex-grow">
                            <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span><span className="text-textMain font-medium">{t.skillsTab.webDev}</span> HTML, CSS, JavaScript, React.</span></li>
                            <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span><span className="text-textMain font-medium">{t.skillsTab.uiux}</span> conception d’interfaces ergonomiques.</span></li>
                            <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span><span className="text-textMain font-medium">{t.skillsTab.data}</span> Excel avancé, Power BI.</span></li>
                            <li className="flex items-start"><span className="text-primary mr-2">✓</span> <span><span className="text-textMain font-medium">{t.skillsTab.admin}</span> configuration LAN/WAN, bases Cisco et Mikrotik.</span></li>
                        </ul>
                    </div>
                    {/* Category 2 */}
                    <div className="bg-card p-4 rounded-xl border border-borderDark flex flex-col h-full">
                        <h4 className="text-primary text-sm font-bold mb-3 border-b border-borderLight pb-2 uppercase tracking-wide font-heading">{t.skillsTab.tools}</h4>
                        <ul className="space-y-2 text-sm text-textMuted flex-grow">
                            <li className="flex items-center"><span className="text-primary mr-2">✓</span> <span>{t.skillsTab.figma}</span></li>
                            <li className="flex items-center"><span className="text-primary mr-2">✓</span> <span>{t.skillsTab.git}</span></li>
                            <li className="flex items-center"><span className="text-primary mr-2">✓</span> <span>{t.skillsTab.dataTools}</span></li>
                        </ul>
                    </div>
                    {/* Category 3 */}
                    <div className="bg-card p-4 rounded-xl border border-borderDark md:col-span-2">
                        <h4 className="text-primary text-sm font-bold mb-3 border-b border-borderLight pb-2 uppercase tracking-wide font-heading">{t.skillsTab.other}</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-background/50 text-textMuted rounded-full text-xs border border-borderLight hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors cursor-default">{t.skillsTab.cm}</span>
                            <span className="px-3 py-1.5 bg-background/50 text-textMuted rounded-full text-xs border border-borderLight hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors cursor-default">{t.skillsTab.reporting}</span>
                            <span className="px-3 py-1.5 bg-background/50 text-textMuted rounded-full text-xs border border-borderLight hover:bg-primary hover:text-gray-900 hover:border-primary transition-colors cursor-default">{t.skillsTab.mgmt}</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    };

    return (
        <section id="about" className="py-12 md:py-16 bg-card/30 relative border-b border-borderDark z-40 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        {t.title} <span className="text-primary">{t.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3"
                    >
                        <div className="group relative bg-gradient-to-b from-card to-card/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center border border-borderDark overflow-hidden h-full shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                            {/* Animated Background Blobs */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

                            {/* Avatar */}
                            <div className="relative mb-6 z-10 flex items-center justify-center">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-primary bg-card shrink-0 transition-transform duration-500 group-hover:scale-105">
                                    <Image src="/Ben_cropped.png" alt="Ben Mampuya" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
                                </div>
                            </div>
                            
                            {/* Name */}
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textMain to-primary mb-2 font-heading tracking-wide relative z-10 transition-transform duration-300 group-hover:scale-105">
                                Ben Mampuya
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-8 relative z-10"></div>
                            
                            {/* Badges/Roles List */}
                            <div className="flex flex-col gap-3 w-full relative z-10 mt-auto">
                                <div className="flex items-center gap-4 bg-background/60 backdrop-blur-sm border border-borderLight rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/50 hover:shadow-md">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-borderDark text-primary shrink-0 shadow-sm group-hover/icon:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-textMain text-left flex-1">{t.role1}</span>
                                </div>
                                
                                <div className="flex items-center gap-4 bg-background/60 backdrop-blur-sm border border-borderLight rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/50 hover:shadow-md md:delay-75">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-borderDark text-primary shrink-0 shadow-sm">
                                        <FontAwesomeIcon icon={faPalette} className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-textMain text-left flex-1">{t.role2}</span>
                                </div>
                                
                                <div className="flex items-center gap-4 bg-background/60 backdrop-blur-sm border border-borderLight rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/50 hover:shadow-md md:delay-100">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-borderDark text-primary shrink-0 shadow-sm">
                                        <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-textMain text-left flex-1">{t.role3}</span>
                                </div>
                                
                                <div className="flex items-center gap-4 bg-background/60 backdrop-blur-sm border border-borderLight rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:border-primary/50 hover:shadow-md md:delay-150">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-borderDark text-primary shrink-0 shadow-sm">
                                        <FontAwesomeIcon icon={faServer} className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold text-textMain text-left leading-tight flex-1">{t.role4}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Tabs Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 flex flex-col"
                    >
                        <div className="flex flex-wrap border-b border-borderLight mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 px-4 sm:px-6 text-sm sm:text-base font-medium transition-colors relative ${activeTab === tab.id ? 'text-primary' : 'text-textMuted hover:text-textMain'
                                        }`}
                                >
                                    <span className="relative inline-block">
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.span
                                                layoutId="activeTabIndicator"
                                                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-t-lg w-full"
                                            />
                                        )}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="bg-card/50 p-6 md:p-8 rounded-xl border border-borderDark/50 min-h-[400px] flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {tabContents[activeTab]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
