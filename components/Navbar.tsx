
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4' : 'py-10'
    }`}>
      <div className={`mx-auto px-6 transition-all duration-700 ${
        isScrolled ? 'max-w-5xl scale-95' : 'max-w-full'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-700 px-10 py-5 rounded-full ${
          isScrolled ? 'glass-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-gold/10 backdrop-blur-3xl' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-[0.3em] text-white flex items-center">
                AER<span className="text-gold group-hover:text-white transition-colors duration-500">OSAFE</span>
              </span>
              <span className="text-[6px] uppercase tracking-[0.6em] text-white/50 leading-none mt-1">
                Luxury Travels & Tourism
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-gold relative group ${
                  location.pathname === item.path ? 'text-gold' : 'text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-500 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="bg-gold text-white px-10 py-3.5 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-navy transition-all shadow-xl active:scale-95 border border-gold"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-gold transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[110] glass-dark transition-all duration-700 flex flex-col items-center justify-center space-y-12 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-[-100%]'
      }`}>
        <button onClick={closeMenu} className="absolute top-12 right-12 text-gold hover:rotate-90 transition-transform"><X size={40}/></button>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className="text-white text-4xl font-serif italic hover:text-gold transition-all tracking-wide"
          >
            {item.label}
          </Link>
        ))}
        <Link to="/contact" onClick={closeMenu} className="bg-gold text-white px-16 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl">
          Plan Your Trip
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
