import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { NavLink as NavLinkType } from '../../types';

const navLinks: NavLinkType[] = [
  { name: 'Início', path: '/' },
  { name: 'O que é Poluição?', path: '/poluicao' },
  { name: 'Conservação Ambiental', path: '/conservacao' },
  { name: 'Iniciativas no Brasil', path: '/iniciativas' },
  { name: 'Como Ajudar?', path: '/como-ajudar' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Leaf className="w-8 h-8 text-forest-green" />
            <span className="ml-2 text-xl font-heading font-bold text-forest-green">
              Preserva Brasil
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm font-medium transition-colors duration-200 hover:text-forest-green ${
                        isActive 
                          ? 'text-forest-green font-semibold' 
                          : 'text-gray-700'
                      }`
                    }
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-forest-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `block text-base font-medium transition-colors duration-200 hover:text-forest-green ${
                        isActive 
                          ? 'text-forest-green font-semibold' 
                          : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;