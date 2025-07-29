'use client';

import Image from 'next/image';

interface ExperienceSectionsProps {
  showAll?: boolean;
}

export default function ExperienceSections({ showAll = true }: ExperienceSectionsProps) {
  return (
    <>
      {/* CAVE EXPERIENCES SECTION */}
      <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden m-4 rounded-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75"></div>
          <Image 
            src="/cave.jpg" 
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
                Discover the magic of a romantic dinner in the depths of the earth, where candlelight dances on millennial stone walls. A unique culinary experience, away from the world's eyes.
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
      <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden m-4 rounded-2xl">
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

      {showAll && (
        <>
          {/* NATURE EXPERIENCES SECTION */}
          <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden m-4 rounded-2xl">
            <Image 
              src="/nature.png" 
              alt="Background" 
              fill
              className="object-cover opacity-30 z-0 rounded-2xl"
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
          <section className="nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 relative overflow-hidden m-4 rounded-2xl">
            <Image 
              src="/table_1.png" 
              alt="Background" 
              fill
              className="object-cover opacity-30 z-0 rounded-2xl"
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
                    Luxury without limits. Tailored experiences in the world's most inaccessible places, crafted to fulfill the impossible.
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
        </>
      )}
    </>
  );
}