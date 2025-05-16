'use client';
import { useState, useEffect } from "react";
import axios from "axios";

function envioDenuncia() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [erro, setErro] = useState("");
    const [mounted, setMounted] = useState(false); // estado para controlar montagem

    useEffect(() => {
        setMounted(true); // só após montar no cliente
    }, []);

    async function buscarCep(e) {
        e.preventDefault();
        setErro("");
        setEndereco(null);

        if (!cep.match(/^\d{8}$/)) {
            setErro("Digite um CEP válido com 8 dígitos.");
            return;
        }

        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (res.data.erro) {
                setErro("CEP não encontrado.");
            } else {
                setEndereco(res.data);
            }
        } catch (err) {
            setErro("Erro ao buscar o CEP.");
        }
    }

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <section className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-green-700">
                    Buscar Endereço por CEP
                </h1>

                <form onSubmit={buscarCep} className="space-y-5">
                    <label htmlFor="cep" className="block text-gray-700 font-semibold">
                        CEP (somente números)
                    </label>
                    <input
                        id="cep"
                        type="text"
                        placeholder="Digite o CEP (ex: 12345678)"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                        maxLength={8}
                        inputMode="numeric"
                        pattern="\d{8}"
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
                    >
                        Buscar
                    </button>
                </form>

                {erro && (
                    <p className="mt-4 text-center text[#C0392B] font-medium">{erro}</p>
                )}

                {endereco && (
                    <article className="mt-8 bg-gray-50 rounded-lg p-6 shadow-inner space-y-3 text-gray-800 text-lg">
                        <h2 className="text-xl font-bold mb-3 text-green-700">
                            Resultado do Endereço
                        </h2>
                        <p>
                            <strong>Rua:</strong> {endereco.logradouro || "—"}
                        </p>
                        <p>
                            <strong>Bairro:</strong> {endereco.bairro || "—"}
                        </p>
                        <p>
                            <strong>Cidade:</strong> {endereco.localidade || "—"}
                        </p>
                        <p>
                            <strong>Estado:</strong> {endereco.uf || "—"}
                        </p>
                        <p>
                            <strong>CEP:</strong> {endereco.cep || "—"}
                        </p>
                    </article>
                )}
            </section>

            {mounted && endereco && (
                <section className="w-full max-w-6xl mt-15 rounded-lg overflow-hidden shadow-md border border-gray-300">
                    <iframe
                        title="Mapa do endereço"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade}, ${endereco.uf}`
                        )}&output=embed`}
                    />
                </section>
            )}
        </main>
    );
}
export default envioDenuncia;