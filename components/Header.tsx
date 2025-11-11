
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import ContactModal from './ContactModal';

type Page = 'home' | 'experience' | 'skills' | 'projects';

interface HeaderProps {
  currentPage?: Page;
  onNavigate?: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks: { label: string; page: Page }[] = [
        { label: 'Home', page: 'home' },
        { label: 'Experience', page: 'experience' },
        { label: 'Skills', page: 'skills' },
        { label: 'Projects', page: 'projects' }
    ];

    const handleNavClick = (page: Page) => {
        if (onNavigate) {
            onNavigate(page);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-dark' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 md:px-14 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <h1 
                        className="text-2xl font-bold text-netflix-red uppercase tracking-wider cursor-pointer"
                        onClick={() => handleNavClick('home')}
                    >
                        {PERSONAL_INFO.name.split(' ')[0]}
                    </h1>
                    <nav className="hidden md:flex items-center space-x-4">
                        {navLinks.map(link => (
                            <button
                                key={link.page}
                                onClick={() => handleNavClick(link.page)}
                                className={`transition-colors ${
                                    currentPage === link.page 
                                        ? 'text-netflix-red font-semibold' 
                                        : 'text-white hover:text-gray-300'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-netflix-red text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
            <ContactModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                email={PERSONAL_INFO.email}
                phone={PERSONAL_INFO.phone}
            />
        </header>
    );
};

export default Header;
