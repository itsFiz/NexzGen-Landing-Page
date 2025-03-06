"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Parallax and fade effects based on scroll
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Navigation handlers
  const handleProjectsClick = () => {
    
      router.push('/ventures');
    
  };

  const handleCareersClick = () => {
    router.push('/careers');
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-black/20 z-[2]" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/blackhole.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mt-20 md:mt-10 text-5xl md:text-7xl font-bold text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            NexzGen Studio
          </span>
        </motion.h1>

        {/* Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" mt-56 md:mt-28"
        >
          <motion.img 
            src="/nexzgencircular.png" 
            alt="NexzGen Logo" 
            className=" center w-40 h-40 mx-auto rounded-full bg-white/10 backdrop-blur-sm p-4"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-20 text-2smy  text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          Digital startup that seamlessly blends creativity with cutting-edge technology. Empowering individuals and businesses through AI-driven EdTech solutions, Extended Reality(XR) experiences, innovative SaaS platforms & SMMA strategies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full relative overflow-hidden group"
            
          >
            <motion.span 
              className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"
            />
            <span className="relative z-10">
              Explore Our Ventures
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full relative overflow-hidden group"
            
          >
            <motion.span 
              className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"
            />
            <span className="relative z-10">Join Our Team</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12  flex items-start justify-center p-2">
            <motion.div animate={{
                y: [0, 8, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
              <ChevronDown className="w-8 h-8 text-white/50" />
              </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
    </motion.div>
  );
};

export default Hero;