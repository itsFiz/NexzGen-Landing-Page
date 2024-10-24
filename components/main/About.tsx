import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import TabButton from "../sub/TabButton";
import SocialIcon from "../sub/SocialIcon";
import { TAB_DATA, directorsData} from "@/data/aboutData";
import { ChevronDown, Code, Palette, Smartphone, Megaphone } from 'lucide-react';
import GetStartedButton from "../sub/GetStartedButton";
import Link from "next/link";

const About = () => {
  const [tab, setTab] = useState<string>("about");

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
      title: "Creative Services",
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
      description: "Amplify your brand's digital presence with our comprehensive marketing solutions. We create data-driven strategies that connect with your audience and drive meaningful results.",
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
        className="about-section max-w-7xl mx-auto px-4"
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
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md group hover:bg-[#0300147e] transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
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
          className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2"
        >
          {directorsData.map((director, index) => (
            <motion.div
              key={index}
              className="director-card bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
              whileHover={{ scale: 1.02, translateY: -5 }}
            >
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
                  
                  <div className="min-w-0"> {/* prevent text overflow */}
                    <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                      {director.name}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-400 font-medium">
                      {director.role}
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
                <p className="text-sm sm:text-base text-gray-300 line-clamp-3 sm:line-clamp-none">
                  {director.description}
                </p>
  
                {/* Qualifications */}
                <div className="mt-2">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Qualifications
                  </h4>
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