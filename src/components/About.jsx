// src/components/About.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Rocket, Code, GraduationCap } from '@phosphor-icons/react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" ref={ref} className="py-24 bg-light dark:bg-dark relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column - Text Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                            <User size={20} className="text-blue-600 dark:text-blue-400" weight="bold" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                                Sobre Mim
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                            Prazer, sou o William
                        </h2>

                        <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                Sou <strong className="text-slate-900 dark:text-white">Técnico em Informática para Internet pelo IFC</strong>,
                                apaixonado por tecnologia desde criança. Minha jornada no mundo do desenvolvimento começou com curiosidade
                                e se transformou em uma verdadeira paixão.
                            </p>
                            <p>
                                Especializo-me em criar <strong className="text-slate-900 dark:text-white">experiências web e mobile</strong> que
                                unem design minimalista com funcionalidade robusta. Atuo também como <strong className="text-slate-900 dark:text-white">analista de dados</strong>,
                                transformando informações complexas em insights valiosos através de visualizações e dashboards interativos.
                            </p>
                            <p>
                                Quando não estou codando, você me encontrará explorando novas tecnologias, contribuindo em projetos
                                open source ou estudando as últimas tendências em UI/UX design.
                            </p>
                        </div>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:shadow-xl transition-shadow"
                        >
                            Ver meus projetos
                        </motion.a>
                    </motion.div>

                    {/* Right Column - Stats/Highlights */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl border border-blue-200 dark:border-blue-800"
                        >
                            <Code size={40} className="text-blue-600 dark:text-blue-400 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">+3</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Projetos Desenvolvidos</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-3xl border border-purple-200 dark:border-purple-800"
                        >
                            <Rocket size={40} className="text-purple-600 dark:text-purple-400 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">100%</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dedicação</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-3xl border border-green-200 dark:border-green-800"
                        >
                            <GraduationCap size={40} className="text-green-600 dark:text-green-400 mb-4" weight="duotone" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Cursando</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Ciência da Computação - IFC</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-3xl border border-orange-200 dark:border-orange-800"
                        >
                            <User size={40} className="text-orange-600 dark:text-orange-400 mb-4" weight="duotone" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Técnico</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Informática para Internet - IFC</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
