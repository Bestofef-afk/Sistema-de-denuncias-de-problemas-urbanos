'use client';

import React, { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: '',
    mensagem: '',
  });

  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setSucesso(false);

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSucesso(true);
        setFormData({ nome: '', email: '', tipo: '', mensagem: '' });
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (err) {
      console.error('Erro ao enviar:', err);
      alert('Erro inesperado.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md my-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Fale Conosco</h1>
      <p className="text-black mb-6 text-center">
        Envie suas <strong>sugestões</strong> ou <strong>reclamações</strong> sobre Vila Nova do Norte.
      </p>

      {sucesso && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md text-center">
          Sua mensagem foi enviada com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-black">Nome</label>
          <input
            type="text"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">E-mail</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Tipo de mensagem</label>
          <select
            name="tipo"
            required
            value={formData.tipo}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 text-black"
          >
            <option value="">Selecione</option>
            <option value="sugestao">Sugestão</option>
            <option value="reclamacao">Reclamação</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Mensagem</label>
          <textarea
            name="mensagem"
            rows={5}
            required
            value={formData.mensagem}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 text-black"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={carregando}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {carregando ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}
