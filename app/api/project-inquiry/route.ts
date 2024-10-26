// app/api/project-inquiry/route.ts
import { NextResponse } from 'next/server';
import { emailService } from '@/lib/email-service';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await emailService.sendProjectInquiry(data);
    return NextResponse.json({ message: 'Project inquiry sent successfully' });
  } catch (error) {
    console.error('Error sending project inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to send project inquiry' }, 
      { status: 500 }
    );
  }
}