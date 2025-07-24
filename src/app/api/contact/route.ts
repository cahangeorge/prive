export const runtime = 'edge';

export async function POST(req: Request) {
  const { name, email, details } = await req.json();

  const resendApiKey = process.env.RESEND_API_KEY!;
  const fromEmail = process.env.FROM_EMAIL!;
  const toEmail = process.env.TO_EMAIL!;

  const payload = {
    from: fromEmail,
    to: toEmail,
    subject: `Mesaj nou de la ${name}`,
    reply_to: email,
    html: `
      <h2>Ai primit un mesaj nou</h2>
      <p><strong>Nume:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${details}</p>
    `
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return new Response("Email trimitere eșuată", { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }));
}
