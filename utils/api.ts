import { Job } from '@/types/job';

// Import job data
import { jobData } from '@/data/jobData';

/**
 * Get all available jobs
 * @returns Promise<Job[]> Array of all jobs
 */
export async function getAllJobs(): Promise<Job[]> {
  try {
    // Simulate API call delay for realistic behavior
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return the entire job data array
    return jobData;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs');
  }
}
export interface JobApplicationData {
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
/**
 * Get a specific job by its ID
 * @param id - The job ID to look up
 * @returns Promise<Job> The requested job
 * @throws Error if job is not found
 */
export async function getJobById(id: string): Promise<Job> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find the job with the matching ID
    const job = jobData.find(job => job.id === id);
    
    if (!job) {
      throw new Error(`Job with ID ${id} not found`);
    }
    
    return job;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
}

/**
 * Get jobs filtered by type (e.g., Engineering, Creative, etc.)
 * @param type - The job type to filter by
 * @returns Promise<Job[]> Array of filtered jobs
 */
export async function getJobsByType(type: string): Promise<Job[]> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter jobs by type
    const filteredJobs = jobData.filter(job => job.type === type);
    
    return filteredJobs;
  } catch (error) {
    console.error(`Error fetching jobs of type ${type}:`, error);
    throw new Error(`Failed to fetch jobs of type ${type}`);
  }
}

/**
 * Get all unique job types from the available jobs
 * @returns Promise<string[]> Array of unique job types
 */
export async function getJobTypes(): Promise<string[]> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get unique job types using reduce and object keys
    const typesObj = jobData.reduce((acc: { [key: string]: boolean }, job) => {
      acc[job.type] = true;
      return acc;
    }, {});
    
    return Object.keys(typesObj);
  } catch (error) {
    console.error('Error fetching job types:', error);
    throw new Error('Failed to fetch job types');
  }
}

/**
 * Get internship positions (jobs with program property)
 * @returns Promise<Job[]> Array of internship positions
 */
export async function getInternships(): Promise<Job[]> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter jobs that have a program property (internships)
    const internships = jobData.filter(job => 'program' in job);
    
    return internships;
  } catch (error) {
    console.error('Error fetching internships:', error);
    throw new Error('Failed to fetch internships');
  }
}

export async function submitApplication(formData: {
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
}) {
  const response = await fetch('/api/careers/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit application');
  }

  return response.json();
}
