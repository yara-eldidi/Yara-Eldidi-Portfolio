import { useState, useEffect } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage or system preference
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') return true;
            if (savedTheme === 'light') return false;
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        
        checkTheme();
        
        // Watch for class changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDarkMode = () => {
        const html = document.documentElement;
        const isCurrentlyDark = html.classList.contains('dark');
        
        if (isCurrentlyDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <header className="bg-white dark:bg-gradient-to-r dark:from-[#3e4a70] dark:to-[#202434] py-4 fixed w-full z-40 shadow-lg transition-colors duration-300">
            <nav className="container mx-auto px-5">
                <div className="flex justify-end items-center">

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#home">Home</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#about">About</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#projects">Projects</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#contact">Contact</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li>
                            <button
                                onClick={toggleDarkMode}
                                className="text-[#3e4a70] dark:text-amber-50 hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-amber-50/10"
                                aria-label="Toggle dark mode"
                            >
                                {isDark ? (
                                    // Sun icon for light mode
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    // Moon icon for dark mode
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-[#3e4a70] dark:text-amber-50 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col gap-4 py-4">
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 border-b border-gray-300 dark:border-amber-50/20 pb-2">
                            <a href="#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 border-b border-gray-300 dark:border-amber-50/20 pb-2">
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 border-b border-gray-300 dark:border-amber-50/20 pb-2">
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li className="text-[#3e4a70] dark:text-amber-50 font-bold text-lg hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 pb-2">
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                        <li className="pt-2">
                            <button
                                onClick={toggleDarkMode}
                                className="text-[#3e4a70] dark:text-amber-50 hover:text-amber-500 dark:hover:text-amber-200 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-amber-50/10 flex items-center gap-2"
                                aria-label="Toggle dark mode"
                            >
                                {isDark ? (
                                    // Sun icon for light mode
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    // Moon icon for dark mode
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                                <span className="font-bold text-lg">Toggle Theme</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;