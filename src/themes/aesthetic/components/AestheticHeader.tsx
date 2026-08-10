"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AestheticBookingModal } from './AestheticBookingModal';

export function AestheticHeader({ isDarkBackground = false }: { isDarkBackground?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('open-booking-modal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-booking-modal', handleOpenModal);
    };
  }, []);

  const textColor = (!isScrolled && isDarkBackground) ? 'text-[#FDFCF9]' : 'text-[#1C1C1C]';
  const subTextColor = (!isScrolled && isDarkBackground) ? 'text-[#FDFCF9]/80' : 'text-[#1C1C1C]/70';
  const btnClass = (!isScrolled && isDarkBackground) 
    ? 'bg-[#FDFCF9] text-[#1C1C1C] hover:bg-[#C4A79A] hover:text-[#FDFCF9]' 
    : 'bg-[#1C1C1C] text-[#FDFCF9] hover:bg-[#C4A79A] hover:text-[#FDFCF9]';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#FDFCF9]/95 backdrop-blur-xl py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[60] p-2 ${textColor}`}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-[-2px]' : 'w-full'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 opacity-100 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-full -rotate-45 translate-y-[2px]' : 'w-full'}`}></span>
            </div>
          </button>

          {/* Desktop Nav - Left */}
          <nav className={`hidden md:flex gap-10 items-center justify-start flex-1 font-sans text-xs tracking-widest ${subTextColor}`}>
            <Link href="/test-aesthetic/uzman-kadro" className="hover:text-[#C4A79A] transition-colors">Uzman Kadro</Link>
            <Link href="/test-aesthetic/hakkimizda" className="hover:text-[#C4A79A] transition-colors">Hakkımızda</Link>
          </nav>

          {/* Brand */}
          <Link href="/test-aesthetic" className={`flex flex-col items-center justify-center relative z-[60] shrink-0 text-center mx-10 ${textColor}`}>
            <span className="text-3xl lg:text-4xl font-serif tracking-[0.15em] transition-colors">
              LILA
            </span>
            <span className="text-[7px] font-sans font-medium tracking-[0.4em] uppercase text-[#C4A79A] mt-1.5">
              Aesthetic Clinic
            </span>
          </Link>

          {/* Desktop Nav - Right */}
          <nav className={`hidden md:flex gap-10 items-center justify-end flex-1 font-sans text-xs tracking-widest ${subTextColor}`}>
            <Link href="/test-aesthetic/tedaviler" className="hover:text-[#C4A79A] transition-colors">Tedaviler</Link>
            <Link href="/test-aesthetic/iletisim" className="hover:text-[#C4A79A] transition-colors">İletişim</Link>
            
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className={`ml-4 text-[11px] font-sans font-medium tracking-[0.15em] uppercase px-7 py-3 transition-colors duration-500 ${btnClass}`}
            >
              Randevu Al
            </button>
          </nav>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top left)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top left)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top left)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#FDFCF9] flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-8 mb-16">
              {['Uzman Kadro', 'Tedaviler', 'Teknolojiler', 'Hakkımızda'].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <Link 
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-[#1C1C1C] hover:text-[#C4A79A] transition-colors"
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-full text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9] bg-[#1C1C1C] py-5 hover:bg-[#C4A79A] transition-colors duration-500"
            >
              Ücretsiz Danışmanlık Al
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AestheticBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
