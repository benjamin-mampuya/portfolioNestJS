'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const pathname = usePathname();

    const t = translations[language].nav;

    const toggleMenu = () => setIsOpen(!isOpen);

    // If not on homepage, prepend "/" to hash links
    const getLinkPath = (path) => {
        if (path.startsWith('#') && pathname !== '/') {
            return `/${path}`;
        }
        return path;
    };

    const navLinks = [
        { name: t.home, path: '#home' },
        { name: t.about, path: '#about' },
        { name: t.skills, path: '#skills' },
        { name: t.services, path: '#services' },
        { name: t.projects, path: '#projects' },
        { name: t.blog, path: '/blog' },
        { name: t.contact, path: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-[100] bg-background border-b border-borderDark transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link href="#home" className="text-primary text-2xl font-bold font-heading tracking-wider hover:brightness-110 transition-colors">
                            Portfolio.
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                className={link.name === 'Contact' ? "ml-4" : ""}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                            >
                                {link.name === 'Contact' ? (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        className="text-primary border border-borderDark px-6 py-2 rounded-full hover:bg-primary hover:text-background transition-all duration-300 text-sm font-medium tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        className="text-textMain hover:text-primary transition-colors text-sm font-medium tracking-wide relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                )}
                            </motion.div>
                        ))}

                        <motion.button
                            onClick={toggleLanguage}
                            className="text-textMain hover:text-primary px-3 py-2 focus:outline-none transition-colors text-sm font-bold border border-borderDark rounded-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            aria-label="Toggle Language"
                        >
                            {language === 'fr' ? 'EN' : 'FR'}
                        </motion.button>

                        <motion.button
                            onClick={toggleTheme}
                            className="text-textMain hover:text-primary p-2 focus:outline-none transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            aria-label="Toggle Theme"
                        >
                            <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" className={`transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`} />
                        </motion.button>
                    </div>

                    {/* Mobile menu button and Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-textMain hover:text-primary px-2 py-1 focus:outline-none transition-colors text-xs font-bold border border-borderDark rounded-md"
                            aria-label="Toggle Language"
                        >
                            {language === 'fr' ? 'EN' : 'FR'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="text-textMain hover:text-primary p-2 focus:outline-none transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" className={`transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary p-2"
                        >
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-card border-b border-borderDark absolute w-full left-0 shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                className={link.name === 'Contact' ? "mt-4" : ""}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name === 'Contact' ? (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        onClick={() => setIsOpen(false)}
                                        className="text-primary border border-primary block px-4 py-2 mx-2 rounded-full text-center text-base font-medium hover:bg-primary hover:text-white dark:hover:text-gray-900 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={getLinkPath(link.path)}
                                        onClick={() => setIsOpen(false)}
                                        className="text-textMain hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
