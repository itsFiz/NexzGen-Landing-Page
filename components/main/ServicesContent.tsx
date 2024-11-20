// app/services/page.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Smartphone, Megaphone } from 'lucide-react';
import GetStartedButton from '@/components/sub/GetStartedButton';
import Clients from '@/components/main/Clients';

// First, let's define the TypeScript interfaces
interface Service {
    name: string;
    features: string[];
  }
  
  interface ServiceCategoryProps {
    title: string;
    description: string;
    services: Service[];
    icon: React.ReactNode;
  }

  const GradientIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="w-6 h-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0" />
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-6 h-6 stroke-purple-500"  // This applies the gradient color to the icon's stroke
      })}
    </div>
  );
  
 

  // Updated ServiceCategory component with proper types and click handling
  const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 border border-[#2A0E61] rounded-xl bg-[#2A0E61]/5 backdrop-blur-sm overflow-hidden hover:bg-[#2A0E61]/10 transition-colors duration-300"
      >
        <button 
          className="w-full p-4 flex justify-between items-center cursor-pointer hover:bg-[#2A0E61]/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <ChevronDown 
            className={`transform transition-transform duration-200 text-purple-500 ${isOpen ? '&apos; rotate-180 ' : ''}`}
          />
        </button>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="p-4 border-t border-[#2A0E61]">
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-[#2A0E61]/10 rounded-lg hover:bg-[#2A0E61]/20 transition-colors backdrop-blur-sm"
                >
                  <h4 className="text-lg font-medium text-white mb-2">{service.name}</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  

// Categories data (same as before)
const categories = [
    {
      title: "Digital Solutions",
      icon: <GradientIcon icon={<Code strokeWidth={1.5} className="w-6 h-6 stroke-[url(#gradient)]" />} />,
      description: "Transform your business with our comprehensive digital solutions. We specialize in creating powerful online experiences and modernizing business operations through cutting-edge technology.",
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

  // Add this new component for the hero section
  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative py-20 text-center px-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
        >
          Level Up Your Digital Presence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Innovative solutions for modern businesses. We bring your ideas to life through cutting-edge technology and creative excellence.
        </motion.p>
      </div>
    </motion.div>
  );

  // Add this new component for service overview cards
  const ServiceOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 -mt-10"
    >
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="bg-[#2A0E61]/10 backdrop-blur-sm border border-[#2A0E61] rounded-xl p-6 hover:bg-[#2A0E61]/20 transition-all duration-300 hover:scale-105"
        >
          <div className="mb-4">{category.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
          <p className="text-gray-400 text-sm">{category.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  
export default function ServicesContent() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative">
        <HeroSection />
        <ServiceOverview />
        
        {/* Update the Detailed Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-transparent py-20"
        >
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
              Our Expertise
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
              Discover our comprehensive range of services designed to elevate your business
            </p>
            <div className="space-y-6">
              {categories.map((category, index) => (
                <ServiceCategory 
                  key={index} 
                  {...category} 
                />
              ))}
            </div>
          </div>
        </motion.div>

        <Clients />

        {/* Update the CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="py-20 px-4 text-center bg-gradient-to-b from-transparent to-[#2A0E61]/20"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-gray-300">
              Let&apos;s collaborate to bring your vision to life with our comprehensive suite of services.
            </p>
            <GetStartedButton />
          </div>
        </motion.div>
      </div>
    </main>
  );
}