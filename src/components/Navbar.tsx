import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Microblading', path: '/microblading' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10',
        scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-brand-white">
          JULIET GAVIRIA
          <span className="text-brand-gold text-xs block font-sans tracking-[0.3em] font-normal mt-1">
            BEAUTY ARTIST
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest hover:text-brand-gold transition-colors',
                location.pathname === link.path ? 'text-brand-gold' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://widget.treatwell.es/establecimiento/juliet-gaviria-beauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-black px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-serif hover:text-brand-gold transition-colors',
                    location.pathname === link.path ? 'text-brand-gold' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://widget.treatwell.es/establecimiento/juliet-gaviria-beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-black text-center py-3 font-semibold uppercase tracking-wider mt-4"
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
