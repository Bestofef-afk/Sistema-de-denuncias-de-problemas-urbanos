import Link from "next/link";
import Image from "next/image";
import Busca from "@/components/Busca/page";

export default function Header() {
  return (
    <div className="font-sans bg-[#F7F6F2] min-h-screen text-[#1C1C1C]">
      <header className="bg-gradient-to-r from-[#11703B] to-[#199950] text-white shadow-md">
        <div className="px-4 py-2 text-sm text-center md:text-left max-w-7xl mx-auto flex justify-between items-center">
          <span>De segunda a sexta, das 6h30min às 15h30min</span>
          <div className="flex-shrink-0">
          </div>
        </div>

        <div className="px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          
          {/* Logo + Busca ocupando a maior parte */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <Image
              src="/img/logo-removebg-preview.png"
              alt="Brasão de Vila Nova do Sul"
              width={64}
              height={64}
              className="h-16 w-auto drop-shadow-lg flex-shrink-0"
              loading="lazy"
            />
            <div className="w-full">
              <Busca />
            </div>
          </div>

          {/* Botões de Login e Cadastro */}
          <div className="flex-shrink-0 flex gap-2">
            <Link
              href="/login"
              className="px-4 py-2 bg-white text-[#11703B] rounded-md font-medium text-sm hover:bg-gray-100 shadow"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="px-4 py-2 bg-white text-[#11703B] rounded-md font-medium text-sm hover:bg-gray-100 shadow"
            >
              Cadastro
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-[#E1E3DE] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-14">
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#444444] py-2">
              <Link href="#" className="hover:text-[#11703B] transition-colors duration-200 hover:underline">Início</Link>
              <Link href="#" className="hover:text-[#11703B] transition-colors duration-200 hover:underline">Denúncias</Link>
              <Link href="#" className="hover:text-[#11703B] transition-colors duration-200 hover:underline">Outras Denúncias</Link>
              <Link href="#" className="hover:text-[#11703B] transition-colors duration-200 hover:underline">Contato</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
