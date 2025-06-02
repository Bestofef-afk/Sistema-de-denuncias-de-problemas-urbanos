import nodemailer from 'nodemailer';

export async function POST(req) {
  const { nome, email, tipo, mensagem } = await req.json();

  if (!email || !mensagem) {
    return new Response(JSON.stringify({ error: 'Campos obrigatórios faltando' }), {
      status: 400,
    });
  }

  // Configurar o transporter com SMTP (ex: Gmail ou outro provedor)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM = '',
      pass: process.env.EMAIL_PASSWORD = 'Gi@n1404',
    },
  });

  const subject =
    tipo === 'reclamacao'
      ? 'Recebemos sua reclamação'
      : 'Obrigado pela sua sugestão';

  const html = `
    <h2>Olá ${nome || 'Usuário'},</h2>
    <p>Recebemos sua ${tipo === 'reclamacao' ? 'reclamação' : 'sugestão'}:</p>
    <blockquote>${mensagem}</blockquote>
    <p>Agradecemos por nos ajudar a melhorar Vila Nova do Norte!</p>
    <p>Atenciosamente,<br/>Equipe de Atendimento</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Atendimento Vila Nova" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Falha ao enviar e-mail' }), {
      status: 500,
    });
  }
}
