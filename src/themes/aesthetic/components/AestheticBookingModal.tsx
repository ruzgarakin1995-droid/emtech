"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AestheticBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AestheticBookingModal({ isOpen, onClose }: AestheticBookingModalProps) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1C1C]/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#FDFCF9] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row min-h-[500px] overflow-hidden rounded-xl"
          >
            {/* Left Image Side */}
            <div className="hidden md:block w-1/3 relative bg-[#1C1C1C]">
              <img src="/aesthetic/aesthetic_hero_face.jpg" alt="Lila Clinic" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-[#FDFCF9]">
                <h3 className="font-serif text-2xl mb-2">LILA</h3>
                <p className="font-sans font-light text-xs text-[#FDFCF9]/60">Güzelliğe bilimsel yaklaşım.</p>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl font-serif text-[#1C1C1C] mb-2">Ücretsiz Danışmanlık</h2>
              <p className="font-sans font-light text-[#1C1C1C]/60 text-sm mb-10">Uzman doktorlarımızla ön görüşme planlamak için bilgilerinizi bırakın.</p>

              <form className="space-y-6 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Adınız Soyadınız</label>
                    <input type="text" className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Telefon Numaranız</label>
                    <input type="tel" className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-4">İlgilendiğiniz Tedavi</label>
                  <select className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors appearance-none cursor-pointer">
                    <option value="">Seçiniz...</option>
                    <option value="botoks">Botoks & Dolgu Uygulamaları</option>
                    <option value="lazer">Lazer & Cihazlı İşlemler</option>
                    <option value="cilt">Medikal Cilt Bakımı</option>
                    <option value="diger">Diğer / Doktor Görüşü</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Mesajınız (Opsiyonel)</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="button"
                    onClick={() => {
                      alert("Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.");
                      onClose();
                    }}
                    className="w-full bg-[#1C1C1C] text-[#FDFCF9] py-4 font-sans font-medium tracking-[0.2em] uppercase text-[11px] hover:bg-[#C4A79A] transition-colors duration-500 rounded-sm"
                  >
                    Talebi Gönder
                  </button>
                </div>
              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
