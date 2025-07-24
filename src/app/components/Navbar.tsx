'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.menu-button');
      
      if (isMenuOpen && mobileMenu && menuButton && 
          !mobileMenu.contains(target) && 
          !menuButton.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-gold font-serif text-xl sm:text-2xl font-bold">
            Privé Escapes
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-gold transition-colors">
              Despre Noi
            </Link>
            <Link href="#" className="text-white hover:text-gold transition-colors">
              Experiențe
            </Link>
            <Link href="#contact" className="btn text-sm py-2 px-4">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none z-50 menu-button relative flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'open' : ''} p-6`}
        aria-hidden={!isMenuOpen}
        style={{ maxWidth: '100vw' }}
      >
        <div className="flex flex-col space-y-8 mt-16 overflow-y-auto max-h-[calc(100vh-2rem)]">
          <div className="border-b border-gray-800 pb-2">
            <Link 
              href="#" 
              className="text-white hover:text-gold transition-colors text-xl block w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="text-gold mr-2">01.</span> Despre Noi
              </span>
            </Link>
          </div>
          
          <div className="border-b border-gray-800 pb-2">
            <Link 
              href="#" 
              className="text-white hover:text-gold transition-colors text-xl block w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="text-gold mr-2">02.</span> Experiențe
              </span>
            </Link>
          </div>
          
          <div className="mt-8">
            <Link 
              href="#contact" 
              className="btn text-center block w-full transition-all hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          
          <div className="mt-auto pt-8">
            <p className="text-gray-500 text-sm">Privé Escapes &copy; 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}