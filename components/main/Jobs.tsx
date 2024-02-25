"use client";
import React, { useState } from "react";
import JobCard from "../sub/JobCard"; // Assuming you have a JobCard component for displaying job details

interface Job {
    title: string;
    type: string;
    linkedinUrl?: string; // Make linkedinUrl optional if it's not always present
  }
interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}

// Define the ProjectTag component
const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};



const Jobs = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [jobs] = useState([
    {
        title: "Augmented Reality (AR) Developer",
        type: "Engineering",
        linkedinUrl:"https://www.linkedin.com/hiring/jobs/3832653540/detail/"
      },
    {
      title: "Fullstack Developer (Next.js)",
      type: "Engineering",
      linkedinUrl: "https://wa.link/119fnj"
    },
    {
      title: "Flutter Developer",
      type: "Engineering",
      linkedinUrl: "https://wa.link/119fnj"

    },
    {
      title: "UI/UX Designer",
      type: "Creative",
      linkedinUrl: "https://wa.link/119fnj"

    },
    {
        title: "iOS Developer",
        type: "Engineering",
      linkedinUrl: "https://wa.link/119fnj"

      },
    {
      title: "Graphic Designer",
      type: "Creative",
      linkedinUrl: "https://wa.link/119fnj"

    },
    {
      title: "Talent Acquisition",
      type: "Human Resource",
      linkedinUrl: "https://wa.link/119fnj"

    },
    {
      title: "Finance Analyst",
      type: "Finance",
      linkedinUrl: "https://wa.link/119fnj"

    },
    {
        title: "Business Development",
        type: "Business",
      linkedinUrl: "https://wa.link/119fnj"

    },
  ]);

 // Calculate the count of jobs for the selected tab
 const jobCounts: { [key: string]: number } = jobs.reduce((acc: { [key: string]: number }, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    acc["All"] = (acc["All"] || 0) + 1;
    return acc;
  }, {});
  
  const tabs = ["All", "Engineering", "Creative", "Business", "Human Resource", "Finance"];

  return (
    <div className="flex flex-col items-center justify-center z-[20]" id="career">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-50 py-20">
        Internship Opportunities
      </h1>
      <div className="flex space-x-4 tag-container">
        {tabs.map(tab => (
          <ProjectTag
            key={tab}
            name={tab}
            onClick={setSelectedTab}
            isSelected={selectedTab === tab}
          />
        ))}
      </div>
      
      <h3 className="text-lg font-semibold mt-4 mb-5">
        <span className="text-white">{jobCounts[selectedTab]}</span>{" "}
        <span className="text-gray-500">available roles</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {/* Render JobCards based on the selected tab */}
        {jobs
          .filter(job => selectedTab === "All" || job.type === selectedTab)
          .map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              type={job.type}
              linkedinUrl={job.linkedinUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default Jobs;
