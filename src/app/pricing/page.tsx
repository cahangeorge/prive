'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PricingPackages from '../components/PricingPackages';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function PricingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] pt-24 xs:pt-28 sm:pt-32 pb-12 xs:pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${
            mounted && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8 leading-tight">
              Exclusive Packages
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 xs:px-0">
              Curated experiences for the most discerning clientele. Each package is meticulously designed to create unforgettable moments that transcend ordinary luxury.
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8941F] rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Packages */}
      <PricingPackages showTitle={false} />
      
      {/* Additional Information Section */}
      <section className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 md:gap-20">
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8">
                Bespoke Experiences
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 leading-relaxed">
                Every package can be customized to your exact preferences. Our team of experts works closely with you to ensure every detail reflects your vision and exceeds your expectations.
              </p>
              <ul className="space-y-3 xs:space-y-4 text-xs xs:text-sm sm:text-base text-gray-400">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized consultation and planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexible scheduling and location options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Additional services and upgrades available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 concierge support throughout your experience</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8">
                Booking Process
              </h3>
              <div className="space-y-4 xs:space-y-6">
                <div className="border-l-2 border-[#D4AF37] pl-4 xs:pl-6">
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">1. Initial Consultation</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400">
                    Schedule a private consultation to discuss your vision, preferences, and requirements.
                  </p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-4 xs:pl-6">
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">2. Custom Proposal</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400">
                    Receive a detailed proposal tailored to your specific needs and desires.
                  </p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-4 xs:pl-6">
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">3. Confirmation & Planning</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400">
                    Finalize details, sign agreements, and begin the meticulous planning process.
                  </p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-4 xs:pl-6">
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">4. Experience Delivery</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400">
                    Enjoy your perfectly orchestrated experience with full support from our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
}