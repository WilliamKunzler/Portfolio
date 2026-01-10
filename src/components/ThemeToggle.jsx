// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon size={24} weight="bold" className="text-gray-800" />
            ) : (
                <Sun size={24} weight="bold" className="text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
