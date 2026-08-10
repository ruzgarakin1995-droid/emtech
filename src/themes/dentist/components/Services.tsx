"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';

const services = [
  {
    title: "Porselen Lamina",
    description: "Mükemmel gülüş tasarımı için ultra ince, ışık geçirgenliğine sahip estetik porselen yapraklar.",
    image: "/lumina_lamina.jpg",
    href: "/test-dentist/uzmanliklar/porselen-lamina"
  },
  {
    title: "İmplantoloji",
    description: "Eksik dişlerinizi, doğal kök görevi gören premium titanyum implantlarla kalıcı olarak tamamlıyoruz.",
    image: "/lumina_implant.jpg",
    href: "/test-dentist/uzmanliklar/implantoloji"
  },
  {
    title: "Şeffaf Plak (Invisalign)",
    description: "Braketsiz, dışarıdan fark edilmeyen şeffaf plaklarla konforlu ve estetik ortodonti tedavisi.",
    image: "/lumina_invisalign.jpg",
    href: "/test-dentist/uzmanliklar/seffaf-plak"
  }
];

export function Services() {
  return (
    <section id="uzmanlıklarımız" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4C9C3] mb-4 block">
              Uzmanlık Alanlarımız
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Kişiye Özel Tedaviler
            </h2>
          </div>
          <div className="hidden md:block">
             <MagneticButton variant="light" className="border border-[#1A1A1A]/10">
               Tümünü İncele
             </MagneticButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link href={service.href} key={idx} className="group cursor-pointer flex flex-col block">
              <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Container with Mask Reveal effect on hover */}
              <div className="relative overflow-hidden w-full aspect-[3/4] mb-8 bg-[#1A1A1A]/5">
                <motion.div 
                  className="absolute inset-0 bg-[#D4C9C3] z-10 origin-bottom"
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, delay: 0.2 + idx * 0.2, ease: [0.76, 0, 0.24, 1] }}
                />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#D4C9C3] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#1A1A1A]/60 font-sans font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <span className="text-xs font-sans tracking-widest uppercase text-[#1A1A1A] relative inline-block overflow-hidden pb-1">
                    <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                      Detaylı Bilgi
                    </span>
                    <span className="absolute inset-0 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0 text-[#D4C9C3]">
                      Detaylı Bilgi
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A]/20" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full" />
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
