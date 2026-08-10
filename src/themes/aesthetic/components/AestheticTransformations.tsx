"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';

export function AestheticTransformations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const results = [
    {
      title: "İmza Çene Hattı (Jawline)",
      desc: "Altın oran prensibiyle çene ucu ve hattının hyalüronik asit dolgularla kusursuzlaştırılması.",
      img: "/aesthetic/aesthetic_contour.jpg"
    },
    {
      title: "Russian Lips Dolgusu",
      desc: "Doğallığı bozmadan, dudak kontürünün belirginleştirildiği özel hacimlendirme tekniği.",
      img: "/aesthetic/aesthetic_lips.jpg"
    },
    {
      title: "Ameliyatsız Yüz Germe",
      desc: "HIFU ve fokus ultrason teknolojileriyle cerrahi işlem olmadan elde edilen sıkılaşma.",
      img: "/aesthetic/aesthetic_hero_face.jpg" // Using hero image as an example of perfect skin
    }
  ];

  return (
    <section className="py-32 bg-[#1C1C1C] text-[#FDFCF9] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Klinik Sonuçlar</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            İmza <br/>
            <span className="italic font-light text-[#C4A79A]">Dokunuşlarımız.</span>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans font-light text-[#FDFCF9]/60 max-w-sm text-sm"
        >
          Doğallığı kaybetmeden, yüzün anatomik dengesini koruyarak yaptığımız bazı özel işlemler. Sağ kaydırarak inceleyin.
        </motion.p>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 lg:px-8 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {results.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-[85vw] md:min-w-[600px] snap-center flex flex-col gap-6"
          >
            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-sm group">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-serif text-[#FDFCF9] mb-2">{item.title}</h3>
              <p className="font-sans font-light text-[#FDFCF9]/50 text-sm max-w-lg">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
