import { useState, useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'portfolio', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-offwhite/80 dark:bg-charcoal/80 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="font-display text-2xl tracking-wider text-gold">
          AW
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm uppercase tracking-wider transition-colors hover:text-gold ${
                activeSection === link.id ? 'text-gold' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-charcoal transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;