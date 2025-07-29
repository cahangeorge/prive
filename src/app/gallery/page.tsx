'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Nature Escape",
    description: "Private forest sanctuary with luxury amenities",
    image: "https://www.priveescape.com/nature.png",
    category: "Nature"
  },
  {
    id: 2,
    title: "Exclusive Dining",
    description: "Private chef experience in unique locations",
    image: "https://www.priveescape.com/dinner.png",
    category: "Dining"
  },
  {
    id: 3,
    title: "Cave Adventure",
    description: "Underground luxury dining experience",
    image: "https://www.priveescape.com/cave.jpg",
    category: "Adventure"
  },
  {
    id: 4,
    title: "Luxury Travel",
    description: "Private transportation to exclusive destinations",
    image: "https://www.priveescape.com/plane.jpg",
    category: "Travel"
  },
  {
    id: 5,
    title: "Car Celebration",
    description: "Exclusive celebrations in luxury vehicles",
    image: "https://www.priveescape.com/cheers_in_car.jpg",
    category: "Nightlife"
  },
  {
    id: 6,
    title: "Beach Dining",
    description: "Private beachfront culinary experiences",
    image: "https://www.priveescape.com/dinner_at_beach.jpg",
    category: "Dining"
  },
  {
    id: 7,
    title: "Intimate Dining",
    description: "Private dining experiences for two",
    image: "https://www.priveescape.com/dinner_in_2.jpg",
    category: "Dining"
  },
  {
    id: 21,
    title: "Night Drinks",
    description: "Exclusive evening beverage experiences",
    image: "https://www.priveescape.com/drink_night.jpg",
    category: "Nightlife"
  },
  {
    id: 22,
    title: "Boat Party",
    description: "Luxury party experiences on water",
    image: "https://www.priveescape.com/party_on_boat.png",
    category: "Luxury"
  },
  {
    id: 8,
    title: "Mountain Summit",
    description: "Private mountain peak experiences",
    image: "https://www.priveescape.com/drink_on_mountain.jpg",
    category: "Adventure"
  },
  {
    id: 9,
    title: "Helicopter Tours",
    description: "Exclusive aerial experiences",
    image: "https://www.priveescape.com/helicopter.jpg",
    category: "Adventure"
  },
  {
    id: 10,
    title: "Private Chef",
    description: "Personal culinary artistry",
    image: "https://www.priveescape.com/make_the_dinner.jpg",
    category: "Dining"
  },
  {
    id: 11,
    title: "Culinary Workshop",
    description: "Hands-on gourmet cooking experiences",
    image: "https://www.priveescape.com/lunch_with_chef.jpg",
    category: "Dining"
  },
  {
    id: 12,
    title: "Nature Adventure",
    description: "Wild luxury experiences in pristine nature",
    image: "https://www.priveescape.com/play_in_nature.jpg",
    category: "Nature"
  },
  {
    id: 13,
    title: "Luxury Pool",
    description: "Private pool experiences with premium amenities",
    image: "https://www.priveescape.com/shots_in_pool.jpg",
    category: "Luxury"
  },
  {
    id: 14,
    title: "Yacht Experience",
    description: "Exclusive yacht experiences with luxury amenities",
    image: "https://www.priveescape.com/boat_party.jpg",
    category: "Luxury"
  },
  {
    id: 15,
    title: "Group Cheers",
    description: "Celebrate with friends in exclusive settings",
    image: "https://www.priveescape.com/cheers_in_group.png",
    category: "Nightlife"
  },
  {
    id: 16,
    title: "Sunset Dinner",
    description: "Romantic dining experiences at sunset",
    image: "https://www.priveescape.com/dinner_on_sunset.png",
    category: "Dining"
  },
  {
    id: 17,
    title: "Women's Dinner",
    description: "Exclusive dining experiences for women",
    image: "https://www.priveescape.com/dinner_with_women.png",
    category: "Dining"
  },
  {
    id: 18,
    title: "Mountain Drinks",
    description: "Enjoy premium beverages with mountain views",
    image: "https://www.priveescape.com/drink_with_boys.png",
    category: "Adventure"
  },
  {
    id: 19,
    title: "Wedding Celebration",
    description: "Luxury wedding and celebration experiences",
    image: "https://www.priveescape.com/wedding.png",
    category: "Luxury"
  },
  {
    id: 20,
    title: "Table Experience",
    description: "Premium table service and dining",
    image: "https://www.priveescape.com/table_1.png",
    category: "Dining"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const categories = ['All', ...Array.from(new Set(experiences.map(exp => exp.category)))];
  
  const filteredExperiences = selectedCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  const maxIndex = Math.max(0, filteredExperiences.length - itemsPerView);

  useEffect(() => {
    setIsLoaded(true);
    
    // Set responsive items per view
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, itemsPerView, nextSlide]);

  return (
    <main className="font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <Image 
            src="https://www.priveescape.com/plane.jpg" 
            alt="Gallery Hero" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className={`relative z-30 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto fade-in transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 xs:mb-8 sm:mb-10 md:mb-12 font-bold leading-tight float">
            Experience <span className="text-[#D4AF37]">Gallery</span>
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 font-light leading-relaxed">
            Discover our exclusive collection of luxury experiences
          </h2>
        </div>
      </header>

      {/* GALLERY CAROUSEL */}
      <section className="px-4 xs:px-6 sm:px-8 md:px-[6%] lg:px-[8%] xl:px-[10%] py-12 xs:py-16 sm:py-20 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full text-xs xs:text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-[#D4AF37] p-2 xs:p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 -ml-4 xs:-ml-6 sm:-ml-8"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-[#D4AF37] p-2 xs:p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 -mr-4 xs:-mr-6 sm:-mr-8"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div 
              className="overflow-hidden rounded-xl xs:rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                }}
              >
                {filteredExperiences.map((experience) => (
                  <div
                    key={experience.id}
                    className={`flex-shrink-0 px-1 xs:px-2 sm:px-3 ${
                      itemsPerView === 1 ? 'w-full' : 
                      itemsPerView === 2 ? 'w-1/2' : 
                      'w-1/3'
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-lg xs:rounded-xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105">
                      <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 overflow-hidden">
                        <Image
                          src={experience.image}
                          alt={experience.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 xs:top-4 xs:left-4 bg-[#D4AF37]/90 text-black px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs xs:text-sm font-medium">
                          {experience.category}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 xs:p-6 sm:p-8">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-2 xs:mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 xs:mt-8 sm:mt-10 space-x-1.5 xs:space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#D4AF37] scale-125'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mt-12 xs:mt-16 sm:mt-20">
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1 xs:mb-2">
                {experiences.length}+
              </div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">
                Unique Experiences
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1 xs:mb-2">
                {categories.length - 1}
              </div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1 xs:mb-2">
                100%
              </div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">
                Private & Exclusive
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1 xs:mb-2">
                24/7
              </div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">
                Concierge Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />


    </main>
  );
}