import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface JobCardProps {
  title: string;
  type: string;
  linkedinUrl: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, type, linkedinUrl }) => {
  const handleClick = () => {
    window.open(linkedinUrl, "_blank");
  };

  return (
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group transition-all duration-500 hover:bg-opacity-10 cursor-pointer">
        <div className="p-4 ml-5 mr-40">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-gray-300"> {type}</p>
        </div>
        <div className="overlay flex items-center justify-center absolute inset-0 bg-[#181818] bg-opacity-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70">
          <button
            onClick={handleClick}
            className="absolute bg-transparent p-2 rounded-full hover:bg-purple transition-colors duration-300"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 20, color: "white" }} />
          </button>
        </div>
      </div>
    </a>
  );
};

export default JobCard;
