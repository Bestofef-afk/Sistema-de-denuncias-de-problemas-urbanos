import { NextResponse } from 'next/server';
import db from '../../../../../lib/db';

export async function GET(req, { params }) {
  const { id } = await params;

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
