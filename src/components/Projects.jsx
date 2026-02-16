// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubLogo, Link as LinkIcon } from '@phosphor-icons/react';

const Projects = () => {
    const projects = [
        {
            title: 'Restaurant Page',
            description: 'Landing page desenvolvida para um restaurante fictício, com foco em apresentação institucional, identidade visual moderna e navegação intuitiva.',
            tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
            github: 'https://github.com/WilliamKunzler/restaurant_page',
            demo: 'https://williamkunzler.github.io/restaurant_page/',
            color: 'bg-orange-500',
        },
        {
            title: 'Virteaching',
            description: 'Projeto Integrador 2024 da turma 3F - Grupo 5. Plataforma educacional para facilitar o ensino e aprendizagem.',
            tech: ['CSS', 'HTML', 'JavaScript'],
            github: 'https://github.com/KauanToldo/Virteaching',
            demo: null,
            color: 'bg-indigo-500',
        },
        {
            title: 'AppDespesas',
            description: 'Aplicativo desenvolvido para ajudar na gestão financeira pessoal de forma simples e intuitiva.',
            tech: ['Dart', 'Flutter', 'Mobile'],
            github: 'https://github.com/WilliamKunzler/AppDespesas',
            demo: null,
            color: 'bg-green-500',
        },
        {
            title: 'Climatize',
            description: 'Aplicativo de previsão do tempo desenvolvido em Flutter.',
            tech: ['Dart', 'Flutter', 'API'],
            github: 'https://github.com/WilliamKunzler/Climatize',
            demo: null,
            color: 'bg-blue-500',
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" ref={ref} className="py-20 bg-light dark:bg-dark">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Recentes</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Uma seleção dos trabalhos que tenho desenvolvido.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color} to-primary`}></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        <GithubLogo size={20} />
                                        Código
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                                        >
                                            <LinkIcon size={20} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
