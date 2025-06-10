'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-[#F7F6F2] text-[#1C1C1C]">
      {/* Faixa de horário */}
      <div className="bg-gradient-to-r from-[#11703B] to-[#199950] text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          <span>Segunda a sexta, das 5h a 23h59</span>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + texto */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo-removebg-preview.png"
              alt="Brasão de Vila Nova do Sul"
              width={70}
              height={70}
              className="h-16 w-auto drop-shadow-md"
              loading="lazy"
            />
            <div className="text-[#11703B] text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Prefeitura Municipal
              </h1>
              <p className="text-xs sm:text-sm font-medium">Vila Nova do Sul - RS</p>
              <p className="mt-1 text-[10px] sm:text-xs text-gray-600">
                Site oficial para denunciar problemas no município
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm text-red-600 font-semibold">Você é admin?</p>
            <Link
              href="/pages/login"
              className="px-4 sm:px-6 py-2 bg-[#11703B] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#0e5e33] transition"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Navegação */}
      <nav className="bg-white border-t border-b border-[#E1E3DE] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-14 relative">
            {/* Links desktop - centralizado */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-[#444]">
              <Link href="/" className="hover:text-[#11703B] hover:underline">Início</Link>
              <Link href="/pages/formulario" className="hover:text-[#11703B] hover:underline">Envio Denúncia</Link>
              <Link href="/noticias" className="hover:text-[#11703B] hover:underline">Outras Denúncias</Link>
              <Link href="/pages/contato" className="hover:text-[#11703B] hover:underline">Contato</Link>
            </div>

            {/* Botão hamburguer mobile centralizado */}
            <div className="md:hidden flex justify-center w-full">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#11703B] focus:outline-none"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile - centralizado */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 py-4 text-sm font-medium text-[#444]">
              <Link href="/" className="hover:text-[#11703B] hover:underline" onClick={() => setMenuOpen(false)}>Início</Link>
              <Link href="/pages/formulario" className="hover:text-[#11703B] hover:underline" onClick={() => setMenuOpen(false)}>Envio Denúncia</Link>
              <Link href="/noticias" className="hover:text-[#11703B] hover:underline" onClick={() => setMenuOpen(false)}>Outras Denúncias</Link>
              <Link href="/pages/contato" className="hover:text-[#11703B] hover:underline" onClick={() => setMenuOpen(false)}>Contato</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
