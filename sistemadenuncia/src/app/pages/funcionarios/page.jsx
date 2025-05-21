'use client';
import { useEffect, useRef, useState } from 'react';

export default function Funcionario() {
    const funcionarios = [
        {
            nome: "Ana Paula Souza",
            cargo: "Secretária de Saúde",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Av. da Prevenção, nº 100 – Prédio da Vacina",
            telefone: "(66) 99999-1234",
            emailGovernamental: "ana.souza@vilanovanorte.gov",
            fotoUrl: "secretariaSaude.png"
        },
        {
            nome: "Carlos Henrique Lima",
            cargo: "Chefe de Gabinete",
            horarioInicio: "07:30",
            horarioFim: "16:30",
            localAtendimento: "Rua dos Bastidores, nº 12 – Sala do Poder Oculto",
            telefone: "(66) 99800-0001",
            emailGovernamental: "carlos.lima@vilanovanorte.gov",
            fotoUrl: "chefeGabinete.jpg"
        },
        {
            nome: "Maria Fernanda Costa",
            cargo: "Diretora de Educação",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Rua do Giz, nº 45 – Prédio das Ideias",
            telefone: "(66) 99888-1122",
            emailGovernamental: "maria.costa@vilanovanorte.gov",
            fotoUrl: "diretoraEducacao.jpg"
        },
        {
            nome: "João Pedro Almeida",
            cargo: "Engenheiro Civil",
            horarioInicio: "07:00",
            horarioFim: "16:00",
            localAtendimento: "Av. das Obras, nº 999 – Bloco do Concreto",
            telefone: "(66) 99777-2233",
            emailGovernamental: "joao.almeida@vilanovanorte.gov",
            fotoUrl: "engenheiroCivil.png"
        },
        {
            nome: "Luciana Ribeiro",
            cargo: "Assistente Social",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Rua da Empatia, nº 202 – Casa do Coração Aberto",
            telefone: "(66) 99111-0000",
            emailGovernamental: "luciana.ribeiro@vilanovanorte.gov",
            fotoUrl: "assistenteSocial.png"
        },
        {
            nome: "Roberto Silva",
            cargo: "Fiscal de Obras",
            horarioInicio: "06:30",
            horarioFim: "15:30",
            localAtendimento: "Rua do Piso Torto, nº 13 – Fiscalização Total",
            telefone: "(66) 99666-4455",
            emailGovernamental: "roberto.silva@vilanovanorte.gov",
            fotoUrl: "fiscalObra.jpg"
        },
        {
            nome: "Beatriz Martins",
            cargo: "Técnica de Enfermagem",
            horarioInicio: "13:00",
            horarioFim: "22:00",
            localAtendimento: "Av. do Curativo, nº 88 – Sala da Agulhinha",
            telefone: "(66) 99555-6677",
            emailGovernamental: "beatriz.martins@vilanovanorte.gov",
            fotoUrl: "tecnicaEnfermagem.jpg"
        },
        {
            nome: "Eduardo Ramos",
            cargo: "Motorista da Saúde",
            horarioInicio: "06:00",
            horarioFim: "14:00",
            localAtendimento: "Rua dos Ônibus, nº 343 – Ponto Final da Saúde",
            telefone: "(66) 99100-1234",
            emailGovernamental: "eduardo.ramos@vilanovanorte.gov",
            fotoUrl: "motoristaSaude.png"
        },
        {
            nome: "Juliana Neves",
            cargo: "Professora de Educação Infantil",
            horarioInicio: "07:00",
            horarioFim: "12:00",
            localAtendimento: "Rua dos Pequenos Gênios, nº 10 – Sala do Giz Colorido",
            telefone: "(66) 99444-7788",
            emailGovernamental: "juliana.neves@vilanovanorte.gov",
            fotoUrl: "professorainfantil.jpg"
        },
        {
            nome: "Marcos Antônio Ferreira",
            cargo: "Vigilante",
            horarioInicio: "18:00",
            horarioFim: "06:00",
            localAtendimento: "Rua do Olho Vivo, nº 007 – Posto do Sussurro",
            telefone: "(66) 99333-8899",
            emailGovernamental: "marcos.ferreira@vilanovanorte.gov",
            fotoUrl: "vigilante.png"
        },
        {
            nome: "Vanessa Duarte",
            cargo: "Recepcionista",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Av. do Bom Dia, nº 1 – Balcão do Sorriso",
            telefone: "(66) 99123-4567",
            emailGovernamental: "vanessa.duarte@vilanovanorte.gov",
            fotoUrl: "recepcionista.jpg"
        },
        {
            nome: "André Luiz Barros",
            cargo: "Contador",
            horarioInicio: "07:00",
            horarioFim: "16:00",
            localAtendimento: "Rua da Calculadora, nº 123 – Prédio dos Números Certos",
            telefone: "(66) 99001-1111",
            emailGovernamental: "andre.barros@vilanovanorte.gov",
            fotoUrl: "contador.png"
        },
        {
            nome: "Patrícia Gomes",
            cargo: "Coordenadora Pedagógica",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Rua do Planejamento Escolar, nº 404 – Sala da Lousa Estratégica",
            telefone: "(66) 99777-3344",
            emailGovernamental: "patricia.gomes@vilanovanorte.gov",
            fotoUrl: "coordenadora.jpg"
        },
        {
            nome: "Diego Santos",
            cargo: "Zelador",
            horarioInicio: "06:00",
            horarioFim: "14:00",
            localAtendimento: "Rua da Vassoura, nº 33 – Cantinho do Capricho",
            telefone: "(66) 99400-0011",
            emailGovernamental: "diego.santos@vilanovanorte.gov",
            fotoUrl: "zelador.png"
        },
        {
            nome: "Sandra Mello",
            cargo: "Psicóloga",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Alameda da Mente, nº 222 – Consultório da Escuta Ativa",
            telefone: "(66) 99887-7654",
            emailGovernamental: "sandra.mello@vilanovanorte.gov",
            fotoUrl: "psicologa.png"
        },
        {
            nome: "Fábio Nascimento",
            cargo: "Técnico de Informática",
            horarioInicio: "07:30",
            horarioFim: "16:30",
            localAtendimento: "Av. do Wi-Fi, nº 404 – Sala do Reboot",
            telefone: "(66) 99111-2222",
            emailGovernamental: "fabio.nascimento@vilanovanorte.gov",
            fotoUrl: "tecnicoinformatica.jpg"
        },
        {
            nome: "Larissa Freitas",
            cargo: "Arquiteta",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Rua dos Projetos, nº 88 – Torre da Criatividade",
            telefone: "(66) 99222-3344",
            emailGovernamental: "larissa.freitas@vilanovanorte.gov",
            fotoUrl: "arquiteta.png"
        },
        {
            nome: "Henrique Castro",
            cargo: "Agente de Fiscalização",
            horarioInicio: "07:00",
            horarioFim: "16:00",
            localAtendimento: "Av. da Multa Justa, nº 300 – Posto do Apito",
            telefone: "(66) 99000-4455",
            emailGovernamental: "henrique.castro@vilanovanorte.gov",
            fotoUrl: "agentefiscalizacao.png"
        },
        {
            nome: "Tatiane Lima",
            cargo: "Secretária Executiva",
            horarioInicio: "08:00",
            horarioFim: "17:00",
            localAtendimento: "Rua dos Recados, nº 9 – Sala da Agenda Lotada",
            telefone: "(66) 99002-9999",
            emailGovernamental: "tatiane.lima@vilanovanorte.gov",
            fotoUrl: "secretariaExecutiva.jpg"
        },
        {
            nome: "Bruno Oliveira",
            cargo: "Instrutor de Esportes",
            horarioInicio: "13:00",
            horarioFim: "21:00",
            localAtendimento: "Av. do Esforço, nº 90 – Ginásio do Suor",
            telefone: "(66) 99888-1010",
            emailGovernamental: "bruno.oliveira@vilanovanorte.gov",
            fotoUrl: "instrutorEsportes.png"
        }
    ];

    const carrosselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const itemWidth = 300;

    function bolhinas() {
        const container = carrosselRef.current;
        if (!container) return;

        const index = Math.round(container.scrollLeft / itemWidth);
        setActiveIndex(index);
    }

    function goToIndex(index) {
        if (!carrosselRef.current) return;
        carrosselRef.current.scrollTo({
            left: index * itemWidth, behavior: 'smooth'
        });
    }

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
        }, 2000);

        return () => clearInterval(intervalo);
    }, []);

    return (

        <div
            className="w-full overflow-hidden px-4 sm:px-6 py-12 bg-[#F7F6F2]"
            role="region"
            aria-label="Carrossel de funcionários"
        >
            <h2
                className="text-2xl sm:text-3xl font-bold text-[#11703B] mb-5 sm:mb-8 tracking-tight"
            >
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
                            src={`../img/${func.fotoUrl}`}
                            alt={`Foto de ${func.nome}`}
                            className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-[#11703B]"
                        />
                        <h3
                            className="text-xl font-semibold mb-2 text-[#11703B]"
                        >
                            {func.cargo}
                        </h3>
                        <p
                            className="text-base font-medium mb-3 text-[#1C1C1C]"
                        >
                            {func.nome}
                        </p>
                        <p className="text-sm mb-2 text-[#444444]">
                            {func.horarioInicio} às {func.horarioFim}
                        </p>
                        <p className="text-sm mb-2 text-[#444444]">
                            {func.localAtendimento}
                        </p>
                        <p className="text-sm mb-4 text-[#444444]">
                            {func.telefone}
                        </p>
                        <a
                            href={`mailto:${func.emailGovernamental}?subject=Denúncia de Irregularidade&body=Venho por meio deste...`}
                            className="text-sm font-medium text-[#199950] underline hover:text-[#11703B] transition-colors duration-200 mt-auto"
                        >
                            Enviar e-mail
                        </a>
                    </div>
                ))}
            </div>

            {/* Bolinhas do carrossel */}
            <div className="flex justify-center mt-8 space-x-3">
                {funcionarios.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#199950] ${activeIndex === index ? 'bg-[#199950] scale-125' : 'bg-[#11703B]'
                            }`}
                        aria-label={`Ir para funcionário ${index + 1}`}
                        aria-current={activeIndex === index ? 'true' : 'false'}
                    />
                ))}
            </div>
        </div>
    );
}