import Link from "next/link";
import Image from "next/image";
import Funcionario from "@/app/pages/Funcionarios/page";
import Busca from "@/components/Busca/page";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-md">
        <div className="px-4 py-2 text-sm text-center md:text-left max-w-7xl mx-auto">
          De segunda a sexta, das 6h30min às 15h30min
        </div>

        <div className="px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Image
            src="/img/logo-removebg-preview.png"
            alt="Brasão de Vila Nova do Sul"
            width={64}
            height={64}
            className="h-16 w-auto drop-shadow-lg"
            loading="lazy"
          />

          {/* Usando componente de busca */}
          <Busca />
        </div>
      </header>

      {/* resto do seu código */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 justify-center lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex flex-wrap md:justify-start gap-4 text-sm font-medium text-gray-700 py-2">
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Início
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Município
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Secretarias
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Serviços
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Notícias
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Transparência
              </Link>
              <Link href="#" className="hover:text-green-700 transition-colors duration-200 hover:underline">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
