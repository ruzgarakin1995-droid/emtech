"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GulusTasarimiPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Uzmanlık / Gülüş Tasarımı
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Yüzünüzün <br />
            <span className="italic text-[#D4C9C3] font-light">Matematiği.</span>
          </h1>
          <p className="font-sans font-light text-[#1A1A1A]/60 leading-relaxed text-lg">
            Altın oran (Golden Ratio), dudak dinamikleri ve yüz simetrisi... Her gülüş, kişinin karakterini yansıtan benzersiz bir imza olmalıdır. Biz bu imzayı sanatla tasarlıyoruz.
          </p>
        </motion.div>

        {/* Big Statement */}
        <div className="py-24 border-y border-[#1A1A1A]/10 mb-24 relative overflow-hidden">
          {/* Subtle background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
            <h2 className="text-[15vw] font-serif leading-none whitespace-nowrap">
              AESTHETICS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">1. Analiz</h4>
              <p className="font-sans font-light text-[#1A1A1A]/70 text-sm leading-relaxed px-4">
                Yüz hatlarınızın, ten renginizin, yaşınızın ve hatta mesleğinizin detaylı dijital analizi.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">2. Mock-up</h4>
              <p className="font-sans font-light text-[#1A1A1A]/70 text-sm leading-relaxed px-4">
                Dişlerinize hiçbir işlem yapılmadan, özel materyallerle tasarımın ağzınızda provası (Test-Drive).
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">3. İcra</h4>
              <p className="font-sans font-light text-[#1A1A1A]/70 text-sm leading-relaxed px-4">
                Master seramistlerimiz tarafından el işçiliği ile mikroskop altında hazırlanan final restorasyonlar.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
           <a 
            href="/test-dentist/iletisim" 
            className="inline-block border border-[#1A1A1A] text-[#1A1A1A] px-12 py-5 text-xs font-sans tracking-[0.3em] uppercase hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-all duration-500"
          >
            Kendi Tasarımınızı Keşfedin
          </a>
        </motion.div>

      </div>
    </div>
  );
}
