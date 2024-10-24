"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "../sub/Card";

const images = [
  {
    url: "/rtm.png",
    alt: "RTM",
    description: "Radio Television Malaysia"
  },
  {
    url: "/MCMC_Logo.png",
    alt: "MCMC",
    description: "Malaysian Communications and Multimedia Commission"
  },
  {
    url: "/mdec.webp",
    alt: "MDEC",
    description: "Malaysia Digital Economy Corporation"
  },
  {
    url: "/perkeso.png",
    alt: "Perkeso",
    description: "Social Security Organisation"
  },
  {
    url: "/klinikiris.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  },
  {
    url: "/ppim.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  },
  {
    url: "/upm.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  },
  {
    url: "/pharmaniaga.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  },
  {
    url: "/as.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  },
  {
    url: "/srk.png",
    alt: "KlinikPergigianIris",
    description: "Klinik Pergigian Iris"
  }
];


const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1000); // Slower rotation for better visibility

    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1.2 },
    hover: { scale: 1.25, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted By
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Partnering with leading organizations to drive innovation in education and technology
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {images.map((image, index) => (
              <motion.div
                key={image.alt}
                className="relative group"
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => {
                  setIsHovered(true);
                  setAutoplayEnabled(false);
                  setActiveIndex(index);
                }}
                onHoverEnd={() => {
                  setIsHovered(false);
                  setAutoplayEnabled(true);
                }}
              >
                <Card className="p-4 w-40 h-40 flex items-center justify-center relative overflow-hidden group">
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1 : 0.9,
                      opacity: activeIndex === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={120}
                      height={120}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-white text-xs text-center">
                      {image.description}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => {
                setActiveIndex(index);
                setAutoplayEnabled(false);
                setTimeout(() => setAutoplayEnabled(true), 5000);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;