import { NextResponse } from 'next/server';

export async function GET(req) {
    const isAdmin = req.cookies.get('isAdmin')?.value === 'true';
    return NextResponse.json({ isAdmin });
}
