"use client";

import React from 'react';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: "Dr. Aylin Yılmaz",
    role: "Estetik Diş Hekimi & Gülüş Tasarımcısı",
    image: "/lumina_dr_aylin.jpg"
  },
  {
    name: "Dr. Caner Tekin",
    role: "Ağız, Diş ve Çene Cerrahisi Uzmanı",
    image: "/lumina_dr_caner.jpg"
  }
];

export function Doctors() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
           <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4C9C3] mb-4 block">
             Uzman Kadro
           </span>
           <h2 className="text-4xl md:text-5xl font-serif">
             Sanatkarlarımız
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: idx * 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#FAFAFA]/5 mb-8 relative">
                 <img 
                   src={doc.image} 
                   alt={doc.name} 
                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="flex flex-col items-center border-b border-[#FAFAFA]/10 pb-6">
                <h3 className="text-3xl font-serif text-[#FAFAFA] mb-2">{doc.name}</h3>
                <p className="text-[#D4C9C3] font-sans text-sm tracking-widest uppercase">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
