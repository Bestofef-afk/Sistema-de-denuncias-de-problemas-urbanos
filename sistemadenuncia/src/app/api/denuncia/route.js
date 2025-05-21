// app/api/denuncia/route.js

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import db from '../../../../lib/db';

const uploadDir = path.join(process.cwd(), 'public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get('image');

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name);
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}${ext}`;
    const filePath = path.join(uploadDir, filename);

    await fs.promises.writeFile(filePath, buffer);

    const nome = data.get('nome');
    const email = data.get('email');
    const CPF = data.get('CPF');
    const telefone = data.get('telefone');
    const Data = data.get('Data');
    const sexo = data.get('sexo');
    const endereco = data.get('endereco');
    const bairro = data.get('bairro');
    const descricao = data.get('descricao');
    const cep = data.get('cep');
    const complemento = data.get('complemento');

    if (!nome || !email || !CPF || !telefone || !Data || !sexo || !endereco || !bairro || !descricao || !cep || !complemento || !file) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const imageUrl = `/uploads/${filename}`;

    const [result] = await db.query(
      'INSERT INTO denuncia (nome, email, CPF, telefone, Data, sexo, endereco, bairro, descricao, imgUrl, CEP, complemento) VALUES (?, ?, ?, ?, ?, ?)',
      [nome || null, email || null, CPF || null, telefone || null, Data || null, sexo || null, endereco, bairro, descricao, imgUrl, CEP, complemento || null]
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
