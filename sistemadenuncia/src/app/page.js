'use client';
import { useState } from 'react';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import Funcionario from './pages/funcionarios/page';
import ListaDenuncias from './noticias/page';

export default function Home() {
  return (
    <>
      <Funcionario />

      {/* Mostrar só 4 */}
      <div className="flex items-center mb-8 space-x-3">
        <h1 className="text-3xl font-semibold text-[#11703B]">Denúncias Registradas</h1>
        <a
          href="/noticias"
          className="text-[#11703B] font-semibold hover:underline border border-[#11703B] px-4 py-1 rounded transition-colors hover:bg-[#11703B] hover:text-white"
        >
          Ver Mais
        </a>
      </div>
      <div className="max-h-[940px] overflow-hidden">
        <ListaDenuncias />
      </div>
    </>
  )
}
