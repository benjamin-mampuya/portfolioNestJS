'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // Envoyer l'email via Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'd954dd04-1c35-41af-84b6-cbcb4c9f223f',
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Erreur lors de l'envoi");
            }

            setStatus({ type: 'success', message: t.success });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus({ type: 'error', message: t.error });
            console.error('Erreur EmailJS:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="pt-12 pb-4 md:pt-16 md:pb-6 bg-background relative border-b border-borderDark z-[5] transition-colors duration-300">
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

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side: Info */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-card p-8 rounded-xl border border-borderDark mb-8 transition-colors duration-300">
                            <div className="text-center mb-8">
                                {/* Logo Fullstack Badge */}
                                <div className="inline-flex flex-col items-center justify-center p-6 bg-background rounded-2xl border border-borderDark hover:border-primary/50 transition-all duration-300 group transform hover:-translate-y-1 shadow-lg">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold text-textMain tracking-widest font-heading transition-colors duration-300">
                                        FULLSTACK<span className="text-primary">DEV</span>
                                    </span>
                                </div>
                            </div>
                            <p className="text-textMuted text-sm leading-relaxed transition-colors duration-300">
                                {t.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder={t.firstName}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-card border border-borderDark rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-sm placeholder:text-textMuted"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder={t.lastName}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-card border border-borderDark rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-sm placeholder:text-textMuted"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t.email}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-card border border-borderDark rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-sm placeholder:text-textMuted"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder={t.subject}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-card border border-borderDark rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-sm placeholder:text-textMuted"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder={t.message}
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-card border border-borderDark rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-sm placeholder:text-textMuted resize-none"
                                    required
                                ></textarea>
                            </div>

                            {status && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-md text-sm font-medium ${status.type === 'success'
                                        ? 'bg-green-500/20 border border-green-500 text-green-400'
                                        : 'bg-red-500/20 border border-red-500 text-red-400'
                                        }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="bg-primary hover:bg-cyan-400 text-background font-semibold py-3 px-8 rounded-full transition-all duration-300 w-full text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: loading ? 1 : 1.05, y: loading ? 0 : -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {loading ? t.sending : t.send}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
