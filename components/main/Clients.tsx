"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  

  {
    url: "/rtm.png",
    alt: "RTM",
  },

  {
    url: "/MCMC_Logo.png",
    alt: "MCMC",
  },

  {
    url: "/mdec.webp",
    alt: "MDEC",
  },

  {
    url: "/perkeso.png",
    alt: "Perkeso",
  },

 
  {
    url: "/litera.png",
    alt: "LiteraLearn",
  },

];

const Clients = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center px-4"> {/* Add padding to the sides */}
      <div
        className="text-3xl font-bold mt-20 bg-clip-text bg-gradient-to-r from-purple-500 to-purple-50 text-transparent"
      >
        Clients & Collaborators
      </div>

      <div className="flex justify-center items-center p-4 md:flex gap-4 flex-wrap"> {/* Add gap between images */}
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 0.8 : 0.6,
              }}
              className="flex items-center justify-center h-40 w-40 md:w-1/4"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={150} // Adjust width as needed
                height={150} // Adjust height as needed
                className="object-contain h-full w-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Clients;