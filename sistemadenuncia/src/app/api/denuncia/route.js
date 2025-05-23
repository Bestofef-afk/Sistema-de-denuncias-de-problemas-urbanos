import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import db from '../../../../lib/db';

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get('image');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Imagem inválida.' }, { status: 400 });
    }

    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${ext}`;
    const imageUrl = `/uploads/${filename}`;

    // Salva a imagem fisicamente
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

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
      [nome,  email, CPF, telefone, dataEnvio, endereco, bairro, descricao, imageUrl, cep, complemento || null]
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
  