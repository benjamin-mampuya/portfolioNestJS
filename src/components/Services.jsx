'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faChartBar, faNetworkWired, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
    const { language } = useLanguage();
    const t = translations[language].services;

    const services = [
        {
            title: t.list[0].title,
            description: t.list[0].description,
            icon: faCode,
        },
        {
            title: t.list[1].title,
            description: t.list[1].description,
            icon: faDesktop,
        },
        {
            title: t.list[2].title,
            description: t.list[2].description,
            icon: faChartBar,
        },
        {
            title: t.list[3].title,
            description: t.list[3].description,
            icon: faNetworkWired,
        },
        {
            title: t.list[4].title,
            description: t.list[4].description,
            icon: faClipboardCheck,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="services" className="py-12 md:py-16 bg-card/30 relative border-b border-borderDark z-20 transition-colors duration-300">
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

                <motion.div
                    className="w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 24 },
                            768: { slidesPerView: 2, spaceBetween: 32 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        className="!pb-16"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} style={{ height: 'auto' }}>
                                <motion.div
                                    variants={cardVariants}
                                    className="w-full h-full min-h-[420px] bg-gradient-to-br from-card to-background border border-borderLight/50 rounded-[2rem] p-8 flex flex-col items-center text-center hover:border-primary transition-all duration-500 group relative z-10"
                                >
                                    <motion.div
                                        className="w-20 h-20 rounded-2xl bg-background shadow-inner border border-borderLight flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                        <FontAwesomeIcon icon={service.icon} className="text-primary text-3xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                    </motion.div>
                                    
                                    <h3 className="text-xl lg:text-2xl font-bold text-textMain mb-4 font-heading group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                    <p className="text-textMuted text-sm md:text-base mb-8 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                    
                                    <motion.button
                                        className="mt-auto px-6 py-3 rounded-full border border-borderLight text-textMuted text-sm font-semibold tracking-wide hover:bg-primary hover:border-primary hover:text-gray-900 transition-all duration-300 flex items-center gap-2 w-full justify-center group/btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {t.learnMore}
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </motion.button>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
