'use client';
import { useState } from 'react';

function cadastro() {
    const [opcao, setOpcao] = useState(null);
    const [tipoPessoa, setTipoPessoa] = useState('fisica');

    return (
        <div className="min-h-screen bg-[#F7F6F2] text-[#1C1C1C] flex flex-col items-center p-6">
            <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-[#11703B] mb-4">Escolha uma opção:</h2>
                <div className="flex gap-4 mb-6">
                    <button
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold ${opcao === 'cadastro'
                            ? 'bg-[#11703B] text-white'
                            : 'bg-[#E1E3DE] text-[#1C1C1C]'
                            }`}
                        onClick={() => setOpcao('cadastro')}
                    >
                        Cadastro completo
                    </button>
                    <button
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold ${opcao === 'anonimo'
                            ? 'bg-[#11703B] text-white'
                            : 'bg-[#E1E3DE] text-[#1C1C1C]'
                            }`}
                        onClick={() => setOpcao('anonimo')}
                    >
                        Envio anônimo
                    </button>
                </div>

                {opcao === 'cadastro' && (
                    <form className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-[#199950]">Formulário de Cadastro</h3>

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

                        <label className="flex flex-col">
                            Nome completo:
                            <input type="text" name="nome" required className="w-full p-2 border border-[#E1E3DE] rounded-md bg-white text-[#1C1C1C] placeholder:text-[#444444] focus:outline-none focus:ring-2 focus:ring-[#11703B] transition" />
                        </label>

                        <label className="flex flex-col">
                            Email:
                            <input type="email" name="email" required className="w-full p-2 border border-[#E1E3DE] rounded-md bg-white text-[#1C1C1C] placeholder:text-[#444444] focus:outline-none focus:ring-2 focus:ring-[#11703B] transition" />
                        </label>

                        {tipoPessoa === 'fisica' && (
                            <label className="flex flex-col">
                                CPF:
                                <input
                                    type="text"
                                    name="cpf"
                                    maxLength="14"
                                    pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                                    placeholder="000.000.000-00"
                                    required
                                    className="input-field"
                                />
                            </label>
                        )}

                        {tipoPessoa === 'juridica' && (
                            <label className="flex flex-col">
                                CNPJ:
                                <input
                                    type="text"
                                    name="cnpj"
                                    maxLength="18"
                                    pattern="\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}"
                                    placeholder="00.000.000/0000-00"
                                    required
                                    className="input-field"
                                />
                            </label>
                        )}

                        <label className="flex flex-col">
                            Telefone:
                            <input
                                type="tel"
                                name="telefone"
                                pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                                placeholder="(00) 00000-0000"
                                required
                                className="w-full p-2 border border-[#E1E3DE] rounded-md bg-white text-[#1C1C1C] placeholder:text-[#444444] focus:outline-none focus:ring-2 focus:ring-[#11703B] transition"
                            />
                        </label>

                        <label className="flex flex-col">
                            Data de nascimento:
                            <input type="date" name="dataNascimento" required className="w-full p-2 border border-[#E1E3DE] rounded-md bg-white text-[#1C1C1C] placeholder:text-[#444444] focus:outline-none focus:ring-2 focus:ring-[#11703B] transition" />
                        </label>

                        <label className="flex flex-col">
                            Sexo:
                            <select name="sexo" required className="input-field">
                                <option value="" disabled selected>
                                    Selecione
                                </option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </label>

                        <button
                            type="submit"
                            className="mt-4 bg-[#199950] hover:bg-[#11703B] text-white py-2 px-4 rounded-lg font-semibold"
                        >
                            Enviar
                        </button>
                    </form>
                )}

                {opcao === 'anonimo' && (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-[#199950] mb-2">Envio Anônimo</h3>
                        <p className="text-[#444444] mb-4">Você tem certeza que não quer se cadastrar?</p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setOpcao('cadastro')}
                                className="bg-[#E1E3DE] hover:bg-[#D9A700] text-[#1C1C1C] font-semibold py-2 px-4 rounded-lg"
                            >
                                Me cadastrar
                            </button>
                            <button className="bg-[#11703B] hover:bg-[#0d5a30] text-white font-semibold py-2 px-4 rounded-lg">
                                Seguir anonimamente
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default cadastro;