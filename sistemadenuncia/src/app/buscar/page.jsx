"use client";

import { useSearchParams } from "next/navigation";

export default function Buscar() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Resultados para: "{query}"</h1>
      {/* Aqui você pode adicionar lógica para buscar e mostrar resultados */}
    </div>
  );
}
