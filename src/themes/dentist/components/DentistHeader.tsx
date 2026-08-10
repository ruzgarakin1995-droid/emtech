"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { AppointmentModal } from './AppointmentModal';

export function DentistHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? 'bg-[#FAFAFA]/90 backdrop-blur-xl py-4 border-[#1A1A1A]/5' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/test-dentist" className="group flex items-center z-50">
            <span className="text-2xl font-serif tracking-wide text-[#1A1A1A]">
              LUMINA
              <span className="text-sm font-sans font-light tracking-widest uppercase ml-2 text-[#1A1A1A]/50">
                Dental
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link href="/test-dentist/hakkimizda" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Felsefemiz
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/test-dentist#uzmanlıklarımız" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Uzmanlıklar
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/test-dentist/ekibimiz" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Doktorlar
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block z-50">
            <div onClick={() => setIsModalOpen(true)}>
              <MagneticButton variant="dark">
                Randevu Al
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Toggle (Simplified) */}
          <button className="md:hidden text-[#1A1A1A] z-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>
      </header>

      {/* The Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
