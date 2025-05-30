
import Funcionario from "./pages/funcionarios/page";

export default function Home() {
  return (
    <div className="font-sans bg-[#F7F6F2] min-h-screen text-[#1C1C1C]">
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4 transition-opacity duration-700">
          Bem-vindo ao portal oficial
        </h1>

        <section className="mt-10 transition-transform duration-500 ease-out">
          <h3 className="text-xl font-semibold mb-4 text-[#11703B]">Funcionários em destaque</h3>
          <div className="max-w-7xl mx-auto bg-[#E1E3DE] rounded-lg p-4 shadow">
            <Funcionario />
          </div>
        </section>

        <section className="mt-16 transition-opacity duration-700 ease-in">
          <h3 className="text-xl font-semibold mb-4 text-[#11703B]">Faça sua denúncia ou cadastro</h3>
          <p className="mb-4 max-w-xl text-[#444444]">
            Você pode enviar sua denúncia anonimamente ou fazer um cadastro completo para facilitar o contato.
          </p>
        </section>
      </main>
    </div>
  );
}
