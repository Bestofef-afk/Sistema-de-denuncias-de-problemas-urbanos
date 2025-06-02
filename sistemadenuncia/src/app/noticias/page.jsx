'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ListaDenuncias({ limit = null }) {
    const [denuncias, setDenuncias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [denunciaEditando, setDenunciaEditando] = useState(null);

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
            router.push('/');
        } catch (erro) {
            console.error('Erro ao fazer logout:', erro);
        }
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Tem certeza que deseja deletar?");
        if (!confirm) return;

        try {
            const res = await fetch(`/api/denuncia/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setDenuncias(prev => prev.filter(d => d.idDenuncia !== id));
            } else {
                console.error('Erro ao deletar');
            }
        } catch (err) {
            console.error('Erro na requisição de delete:', err);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const { idDenuncia, descricao, bairro, imgUrl } = denunciaEditando;

        try {
            const res = await fetch(`/api/denuncia/${idDenuncia}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ descricao, bairro, imgUrl }),
            });

            if (res.ok) {
                const novas = await res.json();
                setDenuncias(denuncias.map(d => (d.idDenuncia === idDenuncia ? novas : d)));
                setDenunciaEditando(null);
            } else {
                console.error('Erro ao atualizar');
            }
        } catch (err) {
            console.error('Erro na atualização:', err);
        }
    };

    const handleChange = (campo, valor) => {
        setDenunciaEditando((prev) => ({
            ...prev,
            [campo]: valor,
        }));
    };

    const handleCancel = () => {
        setDenunciaEditando(null);
    };

    useEffect(() => {
        const carregarDenuncias = async () => {
            try {
                setLoading(true);
                const resposta = await fetch('http://localhost:3000/api/denuncia');
                const dados = await (resposta.ok ? resposta.json() : []);
                setDenuncias(dados);
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

    // Aplicando o limite se existir
    const denunciasParaMostrar = limit ? denuncias.slice(0, limit) : denuncias;

    return (
        <main className="max-w-5xl mx-auto px-6 py-10 bg-white min-h-screen">
            <div className="flex justify-between items-center mb-8">
                {isAdmin && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                )}
            </div>

            {loading && <p>Carregando denúncias...</p>}
            {!loading && denunciasParaMostrar.length === 0 && (
                <p className="text-center text-gray-500 text-base py-16 select-none">Nenhuma denúncia encontrada.</p>
            )}

            {!loading && denunciasParaMostrar.length > 0 && (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {denunciasParaMostrar.map((denuncia) => (
                        <div
                            key={denuncia.idDenuncia}
                            className="border border-gray-300 rounded-md overflow-hidden hover:border-[#11703B] transition-colors"
                        >
                            <a href={`/noticias/${denuncia.idDenuncia}`}>
                                {denuncia.imgUrl ? (
                                    <div className="h-44 w-full bg-gray-100 overflow-hidden">
                                        <img
                                            src={denuncia.imgUrl}
                                            alt={`Imagem da denúncia ${denuncia.idDenuncia}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-44 flex items-center justify-center bg-gray-100 text-gray-400 italic">
                                        Sem imagem
                                    </div>
                                )}
                            </a>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-900">Denúncia #{denuncia.idDenuncia}</h2>
                                <time className="block text-sm text-gray-600 mt-1 mb-3">
                                    Data: {formatarData(denuncia.dataEnvio)}
                                </time>
                                <p className="text-gray-700 text-sm mb-3">{denuncia.descricao}</p>
                                <p className="text-gray-600 text-sm mb-3">
                                    <strong>Bairro:</strong> {denuncia.bairro}
                                </p>

                                {isAdmin && (
                                    <div className="flex gap-2">
                                        <button
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                            onClick={() => setDenunciaEditando(denuncia)}
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
                        </div>
                    ))}
                </section>
            )}

            {/* Formulário de edição */}
            {denunciaEditando && (
                <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                    <form
                        onSubmit={handleEditSubmit}
                        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
                    >
                        <h2 className="text-xl font-bold mb-4 text-[#11703B]">Editar Denúncia</h2>

                        <label className="block mb-2">
                            Descrição:
                            <textarea
                                className="w-full border  h-[130px] p-4 mt-1"
                                value={denunciaEditando.descricao}
                                onChange={(e) => handleChange('descricao', e.target.value)}
                                required
                            />
                        </label>

                        <label className="block mb-2">
                            Bairro:
                            <input
                                type="text"
                                className="w-full border p-2 mt-1"
                                value={denunciaEditando.bairro}
                                onChange={(e) => handleChange('bairro', e.target.value)}
                                required
                            />
                        </label>

                        <label className="block mb-4">
                            Imagem (URL):
                            <input
                                type="text"
                                className="w-full border p-2 mt-1"
                                value={denunciaEditando.imgUrl || ''}
                                onChange={(e) => handleChange('imgUrl', e.target.value)}
                            />
                        </label>

                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </main>
    );
}
