'use client';
import { useEffect, useRef, useState } from 'react';

export default function Funcionario() {
    const carrosselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [funcionarios, setFuncionarios] = useState([]);

    const itemWidth = 300;

    // Atualiza índice das bolinhas do carrossel
    function bolhinas() {
        const container = carrosselRef.current;
        if (!container) return;

        const index = Math.round(container.scrollLeft / itemWidth);
        setActiveIndex(index);
    }

    function goToIndex(index) {
        if (!carrosselRef.current) return;
        carrosselRef.current.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
    }

    // Carrega os dados da API
    useEffect(() => {
        const carregarFuncionarios = async () => {
            try {
                const resposta = await fetch('/api/funcionarios');
                if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
                const dados = await resposta.json();
                setFuncionarios(dados);
            } catch (erro) {
                console.error('Erro ao carregar funcionários:', erro);
            }
        };

        carregarFuncionarios();
    }, []);

    // Scroll automático no carrossel
    useEffect(() => {
        const intervalo = setInterval(() => {
            const container = carrosselRef.current;
            if (!container) return;

            const maxScroll = container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScroll) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 320, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div
            className="w-full overflow-hidden px-4 sm:px-6 py-12 bg-[#F7F6F2]"
            role="region"
            aria-label="Carrossel de funcionários"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11703B] mb-5 sm:mb-8 tracking-tight">
                Funcionários
            </h2>

            {/* Carrossel */}
            <div
                ref={carrosselRef}
                className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                onScroll={bolhinas}
            >
                {funcionarios.map((func, index) => (
                    <div
                        key={index}
                        className="w-[260px] sm:w-[280px] h-[420px] rounded-2xl p-6 flex flex-col items-center text-center flex-shrink-0 bg-[#E1E3DE] shadow-sm transition-transform hover:scale-[1.02] snap-center"
                    >
                        <img
                            src={func.fotoUrl.startsWith('http') ? func.fotoUrl : `/img/${func.fotoUrl}`}
                            alt={`Foto de ${func.nome}`}
                            className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-[#11703B]"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = func.fotoUrl; // imagem padrão
                            }}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-[#11703B]">
                            {func.cargo}
                        </h3>
                        <p className="text-base font-medium mb-3 text-[#1C1C1C]">
                            {func.nome}
                        </p>
                        <p className="text-sm mb-2 text-[#444444]">
                            {func.horarioInicio?.slice(0, 5)} às {func.horarioFim?.slice(0, 5)}
                        </p>
                        <p className="text-sm mb-2 text-[#444444]">
                            {func.localAtendimento}
                        </p>
                        <p className="text-sm mb-4 text-[#444444]">
                            {func.telefone}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bolinhas do carrossel */}
            <div className="flex justify-center mt-8 space-x-3">
                {funcionarios.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#199950] ${activeIndex === index
                            ? 'bg-[#199950] scale-125'
                            : 'bg-[#11703B]'
                            }`}
                        aria-label={`Ir para funcionário ${index + 1}`}
                        aria-current={activeIndex === index ? 'true' : 'false'}
                    />
                ))}
            </div>
        </div>
    );
}
