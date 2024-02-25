'use client'

import React, { useState, useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const projectsData = [
    
    {
      src: "/nexzgenwebsite.png",
      title: "NexzGen Website",
      description: "Immersive website powered by Next.js, Framer Motion, and Three.js.Discover seamless navigation, stunning animations, and interactive elements that elevate your online experience. ",
    
      tag: ["All", "Web"],
    },
    {
      src: "/ARespiratory.png",
      title: "ARespiratory",
      description: "An Augmented Reality application to revolutionize medical education by offering an immersive and interactive learning experience. Won a Gold Medal 🥇 at the International University Carnival on e-Learning (IUCEL) 2022. Copyrighted and patented by MyIPO",
      gitUrl: "https://github.com/itsFiz/ARespiratory",
      previewUrl: "https://arespiratory.com",
      tag: ["All", "AR"],
    },
    {
      src: "/reactpokedexfinale.png",
      title: "React Pokédex",
      description: "A dynamic and interactive web application built with React.js. This project serves as a comprehensive Pokédex, allowing users to browse through a rich collection of Pokémon, view their details, and stay updated on the latest information.",
      gitUrl: "https://github.com/itsFiz/react-pokedexe",
      previewUrl: "https://reactpokedexx.netlify.app/",
      tag: ["All", "Web"],
    },
    {
      src: "/evv.png",
      title: "Educity Village(EV)",
      description: "The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.",
      gitUrl: "https://github.com/itsFiz/ev_django", 
      previewUrl: "https://www.youtube.com/watch?v=LkATF4jqDlU&list=PLX3AEknl3ENJFVaBkrFAJlFyuyBgpo6ZI",
      tag: ["All", "Mobile"],
    },
    {
      src: "/cozyshop.jpeg",
      title: "CozyShop E-Commerce",
      description: "Cozyshop is an exciting and innovative ecommerce project that aims to redefine the online shopping experience. With a commitment to providing customers with top-quality products, outstanding service, and a seamless user experience.",
      previewUrl: "https://xd.adobe.com/view/dfd74d8e-99b2-497e-9184-ccc7c11577be-8a84/",
      tag: ["All", "Web"],
    },
  
    {
      src: "/pendekarjahat.jpg",
      title: "Pendekar Jahat",
      description: "Pendekar Jahat is a menacing 3D warrior character brought to life through meticulous 3D modeling and texturing. This dark and enigmatic character represents the embodiment of evil in a fantasy world. The project showcases an intricately designed evil warrior, featuring sinister armor, menacing weapons, and a foreboding presence.",
      previewUrl: "https://streamable.com/tzlm44",
      tag: ["All", "Animation"],
    },
    {
      src: "/donut.jpg",
      title: "3D Donut",
      description: "3D Donut Oreo is a visually delectable 3D modeling project crafted using the powerful Blender software. This artful project takes a delicious spin on the classic donut and Oreo cookie. ",
      previewUrl:"https://streamable.com/l08osg",
      tag: ["All", "Animation"],
    },
    {
      src: "/Zexate.png",
      title: "3D Zexate",
      description: "By creating a compelling and informative 3D model of Zexate, we aim to foster greater understanding, appreciation, and adoption of this groundbreaking medicine, ultimately improving healthcare outcomes and quality of life for individuals worldwide.",
      
      tag: ["All", "Animation"],
    },
    {
      src: "/EndotrachealTube.png",
      title: "3D Endotracheal Tube",
      description: "3D Donut Oreo is a visually delectable 3D modeling project crafted using the powerful Blender software. This artful project takes a delicious spin on the classic donut and Oreo cookie. ",
      
      tag: ["All", "Animation"],
    },
    
  ];

 const filteredProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center  z-[20] " id="product">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-50 py-20">
        Our Work
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("AR")}
          name="AR"
          isSelected={tag === "AR"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Game")}
          name="Game"
          isSelected={tag === "Game"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Animation")}
          name="Animation"
          isSelected={tag === "Animation"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 relative z-[20]" ref={ref}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                src={project.src}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;