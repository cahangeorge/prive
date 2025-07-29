'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ExperienceSections from '../components/ExperienceSections';
import Footer from '../components/Footer';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add scroll animation effect
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="font-sans">
      <Navbar />
      
      {/* HERO */}
      <header className="nda-section min-h-screen bg-black flex justify-center items-center text-center relative overflow-hidden hero-bg">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <Image 
            src="/nature.png" 
            alt="About Privé Escapes" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className={`relative z-30 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto fade-in transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 xs:mb-8 sm:mb-10 md:mb-12 font-bold leading-tight float">
            About <span className="text-[#D4AF37]">Privé Escapes</span>
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 font-light leading-relaxed">
            Creating what money can't usually buy – private, unforgettable moments in rare locations.
          </h2>
        </div>
      </header>

      {/* OUR PROMISE */}
      <section className="nda-section px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 relative bg-gradient-to-br from-[#0a0a0a] to-[#111]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 relative z-10">
            <div className="flex justify-center mb-4 xs:mb-6 sm:mb-8">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-.257-.257A6 6 0 1118 8zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8 leading-tight">
              Our Promise
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 rounded-xl xs:rounded-2xl border border-[#333] max-w-5xl mx-auto">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 xs:mb-6 sm:mb-8 leading-relaxed text-center">
              We create what money can't usually buy – private, unforgettable moments in rare locations.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed text-center">
              Creăm ceea ce banii nu pot cumpăra de obicei – momente private, de neuitat, în locuri rare.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PRIVÉ ESCAPES */}
      <section className="px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8 leading-tight">
              Why Privé Escapes
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
            {/* Exclusivity */}
            <div className="text-center group">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 xs:mb-4">Exclusivity</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Access to rare and private places
              </p>
            </div>
            
            {/* Discretion */}
            <div className="text-center group">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 xs:mb-4">Discretion</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                NDA & private security
              </p>
            </div>
            
            {/* Luxury Design */}
            <div className="text-center group">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 xs:mb-4">Luxury Design</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Every detail bespoke
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="nda-section px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4 xs:mb-6 sm:mb-8">
            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-10 md:mb-14 font-bold leading-tight">Cum funcționează | How It Works</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 text-center max-w-6xl mx-auto relative z-10">
          <div className="group step-container bg-gradient-to-br from-[#111] to-[#0a0a0a] p-4 xs:p-6 sm:p-8 md:p-10 rounded-lg xs:rounded-xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden touch-manipulation">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/prive_qr.png" 
                alt="QR Code background" 
                fill
                className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
                1
              </div>
              <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Consultation</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Private consultation under NDA<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | Consultație privată sub NDA</span>
              </p>
            </div>
          </div>
          
          <div className="group step-container bg-gradient-to-br from-[#111] to-[#0a0a0a] p-4 xs:p-6 sm:p-8 md:p-10 rounded-lg xs:rounded-xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden touch-manipulation">
            <div className="absolute inset-0 z-0">
              <Image 
                 src="/prive_box.png" 
                 alt="Prive box background" 
                 fill
                 className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
                2
              </div>
              <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Tailored Experience</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Bespoke design for your vision<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | Design personalizat pentru viziunea ta</span>
              </p>
            </div>
          </div>
          
          <div className="group step-container bg-gradient-to-br from-[#111] to-[#0a0a0a] p-4 xs:p-6 sm:p-8 md:p-10 rounded-lg xs:rounded-xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden touch-manipulation sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/cheers_in_car.jpg" 
                alt="Car celebration background" 
                fill
                className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
                3
              </div>
              <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Live Your Moment</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Unforgettable private experience<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | Experiență privată de neuitat</span>
              </p> 
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY BADGES */}
      <section className="px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#111] to-[#0a0a0a] relative">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-10 md:mb-14 font-bold leading-tight">Trust & Security | Încredere & Securitate</h3>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10">
            {/* NDA Guarantee */}
            <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg xs:rounded-xl p-4 xs:p-6 sm:p-8 text-center group hover:border-[#D4AF37]/60 transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mx-auto mb-3 xs:mb-4 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#D4AF37] mb-2">NDA Guarantee</h4>
              <p className="text-xs sm:text-sm text-gray-400">Complete confidentiality</p>
            </div>
            
            {/* Fully Insured */}
            <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg xs:rounded-xl p-4 xs:p-6 sm:p-8 text-center group hover:border-[#D4AF37]/60 transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mx-auto mb-3 xs:mb-4 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#D4AF37] mb-2">Fully Insured Experience</h4>
              <p className="text-xs sm:text-sm text-gray-400">Complete protection</p>
            </div>
            
            {/* Private Agreement */}
            <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg xs:rounded-xl p-4 xs:p-6 sm:p-8 text-center group hover:border-[#D4AF37]/60 transition-all duration-300 sm:col-span-1">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mx-auto mb-3 xs:mb-4 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#D4AF37] mb-2">Private Agreement Included</h4>
              <p className="text-xs sm:text-sm text-gray-400">Legal protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTIONS */}
      <ExperienceSections showAll={true} />

      {/* FOOTER */}
      <Footer />


    </main>
  );
}