// app/products/page.tsx (Server Component)
import ProductsContent from '@/components/main/ProductsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ventures | NexzGen - Project Ventures',
  description: 'Discover NexzGen\'s project ventures including CareerRPG, ARespiratory, and other cutting-edge digital solutions.',
  // ... rest of metadata
};

export default function ProductsPage() {
  return <main className="min-h-screen overflow-hidden">
  <div className="relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto w-full">
     
    <ProductsContent  />
    </div>
  </div>
</main>;
}