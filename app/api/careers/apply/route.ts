// app/api/careers/apply/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { emailService } from '@/lib/email-service';

// Update validation schema to include jobTitle
const applicationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  cvUrl: z.string().url("Invalid CV URL"),
  githubUrl: z.string().url().optional().or(z.literal('')),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  websiteUrl: z.string().url().optional().or(z.literal('')),
  coverLetter: z.string().min(100, "Cover letter must be at least 100 characters"),
});

// app/api/careers/apply/route.ts

export async function POST(req: NextRequest) {
  console.log('1. Starting application submission...');
  console.log('API Key available:', !!process.env.RESEND_API_KEY);
  
  try {
    const body = await req.json();
    console.log('2. Received body:', JSON.stringify(body, null, 2));
    
    const validatedData = applicationSchema.parse(body);
    console.log('3. Data validated successfully');
    
    const applicationId = `APP-${Date.now()}`;
    console.log('4. Generated application ID:', applicationId);

    try {
      console.log('5. Attempting to send emails...');
      
      // Send emails one at a time for better error tracking
      console.log('5a. Sending admin notification...');
      await emailService.sendJobApplication({
        ...validatedData,
        jobId: applicationId
      });
      
      console.log('5b. Sending candidate confirmation...');
      await emailService.sendJobApplicationConfirmation({
        ...validatedData,
        jobId: applicationId
      });
      
      console.log('6. Emails sent successfully');

      return NextResponse.json(
        { 
          success: true, 
          message: "Application submitted successfully",
          applicationId 
        },
        { status: 201 }
      );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log the full error details
      console.error('Error details:', {
        message: emailError instanceof Error ? emailError.message : 'Unknown error',
        stack: emailError instanceof Error ? emailError.stack : undefined,
      });
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Application received but notification failed." 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to submit application" 
      },
      { status: 500 }
    );
  }
}