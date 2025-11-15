import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-gradient-to-r from-[#3e4a70] to-[#202434] py-4 fixed w-full z-40 shadow-lg">
            <nav className="container mx-auto px-5">
                <div className="flex justify-between items-center">

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#home">Home</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#about">About</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#projects">Projects</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 relative group">
                            <a href="#contact">Contact</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-amber-50 focus:outline-none"
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
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 border-b border-amber-50/20 pb-2">
                            <a href="#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 border-b border-amber-50/20 pb-2">
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 border-b border-amber-50/20 pb-2">
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li className="text-amber-50 font-bold text-lg hover:text-amber-200 transition-all duration-300 pb-2">
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;