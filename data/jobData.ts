import { Job } from '@/types/job';

export const jobData: Job[] = [{
  id: '1',
  title: "Founding Engineer",
  type: "Engineering",
  isFoundingRole: true, // Add this flag
  location: "Kuala Lumpur",
  employmentType: "Full-time",
  description: "Join NexzGen as a Founding Engineer to help build and scale our suite of innovative products including CareerRPG, NexzGen Academy, and ServisLah. As one of our first engineering hires, you'll have significant input into our technical direction and architecture while working on products that empower personal and professional fulfillment.",
  responsibilities: [
    "Architect and develop full-stack web applications using Next.js, React, and Prisma",
    "Design and implement scalable database schemas and APIs",
    "Lead technical decisions and establish engineering best practices",
    "Mentor junior developers and interns through our NIX program",
    "Collaborate with product and design teams to deliver exceptional user experiences",
    "Contribute to technical strategy and product roadmap planning",
    "Help build and nurture our engineering culture"
  ],
  prerequisites: [
    "3+ years of full-stack development experience",
    "Strong expertise in Next.js, React, and TypeScript",
    "Experience with Prisma, PostgreSQL, and RESTful/GraphQL APIs",
    "Proficiency in modern frontend development (Tailwind CSS, React Query, etc.)",
    "Understanding of CI/CD, testing practices, and cloud deployment",
    "Track record of leading technical projects and mentoring developers",
    "Strong problem-solving skills and attention to detail",
    "Startup mindset and ability to thrive in a fast-paced environment"
  ],
  benefits: [
    "Competitive salary with equity package",
    "Leadership role in shaping our technical direction",
    "Flexible working arrangements with remote options",
    "Health insurance and wellness benefits",
    "Professional development budget",
    "Regular team building and social events",
    "Opportunity to join a rapidly growing startup with Y Combinator ambitions"
  ],
  applyUrl: "/careers/apply/1",
  
},
{
  id: '2',
  title: "Founding Designer",
  type: "Creative",
  isFoundingRole: true, // Add this flag
  location: "Kuala Lumpur",
  employmentType: "Full-time",
  description: "Join NexzGen as a Founding Designer to shape the visual identity and user experience of our innovative products. You'll work closely with our team to create engaging, intuitive interfaces for CareerRPG, NexzGen Academy, and other groundbreaking platforms. Path to Head of Design as we scale, with opportunity to build and lead the design team through our Y Combinator journey in 2026.",
  responsibilities: [
    "Lead the end-to-end design process from concept to implementation",
    "Create and maintain our design system across all products",
    "Design intuitive, engaging user interfaces and experiences",
    "Conduct user research and translate insights into design solutions",
    "Collaborate with engineers to ensure pixel-perfect implementation",
    "Mentor junior designers and interns in our design programs",
    "Drive design thinking and innovation across the company",
    "Create compelling visual assets for marketing and branding"
  ],
  prerequisites: [
    "4+ years of product design experience",
    "Strong portfolio demonstrating UI/UX excellence",
    "Expert knowledge of Figma and modern design tools",
    "Experience designing for web and mobile platforms",
    "Understanding of design systems and component libraries",
    "Knowledge of frontend development principles",
    "Experience with gamification and educational design",
    "Strong communication and presentation skills"
  ],
  benefits: [
    "Competitive salary with equity package",
    "Creative freedom to shape product design direction",
    "Flexible working arrangements with remote options",
    "Health insurance and wellness benefits",
    "Professional development and conference budget",
    "Latest design tools and equipment",
    "Regular design workshops and team collaboration"
  ],
  applyUrl: "/careers/apply/2"
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
    applyUrl: "/careers/apply/3"
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
    applyUrl: "/careers/apply/4"
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
    applyUrl: "/careers/apply/5"
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
    applyUrl: "/careers/apply/6"
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
    applyUrl: "/careers/apply/7"
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
    applyUrl: "/careers/apply/8"
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
    applyUrl: "/careers/apply/9"
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
    applyUrl: "/careers/apply/10"
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
    applyUrl: "/careers/apply/11"
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
applyUrl: "/careers/apply/12"
  },
  {
  id: '13',
    title: "Augmented Reality (AR) Developer",
    type: "Engineering",
    program:"NIX",
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
  applyUrl: "/careers/apply/13"
  },
  {
    id: '14',
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
    applyUrl: "/careers/apply/14"
  },
  {
    id: '15',
    title: "Fullstack Developer",
    type: "Engineering",
    program: "NIX",
    location: "Kuala Lumpur",
    employmentType: "Internship",
    description: "Join our NIX program as a part-time Fullstack Developer intern. Work alongside our engineering team to build and maintain web applications while gaining hands-on experience with modern development technologies.",
    responsibilities: [
      "Assist in developing features using Next.js and React",
      "Write clean, maintainable code under mentorship",
      "Learn and implement backend APIs with Prisma",
      "Participate in code reviews and technical discussions",
      "Collaborate with other interns and full-time developers"
    ],
    prerequisites: [
      "Currently pursuing Computer Science or related degree",
      "Basic knowledge of JavaScript/TypeScript",
      "Familiarity with React fundamentals",
      "Understanding of HTML, CSS, and responsive design",
      "Strong willingness to learn and grow"
    ],
    benefits: [
      "Monthly allowance",
      "Flexible working hours",
      "Mentorship from senior developers",
      "Hands-on project experience",
      "Certificate upon completion",
      "Potential for full-time conversion"
    ],
    applyUrl: "/careers/apply/15"
  },
  // ... Add all other jobs here
]