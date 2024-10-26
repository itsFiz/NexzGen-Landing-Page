// lib/email-service.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailService {
  sendContactForm: (data: ContactFormData) => Promise<any>;
  sendProjectInquiry: (data: ProjectInquiryData) => Promise<any>;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ProjectInquiryData {
  serviceType: string;
  selectedOption: string;
  projectDetails: {
    name: string;
    email: string;
    company?: string;
    budget: string;
    timeline: string;
    description: string;
  };
}

export const emailService: EmailService = {
  sendContactForm: async (data: ContactFormData) => {
    return resend.emails.send({
      from: 'NexzGen Contact <onboarding@resend.dev>',
      to: ['info@nexzgen.com'],
      subject: `New Contact Form Submission from ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });
  },

  sendProjectInquiry: async (data: ProjectInquiryData) => {
    return resend.emails.send({
      from: 'NexzGen Projects <onboarding@resend.dev>',
      to: ['info@nexzgen.com'],
      subject: `New Project Inquiry: ${data.selectedOption}`,
      replyTo: data.projectDetails.email,
      html: `
        <h2>New Project Inquiry</h2>
        
        <h3>Service Details</h3>
        <p><strong>Service Type:</strong> ${data.selectedOption}</p>
        
        <h3>Client Information</h3>
        <p><strong>Name:</strong> ${data.projectDetails.name}</p>
        <p><strong>Email:</strong> ${data.projectDetails.email}</p>
        <p><strong>Company:</strong> ${data.projectDetails.company || 'Not provided'}</p>
        
        <h3>Project Requirements</h3>
        <p><strong>Budget Range:</strong> ${data.projectDetails.budget}</p>
        <p><strong>Timeline:</strong> ${data.projectDetails.timeline}</p>
        <p><strong>Description:</strong></p>
        <p>${data.projectDetails.description}</p>
      `,
    });
  },
};