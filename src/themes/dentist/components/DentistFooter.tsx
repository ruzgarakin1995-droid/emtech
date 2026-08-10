import React from 'react';
import Link from 'next/link';

export function DentistFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAFAFA] pt-24 md:pt-32 pb-12 rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between min-h-[60vh]">
        
        <div className="flex flex-col mb-24 md:mb-32">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-[#D4C9C3] mb-8">
            Yeni Bir Başlangıç
          </span>
          <a 
            href="mailto:hello@luminadental.com" 
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] text-[#FAFAFA] hover:text-[#D4C9C3] transition-colors duration-500 w-fit"
          >
            Bize Yazın.
          </a>
        </div>

        {/* Links and Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-t border-[#FAFAFA]/10 pt-16 mb-24">
          
          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#FAFAFA]/40">Menü</h3>
            <ul className="flex flex-col gap-4 text-[#FAFAFA]/70 font-sans font-light text-sm">
              <li><Link href="/test-dentist/hakkimizda" className="hover:text-[#FAFAFA] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/test-dentist/ekibimiz" className="hover:text-[#FAFAFA] transition-colors">Ekibimiz</Link></li>
              <li><Link href="/test-dentist#felsefemiz" className="hover:text-[#FAFAFA] transition-colors">Felsefemiz</Link></li>
              <li><Link href="/test-dentist/iletisim" className="hover:text-[#FAFAFA] transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#FAFAFA]/40">Uzmanlıklar</h3>
            <ul className="flex flex-col gap-4 text-[#FAFAFA]/70 font-sans font-light text-sm">
              <li><Link href="/test-dentist/uzmanliklar/porselen-lamina" className="hover:text-[#FAFAFA] transition-colors">Porselen Lamina</Link></li>
              <li><Link href="/test-dentist/uzmanliklar/implantoloji" className="hover:text-[#FAFAFA] transition-colors">İmplantoloji</Link></li>
              <li><Link href="/test-dentist/uzmanliklar/seffaf-plak" className="hover:text-[#FAFAFA] transition-colors">Şeffaf Plak</Link></li>
              <li><Link href="/test-dentist/uzmanliklar/gulus-tasarimi" className="hover:text-[#FAFAFA] transition-colors">Gülüş Tasarımı</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#FAFAFA]/40">Klinik</h3>
            <p className="text-[#FAFAFA]/70 font-sans font-light text-sm leading-relaxed max-w-xs">
              Zorlu Center, Teras Evler<br/>
              Beşiktaş, İstanbul
              <br/><br/>
              Pzt - Cmt: 09:00 - 19:00
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#FAFAFA]/40">Sosyal Medya</h3>
            <ul className="flex flex-col gap-4 text-[#FAFAFA]/70 font-sans font-light text-sm">
              <li><Link href="#" className="hover:text-[#FAFAFA] transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-[#FAFAFA] transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-[#FAFAFA] transition-colors">Behance</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase text-[#FAFAFA]/30">
          <p>© {new Date().getFullYear()} LUMINA DENTAL. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>LÜKS DİŞ HEKİMLİĞİ DENEYİMİ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
