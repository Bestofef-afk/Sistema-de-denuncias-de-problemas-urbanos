import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { nome, email, tipo, mensagem } = await req.json();

    if (!email || !mensagem) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios faltando' }),
        { status: 400 }
      );
    }

    // Configurar o transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM = 'gianlucca.pinto@gmail.com',       
        pass: process.env.EMAIL_PASSWORD  = 'oxhz wvem ievg nxtq'
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
      <p>Agradecemos por nos ajudar a melhorar o site de denuncias da Vila Nova do Norte!</p>
      <p>Atenciosamente,<br/>Equipe de Atendimento</p>
    `;

    // Enviar o email
    await transporter.sendMail({
      from: `"Atendimento Vila Nova" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return new Response(
      JSON.stringify({ error: 'Falha ao enviar e-mail' }),
      { status: 500 }
    );
  }
}
