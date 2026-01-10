// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowDown, Sparkle } from '@phosphor-icons/react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <ParticlesBackground />

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
                    >
                        <Sparkle size={16} className="text-blue-500" weight="fill" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Bem-vindo ao meu portfólio
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight"
                    >
                        <span className="block text-slate-900 dark:text-white font-bold">William</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 font-bold">
                            Kunzler
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto"
                    >
                        Desenvolvedor Full Stack • Designer UI/UX • Analista de Dados
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >
                        <a
                            href="#about"
                            className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                        >
                            Conheça meu trabalho
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-full hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                        >
                            Entre em contato
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
                    <span className="text-sm font-medium">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown size={24} weight="bold" />
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
