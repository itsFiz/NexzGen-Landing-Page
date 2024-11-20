import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import TabButton from "../sub/TabButton";
import SocialIcon from "../sub/SocialIcon";
import { TAB_DATA} from "@/data/aboutData";
import { Code, Palette, Smartphone, Megaphone, LucideIcon } from 'lucide-react';
import Link from "next/link";
import { BadgeCheck, Award, Briefcase, ChevronDown, ExternalLink } from 'lucide-react';
import IkigaiSection from "./Ikigai";
// Animation variants for expandable content
interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
  isExpanded: boolean;
  onToggle: () => void;
}
const expandAnimation = {
  hidden: { 
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.2 },
      opacity: { duration: 0.2 }
    }
  },
  visible: { 
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.2 },
      opacity: { duration: 0.2 }
    }
  }
};

// Chevron animation
const chevronAnimation = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 }
};

const directorsData = [
  {
    name: "Hafiz Kadir",
    role: "Founder | CEO & CTO",
    altRole: "Chief Everything Officer",
    image: "/ceo.png",
    description: "Visionary technologist with a knack for staying ahead, driving the company's technological endeavors with a forward-thinking approach. Experienced in both technical development and business strategy.",
    qualifications: [
      "Executive (System Development) at TNB Research",
      "Graduate Technologist certified by MBOT",
      "Former IT Associate at UOB, 3D Content Developer at Innoveam",
      "Computer Science (Multimedia) graduate from University Putra Malaysia",
      "Co-inventor of 'ARespiratory', a copyrighted AR app with TRL:6"
    ],
    skills: [
      { 
        category: "Technical", 
        tags: ["AR Development", "Unity", "Web Development", "React", "Full Stack", "Mobile Apps", "3D Content"] 
      },
      { 
        category: "Business", 
        tags: ["Digital Banking", "System Development", "Project Management", "Tech Strategy"] 
      },
      { 
        category: "Leadership", 
        tags: ["Team Leadership", "Innovation Management", "Strategic Planning"] 
      }
    ],
    achievements: [
      "Developed ARespiratory platform reaching TRL:6",
      "Led digital banking initiatives at UOB",
      "Secured pre-seed funding of RM35,000 for NexzGen",
      "Part of MyStartup ecosystem by MOSTI",
      "Created 'Aphasia' as communication tool for patients"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hfzkdr/",
      github: "https://github.com/itsFiz",
      twitter: "https://x.com/criedfizcken",
      instagram: "https://instagram.com/criedfizcken",
      steam: "https://steamcommunity.com/id/itsFizzz/",
      battlenet: "https://overwatch.blizzard.com/en-us/career/f14ca58fb77789a4eafb72fec900a70b48%7C2c74f15c6fe0c3e20f39f161cd365111/",
      tiktok: "https://www.tiktok.com/@criedfizcken",
      website: "https://fiz.framer.website"
    }
  },
  {
    name: "Andi A Ghani",
    role: "Co-founder | CCO",
    altRole: "Chief Cartoon Officer",
    image: "/cco.png",
    description: "A seasoned animation director with over a decade of experience, transforming concepts into captivating visual masterpieces and guiding the artistic direction of major animation projects.",
    qualifications: [
      "Animation Director at Wau Animation (Ejen Ali)",
      "Former Animator at Lescopaque Production",
      "Multimedia Graduate from International University College of Technology (Twintech)",
      "10+ years of animation industry experience"
    ],
    skills: [
      { 
        category: "Creative", 
        tags: ["Animation Direction", "Character Animation", "Storyboarding", "Visual Development", "Creative Direction"] 
      },
      { 
        category: "Technical", 
        tags: ["Animation Software", "Motion Graphics", "Visual Effects", "Production Pipeline"] 
      },
      { 
        category: "Leadership", 
        tags: ["Team Management", "Project Direction", "Creative Team Leadership", "Production Management"] 
      }
    ],
    achievements: [
      "Directed animation for Ejen Ali, a major Malaysian animated series",
      "Led creative teams at top animation studios",
      "Contributed to multiple successful animation projects",
      "Extensive experience in animation production pipelines"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aagak/",
      instagram: "https://www.instagram.com/andibahkalakau/",
      steam: "https://steamcommunity.com/id/aagak/"

    }
  },
  {
    name: "Putera Shazmin",
    role: "Co-founder | COO",
    altRole: "Chief Overtime Officer",
    image: "/coo.png",
    description: "Strategist and implementer with a strong background in human resource management and operational optimization, ensuring seamless business operations and talent development.",
    qualifications: [
      "Human Resource Management Graduate from Universiti Poly-Tech Malaysia",
      "Former Talent Acquisition Intern at Tan Chong Group",
      "Experienced in HR operations and talent management",
      "Specialist in organizational development"
    ],
    skills: [
      { 
        category: "HR Management", 
        tags: ["Talent Acquisition", "Employee Development", "HR Operations", "Performance Management"] 
      },
      { 
        category: "Operations", 
        tags: ["Process Optimization", "Strategic Planning", "Resource Management", "Policy Development"] 
      },
      { 
        category: "Leadership", 
        tags: ["Team Building", "Change Management", "Organizational Development", "Strategic HR"] 
      }
    ],
    achievements: [
      "Established NexzGen's HR framework and policies",
      "Developed talent acquisition strategies",
      "Implemented efficient operational processes",
      "Created employee development programs"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/putera-shazmin-878bb2283/",
      instagram: "https://www.instagram.com/puterashazmin/"
    }
  },
  {
    name: "Aliff Farhat",
    role: "Co-founder | CMO",
    altRole: "Chief Meme Officer",
    image: "/cmo.png",
    description: "Marketing expert and content creator with a strong background in visual storytelling, transforming ideas into compelling narratives and building strong brand presence across platforms.",
    qualifications: [
      "Founder of Farhat Fotografi",
      "Former Videographer at RareTV",
      "Apprentice at Saiful Nang Academy Photography (SNAP)",
      "5+ years of professional photography experience"
    ],
    skills: [
      { 
        category: "Marketing", 
        tags: ["Content Strategy", "Brand Development", "Social Media Marketing", "Visual Storytelling"] 
      },
      { 
        category: "Technical", 
        tags: ["Photography", "Videography", "Content Creation", "Video Editing"] 
      },
      { 
        category: "Digital", 
        tags: ["Social Media Management", "TikTok Creation", "Digital Marketing", "Content Planning"] 
      }
    ],
    achievements: [
      "Built TikTok following with 300k+ views and 5k followers",
      "Founded and grew successful photography business",
      "Developed comprehensive marketing strategies",
      "Created viral social media content campaigns"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aliff-farhat-57705b310/",
      instagram: "https://www.instagram.com/aliff.farhat/",
      tiktok: "https://www.tiktok.com/@aliff.farhat",
      behance: "https://www.behance.net/alyphfarhat"
    }
  },
  {
    name: "Tengku Amirul Haiqal",
    role: "Co-founder | CIO",
    altRole: "Chief Insomnia Officer",
    image: "/cgo.png",
    description: "Creative game designer and developer with expertise in interactive experiences, bringing gaming concepts to life with innovative approaches to engagement and user experience.",
    qualifications: [
      "Game & Interactive Media Design Graduate from Widad University College",
      "Independent Game Developer",
      "Creator of 'Stigma Birth' mobile game",
      "Experienced in game design and development"
    ],
    skills: [
      { 
        category: "Game Development", 
        tags: ["Game Design", "2D Game Development", "Unity", "Mobile Game Development"] 
      },
      { 
        category: "Technical", 
        tags: ["Programming", "Interactive Design", "UI/UX Design", "Platform Development"] 
      },
      { 
        category: "Creative", 
        tags: ["Storytelling", "Level Design", "Game Mechanics", "User Experience"] 
      }
    ],
    achievements: [
      "Successfully launched 'Stigma Birth' on Google Play Store",
      "Developed innovative game mechanics and systems",
      "Created engaging interactive experiences",
      "Implemented gamification strategies in various projects"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tengku-amirul-haiqal",
      youtube: "https://www.youtube.com/@tenkk_ch",
      twitter: "https://x.com/tenkk_ch",
      tiktok: "https://www.tiktok.com/@tenkk_games",
      instagram: "https://www.instagram.com/tenkk_ch/",
      steam: "https://steamcommunity.com/id/tenkutenko/"
    }
  }
];

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  icon: Icon, 
  isExpanded, 
  onToggle 
}) => (
  <div className="mt-4">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-2 mb-3 group"
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-purple-400" />
        <h4 className="text-base sm:text-lg font-semibold text-white">
          {title}
        </h4>
      </div>
      <motion.div
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={chevronAnimation}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={expandAnimation}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Combine both style definitions into a single constant
const styles = `
  @keyframes borderAnimation {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  @keyframes borderLightning {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

// Update the AltRoleStyle interface
interface AltRoleStyle {
  color: string;
  borderColor: string;
}

// Update the altRoleStyles constant (removed emoji property)
const altRoleStyles: { [key: string]: AltRoleStyle } = {
  "Chief Everything Officer": {
   color: "text-violet-400",
    borderColor: "border-violet-400/30"
  },
  "Chief Cartoon Officer": {
    color: "text-pink-400",
    borderColor: "border-pink-400/30"
  },
  "Chief Overtime Officer": {
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30"
  },
  "Chief Meme Officer": {
    color: "text-green-400",
    borderColor: "border-green-400/30"
  },
  "Chief Insomnia Officer": {
    color: "text-blue-400",
    borderColor: "border-blue-400/30"
  }
};

const About = () => {
  const [tab, setTab] = useState<string>("about");
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: { skills: boolean; achievements: boolean }
  }>({});

  const toggleSection = (directorIndex: number, section: 'skills' | 'achievements') => {
    setExpandedSections(prev => ({
      ...prev,
      [directorIndex]: {
        ...prev[directorIndex],
        [section]: !prev[directorIndex]?.[section]
      }
    }));
  };
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };

  const GradientIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0" />
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-6 h-6 stroke-purple-500"  // This applies the gradient color to the icon's stroke
      })}
    </div>
  );
  
  // Animation variants for tab content
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const categories = [
    {
      title: "Digital Transformation",
      icon: <GradientIcon icon={<Code strokeWidth={1.5} className="w-6 h-6 stroke-[url(#gradient)]" />} />,
      description: "We architect powerful web experiences and modernize business operations through custom development, turning complex challenges into streamlined digital solutions.",
      services: [
        {
          name: "Business Landing Pages",
          features: [
            "Custom website design & development",
            "Conversion-optimized layouts",
            "Mobile-first responsive design",
            "SEO-friendly architecture",
            "Performance optimization"
          ]
        },
        {
          name: "Digital Transformation",
          features: [
            "Custom web application development",
            "Business process automation",
            "System integration & APIs",
            "Cloud migration services",
            "Digital workflow optimization"
          ]
        }
      ]
    },
    {
      title: "Creative Production",
      icon: <GradientIcon icon={<Palette strokeWidth={1.5} className="w-6 h-6 stroke-[url(#gradient)]" />} />,
      description: "Elevate your brand with our creative expertise. Our team combines artistic vision with technical mastery to deliver stunning animations and user-centric designs that captivate and engage.",
      services: [
        {
          name: "Animation Studio",
          features: [
            "2D & 3D character animation",
            "Motion graphics & VFX",
            "Animated explainer videos",
            "Storytelling & storyboarding",
            "Animation for games & apps"
          ]
        },
        {
          name: "UI/UX Design",
          features: [
            "User interface design",
            "User experience optimization",
            "Interactive prototyping",
            "Design systems creation",
            "Usability testing & research"
          ]
        }
      ]
    },
    {
      title: "Immersive Technologies",
      icon: <GradientIcon icon={<Smartphone strokeWidth={1.5} className="w-6 h-6 stroke-[url(#gradient)]" />} />,
      description: "Step into the future with our immersive technology solutions. We create cutting-edge AR experiences and mobile applications that push the boundaries of digital interaction.",
      services: [
        {
          name: "Augmented Reality (AR)",
          features: [
            "AR app development",
            "Educational AR experiences",
            "3D product visualization",
            "Interactive AR content",
            "AR for training & simulation"
          ]
        },
        {
          name: "Mobile Development",
          features: [
            "Native iOS & Android apps",
            "Cross-platform solutions",
            "Progressive web apps (PWA)",
            "App maintenance & updates",
            "Mobile AR integration"
          ]
        }
      ]
    },
    {
      title: "Digital Marketing",
      icon: <GradientIcon icon={<Megaphone strokeWidth={1.5} className="w-6 h-6 stroke-[url(#gradient)]" />} />,
      description: "Amplify your brand&quot;s digital presence with our comprehensive marketing solutions. We create data-driven strategies that connect with your audience and drive meaningful results.",
      services: [
        {
          name: "Social Media Marketing",
          features: [
            "Social media strategy",
            "Content creation & curation",
            "Community management",
            "Social media analytics",
            "Influencer partnerships"
          ]
        },
        {
          name: "Digital Marketing Services",
          features: [
            "SEO & content marketing",
            "Paid advertising campaigns",
            "Email marketing automation",
            "Performance analytics",
            "Conversion optimization"
          ]
        }
      ]
    }
  ];


  const renderContent = () => {
    // About Tab
    if (tab === "about") {
      const aboutData = TAB_DATA.find(t => t.id === "about")?.content;
      if (!aboutData || aboutData.type !== 'about') return null;

      return (
        <motion.div 
        key="about"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={contentVariants}
        className=" about-section max-w-7xl mx-auto px-4"
      >
        {/* Top Section with Logo */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative ">
            <Image 
              src='/nexzgen_white_transparent.png'
              width={300}
              height={300}
              alt="NexzGen Studio"
              className="rounded-2xl"
            />
          </div>
          <p className="text-2smy leading-relaxed text-gray-300 max-w-3xl mx-auto">
            {aboutData.description}
          </p>
        </div>
      
        {/* Main Content */}
        <div className="space-y-16">
          {/* Flagship Product Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Flagship Product</h2>
            <p className="text-2smy leading-relaxed text-gray-300">
              Our flagship product, CareerRPG, exemplifies our innovative approach by gamifying career development and professional growth, addressing burnout and career dissatisfaction through an engaging, gamified, purpose-driven platform. This blend of educational technology and practical application reflects our commitment to empowering individuals and organizations in the digital age.
            </p>
          </div>
      
          {/* Services Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-2smy leading-relaxed text-gray-300 max-w-3xl mx-auto">
              We&apos;re driven by a passion for digital transformation and sustainable growth. Our solutions across four key pillars not only drive our revenue but also enable us to sustain research, development, and operational costs for our ventures, ensuring continuous improvement and innovation. 
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <style>{styles}</style>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative p-[1px] rounded-2xl group border border-purple-500/20"
                >
                  {/* Animated border wrapper */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 animate-border-flow" 
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.8), transparent)',
                      backgroundSize: '300% 100%',
                      animation: 'borderAnimation 3s linear infinite',
                    }}
                  />

                  {/* Card content */}
                  <div className="relative p-6 rounded-2xl bg-[#0300145e] backdrop-blur-md group-hover:bg-[#0300147e] transition-all h-full border border-purple-500/10">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
      
            {/* CTA Button */}
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-lg hover:opacity-90 transition-opacity group">
                Explore Our Services
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>
          </div>
      
          {/* Bottom Text */}
          
        </div>
      </motion.div>
      );
    }

    // Vision & Mission Tab
    if (tab === "visionmission") {
      const vmData = TAB_DATA.find(t => t.id === "visionmission")?.content;
      if (!vmData || vmData.type !== 'visionMission') return null;

      return (
        <motion.div 
          key="visionmission"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {vmData.vision.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                {vmData.vision.description}
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {vmData.mission.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                {vmData.mission.description}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vmData.values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <IkigaiSection/>
          </div>
        </motion.div>
      );
    }

    if (tab === "foundingteam") {
      return (
        <motion.div 
      key="foundingteam"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={contentVariants}
      className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 auto-rows-auto"
    >
      {directorsData.map((director, index) => (
        <motion.div
          key={index}
          className="relative group h-fit"
          whileHover={{ scale: 1 }}
        >
          {/* Lightning border wrapper */}
          <div className={`
            absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100
            bg-gradient-to-r from-violet-500 via-violet-200 to-violet-500
            blur-[2px] transition-opacity duration-300
            bg-[length:200%_100%]
            animate-[borderLightning_3s_linear_infinite]
          `} />

          {/* Card content */}
          <div className="director-card relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 h-full">
            <div className="flex flex-col gap-4">
              {/* Header - Image and Basic Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <Image 
                    src={director.image}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={director.name}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                    {director.name}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-400 font-medium">
                    {director.role}
                  </p>
                  <p className={`
                    text-xs italic px-2 py-1 rounded-full inline-flex items-center gap-1
                    ${altRoleStyles[director.altRole].color}
                    ${altRoleStyles[director.altRole].borderColor}
                    border bg-black/20 backdrop-blur-sm
                  `}>
                    also known as "{director.altRole}"
                  </p>
                  <div className="flex gap-2 mt-2">
                    {Object.entries(director.socialLinks).map(([platform, link]) => (
                      <SocialIcon 
                        key={platform} 
                        platform={platform} 
                        link={link}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300">
                {director.description}
              </p>

              {/* Background Summary */}
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Background Summary
                  </h4>
                </div>
                <ul className="space-y-1.5 text-sm sm:text-base text-gray-300">
                  {director.qualifications.map((qualification, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                      <span className="line-clamp-2 sm:line-clamp-none">
                        {qualification}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Section - Expandable */}
              <ExpandableSection
                title="Skills"
                icon={BadgeCheck}
                isExpanded={expandedSections[index]?.skills || false}
                onToggle={() => toggleSection(index, 'skills')}
              >
                <div className="space-y-4">
                  {director.skills.map((skillSet, idx) => (
                    <div key={idx} className="mb-3">
                      <p className="text-sm font-medium text-gray-400 mb-2">
                        {skillSet.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillSet.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ExpandableSection>

              {/* Achievements Section - Expandable */}
              <ExpandableSection
                title="Key Achievements"
                icon={Award}
                isExpanded={expandedSections[index]?.achievements || false}
                onToggle={() => toggleSection(index, 'achievements')}
              >
                <ul className="space-y-1.5">
                  {director.achievements.map((achievement, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </ExpandableSection>
            </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
      );
    }

    return null;
  };

  return (
    <section
      className="relative text-white z-[30] pt-20 pb-40"
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent z-[31]" />

      <div className="relative z-[32]">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 xl:px-16">
          <TabButton
            selectTab={() => handleTabChange("about")}
            active={tab === "about"}
          >
            About
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("visionmission")}
            active={tab === "visionmission"}
          >
            Vision, Mission & Values
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("foundingteam")}
            active={tab === "foundingteam"}
          >
            Founding Team
          </TabButton>
        </div>

        {/* Content Container */}
        <div className="container mx-auto py-8 px-4 xl:gap-16 sm:py-16">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;