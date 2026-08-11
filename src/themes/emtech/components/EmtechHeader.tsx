"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Cpu } from 'lucide-react';
import { MagneticButton } from '@/themes/tech-repair-v1/components/MagneticButton';
import { useCart } from '@/context/CartContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function EmtechHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <MagneticButton>
              <div className="flex items-center gap-2 transition-transform group-hover:scale-105">
                <div className="h-10 w-10 relative flex items-center justify-center bg-white shadow-lg border border-zinc-100 overflow-hidden">
                  <img src="/emtech-assets/emtech_icon.jpg" alt="Emtech Icon" className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <span className="font-space font-black text-2xl tracking-tighter text-zinc-950 uppercase">EMTECH</span>
              </div>
            </MagneticButton>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'KATALOG', href: '/katalog' },
              { name: 'LCD', href: '/kategori/kbs-lcd' },
              { name: 'BATARYA', href: '/kategori/kbs-batarya' },
              { name: 'BAYİMİZ OL', href: '/kurumsal/bayimiz-ol' },
              { name: 'HAKKIMIZDA', href: '/kurumsal/hakkimizda' },
              { name: 'İLETİŞİM', href: '/kurumsal/iletisim' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-space text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-zinc-950 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#0055FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <MagneticButton>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-zinc-900" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0055FF] text-white text-[9px] font-mono font-bold flex items-center justify-center rounded-full border border-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </MagneticButton>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-zinc-200 rounded-lg bg-white"
            >
              <Menu className="w-5 h-5 text-zinc-900" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-space font-black text-2xl tracking-tighter text-zinc-950 uppercase">EMTECH</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-zinc-100 rounded-lg"
                >
                  <X className="w-6 h-6 text-zinc-900" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {[
                  { name: 'KATALOG', href: '/katalog' },
                  { name: 'LCD EKRANLAR', href: '/kategori/kbs-lcd' },
                  { name: 'BATARYALAR', href: '/kategori/kbs-batarya' },
                  { name: 'BAYİMİZ OL', href: '/kurumsal/bayimiz-ol' },
                  { name: 'HAKKIMIZDA', href: '/kurumsal/hakkimizda' },
                  { name: 'İLETİŞİM', href: '/kurumsal/iletisim' }
                ].map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-space text-2xl font-black tracking-widest uppercase text-zinc-950 border-b border-zinc-100 pb-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pb-8 text-center">
                <p className="font-inter text-sm text-zinc-500">© 2024 Emtech Store</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
