import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-zinc-200 border-t-[#0055FF] rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <div className="font-space font-black text-xl text-zinc-950 uppercase tracking-widest animate-pulse">
          Ürün Yükleniyor...
        </div>
      </div>
    </div>
  );
}
