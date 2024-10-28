// types/job.ts
export interface Job {
  id: string;
  title: string;
  type: string;
  program?: string;
  isFoundingRole?: boolean; // New field for founding team positions
  location: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  prerequisites: string[];
  benefits: string[];
  applyUrl: string;
}