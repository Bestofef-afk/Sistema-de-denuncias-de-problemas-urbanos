import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function POST(req) {
    const { email, senha } = await req.json();

    const [rows] = await db.query('SELECT * FROM admin WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
        return NextResponse.json({ message: 'Autenticado com sucesso', isAdmin: true });
    }

    return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
}