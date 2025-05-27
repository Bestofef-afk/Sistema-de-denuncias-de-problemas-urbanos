import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function GET() {
    try {
        const [rows] = await db.query(`
      SELECT 
        id, nome, cargo, horarioInicio, horarioFim, 
        localAtendimento, telefone, emailGovernamental, fotoUrl 
      FROM funcionarios
    `);
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        return NextResponse.json({ error: 'Erro ao buscar funcionários' }, { status: 500 });
    }
}
