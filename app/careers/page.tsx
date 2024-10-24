// app/careers/page.tsx
import { Metadata } from 'next';
import  Jobs from "@/components/main/Jobs";


export const metadata: Metadata = {
  title: 'Careers | NexzGen',
  description: 'Join our team and be part of the innovation.'
};

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
         
          <Jobs />
        </div>
      </div>
    </main>
  );
}