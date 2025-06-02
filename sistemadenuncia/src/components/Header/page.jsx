import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="font-sans bg-[#F7F6F2] text-[#1C1C1C]">
      <div className="bg-gradient-to-r from-[#11703B] to-[#199950] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-center items-center">
          <span>Segunda a sexta, das 5h a 23h59</span>
        </div>
      </div>
      {/* Cabeçalho principal */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brasão + Nome da cidade + Descrição */}
          <div className="flex items-center gap-4">
            <Image
              src="/img/logo-removebg-preview.png"
              alt="Brasão de Vila Nova do Sul"
              width={80}
              height={80}
              className="h-20 w-auto drop-shadow-md"
              loading="lazy"
            />
            <div className="text-[#11703B] max-w-xs">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                Prefeitura Municipal
              </h1>
              <p className="text-sm md:text-base font-medium">
                Vila Nova do Sul - RS
              </p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">
                Site oficial para denunciar problemas no município
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-2">
            <Link
              href="/login"
              className="px-5 py-2 bg-[#11703B] text-white rounded-md text-sm font-medium hover:bg-[#0e5e33] transition"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="px-5 py-2 bg-white border border-[#11703B] text-[#11703B] rounded-md text-sm font-medium hover:bg-gray-100 transition"
            >
              Cadastro
            </Link>
          </div>
        </div>
      </header>

      {/* Navegação */}
      <nav className="bg-white border-t border-b border-[#E1E3DE] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-14">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#444]">
              <Link href="#" className="hover:text-[#11703B] hover:underline transition">Início</Link>
              <Link href="#" className="hover:text-[#11703B] hover:underline transition">Denúncias</Link>
              <Link href="#" className="hover:text-[#11703B] hover:underline transition">Outras Denúncias</Link>
              <Link href="#" className="hover:text-[#11703B] hover:underline transition">Contato</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
