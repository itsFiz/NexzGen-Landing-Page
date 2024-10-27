'use client';

import React, { useState, useEffect, FormEvent, ChangeEvent, MouseEvent as ReactMouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertCircle,
  Check,
  Loader2,
  ArrowLeft,
  Link as LinkIcon,
  Github,
  Linkedin,
  Globe,
  Send
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { submitApplication } from '@/utils/api';

interface JobApplicationFormProps {
    jobData: Job | null;
  }
interface Job {
  id: string;
  title: string;
  type: string;
  program?: string;
  location: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  prerequisites: string[];
  benefits: string[];
  applyUrl: string;
}


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  cvUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
  coverLetter: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  portfolioUrl?: string;
  cvUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  coverLetter?: string;
  submit?: string;
}
const typeColors: Record<string, string> = {
    "Engineering": "bg-blue-500/20 text-blue-400",
    "Creative": "bg-orange-500/20 text-orange-400",
    "Human Resource": "bg-yellow-500/20 text-yellow-400",
    "Operation": "bg-green-500/20 text-green-400",
    "Data & Analytics": "bg-purple-500/20 text-purple-400",
    "Product Management": "bg-pink-500/20 text-pink-400",
    "Marketing": "bg-indigo-500/20 text-indigo-400"
  };
const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobData }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    portfolioUrl: '',
    cvUrl: '',
    githubUrl: '',
    linkedinUrl: '',
    websiteUrl: '',
    coverLetter: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName) newErrors.fullName = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.cvUrl) newErrors.cvUrl = 'CV link is required';
    if (!formData.coverLetter || formData.coverLetter.length < 100) {
      newErrors.coverLetter = 'Cover letter must be at least 100 characters';
    }

    const urlFields: (keyof FormData)[] = ['portfolioUrl', 'cvUrl', 'githubUrl', 'linkedinUrl', 'websiteUrl'];
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    urlFields.forEach(field => {
      if (formData[field] && !urlRegex.test(formData[field])) {
        newErrors[field] = 'Invalid URL format';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement> | ReactMouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Add validation for jobData
    if (!jobData?.id || !jobData?.title) {
      setErrors({ 
        submit: 'Invalid job data. Please try again or contact support.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    
    
      
    try {
        const response = await submitApplication({
          jobId: jobData.id,      // Now we know these are defined
          jobTitle: jobData.title, // Now we know these are defined
          ...formData
        });
        
        if (response.success) {
          setSubmitted(true);
        } else {
          throw new Error(response.message || 'Failed to submit application');
        }
      } catch (error) {
        console.error('Submission error:', error);
        setErrors({ 
          submit: error instanceof Error 
            ? error.message 
            : 'Failed to submit application. Please try again.' 
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!jobData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Job data not found. Please try again or contact support.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg px-4"
        >
          <Card className="border border-gray-500/20 bg-transparent backdrop-blur-md">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white">Application Submitted!</h2>
                <p className="text-gray-300">
                  Thank you for applying to {jobData?.title}. We will review your application and get back to you soon.
                </p>
                <button
                  onClick={() => router.push('/careers')}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Career Page
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 space-y-6 z-[30]"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Join Our Team
          </h1>
          <p className="mt-4 text-gray-400">
            Submit your application and help us shape the future of technology
          </p>
        </div>

        <button
          onClick={() => router.push('/careers')}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Careers
        </button>

        <Card className="border border-gray-500/20 bg-gray-950/20 backdrop-blur-md">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-2xl text-white">{jobData?.title}</CardTitle>
              {jobData && (
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${typeColors[jobData.type] || "bg-gray-500/20 text-gray-400"}`}>
                    {jobData.type}
                  </span>
                  <span className="text-gray-400">
                    {jobData.location} • {jobData.employmentType}
                  </span>
                </div>
              )}
              <CardDescription className="text-gray-400 mt-4">
                Complete the form below to apply for this position. All fields marked with * are required.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                        errors.fullName ? 'border-red-500' : 'focus:border-purple-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <span className="text-sm text-red-500">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                        errors.email ? 'border-red-500' : 'focus:border-purple-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                        errors.phone ? 'border-red-500' : 'focus:border-purple-500'
                      }`}
                      placeholder="+60 12 345 6789"
                    />
                    {errors.phone && (
                      <span className="text-sm text-red-500">{errors.phone}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                        errors.location ? 'border-red-500' : 'focus:border-purple-500'
                      }`}
                      placeholder="City, Country"
                    />
                    {errors.location && (
                      <span className="text-sm text-red-500">{errors.location}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Links and Portfolios */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Links & Portfolio</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cvUrl" className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      CV/Resume Link *
                    </Label>
                    <Input
                      id="cvUrl"
                      name="cvUrl"
                      value={formData.cvUrl}
                      onChange={handleInputChange}
                      className={`bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                        errors.cvUrl ? 'border-red-500' : 'focus:border-purple-500'
                      }`}
                      placeholder="https://drive.google.com/your-cv"
                    />
                    {errors.cvUrl && (
                      <span className="text-sm text-red-500">{errors.cvUrl}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="portfolioUrl" className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        Portfolio Link
                      </Label>
                      <Input
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        className="bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="githubUrl" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub Profile
                      </Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        className="bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400"
                        placeholder="https://github.com/username"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl" className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="websiteUrl" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Personal Website
                      </Label>
                      <Input
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        className="bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Cover Letter */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Cover Letter *</h3>
                <Textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className={`min-h-[200px] bg-gray-900/20 border-gray-500/30 backdrop-blur-sm text-white placeholder:text-gray-400 ${
                    errors.coverLetter ? 'border-red-500' : 'focus:border-purple-500'
                  }`}
                  placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                />
                {errors.coverLetter && (
                  <span className="text-sm text-red-500">{errors.coverLetter}</span>
                )}
              </div>

              {errors.submit && (
                <Alert variant="destructive" className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.submit}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <motion.button
              onClick={(e: ReactMouseEvent<HTMLButtonElement>) => handleSubmit(e)}
              type="button"
              disabled={isSubmitting}
              className={`
                w-full py-3 px-6 rounded-lg font-semibold
                bg-gradient-to-r from-purple-500/90 to-blue-500/90
                hover:from-purple-500 hover:to-blue-500
                text-white transition-all duration-200
                backdrop-blur-sm
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </div>
            </motion.button>

            {/* Privacy Notice */}
            <div className="p-4 bg-gray-900/20 backdrop-blur-sm border border-gray-500/20 rounded-lg w-full">
              <p className="text-gray-400 text-sm text-center">
                By submitting this application, you agree to our terms and conditions. 
                We&apos;ll process your information according to our privacy policy.
              </p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default JobApplicationForm;