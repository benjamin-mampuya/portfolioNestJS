'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-background pt-8 pb-8 relative overflow-hidden z-0 transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Brand & Tagline */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl font-bold text-textMain mb-4 uppercase tracking-widest font-heading transition-colors duration-300">
                            Ben <span className="text-primary">Mampuya</span>
                        </h2>
                        <p className="text-textMuted text-sm leading-relaxed max-w-sm mb-8 transition-colors duration-300">
                            Création d&apos;expériences digitales modernes, interactives et centrées sur l&apos;utilisateur. Transformons vos idées en réalité.
                        </p>
                        <p className="text-textMuted/60 text-xs font-medium transition-colors duration-300">
                            &copy; 2026 BEN MAMPUYA. Tous droits réservés.
                        </p>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-textMain text-lg font-semibold mb-6 font-heading border-b border-primary/30 pb-2 inline-block transition-colors duration-300">Coordonnées</h3>
                        <div className="space-y-4">
                            <div className="flex items-start text-textMuted hover:text-primary transition-colors duration-300 group">
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary mt-0.5 mr-4 group-hover:scale-110 transition-transform" />
                                <a href="mailto:benmampuya247@gmail.com" className="text-sm">benmampuya247@gmail.com</a>
                            </div>
                            <div className="flex items-start text-textMuted hover:text-primary transition-colors duration-300 group">
                                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary mt-0.5 mr-4 group-hover:scale-110 transition-transform" />
                                <a href="tel:+243971264660" className="text-sm">+243 971264660</a>
                            </div>
                            <div className="flex items-start text-textMuted group transition-colors duration-300">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-primary mt-0.5 mr-4" />
                                <span className="text-sm max-w-[200px] md:max-w-none text-left">Avenue Mont RWENZORI, Quartier Himbi, Goma, Nord-Kivu, RDC</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Social Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-textMain text-lg font-semibold mb-6 font-heading border-b border-primary/30 pb-2 inline-block transition-colors duration-300">Réseaux Sociaux</h3>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/in/ben-mampuya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-textMuted hover:bg-primary hover:text-background hover:-translate-y-1 transition-all duration-300 border border-borderDark hover:border-primary shadow-lg">
                                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/benjamin-mampuya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-textMuted hover:bg-primary hover:text-background hover:-translate-y-1 transition-all duration-300 border border-borderDark hover:border-primary shadow-lg">
                                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/benpulukutu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-textMuted hover:bg-primary hover:text-background hover:-translate-y-1 transition-all duration-300 border border-borderDark hover:border-primary shadow-lg">
                                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/ben.mampuya.708860?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-textMuted hover:bg-primary hover:text-background hover:-translate-y-1 transition-all duration-300 border border-borderDark hover:border-primary shadow-lg">
                                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
