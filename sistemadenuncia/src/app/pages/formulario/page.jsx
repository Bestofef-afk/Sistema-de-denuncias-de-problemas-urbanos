'use client';
import { useState } from "react";
import axios from "axios";

export default function FormularioDenuncia() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [CPF, setCPF] = useState("");
  const [tipoPessoa, setTipoPessoa] = useState("fisica");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erroCep, setErroCep] = useState("");
  const [imagem, setImagem] = useState(null);
  const [complemento, setComplemento] = useState("");
  const [descricao, setDescricao] = useState("");

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

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    const hoje = new Date();
    const dataFormatada = hoje.toISOString().split("T")[0];
    formData.append("dataEnvio", dataFormatada);
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("sexo", sexo);
    formData.append("CPF", CPF);
    formData.append("image", imagem);
    formData.append("descricao", descricao);
    formData.append("cep", cep);
    formData.append("bairro", endereco?.bairro || "");
    formData.append("endereco", `${endereco?.logradouro}, ${endereco?.bairro}, ${endereco?.localidade} - ${endereco?.uf}`);
    formData.append("complemento", complemento);

    try {
      const res = await axios.post("/api/denuncia", formData);
      alert("Denúncia enviada com sucesso!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar a denúncia.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f4f4] flex flex-col items-center p-6">
      <section className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-md space-y-8">
        <h2 className="text-3xl font-bold text-[#11703B] text-center">Formulário de Denúncia</h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#199950]">Seus dados</h3>

            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-gray-800">
                <input type="radio" name="tipoPessoa" value="fisica" checked={tipoPessoa === 'fisica'} onChange={() => setTipoPessoa('fisica')} required />
                Pessoa Física
              </label>
              <label className="flex items-center gap-2 text-gray-800">
                <input type="radio" name="tipoPessoa" value="juridica" checked={tipoPessoa === 'juridica'} onChange={() => setTipoPessoa('juridica')} required />
                Pessoa Jurídica
              </label>
            </div>

            <input type="text" placeholder="Nome completo" required className="input-field text-gray-800" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="email" placeholder="Email" required className="input-field text-gray-800" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder={tipoPessoa === 'fisica' ? "CPF (apenas numeros)" : "CNPJ (apenas numeros)"} required className="input-field text-gray-800" value={CPF} onChange={(e) => setCPF(e.target.value)} />
            <input type="tel" placeholder="Telefone (00) 00000-0000" pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" required className="input-field text-gray-800" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

            <select required className="input-field text-gray-800" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="" disabled>Sexo</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro</option>
            </select>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="CEP (somente números)"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="input-field flex-grow text-gray-800"
                maxLength={8}
                pattern="\d{8}"
                inputMode="numeric"
                required
              />
              <button type="button" onClick={buscarCep} className="bg-[#11703B] text-white px-4 py-2 rounded-lg font-semibold">
                Buscar
              </button>
            </div>

            {erroCep && <p className="text-[#C0392B]">{erroCep}</p>}

            {endereco && (
              <>
                <article className="mt-4 bg-gray-50 rounded-lg p-6 shadow-inner space-y-3 text-gray-800 text-lg">
                  <p><strong>Rua:</strong> {endereco.logradouro}</p>
                  <p><strong>Bairro:</strong> {endereco.bairro}</p>
                  <p><strong>Cidade:</strong> {endereco.localidade}</p>
                  <p><strong>Estado:</strong> {endereco.uf}</p>
                  <p><strong>CEP:</strong> {endereco.cep}</p>
                  <input type="text" placeholder="Complemento" className="input-field" value={complemento} onChange={(e) => setComplemento(e.target.value)} required />
                </article>

                <section className="w-full max-w-6xl mt-6 rounded-lg overflow-hidden shadow-md border border-gray-300">
                  <iframe
                    title="Mapa do endereço"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade}, ${endereco.uf}`)}&output=embed`}
                  />
                </section>
              </>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#199950]">Descrição da Denúncia</h3>
            <textarea name="descricao" placeholder="Descreva o ocorrido com detalhes..." required className="w-full h-32 p-3 border border-[#E1E3DE] rounded-md focus:ring-2 focus:ring-[#11703B] text-gray-800" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
            <input type="file" accept="image/*" required onChange={(e) => setImagem(e.target.files[0])} className="block w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" />
            <button type="submit" className="bg-[#11703B] text-white px-4 py-2 rounded-lg font-semibold w-full">
              Enviar Denúncia
            </button>
          </div>

        </form>
      </section>
    </main>
  );
}
