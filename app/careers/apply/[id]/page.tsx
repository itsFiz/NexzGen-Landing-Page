// app/careers/apply/[id]/page.tsx (Server Component)
import ApplyPageCareer from '@/components/ApplyPageCareer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | NexzGen',
  description: 'Join our team and be part of the innovation.'
};

export default function ApplyPage() {
  return <ApplyPageCareer />;
}