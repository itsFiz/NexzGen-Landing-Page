// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { emailService } from '@/lib/email-service';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await emailService.sendContactForm(data);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}