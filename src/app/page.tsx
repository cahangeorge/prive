'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useResponsive from './hooks/useResponsive';

export default function Home() {
  // const { isMobile } = useResponsive();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      details: formData.get('details') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Mesajul a fost trimis cu succes! | Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage('Eroare la trimiterea mesajului. | Error sending message.');
      }
    } catch (error) {
      setSubmitMessage('Eroare la trimiterea mesajului. | Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      {/* HERO */}
      <header className="min-h-screen bg-black flex justify-center items-center text-center relative overflow-hidden hero-bg">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <Image 
            src="/nature.png" 
            alt="Luxury nature experience" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className={`relative z-30 px-8 xs:px-10 sm:px-12 md:px-16 max-w-5xl mx-auto fade-in transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 xs:mb-10 sm:mb-12 font-bold leading-tight float">
            Experiențe imposibile.<br className="hidden xs:block" />
            <span className="text-[#D4AF37]"> Doar pentru cei care își doresc mai mult.</span>
          </h1>
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 xs:mb-12 sm:mb-14 md:mb-16 font-light leading-relaxed">
            Impossible experiences. For those who seek more.
          </h2>
          <a href="#contact" className="btn text-sm xs:text-base sm:text-lg inline-block mx-auto px-8 xs:px-10 py-4 xs:py-5 min-h-[48px] touch-manipulation">
            Solicită experiența | Request Your Experience
          </a>
        </div>
      </header>



      {/* CONCEPTUL PRIVÉ ESCAPES */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative bg-gradient-to-br from-[#0a0a0a] to-[#111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <Image 
            src="/dinner.png" 
            alt="Luxury dining experience" 
            fill
            className="object-cover opacity-20"
          />
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
              Conceptul Privé Escapes
            </h3>
            <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 xs:mb-10 font-light leading-relaxed">
              The Privé Escapes Concept
            </h4>
          </div>
          
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 xs:p-10 sm:p-12 md:p-16 rounded-xl xs:rounded-2xl border border-[#333] max-w-5xl mx-auto">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed text-center">
              Privé Escapes redefinește luxul prin experiențe imposibile, create exclusiv pentru cei care își doresc mai mult decât o simplă cină. Fiecare detaliu este gândit pentru a oferi intimitate absolută și emoție pură.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-center">
              Privé Escapes redefines luxury through impossible experiences, crafted exclusively for those who desire more than just a dinner. Every detail is designed to deliver absolute privacy and pure emotion.
            </p>
          </div>
          

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          <Image 
            src="/cave.png" 
            alt="Cave experience background" 
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="text-center mb-10 xs:mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 xs:mb-8">
            <svg className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="title text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#D4AF37] mb-8 xs:mb-10 sm:mb-14 font-bold leading-tight">Cum funcționează | How It Works</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 text-center max-w-6xl mx-auto relative z-10">
          <div className="group bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 xs:p-8 sm:p-10 rounded-lg xs:rounded-xl border border-[#333] hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden touch-manipulation">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-xl xs:text-2xl sm:text-3xl shadow-lg">
                1
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 text-white">Contact privat</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Discuție confidențială sub NDA<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | Private contact (NDA)</span>
              </p>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 xs:p-8 sm:p-10 rounded-lg xs:rounded-xl border border-[#333] hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden touch-manipulation">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-xl xs:text-2xl sm:text-3xl shadow-lg">
                2
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 text-white">Alege atmosfera</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Personalizăm experiența<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | Choose ambiance</span>
              </p>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 xs:p-8 sm:p-10 rounded-lg xs:rounded-xl border border-[#333] hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden touch-manipulation sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mx-auto mb-4 xs:mb-5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center text-black font-bold text-xl xs:text-2xl sm:text-3xl shadow-lg">
                3
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 text-white">Noi planificăm TOT</h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                Experiență completă fără griji<br className="hidden xs:block" />
                <span className="text-[#D4AF37]"> | We handle everything</span>
              </p> 
            </div>
          </div>
        </div>
      </section>

      {/* CAVE EXPERIENCES SECTION */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          <Image 
            src="/dinner_on_sunset.png" 
            alt="Sunset dining background" 
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6 xs:mb-8">
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#D4AF37] mr-3 xs:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] leading-tight">
                  Cină în peșteră
                </h3>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 xs:mb-8 font-light leading-relaxed">
                Cave Dinner Experience
              </h4>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-8 leading-relaxed">
                Descoperiți magia unei cine romantice în adâncurile pământului, unde lumina lumânărilor dansează pe pereții de piatră milenară. O experiență culinară unică, departe de ochii lumii.
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-8 xs:mb-10 leading-relaxed">
                Discover the magic of a romantic dinner in the depths of the earth, where candlelight dances on millennial stone walls. A unique culinary experience, away from the world&#39;s eyes.
              </p>
              <div className="space-y-4 xs:space-y-5">
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Locație secretă în peșteră naturală | Secret natural cave location</span>
                </div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Meniu personalizat de chef privat | Personalized private chef menu</span>
                </div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Atmosferă cu lumânări și muzică ambientală | Candlelit atmosphere with ambient music</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXCLUSIVE DINING SECTION */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden">
        <Image 
          src="/dinner.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">

            <div className="order-2">
              <div className="flex items-center mb-4 xs:mb-6">
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#D4AF37] mr-2 xs:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] leading-tight">
                  Cină la apus pe lac
                </h3>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 xs:mb-6 font-light leading-relaxed">
                Sunset Lake Dining
              </h4>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 leading-relaxed">
                Savurați o masă exquisită pe malul unui lac privat, în timp ce soarele apune pictând cerul în nuanțe de aur. O experiență culinară în perfectă armonie cu natura.
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-6 xs:mb-8 leading-relaxed">
                Savor an exquisite meal on the shore of a private lake, while the sun sets painting the sky in golden hues. A culinary experience in perfect harmony with nature.
              </p>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Lac privat cu acces exclusiv | Private lake with exclusive access</span>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Serviciu complet de butler | Full butler service</span>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Vinuri fine și delicatese | Fine wines and delicacies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATURE EXPERIENCES SECTION */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden">
        <Image 
          src="/nature.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6 xs:mb-8">
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#D4AF37] mr-3 xs:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] leading-tight">
                  Experiențe în natură
                </h3>
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 xs:mb-8 font-light leading-relaxed">
                Wilderness Adventures
              </h4>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-8 leading-relaxed">
                Evadați în locuri neexplorate unde natura își dezvăluie secretele doar pentru voi. De la cabane de lux în păduri virgine la experiențe culinare sub cerul înstelat.
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-8 xs:mb-10 leading-relaxed">
                Escape to unexplored places where nature reveals its secrets only to you. From luxury cabins in virgin forests to culinary experiences under the starry sky.
              </p>
              <div className="space-y-4 xs:space-y-5">
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Cabane de lux în locații izolate | Luxury cabins in isolated locations</span>
                </div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Activități personalizate în natură | Personalized nature activities</span>
                </div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">Ghid privat și echipament premium | Private guide and premium equipment</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>





      {/* EXPERIENCE BESPOKE SECTION */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden">
        <Image 
          src="/dinner_on_sunset.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">

            <div className="order-2">
              <div className="flex items-center mb-6 xs:mb-8">
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#D4AF37] mr-3 xs:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#D4AF37] leading-tight">
                  EXPERIENCE BESPOKE
                </h3>
              </div>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-8 leading-relaxed">
                Lux fără limite. Experiențe personalizate în cele mai inaccesibile colțuri ale lumii, create pentru a îndeplini imposibilul.
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-8 xs:mb-10 leading-relaxed">
                Luxury without limits. Tailored experiences in the world&#39;s most inaccessible places, crafted to fulfill the impossible.
              </p>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300 font-medium leading-relaxed">Locație la cerere | Destination on request</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300 font-medium leading-relaxed">Concept & decor complet personalizat</span>
                    <p className="text-xs xs:text-sm text-gray-400 italic leading-relaxed">Fully bespoke concept & décor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300 font-medium leading-relaxed">Cină cu chef de renume | Michelin level dining</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300 font-medium leading-relaxed">Vinuri rare & sommelier dedicat</span>
                    <p className="text-xs xs:text-sm text-gray-400 italic leading-relaxed">Rare wines & dedicated sommelier</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300 font-medium leading-relaxed">Instrumentiști live & entertainment exclusiv</span>
                    <p className="text-xs xs:text-sm text-gray-400 italic leading-relaxed">Live musicians & exclusive entertainment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES OVERVIEW GALLERY */}
      <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden">
        <Image 
          src="/cave.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="text-center mb-10 xs:mb-14 lg:mb-20 relative z-20">
          <div className="flex justify-center mb-6 xs:mb-8">
            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-12 font-bold leading-tight">Galerie experiențe | Experiences Gallery</h3>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl leading-relaxed">
            Descoperă experiențele noastre exclusive prin galeria de imagini de fundal.
          </p>
          <p className="text-gray-400 text-sm xs:text-base italic mt-2">
            Discover our exclusive experiences through the background image gallery.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden">
        <Image 
          src="/dinner.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="text-center mb-10 xs:mb-14 sm:mb-16 relative z-20">
          <div className="flex justify-center mb-6 xs:mb-8">
            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-12 font-bold leading-tight">Solicită experiența ta | Request Your Experience</h3>
        </div>
        <form onSubmit={handleSubmit} className="contact-form max-w-2xl mx-auto relative z-20">
          <div className="space-y-6 xs:space-y-8">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nume / Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Introduceți numele dvs. / Enter your name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="exemplu@email.com / example@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="details" className="form-label">Detalii cerințe / Details</label>
              <textarea 
                id="details" 
                name="details" 
                rows={5} 
                required 
                placeholder="Descrieți experiența dorită... / Describe your desired experience..."
                className="form-input form-textarea"
              ></textarea>
            </div>

            <div className="nda-section">
              <div className="flex items-start space-x-4">
                <input 
                  type="checkbox" 
                  id="nda" 
                  required 
                />
                <label htmlFor="nda" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                  <span className="text-[#D4AF37] font-semibold block mb-1">🔒 Confidențialitate garantată</span>
                  <span className="block mb-2">Sunt de acord să semnez NDA pentru protejarea completă a informațiilor și detaliilor experiențelor exclusive.</span>
                  <span className="text-xs text-gray-400 italic">🔒 Confidentiality guaranteed: I agree to sign NDA for complete protection of information and exclusive experience details.</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn w-full text-center justify-center py-4 xs:py-5 text-base xs:text-lg font-semibold touch-manipulation ${
                isSubmitting ? 'loading cursor-not-allowed opacity-70' : ''
              }`}
            >
              {isSubmitting ? 'Se trimite... | Sending...' : 'Trimite cererea | Submit Request'}
            </button>
            
            {submitMessage && (
              <div className={`${
                submitMessage.includes('succes') || submitMessage.includes('successfully') 
                  ? 'success-message' 
                  : 'error-message'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    submitMessage.includes('succes') || submitMessage.includes('successfully')
                      ? 'bg-green-400'
                      : 'bg-red-400'
                  }`}></div>
                  <span>{submitMessage}</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 xs:py-10 sm:py-12 px-6 xs:px-8 text-gray-500 border-t border-[#333] text-xs xs:text-sm mt-10 xs:mt-12 relative overflow-hidden">
        <Image 
          src="/nature.png" 
          alt="Background" 
          fill
          className="object-cover opacity-20 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 z-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-20">
          <p>&copy; 2025 Privé Escapes | Where Privacy Becomes Art</p>
        </div>
      </footer>
    </main>
  );
}
