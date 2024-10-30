// components/main/FeatureHighlights.tsx
import React from 'react';
import { motion } from 'framer-motion';

const  FeatureHighlights = () => {
    const features = [
      {
        title: "AI-Powered Learning",
        description: "Personalized education pathways adapted to your learning style.",
        icon: "🧠"
      },
      {
        title: "Career Development",
        description: "Find your ikigai through gamified professional growth.",
        icon: "🎮"
      },
      {
        title: "Innovation Hub",
        description: "Access cutting-edge tools and technologies.",
        icon: "💡"
      },
      {
        title: "Community",
        description: "Join a thriving ecosystem of learners and innovators.",
        icon: "🤝"
      }
    ];
  
    return (
      <div className="relative py-20 bg-gradient-to-b from-[#030014] to-[#090420]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pioneering the Future of Learning
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the convergence of education and innovation through our comprehensive suite of solutions.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    
);
  };

  export {FeatureHighlights};