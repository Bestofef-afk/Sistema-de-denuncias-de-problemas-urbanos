'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ListaDenuncias() {
    const [denuncias, setDenuncias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const formatarData = (dataString) => {
        try {
            const data = new Date(dataString);
            return data.toLocaleDateString('pt-BR');
        } catch (e) {
            console.error('Erro ao formatar data:', e);
            return 'Data inválida';
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/logout', { method: 'POST' });
            localStorage.removeItem('isAdmin');
            setIsAdmin(false);
            window.location.href = '/pages/login';
        } catch (erro) {
            console.error('Erro ao fazer logout:', erro);
        }
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Tem certeza que deseja deletar?");
        if (!confirm) return;

        try {
            const res = await fetch(`/api/denuncia/${id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                setDenuncias(prev => prev.filter(d => d.idDenuncia !== id));
            } else {
                console.error('Erro ao deletar');
            }
        } catch (err) {
            console.error('Erro na requisição de delete:', err);
        }
    };

    const handleUpdate = async (denuncia) => {
        const novaDescricao = prompt("Nova descrição:", denuncia.descricao);
        const novoBairro = prompt("Novo bairro:", denuncia.bairro);
        const novaImg = prompt("Nova imagem (URL):", denuncia.imgUrl);

        if (!novaDescricao || !novoBairro) return;

        try {
            const res = await fetch(`/api/denuncia/${denuncia.idDenuncia}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    descricao: novaDescricao,
                    bairro: novoBairro,
                    imgUrl: novaImg || ''
                })
            });

            if (res.ok) {
                const novas = await res.json();
                window.location.reload();
            } else {
                console.error('Erro ao atualizar');
            }
        } catch (err) {
            console.error('Erro na atualização:', err);
        }
    };


    useEffect(() => {
        const carregarDenuncias = async () => {
            try {
                setLoading(true);
                const resposta = await fetch('/api/denuncia');

                if (!resposta.ok) {
                    console.error(`Erro ao buscar dados: ${resposta.status}`);
                    setDenuncias([]);
                } else {
                    const dados = await resposta.json();
                    setDenuncias(dados);
                }
            } catch (erro) {
                console.error('Falha ao carregar denúncias:', erro);
                setDenuncias([]);
            } finally {
                setLoading(false);
            }
        };

        carregarDenuncias();

        const adminFlag = localStorage.getItem('isAdmin');
        setIsAdmin(adminFlag === 'true');
    }, []);


    return (
        <main className="max-w-5xl mx-auto px-6 py-10 bg-white min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold text-[#11703B]">
                    Denúncias Registradas
                </h1>

                {isAdmin && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                )}
            </div>

            {loading && <p>Carregando denúncias...</p>}

            {!loading && denuncias.length === 0 && (
                <p className="text-center text-gray-500 text-base py-16 select-none">
                    Nenhuma denúncia encontrada.
                </p>
            )}

            {!loading && denuncias.length > 0 && (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {denuncias.map((denuncia) => (
                        <div
                            key={denuncia.idDenuncia}
                            className="border border-gray-300 rounded-md overflow-hidden hover:border-[#11703B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11703B]"

                        ><a href={`/pages/noticias/${denuncia.idDenuncia}`}>
                                {denuncia.imgUrl ? (
                                    <div className="h-44 w-full bg-gray-100 overflow-hidden">
                                        <img
                                            src={denuncia.imgUrl}
                                            alt={`Imagem da denúncia número ${denuncia.idDenuncia}`}
                                            className="w-full h-full object-cover"
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

                                    <p className="text-gray-600 text-sm mb-3">
                                        <strong>Bairro:</strong> {denuncia.bairro || 'N/A'}
                                    </p>

                                    {isAdmin && (
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                                onClick={() => handleUpdate(denuncia)}
                                            >
                                                Atualizar
                                            </button>
                                            <button
                                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                                onClick={() => handleDelete(denuncia.idDenuncia)}
                                            >
                                                Deletar
                                            </button>
                                        </div>

                                    )}
                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            )}
        </main>
    );
}
