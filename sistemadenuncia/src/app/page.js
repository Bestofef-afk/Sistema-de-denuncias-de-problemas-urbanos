'use client';
import { useState } from 'react';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import Funcionario from './pages/funcionarios/page';
import ListaDenuncias from './noticias/page';

export default function Home() {
  return (
    <div className="font-sans bg-[#F7F6F2] text-[#1C1C1C]">
    

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Funcionario />

        {/* Mostrar só 4 */}
        <div className="flex items-center mb-8 space-x-3">
          <h1 className="text-3xl font-semibold text-[#11703B]">Denúncias Recentes</h1>
          <a
            href="/noticias"
            className="text-[#11703B] font-semibold hover:underline border border-[#11703B] px-4 py-1 rounded transition-colors hover:bg-[#11703B] hover:text-white"
          >
            Ver Mais
          </a>
        </div>

        <div className="sm:max-h-[860px] md:max-h-[890px] lg:max-h-[940px] overflow-hidden">
          <ListaDenuncias />
        </div>
      </main>

      <Footer />
    </div>
  );
}
