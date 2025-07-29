'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PricingPackagesProps {
  showTitle?: boolean;
}

export default function PricingPackages({ showTitle = true }: PricingPackagesProps) {
  const router = useRouter();

  const handlePackageClick = (packageId: string) => {
    router.push(`/package-details?package=${packageId}`);
  };

  return (
    <section className="px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%] py-16 xs:py-20 sm:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="text-center mb-12 xs:mb-16 sm:mb-20">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-6 xs:mb-8 leading-tight">
              Exclusive Packages
            </h3>
            <p className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Curated experiences for the most discerning clientele
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
          {/* Package 1: Évasion Privée */}
          <div 
            onClick={() => handlePackageClick('evasion-privee')}
            className="border border-[#D4AF37]/30 rounded-xl xs:rounded-2xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:transform hover:scale-[1.02] relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/package_35k.jpg" 
                alt="Évasion Privée - €35,000 Package" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 p-8 xs:p-10 sm:p-12 h-full flex flex-col justify-end">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">Évasion Privée</h4>
              <div className="text-right">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#D4AF37]">€35,000</div>
              </div>
            </div>
            <p className="text-sm xs:text-base text-gray-300 mb-6 leading-relaxed">
              A private getaway for two in an exceptional natural setting in Romania.
            </p>
            <ul className="space-y-3 text-xs xs:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Secret location (cave, pontoon, or exclusive cabin)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Fine-dining dinner with personal chef & sommelier</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete decor: rare flowers, candles, ambient sound</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Premium private transport (including air transfer if applicable)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Personal assistance throughout the experience</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Full insurance & NDA</span>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Package 2: Signature Moments */}
          <div 
            onClick={() => handlePackageClick('signature-moments')}
            className="border border-[#D4AF37]/30 rounded-xl xs:rounded-2xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:transform hover:scale-[1.02] relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/package_50k.jpg" 
                alt="Signature Moments - €60,000 Package" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 p-8 xs:p-10 sm:p-12 h-full flex flex-col justify-end">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">🌍 Signature Moments</h4>
              <div className="text-right">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#D4AF37]">€60,000</div>
              </div>
            </div>
            <p className="text-sm xs:text-base text-gray-300 mb-6 leading-relaxed">
              An event for a small group (4–6 people) in a spectacular location in Eastern Europe.
            </p>
            <ul className="space-y-3 text-xs xs:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Exclusively rented location (isolated castle / seaside villa)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Thematic concept: dinner in the forest, on cliffs, in a secret garden, etc.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>International chef + 6-course tasting menu + pairing</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Live instrumentalist (harp / cello)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Charter transport & private driver</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Private photographer + physical albums</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Insurance & full contract</span>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Package 3: L'Art de Vivre */}
          <div 
            onClick={() => handlePackageClick('lart-de-vivre')}
            className="border border-[#D4AF37]/30 rounded-xl xs:rounded-2xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:transform hover:scale-[1.02] relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/package_90k.jpg" 
                alt="L'Art de Vivre - €90,000 Package" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 p-8 xs:p-10 sm:p-12 h-full flex flex-col justify-end">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">🕊 L'Art de Vivre</h4>
              <div className="text-right">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#D4AF37]">€90,000</div>
              </div>
            </div>
            <p className="text-sm xs:text-base text-gray-300 mb-6 leading-relaxed">
              A symbolic evening, dedicated to anniversaries or marriage proposals. Exotic location, customized in detail.
            </p>
            <ul className="space-y-3 text-xs xs:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Location outside the country (Italian coast / Mediterranean island / Morocco / Alps)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Full setup created from scratch, adapted to the client's dream</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Decor artisan, imported flowers, special furniture delivered</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Private flight / yacht / helicopter included</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Wellness experience + treatments at the location</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Exclusive video concept (cinematic), discreetly delivered within 72h</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>24/7 Concierge + production team</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Premium insurance in the client's name</span>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Package 4: Immortelle */}
          <div 
            onClick={() => handlePackageClick('immortelle')}
            className="border border-[#D4AF37]/30 rounded-xl xs:rounded-2xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:transform hover:scale-[1.02] relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/package_180k.jpg" 
                alt="Immortelle - €180,000 Package" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 p-8 xs:p-10 sm:p-12 h-full flex flex-col justify-end">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">🔱 Immortelle</h4>
              <div className="text-right">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#D4AF37]">€180,000</div>
              </div>
            </div>
            <p className="text-sm xs:text-base text-gray-300 mb-6 leading-relaxed">
              An unrepeatable experience, with multiple locations, dedicated to those seeking more than luxury – a mythical moment.
            </p>
            <ul className="space-y-3 text-xs xs:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Multiple locations (2–3 international destinations, within 48–72h)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Scenic getaway with private jet / luxury yacht</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete experience: gourmet, art, music, sensorial</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Thematic decor & scenography team</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Personalized outfit styling / make-up artist / image consultant</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Guest artists & unique artistic moment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>Cameraman + editing director → personalized art film</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                <span>NDA + contract + full insurance</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
        
        {/* Package Inclusions */}
        <div className="mt-12 xs:mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/5 border border-[#D4AF37]/20 rounded-xl xs:rounded-2xl p-8 xs:p-10 sm:p-12 text-center">
            <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#D4AF37] mb-6">🔐 Each Package Includes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#D4AF37]">✔</span>
                <span className="text-sm xs:text-base text-gray-300">Discretion guaranteed by contract</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#D4AF37]">✔</span>
                <span className="text-sm xs:text-base text-gray-300">Named insurance</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#D4AF37]">✔</span>
                <span className="text-sm xs:text-base text-gray-300">Dedicated staff</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#D4AF37]">✔</span>
                <span className="text-sm xs:text-base text-gray-300">Upgrade & customization options</span>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="border-t border-[#D4AF37]/20 pt-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                *The images are for presentation purposes only. The experiences will be created in natural settings, available during the chosen period, so as to include all the selected details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}