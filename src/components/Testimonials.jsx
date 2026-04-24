'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Alice Dupont",
        role: "Chef de Projet Digital",
        company: "TechCorp",
        text: "Ben a complètement transformé notre interface utilisateur. Son attention aux détails et son expertise sur Next.js ont permis de doubler nos conversions sur mobile.",
        initials: "AD"
    },
    {
        name: "Jean Martin",
        role: "Lead Developer",
        company: "StartupStudio",
        text: "Un vrai plaisir de travailler avec Ben. Son code est propre, bien structuré et les animations qu'il a intégrées avec Framer Motion apportent une vraie valeur ajoutée au produit.",
        initials: "JM"
    },
    {
        name: "Sophie Leroy",
        role: "Directrice Marketing",
        company: "E-com Solutions",
        text: "La refonte de notre plateforme a été un succès total. Ben a su comprendre nos enjeux business et les traduire en une expérience utilisateur fluide et moderne.",
        initials: "SL"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-card/30 relative border-b border-borderDark z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        Ce qu&apos;ils <span className="text-primary">disent</span>
                    </h2>
                    <p className="mt-4 text-textMuted max-w-2xl mx-auto">
                        Retours d&apos;expérience de mes collaborateurs et clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-2xl border border-borderDark flex flex-col relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-6 right-6 text-primary/20 text-6xl font-serif leading-none">&quot;</div>
                            
                            <p className="text-textMuted mb-8 relative z-10 italic">
                                &quot;{testimonial.text}&quot;
                            </p>
                            
                            <div className="mt-auto flex items-center pt-4 border-t border-borderDark/50">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4 border border-primary/30">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="text-textMain font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-textMuted">{testimonial.role} - <span className="text-primary/80">{testimonial.company}</span></p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
