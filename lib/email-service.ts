// lib/email-service.ts
import { Resend } from 'resend';
import { EMAIL_CONFIG } from './email-config';

const resend = new Resend(process.env.RESEND_API_KEY);



interface EmailService {
  sendContactForm: (data: ContactFormData) => Promise<any>;
  sendProjectInquiry: (data: ProjectInquiryData) => Promise<any>;
  sendJobApplication: (data: JobApplicationData) => Promise<any>;
  sendJobApplicationConfirmation: (data: JobApplicationData) => Promise<any>;
}

interface JobApplicationData {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl?: string;
  cvUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  coverLetter: string;
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
    try {
      return await resend.emails.send({
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
    } catch (error) {
      console.error('Failed to send contact form email:', error);
      throw error;
    }
  },
  sendProjectInquiry: async (data: ProjectInquiryData) => {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    try {
      return await resend.emails.send({
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
    } catch (error) {
      console.error('Failed to send project inquiry email:', error);
      throw error;
    }
  },

  sendJobApplication: async (data: JobApplicationData) => {
    try {
      console.log('Sending job application notification...');
      const result = await resend.emails.send({
        from: EMAIL_CONFIG.SYSTEM.FROM,
        to: [EMAIL_CONFIG.HR.TO],
        replyTo: data.email,
        subject: `New Job Application: ${data.jobTitle}`,
        html: `
          <h2>New Job Application</h2>
          
          <h3>Position Details</h3>
          <p><strong>Job Title:</strong> ${data.jobTitle}</p>
          <p><strong>Job ID:</strong> ${data.jobId}</p>
          <p><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</p>
          
          <h3>Candidate Information</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Location:</strong> ${data.location}</p>
          
          <h3>Links & Portfolio</h3>
          <p><strong>CV/Resume:</strong> <a href="${data.cvUrl}">${data.cvUrl}</a></p>
          ${data.portfolioUrl ? `<p><strong>Portfolio:</strong> <a href="${data.portfolioUrl}">${data.portfolioUrl}</a></p>` : ''}
          ${data.githubUrl ? `<p><strong>GitHub:</strong> <a href="${data.githubUrl}">${data.githubUrl}</a></p>` : ''}
          ${data.linkedinUrl ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedinUrl}">${data.linkedinUrl}</a></p>` : ''}
          ${data.websiteUrl ? `<p><strong>Website:</strong> <a href="${data.websiteUrl}">${data.websiteUrl}</a></p>` : ''}
          
          <h3>Cover Letter</h3>
          <div style="white-space: pre-wrap;">${data.coverLetter}</div>
          
          <hr>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the NexzGen Careers Portal. 
            To manage recruitment settings, please visit your admin dashboard.
          </p>
        `,
      });
      
      console.log('Admin notification sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Failed to send admin notification:', error);
      throw error;
    }
  },

  sendJobApplicationConfirmation: async (data: JobApplicationData) => {
    try {
      console.log('Sending application confirmation to candidate...');
      const result = await resend.emails.send({
        from: EMAIL_CONFIG.SYSTEM.FROM,
        to: [data.email],
        replyTo: EMAIL_CONFIG.HR.REPLY_TO,
        subject: `Application Received - ${data.jobTitle} at NexzGen`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #5b21b6;">Thank You for Your Application!</h2>
                
                <p>Dear ${data.fullName},</p>
                
                <p>We have received your application for the <strong>${data.jobTitle}</strong> position at NexzGen. 
                Thank you for your interest in joining our team.</p>
                
                <h3 style="color: #6d28d9;">What's Next?</h3>
                
                <ol>
                  <li>Our recruitment team will carefully review your application</li>
                  <li>If your qualifications match our requirements, we'll contact you to schedule an interview</li>
                  <li>The initial review process typically takes 1-2 weeks</li>
                </ol>
                
                <p>Here's a summary of your application:</p>
                <ul>
                  <li><strong>Position:</strong> ${data.jobTitle}</li>
                  <li><strong>Reference ID:</strong> ${data.jobId}</li>
                  <li><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</li>
                </ul>
                
                <p>If you have any questions about your application or our hiring process, 
                please contact us at ${EMAIL_CONFIG.CAREERS.REPLY_TO}.</p>
                
                <p style="margin-top: 30px;">Best regards,<br>
                The NexzGen Recruitment Team</p>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>This is an automated message from the NexzGen Careers team. Please do not reply to this email directly.
                  For any inquiries, please contact ${EMAIL_CONFIG.CAREERS.REPLY_TO}</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      
      console.log('Confirmation email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      throw error;
    }
  },
};