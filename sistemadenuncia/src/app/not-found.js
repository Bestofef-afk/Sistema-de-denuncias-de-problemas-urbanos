export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F6F2] text-[#1C1C1C] px-6 text-center">
            <img
                src="/deslike.png"
                alt="deslike indicando erro 404"
                className="w-48 sm:w-64 mt-10 mb-6"
            />
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#11703B] mb-4">Página não encontrada</h1>
            <p className="text-lg sm:text-xl text-[#444444] mb-8 max-w-md">
                A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
            </p>
            <a
                href="/"
                className="bg-[#11703B] text-white px-6 py-3 rounded-xl hover:bg-[#199950] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#11703B] focus:ring-offset-2"
            >
                Voltar para a página inicial
            </a>
        </div>
    );
}
