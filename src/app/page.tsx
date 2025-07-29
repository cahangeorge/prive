'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ExperienceSections from './components/ExperienceSections';
import PricingPackages from './components/PricingPackages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  // const { isMobile } = useResponsive();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);





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
    setMounted(true);
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
      
      {/* HERO */}
      <header className="nda-section min-h-screen bg-black flex justify-center items-center text-center relative overflow-hidden hero-bg">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <Image 
            src="https://www.priveescape.com/nature.png" 
            alt="Luxury nature experience" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className={`relative z-30 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto fade-in transition-all duration-1000 ${mounted && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 xs:mb-8 sm:mb-10 md:mb-12 font-bold leading-tight float">
            Exclusive Private Experiences,<br className="hidden xs:block" />
            <span className="text-[#D4AF37]"> Crafted for You</span>
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 font-light leading-relaxed px-2 xs:px-4">
            Bespoke luxury events in the world&apos;s most extraordinary locations.
          </h2>
          <a href="#contact" className="btn text-xs xs:text-sm sm:text-base md:text-lg inline-block mx-auto px-4 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 min-h-[44px] xs:min-h-[48px] touch-manipulation">
            Request Your Invitation
          </a>
        </div>
      </header>



      {/* CONCEPTUL PRIVÉ ESCAPES */}
      <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative bg-gradient-to-br from-[#0a0a0a] to-[#111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          {/* <Image 
            src="https://www.priveescape.com/dinner.png" 
            alt="Luxury dining experience" 
            fill
            className="object-cover opacity-20"
          /> */}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative z-10">
            <div className="flex justify-center mb-6 xs:mb-8">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-.257-.257A6 6 0 1118 8zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-6 xs:mb-8 leading-tight">
              Our Promise
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 xs:p-10 sm:p-12 md:p-16 rounded-xl xs:rounded-2xl border border-[#333] max-w-5xl mx-auto">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed text-center">
              We create what money can&apos;t usually buy – private, unforgettable moments in rare locations.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-center">
              Creăm ceea ce banii nu pot cumpăra de obicei – momente private, de neuitat, în locuri rare.
            </p>
          </div>
          

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="nda-section px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          {/* <Image 
            src="https://www.priveescape.com/cave.jpg" 
            alt="Cave experience background" 
            fill
            className="object-cover opacity-15"
          /> */}
        </div>
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4 xs:mb-6 sm:mb-8">
            <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-10 md:mb-14 font-bold leading-tight px-2">Cum funcționează | How It Works</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 text-center max-w-6xl mx-auto relative z-10">
          <div className="group step-container bg-gradient-to-br from-[#111] to-[#0a0a0a] p-4 xs:p-6 sm:p-8 md:p-10 rounded-lg xs:rounded-xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden touch-manipulation">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://www.priveescape.com/prive_qr.png" 
                alt="QR Code background" 
                fill
                className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                 src="https://www.priveescape.com/prive_box.png" 
                 alt="Prive box background" 
                 fill
                 className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                 src="https://www.priveescape.com/drink_night.jpg" 
                 alt="Night drinks background" 
                 fill
                 className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black/30 to-black/50 opacity-70 group-hover:opacity-60 transition-opacity duration-500 z-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl shadow-lg">
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

      <ExperienceSections />

      {/* EXPERIENCES PREVIEW */}
      <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden m-4 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="text-center mb-10 xs:mb-14 lg:mb-20 relative z-20">
          <div className="flex justify-center mb-6 xs:mb-8">
            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-12 font-bold leading-tight">Galerie experiențe | Experiences Gallery</h3>
          <p className="text-base xs:text-lg text-gray-300 max-w-3xl mx-auto mb-8 xs:mb-10">
            Discover our exclusive collection of luxury experiences designed for the most discerning clients
          </p>
        </div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-12 xs:mb-16">
            <div className="relative overflow-hidden rounded-xl group">
              <Image 
                src="https://www.priveescape.com/nature.png" 
                alt="Nature Experience" 
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold mb-1">Nature Experiences</h4>
                <p className="text-sm text-gray-200">Experiențe în natură</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl group">
              <Image 
                src="https://www.priveescape.com/dinner.png" 
                alt="Dining Experience" 
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold mb-1">Exclusive Dining</h4>
                <p className="text-sm text-gray-200">Cină exclusivă</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl group">
              <Image 
                src="https://www.priveescape.com/plane.jpg" 
                alt="Luxury Travel" 
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold mb-1">Luxury Travel</h4>
                <p className="text-sm text-gray-200">Călătorii de lux</p>
              </div>
            </div>

          </div>
          
          {/* View Full Gallery Button */}
          <div className="text-center mt-12 xs:mt-16">
            <a 
              href="/gallery" 
              className="inline-flex items-center px-8 xs:px-10 py-4 xs:py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-black font-semibold text-base xs:text-lg rounded-xl hover:from-[#F4E4BC] hover:to-[#D4AF37] transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <span>View Full Gallery</span>
              <svg className="w-5 h-5 xs:w-6 xs:h-6 ml-2 xs:ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm xs:text-base text-gray-400 mt-4 xs:mt-6">
              Explore our complete collection of luxury experiences
            </p>
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <PricingPackages showTitle={true} />

      {/* CONTACT FORM */}
      <ContactForm 
        showTitle={true} 
        backgroundImage="/cave.jpg"
        className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32"
      />

      {/* FOOTER */}
      <Footer />


    </main>
  );
}
