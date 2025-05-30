import db from '../../../../lib/db';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const [rows] = await db.query('SELECT * FROM denuncia WHERE idDenuncia = ?', [id]);
            if (rows.length === 0) return res.status(404).json({ error: 'Denúncia não encontrada' });
            return res.status(200).json(rows[0]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            await db.query('DELETE FROM denuncia WHERE idDenuncia = ?', [id]);
            return res.status(200).json({ message: 'Denúncia deletada com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao deletar denúncia' });
        }
    }

    if (req.method === 'PUT') {
        const { descricao, bairro, imgUrl } = req.body;

        try {
            await db.query(
                'UPDATE denuncia SET descricao = ?, bairro = ?, imgUrl = ? WHERE idDenuncia = ?',
                [descricao, bairro, imgUrl, id]
            );
            return res.status(200).json({ message: 'Denúncia atualizada com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar denúncia' });
        }
    }

    return res.status(405).json({ error: 'Método não permitido' });
}
