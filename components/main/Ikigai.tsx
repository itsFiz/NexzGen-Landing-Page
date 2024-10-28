import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IkigaiSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ikigai Empowerment</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          At NexzGen, we believe in the power of Ikigai - the Japanese concept of finding purpose where your passions, talents, professional goals, and contribution to society intersect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-square max-w-xl mx-auto"
        >
          <div className="relative w-full h-full">
            <Image 
              src="/ikigaii.png"
              alt="Ikigai Diagram"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-3">Our Commitment to Ikigai</h3>
            <p className="text-gray-300">
              We integrate the Ikigai philosophy into everything we do, helping individuals and organizations find their sweet spot where passion meets purpose.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Passion</h4>
              <p className="text-sm text-gray-300">What you love and what you're good at</p>
            </div>
            <div className="bg-green-900/20 backdrop-blur-sm p-4 rounded-xl border border-green-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Mission</h4>
              <p className="text-sm text-gray-300">What you love and what the world needs</p>
            </div>
            <div className="bg-yellow-900/20 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Profession</h4>
              <p className="text-sm text-gray-300">What you're good at and can be paid for</p>
            </div>
            <div className="bg-red-900/20 backdrop-blur-sm p-4 rounded-xl border border-red-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Vocation</h4>
              <p className="text-sm text-gray-300">What the world needs and can pay for</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-indigo-900/20 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20">
            <h3 className="text-xl font-semibold text-white mb-3">Finding Your Purpose</h3>
            <p className="text-gray-300">
              Through our products and services, we guide individuals to discover their unique Ikigai, creating fulfilling careers and meaningful contributions to society.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IkigaiSection;