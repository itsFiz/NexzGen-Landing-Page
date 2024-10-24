// app/getstarted/page.tsx (Server Component)


import GetStarted from '@/components/main/GetStarted';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | NexzGen - Start Your Project',
  description: 'Begin your journey with NexzGen. Get a custom quote for web development, AR solutions, animation, or digital marketing services.',
  keywords: 'NexzGen, project quote, custom development, service inquiry, get started',
  openGraph: {
    title: 'Get Started with NexzGen',
    description: 'Transform your ideas into reality with NexzGen\'s cutting-edge solutions.',
  }
};

export default function GetStartedPage() {
  return  <main className="min-h-screen overflow-hidden">
  <div className="relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto w-full">
     <GetStarted/>
    </div>
  </div>
</main>;
}