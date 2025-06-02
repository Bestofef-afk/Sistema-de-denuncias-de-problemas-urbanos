// Não precisa 'use client' aqui

export default async function DetalhesDenuncia({ params }) {
    const { id } = await params;

    const res = await fetch(`http://localhost:3000/api/denuncia/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        return <p>Denúncia não encontrada</p>;
    }

    const denuncia = await res.json();

    return (
        <main className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Denúncia #{denuncia.idDenuncia}</h1>

            {denuncia.imgUrl && (
                <img
                    src={denuncia.imgUrl}
                    alt={`Imagem da denúncia ${denuncia.idDenuncia}`}
                    className="w-full h-64 object-cover mb-6 rounded"
                />
            )}

            <p className="mb-4">
                <strong>Data:</strong>{' '}
                {new Date(denuncia.dataEnvio).toLocaleDateString('pt-BR')}
            </p>

            <p className="mb-4">
                <strong>Bairro:</strong> {denuncia.bairro}
            </p>

            <p className="text-gray-700">{denuncia.descricao}</p>
        </main>
    );
}
