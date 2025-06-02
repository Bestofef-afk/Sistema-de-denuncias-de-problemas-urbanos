"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Busca() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === "") return;
    router.push(`/buscar?query=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl flex gap-2 items-center" aria-label="Formulário de busca">
      <div className="flex w-full rounded-md overflow-hidden border border-green-900 bg-white">
        <input
          type="search"
          placeholder="Buscar por serviços, notícias..."
          className="w-full px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Campo de busca"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 text-white bg-green-900 hover:bg-green-800 transition-transform duration-150 hover:scale-105"
          aria-label="Buscar"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
