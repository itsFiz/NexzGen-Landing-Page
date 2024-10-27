import { NextApiRequest, NextApiResponse } from 'next';
import { jobData } from '@/data/jobData';
import { Job } from '@/types/job';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[] | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    return res.status(200).json(jobData);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}