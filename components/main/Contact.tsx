"use client"

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { MapPin, Mail, Phone, Loader2, LucideIcon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface FormStatus {
    loading: boolean;
    success: boolean;
    error: boolean;
  }

// Types and Interfaces
interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
  gradientId: string;
  href?: string;
}



// Contact info component with proper typing
const ContactInfo: React.FC<ContactInfoProps> = ({ 
  icon: Icon, 
  title, 
  content, 
  gradientId, 
  href 
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
      <Icon 
        className="w-6 h-6" 
        stroke={`url(#${gradientId})`}
        strokeWidth={1.5}
      />
    </div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      {href ? (
        <a href={href} className="text-gray-300 hover:text-purple-500 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-300">{content}</p>
      )}
    </div>
  </div>
);

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
  
    const [status, setStatus] = useState<FormStatus>({
      loading: false,
      success: false,
      error: false
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }));
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus({ loading: true, success: false, error: false });
  
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
  
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false });
        }, 3000);
      } catch (error) {
        console.error('Error sending email:', error);
        setStatus({ loading: false, success: false, error: true });
        
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false });
        }, 3000);
      }
    };
  
     

  return (
    <main className="min-h-screen flex flex-col bg-[#030014]">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-12 pb-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to discuss how we can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300">
                  Have a question or want to work together? We&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  content="Level 9, Integra Tower, 348, Jln Tun Razak, 50400, Kuala Lumpur"
                  gradientId="locationGradient"
                />
                
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="info@nexzgen.com"
                  gradientId="emailGradient"
                  href="mailto:info@nexzgen.com"
                />
                
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  content="+6011-1302 5474"
                  gradientId="phoneGradient"
                  href="tel:+60111302547"
                />
              </div>

              {/* Google Maps */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#2A0E61] bg-[#0300145e]">
                <div className="relative w-full h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.98426186254335!2d101.72025995802187!3d3.1609320682863338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc377e395d17c9%3A0x649b6ef7734cde44!2sIntegra%20Tower!5e0!3m2!1sen!2smy!4v1729614347940!5m2!1sen!2smy"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* SVG Gradients */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0300145e] border border-[#2A0E61] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0300141f] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0300141f] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#0300141f] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status.success && (
                <Alert className="mt-4 bg-green-500/10 text-green-500 border-green-500/20">
                  <AlertDescription>
                    Message sent successfully! We&apos;ll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {status.error && (
                <Alert className="mt-4 bg-red-500/10 text-red-500 border-red-500/20">
                  <AlertDescription>
                    Something went wrong. Please try again later.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;