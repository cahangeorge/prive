'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    experienceType: '',
    budget: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        experienceType: '',
        budget: '',
        preferredDate: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <main className="font-sans">
      <Navbar />
      
      {/* HERO */}
      <header className="nda-section min-h-screen bg-black flex justify-center items-center text-center relative overflow-hidden hero-bg">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <Image 
            src="https://media.priveescape.com/make_the_dinner.jpg" 
            alt="Contact Privé Escapes" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className={`relative z-30 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto fade-in transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 xs:mb-8 sm:mb-10 md:mb-12 font-bold leading-tight float">
            Contact <span className="text-[#D4AF37]">Privé Escapes</span>
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 font-light leading-relaxed px-2 xs:px-0">
            Let&apos;s create your unforgettable private experience
          </h2>
        </div>
      </header>

      {/* CONTACT FORM SECTION */}
      <section className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0a0a0a] to-[#111] relative" style={{backgroundImage: 'url(/cave.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 lg:gap-20">
            {/* Contact Information */}
            <div className="space-y-6 xs:space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4 xs:mb-6 sm:mb-8">
                  Get in Touch
                </h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed mb-6 xs:mb-8 sm:mb-10">
                  Ready to embark on an extraordinary journey? Contact us for a private consultation under NDA to discuss your bespoke experience.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                {/* WhatsApp */}
                <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/40742829039" 
                      className="text-sm xs:text-base text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +40 742 829 039
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:office@priveescape.com" 
                      className="text-sm xs:text-base text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300"
                    >
                      office@priveescape.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1">Location</h4>
                    <p className="text-sm xs:text-base text-[#D4AF37]">Romania & International</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
                <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg p-3 xs:p-4 sm:p-6 text-center">
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto mb-1 xs:mb-2 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h5 className="text-xs xs:text-sm font-bold text-[#D4AF37] mb-1">NDA Protected</h5>
                  <p className="text-xs text-gray-400">Complete confidentiality</p>
                </div>
                
                <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg p-3 xs:p-4 sm:p-6 text-center">
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto mb-1 xs:mb-2 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h5 className="text-xs xs:text-sm font-bold text-[#D4AF37] mb-1">Fully Insured</h5>
                  <p className="text-xs text-gray-400">Complete protection</p>
                </div>
                
                <div className="bg-black/50 border border-[#D4AF37]/30 rounded-lg p-3 xs:p-4 sm:p-6 text-center">
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto mb-1 xs:mb-2 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h5 className="text-xs xs:text-sm font-bold text-[#D4AF37] mb-1">24/7 Support</h5>
                  <p className="text-xs text-gray-400">Always available</p>
                </div>
              </div>
            </div>

            {/* ADDITIONAL CONTACT FORM */}
            <ContactForm 
              showTitle={false} 
              backgroundImage="/cave.jpg" 
              className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />


    </main>
  );
}