'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import useResponsive from './hooks/useResponsive';
export const runtime = 'edge';

export default function Home() {
  const { isMobile } = useResponsive();
  const [isLoaded, setIsLoaded] = useState(false);

  // Add scroll animation effect similar to the original HTML
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;
      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if(secTop < triggerBottom) {
          sec.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to make first sections visible
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Add touch detection
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (isTouchDevice()) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <main className="font-sans">
      <Navbar />
      <BackToTop />
      
      {/* HERO */}
      <header className="h-screen bg-black flex justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10"></div>
        <div className={`relative z-20 px-4 sm:px-6 md:px-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold">Experiențe imposibile. Doar pentru cei care își doresc mai mult.</h1>
          <h2 className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8">Impossible experiences. For those who seek more.</h2>
          <a href="#contact" className="btn text-sm sm:text-base inline-block">Solicită experiența ta | Request Your Experience</a>
        </div>
      </header>

      {/* DESPRE NOI */}
      <section className="px-4 sm:px-[10%]">
        <h3 className="title text-2xl sm:text-3xl text-center text-[#D4AF37] mb-4 sm:mb-5">Despre Noi | About Us</h3>
        <p className="text-center text-base sm:text-lg text-gray-300 mb-8 sm:mb-12">
          Transformăm locații inaccesibile în experiențe memorabile.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          We turn inaccessible locations into unforgettable experiences.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 sm:px-[10%]">
        <h3 className="title text-2xl sm:text-3xl text-center text-[#D4AF37] mb-4 sm:mb-5">Cum funcționează | How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 text-center">
          <div className="bg-[#111] p-6 rounded-lg border border-[#333] hover:border-[#D4AF37] transition-colors duration-300">
            <h4 className="text-3xl sm:text-4xl text-[#D4AF37] mb-3">1</h4>
            <p className="text-sm sm:text-base">Contact privat (NDA)<br />Private contact (NDA)</p>
          </div>
          <div className="bg-[#111] p-6 rounded-lg border border-[#333] hover:border-[#D4AF37] transition-colors duration-300">
            <h4 className="text-3xl sm:text-4xl text-[#D4AF37] mb-3">2</h4>
            <p className="text-sm sm:text-base">Alege atmosfera dorită<br />Choose your desired ambiance</p>
          </div>
          <div className="bg-[#111] p-6 rounded-lg border border-[#333] hover:border-[#D4AF37] transition-colors duration-300">
            <h4 className="text-3xl sm:text-4xl text-[#D4AF37] mb-3">3</h4>
            <p className="text-sm sm:text-base">Noi planificăm TOT<br />We handle everything</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES GALLERY */}
      <section className="px-4 sm:px-[10%]">
        <h3 className="title text-2xl sm:text-3xl text-center text-[#D4AF37] mb-4 sm:mb-5">Experiențe | Experiences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image 
              src="/cave.png" 
              alt="Cină în peșteră" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-serif">Cină în peșteră</p>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image 
              src="/dinner.png" 
              alt="Cină pe lac" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-serif">Cină pe lac</p>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image 
              src="/nature.png" 
              alt="Locație în natură" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-serif">Locație în natură</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="px-4 sm:px-[10%]">
        <h3 className="title text-2xl sm:text-3xl text-center text-[#D4AF37] mb-4 sm:mb-5">Solicită experiența ta | Request Your Experience</h3>
        <form className="max-w-[600px] mx-auto bg-[#111] p-5 sm:p-8 rounded-lg border border-[#333] shadow-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm sm:text-base text-gray-300">Nume / Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full p-3 bg-[#222] border border-[#333] text-white rounded-md focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm sm:text-base text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-3 bg-[#222] border border-[#333] text-white rounded-md focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="details" className="block mb-2 text-sm sm:text-base text-gray-300">Detalii cerințe / Details</label>
              <textarea 
                id="details" 
                name="details" 
                rows={4} 
                required 
                className="w-full p-3 bg-[#222] border border-[#333] text-white rounded-md focus:border-[#D4AF37] focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div className="flex items-start sm:items-center mb-2 sm:mb-5">
              <input 
                type="checkbox" 
                id="nda" 
                required 
                className="mr-2 mt-1 sm:mt-0"
              />
              <label htmlFor="nda" className="text-sm sm:text-base text-gray-300">Sunt de acord să semnez NDA | I agree to sign NDA</label>
            </div>

            <button 
              type="submit" 
              className="w-full p-3 sm:p-4 bg-[#D4AF37] border-none font-bold text-black cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg rounded-md"
            >
              Trimite cererea | Submit Request
            </button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 sm:py-10 px-4 text-gray-500 border-t border-[#333] text-xs sm:text-sm mt-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="mb-2">&copy; 2025 Privé Escapes. Discreție absolută. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
