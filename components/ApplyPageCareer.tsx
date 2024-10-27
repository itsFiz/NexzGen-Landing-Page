// app/careers/apply/[id]/ApplyPageClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Job } from '@/types/job';
import { getJobById } from '@/utils/api';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ApplyPageCareer() {
  const params = useParams();
  const id = params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log('Starting job fetch for ID:', id); // Debug log
        
        if (!id) {
          throw new Error('No job ID provided');
        }

        const data = await getJobById(id);
        console.log('Job data received:', data); // Debug log
        setJob(data);
      } catch (err) {
        console.error('Error fetching job:', err); // Debug log
        setError(err instanceof Error ? err.message : 'Failed to load job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="flex items-center gap-2 text-white">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading job details...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}. Please try again later or contact support if the problem persists.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Job not found. Please check the URL and try again.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="bg-transparent relative z-10 flex flex-col gap-20 pt-20 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <JobApplicationForm jobData={job} />
      </div>
    </div>
  );
}