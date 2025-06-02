export default async function DetalhesDenuncia({ params }) {
  const id = params?.id;

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDEDEC] px-6 py-20">
        <p className="text-red-700 text-xl font-semibold mb-4">
          ID da denúncia não fornecido.
        </p>
        <a
          href="/"
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
          aria-label="Voltar para a página inicial"
        >
          Voltar para a Home
        </a>
      </div>
    );
  }

  let denuncia;
  try {
    const res = await fetch(`http://localhost:3000/api/denuncia/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Erro ao buscar denúncia');

    denuncia = await res.json();
  } catch (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDEDEC] px-6 py-20">
        <p className="text-red-700 text-xl font-semibold mb-4">
          Ocorreu um erro ao carregar a denúncia.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white min-h-screen shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#11703B] mb-8">
        Denúncia de <span className="capitalize">{denuncia.nome}</span>
      </h1>

      {denuncia.imgUrl ? (
        <div className="w-full max-w-3xl mx-auto h-64 md:h-auto mb-8 flex justify-center items-center border rounded-lg overflow-hidden shadow-sm">
          <img
            src={denuncia.imgUrl}
            alt={`Imagem da denúncia de ${denuncia.nome}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="w-full h-48 flex flex-col items-center justify-center bg-gray-100 text-gray-400 italic rounded-lg border shadow-sm mb-8"
          role="img"
          aria-label="Imagem não disponível"
        >
          {/* ícone SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"
            />
          </svg>
          Sem imagem disponível
        </div>
      )}

      <section className="space-y-4 text-gray-800 text-base leading-relaxed">
        <p>
          <strong className="text-gray-900">Descrição:</strong> {denuncia.descricao}
        </p>
        <p>
          <strong className="text-gray-900">Data:</strong>{' '}
          {new Date(denuncia.dataEnvio).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p>
          <strong className="text-gray-900">Endereço:</strong>{' '}
          {denuncia.endereco}, {denuncia.bairro}
        </p>
      </section>
    </main>
  );
}
