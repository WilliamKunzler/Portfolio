// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" ref={ref} className="py-20 bg-white dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Vamos Conversar?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        Estou sempre aberto a novas oportunidades e parcerias.
                        Sinta-se à vontade para entrar em contato comigo através das redes abaixo.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-8 flex-wrap">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        href="https://www.linkedin.com/in/williamkunzler/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-2 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all w-40"
                    >
                        <LinkedinLogo size={48} className="text-[#0077b5] group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">LinkedIn</span>
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        href="https://github.com/WilliamKunzler"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-2 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all w-40"
                    >
                        <GithubLogo size={48} className="text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">GitHub</span>
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        href="mailto:contato@example.com"
                        className="group flex flex-col items-center gap-2 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all w-40"
                    >
                        <Envelope size={48} className="text-slate-500 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">Email</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
