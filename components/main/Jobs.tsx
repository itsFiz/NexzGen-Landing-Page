"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

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
  linkedinUrl: string;
}

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

// Color mapping for job type labels
const typeColors: Record<string, string> = {
  "Engineering": "bg-blue-500/20 text-blue-400",
  "Creative": "bg-orange-500/20 text-orange-400",
  "Human Resource": "bg-yellow-500/20 text-yellow-400",
  "Operation": "bg-green-500/20 text-green-400",
  "Data & Analytics": "bg-purple-500/20 text-purple-400",
  "Product Management": "bg-pink-500/20 text-pink-400",
  "Marketing": "bg-indigo-500/20 text-indigo-400"
};

// NIX Label Component
const NixLabel = () => (
  <div className="inline-flex items-center gap-0.5 px-2 py-1 rounded-md bg-gray-800">
    <span className="text-xl font-bold">
                <span style={{ color: "#054961" }}>N</span>
    <span style={{ color: "#0b7c67" }}>I</span>
    <span style={{ color: "#b70c30" }}>X</span>
                </span>
  </div>
);

// Job Detail Modal Component
// Job Detail Modal Component
const JobDetailModal: React.FC<{
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ job, isOpen, onClose }) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        // z-50 will ensure it's above the footer's z-10
        onClick={onClose}
      >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="relative w-full max-w-3xl bg-gray-900 rounded-lg shadow-xl"
            style={{ 
              maxHeight: '80vh',  // Limit height to 90% of viewport
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col max-h-[80vh]"> {/* Container for proper scrolling */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-10"
              >
                ✕
              </button>

              <div className="overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-white">{job.title}</h2>
                    {job.program === "NIX" && <NixLabel />}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${typeColors[job.type] || "bg-gray-500/20 text-gray-400"}`}>
                      {job.type}
                    </span>
                    <span className="text-gray-400">
                      {job.location} • {job.employmentType}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-300">
                  <p>{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Prerequisites */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {job.prerequisites.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Benefits</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky Apply Button */}
              <div className="sticky bottom-0 w-full p-4 bg-gray-900 border-t border-gray-800">
                <button
                  onClick={() => window.open(job.linkedinUrl, '_blank')}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// ProjectTag component
const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

// JobCard component
const JobCard: React.FC<{
  job: Job;
  onClick: () => void;
}> = ({ job, onClick }) => {
  const typeColorClass = typeColors[job.type] || "bg-gray-500/20 text-gray-400";

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group transition-all duration-500 hover:bg-opacity-10 cursor-pointer"
    >
      <div className="p-4 ml-2 mr-2 md:mr-40">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          {job.program === "NIX" && <NixLabel />}
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className={`px-3 py-1 text-sm rounded-full ${typeColorClass}`}>
            {job.type}
          </span>
          <span className="text-gray-300">{job.location}</span>
        </div>
      </div>
      <div className="overlay flex items-center justify-center absolute inset-0 bg-[#181818] bg-opacity-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70">
        <button
          className="absolute bg-transparent p-2 rounded-full hover:bg-purple transition-colors duration-300"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          →
        </button>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: "Augmented Reality (AR) Developer",
      type: "Engineering",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Join our AR team to create cutting-edge immersive experiences that transform how people learn and interact with technology. You'll be working on innovative projects including our flagship ARespiratory platform.",
      responsibilities: [
        "Develop AR applications using Unity and ARCore/ARKit",
        "Collaborate with designers and product managers",
        "Create immersive educational experiences",
        "Optimize AR performance and user experience",
        "Contribute to research and development of new AR features"
      ],
      prerequisites: [
        "3+ years of AR development experience",
        "Strong proficiency in C# and Unity",
        "Experience with ARCore/ARKit",
        "Understanding of 3D mathematics and computer vision",
        "Portfolio demonstrating AR projects"
      ],
      benefits: [
        "Competitive salary package",
        "Flexible working hours",
        "Health insurance",
        "Professional development budget",
        "Remote work options"
      ],
      linkedinUrl: "https://www.linkedin.com/hiring/jobs/3832653540/detail/"
    },
    {
      id: '2',
      title: "Talent Acquisition Specialist",
      type: "Human Resource",
      program: "NIX",
      location: "Kuala Lumpur",
      employmentType: "Internship (6 months)",
      description: "Join our NIX program as a Talent Acquisition Specialist intern. Help build NexzGen's future by identifying and nurturing top talent while learning the ins and outs of HR in a fast-paced startup environment.",
      responsibilities: [
        "Assist in full-cycle recruitment process",
        "Screen resumes and conduct initial interviews",
        "Coordinate with department heads for hiring needs",
        "Help organize recruitment events and career fairs",
        "Manage candidate database and track metrics"
      ],
      prerequisites: [
        "Currently pursuing degree in HR Management or related field",
        "Strong communication and interpersonal skills",
        "Ability to work independently",
        "Familiarity with recruitment tools and platforms",
        "Good organizational skills"
      ],
      benefits: [
        "Monthly allowance",
        "Flexible working hours",
        "Mentorship from senior HR professionals",
        "Exposure to startup culture",
        "Certificate upon completion",
        "Potential for full-time conversion"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '3',
      title: "Fullstack Developer",
      type: "Engineering",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Be part of our core development team working on CareerRPG and other innovative products. You'll be building scalable applications using Next.js, React, and modern web technologies.",
      responsibilities: [
        "Develop and maintain web applications using Next.js and React",
        "Write clean, maintainable, and efficient code",
        "Implement responsive design and ensure cross-browser compatibility",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with back-end developers and designers"
      ],
      prerequisites: [
        "3+ years experience with React and Next.js",
        "Strong understanding of JavaScript/TypeScript",
        "Experience with RESTful APIs and GraphQL",
        "Knowledge of modern web development practices",
        "Experience with cloud services (AWS/GCP)"
      ],
      benefits: [
        "Competitive salary package",
        "Remote work options",
        "Health insurance",
        "Professional development opportunities",
        "Stock options"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '4',
      title: "Graphic Designer",
      type: "Creative",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Create compelling visual content that brings our brand and products to life. Work on diverse projects ranging from UI design to marketing materials.",
      responsibilities: [
        "Create engaging visual content for digital and print media",
        "Design UI elements for web and mobile applications",
        "Develop brand identity materials",
        "Create marketing collateral and social media content",
        "Collaborate with product and marketing teams"
      ],
      prerequisites: [
        "3+ years of graphic design experience",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio demonstrating versatility",
        "Understanding of UI/UX principles",
        "Experience with motion graphics is a plus"
      ],
      benefits: [
        "Competitive salary",
        "Creative freedom",
        "Latest design tools and software",
        "Professional development opportunities",
        "Flexible working hours"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '5',
      title: "DevOps Engineer",
      type: "Engineering",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Lead our infrastructure and deployment strategies, ensuring reliable and scalable systems for our growing product portfolio.",
      responsibilities: [
        "Manage cloud infrastructure and deployment pipelines",
        "Implement and maintain CI/CD workflows",
        "Monitor system performance and security",
        "Automate operational processes",
        "Collaborate with development teams on infrastructure needs"
      ],
      prerequisites: [
        "3+ years DevOps experience",
        "Strong knowledge of AWS/GCP",
        "Experience with Docker and Kubernetes",
        "Proficiency in scripting languages",
        "Understanding of security best practices"
      ],
      benefits: [
        "Competitive salary",
        "Remote work options",
        "Professional certifications support",
        "Health insurance",
        "Stock options"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '6',
      title: "AI/ML Engineer",
      type: "Engineering",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Drive innovation in our AI-powered solutions, working on cutting-edge machine learning projects for our educational and career development platforms.",
      responsibilities: [
        "Develop and deploy ML models",
        "Optimize AI algorithms for performance",
        "Collaborate on AI feature development",
        "Research and implement new ML techniques",
        "Create data pipelines and processing systems"
      ],
      prerequisites: [
        "MS/PhD in Computer Science or related field",
        "Strong background in ML algorithms",
        "Experience with PyTorch or TensorFlow",
        "Proficiency in Python",
        "Published research is a plus"
      ],
      benefits: [
        "Competitive salary",
        "Research and development budget",
        "Conference attendance support",
        "Flexible working hours",
        "Publication opportunities"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '7',
      title: "Business Development Executive",
      type: "Operation",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Drive growth and expansion of NexzGen's market presence through strategic partnerships and business development initiatives.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Develop and maintain client relationships",
        "Create and present business proposals",
        "Negotiate contracts and partnerships",
        "Analyze market trends and competition"
      ],
      prerequisites: [
        "3+ years in business development",
        "Strong negotiation skills",
        "Experience in EdTech or SaaS industry",
        "Excellent communication skills",
        "Track record of closing deals"
      ],
      benefits: [
        "Competitive base salary + commission",
        "Performance bonuses",
        "Health insurance",
        "Professional development",
        "Travel allowance"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '8',
      title: "Data Scientist",
      type: "Data & Analytics",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Transform our data into actionable insights that drive product development and business strategy.",
      responsibilities: [
        "Analyze large datasets to extract insights",
        "Build predictive models",
        "Create data visualization dashboards",
        "Develop recommendation systems",
        "Collaborate with product teams on data-driven features"
      ],
      prerequisites: [
        "MS/PhD in Data Science or related field",
        "Strong statistics background",
        "Proficiency in Python and R",
        "Experience with big data technologies",
        "Knowledge of ML algorithms"
      ],
      benefits: [
        "Competitive salary",
        "Research opportunities",
        "Conference attendance",
        "Flexible hours",
        "Remote work options"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '9',
      title: "Product Manager",
      type: "Product Management",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Lead the development and growth of our product portfolio, ensuring we deliver innovative solutions that meet user needs.",
      responsibilities: [
        "Define product vision and strategy",
        "Manage product roadmap",
        "Conduct market research",
        "Work with development teams",
        "Analyze product metrics"
      ],
      prerequisites: [
        "5+ years product management experience",
        "Experience with agile methodologies",
        "Strong analytical skills",
        "Technical background preferred",
        "EdTech experience a plus"
      ],
      benefits: [
        "Competitive salary",
        "Product development budget",
        "Leadership opportunities",
        "Health insurance",
        "Stock options"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '10',
      title: "Content Strategist",
      type: "Marketing",
      location: "Kuala Lumpur",
      employmentType: "Full-time",
      description: "Shape our brand voice and content strategy across all platforms, creating compelling narratives that engage our audience.",
      responsibilities: [
        "Develop content strategy",
        "Create editorial calendars",
        "Manage content team",
        "Analyze content performance",
        "Collaborate with marketing team"
      ],
      prerequisites: [
        "3+ years content strategy experience",
        "Strong writing and editing skills",
        "SEO knowledge",
        "Experience with content management systems",
        "Portfolio of published work"
      ],
      benefits: [
        "Competitive salary",
        "Creative freedom",
        "Professional development",
        "Flexible hours",
        "Health insurance"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '11',
      title: "Payroll Specialist",
      type: "Human Resource",
      program: "NIX",
      location: "Kuala Lumpur",
      employmentType: "Internship (6 months)",
      description: "Join our NIX program as a Payroll Specialist intern. Learn comprehensive payroll management while supporting our HR team in maintaining accurate and efficient payroll processes.",
      responsibilities: [
        "Assist in processing monthly payroll",
        "Help maintain employee benefits records",
        "Support statutory compliance documentation",
        "Assist in payroll data entry and verification",
        "Learn payroll software systems"
      ],
      prerequisites: [
        "Currently pursuing degree in Finance, HR, or related field",
        "Strong attention to detail",
        "Basic knowledge of Excel",
        "Good organizational skills",
        "Interest in HR systems"
      ],
      benefits: [
        "Monthly allowance",
        "Hands-on training",
        "Mentorship program",
        "Flexible schedule",
        "Certificate upon completion",
        "Potential for full-time conversion"
      ],
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      id: '12',
title: "UI/UX Designer",
type: "Creative",
program: "NIX",
location: "Kuala Lumpur",
employmentType: "Internship (6 months)",
description: "Join our creative team as a UI/UX Designer intern where you'll help design intuitive and engaging user interfaces and experiences for our products.",
responsibilities: [
  "Collaborate with product managers and developers to define and implement innovative UI/UX solutions",
  "Create wireframes, prototypes, and mockups that align with the project requirements",
  "Conduct user research and testing to gather insights and improve design",
  "Maintain design consistency across different platforms and devices",
  "Contribute to the overall user experience strategy and design system"
],
prerequisites: [
  "Currently pursuing a degree in UI/UX, Graphic Design, or related field",
  "Proficiency in design tools like Figma, Sketch, or Adobe XD",
  "Understanding of design principles and user-centered design practices",
  "Basic knowledge of HTML/CSS is a plus",
  "Strong portfolio showcasing design projects"
],
benefits: [
  "Monthly allowance",
  "Hands-on experience with real projects",
  "Mentorship from senior designers",
  "Exposure to the full product design process",
  "Certificate upon completion",
  "Potential for full-time conversion"
],
linkedinUrl: "https://wa.link/119fnj"
    }
    // ... Add all other jobs here
  ]);
 // Calculate job counts
 const jobCounts: { [key: string]: number } = jobs.reduce((acc: { [key: string]: number }, job) => {
  acc["All"] = (acc["All"] || 0) + 1;
  acc[job.type] = (acc[job.type] || 0) + 1;
  if (job.program === "NIX") {
    acc["NIX Program"] = (acc["NIX Program"] || 0) + 1;
  }
  return acc;
}, {});


const tabs = ["All","NIX Program",  "Creative", "Engineering","Operation", "Human Resource", 
];

return (
  <div className="flex flex-col items-center justify-center z-[20]" id="career">
   <motion.div className="text-center space-y-8 mb-16">
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Find Your Ikigai With Us
        </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
        <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
          What you love
        </span>
        <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
          What you&apos;re great at
        </span>
        
        <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
          What you can be paid for
        </span><span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
          What the world needs
        </span>
      </div>
    </motion.div>
  </div>
  <p className="text-gray-400 max-w-2xl mx-auto">
    At NexzGen, we believe in creating meaningful careers that align with your purpose. Join us in building something extraordinary.
  </p>
</motion.div>
    <div className="flex flex-wrap justify-center space-x-4 tag-container">
      {tabs.map(tab => (
        <ProjectTag
          key={tab}
          name={tab}
          onClick={setSelectedTab}
          isSelected={selectedTab === tab}
        />
      ))}
    </div>
    
    <h3 className="text-lg font-semibold mt-4 mb-5">
      <span className="text-white">{jobCounts[selectedTab] || 0}</span>{" "}
      <span className="text-gray-500">available roles</span>
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 w-full max-w-7xl">
      {jobs
        .filter(job => selectedTab === "All" || 
          (selectedTab === "NIX Program" ? job.program === "NIX" : job.type === selectedTab))
        .map((job, index) => (
          <JobCard
            key={index}
            job={job}
            onClick={() => {
              setSelectedJob(job);
              setIsModalOpen(true);
            }}
          />
        ))}
    </div>

    <JobDetailModal
      job={selectedJob}
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setSelectedJob(null);
      }}
    />

    {/* NIX Program Section */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-7xl mt-32 mb-20"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-[#2A0E61] border border-[#2A0E61]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <span className="text-3xl font-bold">
                <span style={{ color: "#054961" }}>N</span>
    <span style={{ color: "#0b7c67" }}>I</span>
    <span style={{ color: "#b70c30" }}>X</span>
                </span>
                <div className="w-px h-8 bg-gray-700 mx-2" />
                <div className="text-sm text-gray-300 leading-tight">
                  <p>NexzGen</p>
                  <p>Internship</p>
                  <p>eXperience</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Start Your Journey With Our Internship Program
            </h2>
            
            <p className="text-gray-300">
              Join NIX and be part of an exciting journey where you&apos;ll gain hands-on experience,
              receive mentorship from industry experts, and work on cutting-edge projects that
              make a real impact.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/nix-program', '_self')}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          <div className="hidden md:block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full aspect-square"
            >
{/* Image Container with Rounded Mask */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="relative w-4/5 h-4/5">
    {/* Main Image Container */}
    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-gray-900 to-[#2A0E61]">
      <Image
        src="/nix-batch1.png" 
        alt="NIX Program" 
        width={1080}
        height={1920}
        className="w-full h-full object-cover rounded-full p-2"
        style={{
          maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
        }}
      />
      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-gradient-to-t from-black/80 to-transparent">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-medium text-sm md:text-base"
        >
          NIX Cohort 1
        </motion.span>
      </div>
    </div>

    {/* Glowing Effect */}
    <div 
      className="absolute inset-0 rounded-full -z-10"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        filter: 'blur(20px)',
        transform: 'scale(0.9)'
      }}
    />

    {/* Decorative Spinning Circles */}
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full border-4 border-[#054961]/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-0 w-full h-full border-4 border-[#0b7c67]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute inset-0 w-full h-full border-4 border-[#b70c30]/20 rounded-full animate-[spin_20s_linear_infinite]" />
    </div>
  </div>
</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);
};

export default Jobs;