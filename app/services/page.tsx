// app/services/page.tsx (Server Component)
import ServicesContent from '@/components/main/ServicesContent';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Services | NexzGen - Web, AR, Animation & Marketing Solutions',
  description: 'Explore NexzGen\'s comprehensive services including web development, augmented reality, animation, and digital marketing solutions.',
};

export default function ServicesPage() {
  return <main className="min-h-screen overflow-hidden">
  <div className="relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto w-full">
     
    <ServicesContent />
    </div>
  </div>
</main>;
}