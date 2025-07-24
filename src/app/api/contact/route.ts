import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { name, email, details } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    const mailOptions = {
      from: 'office@priveescape.com',  // **Adresa verificată în SendGrid**
      to: 'office@priveescape.com',      // unde vrei să primești cererile
      subject: `Cerere contact de la ${name}`,
      html: `
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong><br>${details.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email trimis cu succes' }, { status: 200 });
  } catch (error) {
    console.error('Eroare la trimiterea emailului:', error);
    return NextResponse.json({ message: 'Eroare la trimiterea emailului' }, { status: 500 });
  }
}
