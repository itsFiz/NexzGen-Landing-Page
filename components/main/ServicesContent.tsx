// app/services/page.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Smartphone, Megaphone } from 'lucide-react';
import GetStartedButton from '@/components/sub/GetStartedButton';

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
        className="mb-8 border border-[#2A0E61] rounded-lg bg-transparent backdrop-blur-sm overflow-hidden"
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

  
export default function ServicesContent() {
  return (
    <main className="flex flex-col min-h-screen z-[10]">
      <div className="relative">
        {/* Hero Section */}
        

        {/* Services Overview Cards */}
        

        {/* Detailed Services Section */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="bg-transparent"  // Changed from bg-[#0300140d]
>
  <div className="max-w-6xl mx-auto p-6 py-20">
    <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
      Explore Our Services
    </h2>
    <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
            Comprehensive services tailored to transform your ideas into reality.
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

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className=" px-4 text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-gray-300">
              Let&apos;s collaborate to bring your vision to life with our comprehensive suite of services.
            </p>
            
<GetStartedButton/>
          </div>
        </motion.div>
      </div>
    </main>
  );
}