import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function POST(req) {
    const { email, senha } = await req.json();

    const [rows] = await db.query('SELECT * FROM admin WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
        const res = NextResponse.json({ message: 'Autenticado com sucesso', isAdmin: true });
        res.cookies.set('isAdmin', 'true', { httpOnly: true, path: '/' });
        return res;
    }

    return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
}
