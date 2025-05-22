// app/api/denuncia/route.js

import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get('image');

    // Verificações básicas
    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Imagem inválida.' }, { status: 400 });
    }

    // Gera um nome de arquivo fictício (não salva no disco)
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${ext}`;
    const imageUrl = `/uploads/${filename}`; // caminho fictício

    const dataEnvio = data.get('dataEnvio');
    const nome = data.get('nome');
    const email = data.get('email');
    const CPF = data.get('CPF');
    const telefone = data.get('telefone');
    const endereco = data.get('endereco');
    const bairro = data.get('bairro');
    const descricao = data.get('descricao');
    const cep = data.get('cep');
    const complemento = data.get('complemento');

    if (!nome || !email || !CPF || !telefone || !dataEnvio || !endereco || !bairro || !descricao || !cep || !file) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const [result] = await db.query(
      `INSERT INTO denuncia 
        (nome, email, CPF, telefone, dataEnvio, endereco, bairro, descricao, imgUrl, CEP, complemento) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome || null, email || null, CPF || null, telefone || null, dataEnvio, endereco, bairro, descricao, imageUrl, cep, complemento || null]
    );

    return NextResponse.json(
      { message: 'Denúncia registrada com sucesso', idDenuncia: result.insertId },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao registrar a denúncia.' }, { status: 500 });
  }
}
