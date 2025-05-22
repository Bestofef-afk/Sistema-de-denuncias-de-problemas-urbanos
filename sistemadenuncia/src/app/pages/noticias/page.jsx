'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ListaDenuncias() {
    const [denuncias, setDenuncias] = useState([]);
    const [loading, setLoading] = useState(true);
    // Removemos o estado de erro da interface

    // Função para formatar a data
    const formatarData = (dataString) => {
        try {
            const data = new Date(dataString);
            return data.toLocaleDateString('pt-BR');
        } catch (e) {
            console.error('Erro ao formatar data:', e);
            return 'Data inválida';
        }
    };

    useEffect(() => {
        const carregarDenuncias = async () => {
            try {
                setLoading(true);
                const resposta = await fetch('/api/denuncia');

                if (!resposta.ok) {
                    // Apenas logamos o erro no console, não armazenamos no estado
                    console.error(`Erro ao buscar dados: ${resposta.status}`);
                    setDenuncias([]); // Define array vazio em caso de erro
                } else {
                    const dados = await resposta.json();
                    setDenuncias(dados);
                }
            } catch (erro) {
                // erro no console
                console.error('Falha ao carregar denúncias:', erro);
                console.error('Mensagem do erro:', erro.message);
                console.error('Stack trace:', erro.stack);
                setDenuncias([]);
            } finally {
                setLoading(false);
            }
        };

        carregarDenuncias();
    }, []);
    // roda a lista de noticias
    return (
        <main className="max-w-5xl mx-auto px-6 py-10 bg-white min-h-screen">
            <h1 className="text-3xl font-semibold text-[#11703B] mb-8">
                Denúncias Registradas
            </h1>

            {denuncias.length === 0 ? (
                <p className="text-center text-gray-500 text-base py-16 select-none">
                    Nenhuma denúncia encontrada.
                </p>
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {denuncias.map((denuncia) => (
                        <a
                            key={denuncia.idDenuncia}
                            href={`/denuncia/${denuncia.idDenuncia}`}
                            className="block border border-gray-300 rounded-md overflow-hidden hover:border-[#11703B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11703B]"
                            aria-label={`Ver detalhes da denúncia número ${denuncia.idDenuncia}`}
                        >
                            {denuncia.imgUrl ? (
                                <div className="h-44 w-full bg-gray-100 overflow-hidden">
                                    <img
                                        src={denuncia.imgUrl}
                                        alt={`Imagem da denúncia número ${denuncia.idDenuncia}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = denuncia.imgUrl;
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="h-44 flex items-center justify-center bg-gray-100 text-gray-400 italic select-none">
                                    Sem imagem
                                </div>
                            )}

                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-900 truncate">
                                    Denúncia #{denuncia.idDenuncia || 'N/A'}
                                </h2>

                                <time
                                    dateTime={denuncia.dataEnvio || ''}
                                    className="block text-sm text-gray-600 mt-1 mb-3"
                                >
                                    Data: {denuncia.dataEnvio ? formatarData(denuncia.dataEnvio) : 'N/A'}
                                </time>

                                <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                                    {denuncia.descricao || 'Sem descrição disponível'}
                                </p>

                                <p className="text-gray-600 text-sm">
                                    <strong>Bairro:</strong> {denuncia.bairro || 'N/A'}
                                </p>
                            </div>
                        </a>
                    ))}
                </section>
            )}
        </main>
    );
}