export default async function DetalhesDenuncia({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/denuncia/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div>Erro ao carregar denúncia.</div>;
  }

  const denuncia = await res.json();

  return (
    <div>
      <h1>Denúncia de {denuncia.nome}</h1>
      <p><strong>Descrição:</strong> {denuncia.descricao}</p>
      <p><strong>Data:</strong> {new Date(denuncia.dataEnvio).toLocaleDateString()}</p>
      <p><strong>Endereço:</strong> {denuncia.endereco}, {denuncia.bairro}</p>
      <img src={denuncia.imgUrl} alt="Imagem da denúncia" />
    </div>
  );
}
