// src/components/NavBar.jsx
import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Sobre Mim', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="font-bold text-xl tracking-tighter text-primary dark:text-blue-400">
                            WK.
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-light dark:bg-dark border-b border-gray-200 dark:border-gray-800 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary dark:hover:text-blue-400"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
