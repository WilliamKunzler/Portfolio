// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    Code,
    DeviceMobile,
    PaintBrush,
    Database,
    Check
} from '@phosphor-icons/react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const skillCategories = [
        {
            title: 'Front-end',
            icon: Code,
            color: 'blue',
            skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'Phosphor Icons'],
        },
        {
            title: 'Mobile',
            icon: DeviceMobile,
            color: 'purple',
            skills: ['Flutter', 'Dart', 'Android', 'iOS'],
        },
        {
            title: 'Design & UI',
            icon: PaintBrush,
            color: 'pink',
            skills: ['Figma', 'Canva', 'Dribbble', 'Prototipagem', 'Wireframe'],
        },
        {
            title: 'Data & Tools',
            icon: Database,
            color: 'green',
            skills: ['Python', 'SQL', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Node.js', 'Next.js', 'VS Code', 'C', 'Looker', 'LookML', 'API Rest'],
        },
    ];

    const colorMap = {
        blue: { bg: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500' },
        purple: { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500' },
        pink: { bg: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-500' },
        green: { bg: 'bg-green-500', text: 'text-green-600 dark:text-green-400', border: 'border-green-500' },
    };

    return (
        <section id="skills" ref={ref} className="py-24 bg-white dark:bg-slate-900/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide rounded-full mb-4">
                        Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Tecnologias & Habilidades
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Um arsenal completo de ferramentas para transformar ideias em realidade digital
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        const colors = colorMap[category.color];

                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(categoryIndex)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        animate={hoveredIndex === categoryIndex ? { rotate: 15 } : { rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`p-3 ${colors.bg} bg-opacity-10 rounded-2xl`}
                                    >
                                        <Icon size={32} className="text-white dark:text-white" weight="duotone" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-current transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
