'use client';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Logo / Brasão */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="../img/logo-removebg-preview.png"
            alt="Brasão de Vila Nova do Sul"
            className="h-20 w-auto mb-2"
          />
          <p className="text-sm text-gray-400 text-center md:text-left">
            Prefeitura Municipal de Vila Nova do Sul
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contato</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Av. Cel. Marcos de Andrade, 206</li>
            <li>Centro, Vila Nova do Sul - RS</li>
            <li>Telefone: (55) 3234-1133</li>
            <li>Email: contato@vilanovadosul.rs.gov.br</li>
          </ul>
        </div>

        {/* Coluna 3: Links úteis */}
        <div>
          <h4 className="text-white font-semibold mb-2">Links úteis</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="#" className="hover:text-white">Acesso à Informação</a></li>
            <li><a href="#" className="hover:text-white">Ouvidoria</a></li>
            <li><a href="#" className="hover:text-white">Transparência</a></li>
            <li><a href="#" className="hover:text-white">Portal da Educação</a></li>
          </ul>
        </div>

        {/* Coluna 4: Redes sociais */}
        <div>
          <h4 className="text-white font-semibold mb-2">Redes sociais</h4>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Prefeitura Municipal de Vila Nova do Sul. Todos os direitos reservados.
        </p>
        <p>Desenvolvido pelo Setor de Tecnologia da Informação</p>
      </div>
    </footer>
  );
}
