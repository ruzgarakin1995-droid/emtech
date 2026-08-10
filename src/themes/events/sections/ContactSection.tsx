"use client";
import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full bg-[#2A2421] text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">İletişim</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              Hikayenizi <br /> <span className="italic text-[#E8DCC4]">Birlikte Yazalım</span>
            </h2>
            <p className="text-white/60 font-light mb-12 max-w-md">
              Hayallerinizdeki o benzersiz günü planlamak için bizimle iletişime geçin. Tasarım ofisimizde kahvenizi yudumlarken detayları konuşalım.
            </p>
            
            <div className="space-y-6 text-sm font-light">
              <div className="flex flex-col">
                <span className="text-[#C19A6B] uppercase tracking-widest text-xs mb-1">Rezervasyon & Bilgi</span>
                <a href="tel:+902120000000" className="text-xl font-serif hover:text-[#C19A6B] transition-colors">+90 (212) 000 00 00</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#C19A6B] uppercase tracking-widest text-xs mb-1">E-Posta</span>
                <a href="mailto:hello@luxuryevents.com" className="text-xl font-serif hover:text-[#C19A6B] transition-colors">hello@luxuryevents.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#C19A6B] uppercase tracking-widest text-xs mb-1">Showroom</span>
                <span className="text-white/80">Zorlu Center, Levazım Mah.<br/>Beşiktaş / İstanbul</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 md:p-12 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-serif mb-8 text-center text-[#E8DCC4]">Randevu Talebi</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm" />
                <input type="tel" placeholder="Telefon Numaranız" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm" />
              </div>
              <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm" />
              
              <div className="pt-2">
                <select className="w-full bg-transparent border-b border-white/30 py-3 text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm appearance-none">
                  <option value="" disabled selected>Etkinlik Türü</option>
                  <option value="düğün">Düğün</option>
                  <option value="kurumsal">Kurumsal Etkinlik</option>
                  <option value="nişan">Nişan / Söz</option>
                  <option value="diğer">Diğer</option>
                </select>
              </div>

              <textarea placeholder="Etkinliğinizden Kısaca Bahsedin..." rows={4} className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm resize-none"></textarea>
              
              <button type="submit" className="w-full bg-[#C19A6B] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#A98458] transition-colors mt-4">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



