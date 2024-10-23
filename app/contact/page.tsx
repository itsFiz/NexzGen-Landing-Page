// app/contact/page.tsx
import Contact from '@/components/main/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | NexzGen - Get in Touch',
  description: 'Connect with NexzGen for innovative solutions in web development, AR technology, animation, and digital transformation. Located in Kuala Lumpur, we\'re here to bring your ideas to life.',
  keywords: 'NexzGen contact, contact form, business inquiry, Kuala Lumpur tech company, AR development contact, animation services contact',
    
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <Contact />
        </div>
      </div>
    </main>
  );
}