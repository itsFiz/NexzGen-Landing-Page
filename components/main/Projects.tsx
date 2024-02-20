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
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gitUrl: "https://github.com/itsFiz",
      previewUrl: "https://example.com/next-portfolio",
      tag: ["All", "Web"],
    },
    {
      src: "/CardImage.png",
      title: "Interactive Website Cards",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gitUrl: "https://github.com/example/interactive-cards",
      previewUrl: "https://example.com/interactive-cards",
      tag: ["All", "AR"],
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gitUrl: "https://github.com/example/space-website",
      previewUrl: "https://example.com/space-website",
      tag: ["All", "Web"],
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gitUrl: "https://github.com/example/space-website",
      previewUrl: "https://example.com/space-website",
      tag: ["All", "Web"],
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gitUrl: "https://github.com/example/space-website",
      previewUrl: "https://example.com/space-website",
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
        Our Product
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
          onClick={() => handleTagChange("Animation")}
          name="Animation"
          isSelected={tag === "Animation"}
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