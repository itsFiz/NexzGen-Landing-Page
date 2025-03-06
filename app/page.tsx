// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from "@/components/main/About";
import Clients from "@/components/main/Clients";
import Hero from "@/components/main/Hero";
import Jobs from "@/components/main/Jobs";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  // Show banner when modal is closed
  useEffect(() => {
    if (!showModal) {
      setShowBanner(true);
    }
  }, [showModal]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full"
    >
      {/* Closure Banner (appears when modal is closed) - now positioned below navbar */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="fixed  left-0 right-0 bg-red-900/90 text-white py-2 z-30 overflow-hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="mx-4 font-medium">
                NexzGen Studio has ceased operations as of March 2025. For inquiries, please contact 
                <a href="mailto:info@nexzgen.com" className="underline ml-1 font-semibold">
                  info@nexzgen.com
                </a>
              </span>
              <span className="mx-4 font-medium">
                NexzGen Studio has ceased operations as of March 2025. For inquiries, please contact 
                <a href="mailto:contact@nexzgen.com" className="underline ml-1 font-semibold">
                  info@nexzgen.com
                </a>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closure Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-[#0c0c0c] border border-[#333] rounded-lg max-w-md w-full p-8 text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.div 
                className="mb-6 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.2 }}
              >
                {/* Replace with your actual logo component or image */}
                <div className="text-2xl font-bold text-white/70">NexzGen Studio</div>
              </motion.div>
              
              {/* Alert Icon */}
              <motion.div
                className="mx-auto mb-6 w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </motion.div>
              
              <motion.h2 
                className="text-xl font-medium text-white mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Closure Notice
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                NexzGen Studio has ceased operations as of March 2025. We sincerely thank our partners, clients, and supporters for their trust during our journey.
              </motion.p>
              
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                We are keeping this website up and running as a token of memorial on the journey for past 1 year.
              </motion.p>
              
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                For any inquiries, please contact <a href="mailto:info@nexzgen.com" className="text-blue-400 hover:text-blue-300 transition-colors">info@nexzgen.com</a>
              </motion.p>
              
              <motion.button
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm"
                onClick={() => setShowModal(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <div className='relative z-10'><Clients /></div>
        
        <Skills />
        <Encryption />
        {/* <Jobs /> */}
      </div>
    </motion.main>
  );
}
