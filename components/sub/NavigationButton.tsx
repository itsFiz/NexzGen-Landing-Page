import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const NavigationButtons = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = async (path: string) => {
    setIsLoading(true);
    // For page navigation
    await router.push(path);
    setIsLoading(false);
  };

  const handleScrollNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
        className={`px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full relative overflow-hidden ${
          isLoading ? 'cursor-not-allowed opacity-80' : ''
        }`}
        onClick={() => handleNavigation('/projects')}
      >
        {isLoading ? (
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ) : null}
        <span className="relative z-10">
          {isLoading ? 'Loading...' : 'Explore Our Projects'}
        </span>
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
        className={`px-8 py-3 bg-transparent border-2 border-white text-white rounded-full relative ${
          isLoading ? 'cursor-not-allowed opacity-80' : ''
        }`}
        onClick={() => handleNavigation('/careers')}
      >
        {isLoading ? (
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ) : null}
        <span className="relative z-10">
          {isLoading ? 'Loading...' : 'Join Our Team'}
        </span>
      </motion.button>
    </div>
  );
};

export default NavigationButtons;