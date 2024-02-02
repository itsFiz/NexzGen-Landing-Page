import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string;
}

const ProjectCard = ({ src, title, description, gitUrl, previewUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group transition-all duration-500 hover:bg-opacity-10">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70">
        <div className="flex space-x-4">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"  // Open link in a new tab
              rel="noopener noreferrer"  // Recommended for security reasons
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover:link-dark"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white group-hover:link-icon" />
            </a>
          )}
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"  // Open link in a new tab
              rel="noopener noreferrer"  // Recommended for security reasons
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover:link-dark"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white group-hover:link-icon" />
            </a>
          )}
        </div>
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
