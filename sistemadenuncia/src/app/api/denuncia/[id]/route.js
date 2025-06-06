import { NextResponse } from 'next/server';
import db from '../../../../../lib/db';

// GET /api/denuncia/[id]
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const [rows] = await db.query('SELECT * FROM denuncia WHERE idDenuncia = ?', [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Denúncia não encontrada' }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao buscar denúncia' }, { status: 500 });
  }
}

// PATCH /api/denuncia/[id]
export async function PATCH(req, { params }) {
  const { id } = params;
  const data = await req.json();

  try {
    // Pega os campos que vieram na requisição
    const campos = [];
    const valores = [];

    if (data.descricao !== undefined) {
      campos.push('descricao = ?');
      valores.push(data.descricao);
    }
    if (data.bairro !== undefined) {
      campos.push('bairro = ?');
      valores.push(data.bairro);
    }
    if (data.imgUrl !== undefined) {
      campos.push('imgUrl = ?');
      valores.push(data.imgUrl);
    }

    if (campos.length === 0) {
      return NextResponse.json({ error: 'Nenhum campo para atualizar' }, { status: 400 });
    }

    valores.push(id);

    const sql = `UPDATE denuncia SET ${campos.join(', ')} WHERE idDenuncia = ?`;
    await db.query(sql, valores);

    // Retorna o registro atualizado
    const [rows] = await db.query('SELECT * FROM denuncia WHERE idDenuncia = ?', [id]);
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar denúncia' }, { status: 500 });
  }
}

// DELETE /api/denuncia/[id]
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await db.query('DELETE FROM denuncia WHERE idDenuncia = ?', [id]);
    return NextResponse.json({ message: 'Denúncia deletada com sucesso' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao deletar denúncia' }, { status: 500 });
  }
}
