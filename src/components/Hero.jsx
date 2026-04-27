'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import profileImg from "../../public/portofolio.png";

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const socialLinks = [
        { icon: faLinkedinIn, url: 'https://linkedin.com/in/ben-mampuya', label: 'LinkedIn' },
        { icon: faGithub, url: 'https://github.com/benjamin-mampuya', label: 'GitHub' },
        { icon: faInstagram, url: 'https://www.instagram.com/benpulukutu/', label: 'Instagram' },
        { icon: faFacebook, url: 'https://www.facebook.com/ben.mampuya.708860?locale=fr_FR', label: 'Facebook' },
    ];

    return (
        <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-16 min-h-[90vh] flex items-center relative overflow-hidden border-b border-borderDark z-40 transition-colors duration-300">
            {/* Background Glows (Mixed Colors) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full"></div>
                <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] bg-cyan-400/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-purple-600/15 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 uppercase tracking-[0.2em] md:tracking-[0.3em] font-heading">
                            <span className="relative inline-block pb-2 mr-3 md:mr-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 drop-shadow-sm">Ben</span>
                                {/* Animated Underline */}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden bg-primary/20">
                                    <motion.span
                                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '100%' }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    />
                                </span>
                            </span>
                            <span className="text-textMain drop-shadow-sm">Mampuya</span>
                        </h1>
                        <div className="mb-6 max-w-2xl min-h-[4rem] sm:min-h-[3rem]">
                            <h2 className="text-sm md:text-base lg:text-lg text-primary font-semibold leading-relaxed font-heading">
                                <TypeAnimation
                                    sequence={[
                                        'Front-End Developer | UI/UX Web Designer | MEAL Officer | Data Analyst | Community Manager | IT Network & Systems Admin',
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={0}
                                    speed={50}
                                />
                            </h2>
                        </div>
                        <div className="text-textMuted text-sm md:text-base mb-8 max-w-xl leading-relaxed space-y-4">
                            <p className="text-justify">
                                Professionnel polyvalent à l’intersection du digital, de la donnée et de
                                l’impact terrain, je conçois des solutions web intuitives, analyse les données
                                pour éclairer la prise de décision, et renforce la visibilité des organisations
                                grâce à des stratégies digitales efficaces.
                            </p>
                            <p className="text-justify border-l-2 border-primary/50 pl-4 py-1 italic bg-primary/5 rounded-r-lg">
                                Mon approche allie créativité, rigueur analytique et compréhension des
                                besoins utilisateurs pour produire des résultats concrets et mesurables.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 mb-10">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full">
                            <Link
                                href="#contact"
                                className="w-full sm:w-[220px] flex items-center justify-center bg-primary border-2 border-primary hover:bg-cyan-400 hover:border-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wider"
                            >
                                Contact-moi
                            </Link>
                            <a
                                href="/cv-benjamin-mampuya.pdf"
                                download
                                className="w-full sm:w-[220px] flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 text-sm tracking-wider transform hover:-translate-y-1"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-1 flex justify-center md:justify-end"
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-borderDark cursor-hover"
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={profileImg}
                                alt="Photo de profil de Ben Mampuya, Développeur Front-End"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                placeholder='blur'
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
