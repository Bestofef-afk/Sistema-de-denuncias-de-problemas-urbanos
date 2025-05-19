'use client';
import { useState, useEffect } from "react";
import axios from "axios";

export default function DenunciaFormulario() {
    const [opcao, setOpcao] = useState(null);
    const [tipoPessoa, setTipoPessoa] = useState('fisica');
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [erroCep, setErroCep] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    async function buscarCep(e) {
        e.preventDefault();
        setErroCep("");
        setEndereco(null);

        if (!cep.match(/^\d{8}$/)) {
            setErroCep("Digite um CEP válido com 8 dígitos.");
            return;
        }

        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (res.data.erro) {
                setErroCep("CEP não encontrado.");
            } else {
                setEndereco(res.data);
            }
        } catch (err) {
            setErroCep("Erro ao buscar o CEP.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Denúncia enviada com sucesso! (mock)");
    }

    return (
        <main className="min-h-screen bg-[#f4f4f4] flex flex-col items-center p-6">
            <section className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-md space-y-8">
                <h2 className="text-3xl font-bold text-[#11703B] text-center">Formulário de Denúncia</h2>

                {/* Escolha de Opção */}
                <div className="flex gap-4">
                    <button
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold ${opcao === 'cadastro' ? 'bg-[#11703B] text-white' : 'bg-[#E1E3DE] text-[#1C1C1C]'}`}
                        onClick={() => setOpcao('cadastro')}
                    >
                        Cadastro completo
                    </button>
                    <button
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold ${opcao === 'anonimo' ? 'bg-[#11703B] text-white' : 'bg-[#E1E3DE] text-[#1C1C1C]'}`}
                        onClick={() => setOpcao('anonimo')}
                    >
                        Envio anônimo
                    </button>
                </div>

                {/* Formulário de Cadastro */}
                {opcao === 'cadastro' && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#199950]">Seus dados</h3>

                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="tipoPessoa"
                                    value="fisica"
                                    checked={tipoPessoa === 'fisica'}
                                    onChange={() => setTipoPessoa('fisica')}
                                />
                                Pessoa Física
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="tipoPessoa"
                                    value="juridica"
                                    checked={tipoPessoa === 'juridica'}
                                    onChange={() => setTipoPessoa('juridica')}
                                />
                                Pessoa Jurídica
                            </label>
                        </div>

                        <input type="text" placeholder="Nome completo" required className="input-field text-gray-800" />
                        <input type="email" placeholder="Email" required className="input-field text-gray-800" />

                        {tipoPessoa === 'fisica' ? (
                            <input type="text" placeholder="CPF (000.000.000-00)" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" required className="input-field text-gray-800" />
                        ) : (
                            <input type="text" placeholder="CNPJ (00.000.000/0000-00)" pattern="\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}" required className="input-field text-gray-800" />
                        )}

                        <input type="tel" placeholder="Telefone (00) 00000-0000" pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" required className="input-field text-gray-800" />
                        <input type="date" required className="input-field text-gray-800" />
                        <select required className="input-field text-gray-800">
                            <option value="sexo" disabled selected>Sexo</option>
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                )}

                {/* Aviso para envio anônimo */}
                {opcao === 'anonimo' && (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-[#199950] mb-2">Envio Anônimo</h3>
                        <p className="text-[#444444] mb-4">Você continuará sem se identificar.</p>
                    </div>
                )}

                {/* Seção do CEP */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#199950]">Local do fato</h3>
                    <form onSubmit={buscarCep} className="flex gap-4">
                        <input
                            type="text"
                            placeholder="CEP (somente números)"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            className="input-field flex-grow"
                            maxLength={8}
                            pattern="\d{8}"
                            inputMode="numeric"
                            autoComplete="off"
                        />
                        <button type="submit" className="bg-[#11703B] text-white px-4 py-2 rounded-lg font-semibold">
                            Buscar
                        </button>
                    </form>
                    {erroCep && <p className="text-[#C0392B]">{erroCep}</p>}

                    {endereco && (
                        <div className="bg-gray-50 rounded-lg p-4 shadow-inner space-y-2">
                            <p><strong>Rua:</strong> {endereco.logradouro || "—"}</p>
                            <p><strong>Bairro:</strong> {endereco.bairro || "—"}</p>
                            <p><strong>Cidade:</strong> {endereco.localidade || "—"}</p>
                            <p><strong>Estado:</strong> {endereco.uf || "—"}</p>
                        </div>
                    )}

                    {mounted && endereco && (
                        <iframe
                            title="Mapa do endereço"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade}, ${endereco.uf}`)}&output=embed`}
                        />
                    )}
                </div>

                {/* Denúncia */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#199950]">Descrição da Denúncia</h3>
                    <textarea placeholder="Descreva o ocorrido com detalhes..." required className="w-full h-32 p-3 border border-[#E1E3DE] rounded-md focus:ring-2 focus:ring-[#11703B]"></textarea>
                    <button type="submit" className="w-full bg-[#199950] hover:bg-[#11703B] text-white py-3 rounded-lg font-semibold">
                        Enviar Denúncia
                    </button>
                </form>
            </section>
        </main>
    );
}