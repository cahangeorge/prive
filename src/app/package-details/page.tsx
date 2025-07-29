'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';

interface PackageData {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

const packages: Record<string, PackageData> = {
  'evasion-privee': {
    id: 'evasion-privee',
    name: 'Évasion Privée',
    price: '€35,000',
    description: 'A private getaway for two in an exceptional natural setting in Romania.',
    image: '/package_35k.jpg',
    features: [
      'Secret location (cave, pontoon, or exclusive cabin)',
      'Fine-dining dinner with personal chef & sommelier',
      'Complete decor: rare flowers, candles, ambient sound',
      'Premium private transport (including air transfer if applicable)',
      'Personal assistance throughout the experience',
      'Full insurance & NDA'
    ]
  },
  'signature-moments': {
    id: 'signature-moments',
    name: '🌍 Signature Moments',
    price: '€60,000',
    description: 'An event for a small group (4–6 people) in a spectacular location in Eastern Europe.',
    image: '/package_50k.jpg',
    features: [
      'Exclusively rented location (isolated castle / seaside villa)',
      'Thematic concept: dinner in the forest, on cliffs, in a secret garden, etc.',
      'International chef + 6-course tasting menu + pairing',
      'Live instrumentalist (harp / cello)',
      'Charter transport & private driver',
      'Private photographer + physical albums',
      'Insurance & full contract'
    ]
  },
  'lart-de-vivre': {
    id: 'lart-de-vivre',
    name: '🕊 L\'Art de Vivre',
    price: '€90,000',
    description: 'A symbolic evening, dedicated to anniversaries or marriage proposals. Exotic location, customized in detail.',
    image: '/package_90k.jpg',
    features: [
      'Location outside the country (Italian coast / Mediterranean island / Morocco / Alps)',
      'Full setup created from scratch, adapted to the client\'s dream',
      'Decor artisan, imported flowers, special furniture delivered',
      'Private flight / yacht / helicopter included',
      'Wellness experience + treatments at the location',
      'Exclusive video concept (cinematic), discreetly delivered within 72h',
      '24/7 Concierge + production team',
      'Premium insurance in the client\'s name'
    ]
  },
  'immortelle': {
    id: 'immortelle',
    name: '🔱 Immortelle',
    price: '€180,000',
    description: 'An unrepeatable experience, with multiple locations, dedicated to those seeking more than luxury – a mythical moment.',
    image: '/package_180k.jpg',
    features: [
      'Multiple locations (2–3 international destinations, within 48–72h)',
      'Scenic getaway with private jet / luxury yacht',
      'Complete experience: gourmet, art, music, sensorial',
      'Thematic decor & scenography team',
      'Personalized outfit styling / make-up artist / image consultant',
      'Guest artists & unique artistic moment',
      'Cameraman + editing director → personalized art film',
      'NDA + contract + full insurance'
    ]
  }
};

function PackageDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [packageId, setPackageId] = useState('evasion-privee');

  useEffect(() => {
    const pkg = searchParams.get('package');
    if (pkg && packages[pkg]) {
      setPackageId(pkg);
    }
  }, [searchParams]);

  const packageData = packages[packageId];



  if (!packageData) {
    return (
      <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#D4AF37] mb-4" style={{ color: '#D4AF37' }}>Package Not Found</h1>
            <p className="text-gray-300 mb-6" style={{ color: '#D1D5DB' }}>The requested package could not be found.</p>
            <button
              onClick={() => router.push('/')}
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              style={{ backgroundColor: '#D4AF37', color: '#000000' }}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={packageData.image}
            alt={packageData.name}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/60" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%]" style={{ zIndex: 10 }}>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#D4AF37]" style={{ color: '#D4AF37' }}>
            {packageData.name}
          </h1>
          <p className="text-xl xs:text-2xl sm:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto" style={{ color: '#E5E7EB' }}>
            {packageData.description}
          </p>
          <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-8" style={{ color: '#D4AF37' }}>
            {packageData.price}
          </div>
          <button
            onClick={() => router.push('/')}
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8941F] transition-colors"
            style={{ backgroundColor: '#D4AF37', color: '#000000' }}
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* Package Features */}
      <section className="py-20 px-6 xs:px-8 sm:px-10 md:px-[8%] lg:px-[10%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-center mb-16 text-[#D4AF37]" style={{ color: '#D4AF37' }}>
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packageData.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#D4AF37' }}>
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#000000' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300" style={{ color: '#D1D5DB' }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default function PackageDetails() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}></div>
            <p className="text-gray-300" style={{ color: '#D1D5DB' }}>Loading...</p>
          </div>
        </div>
      </div>
    }>
      <PackageDetailsContent />
    </Suspense>
  );
}