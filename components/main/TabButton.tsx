"use-client"
import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-purple" : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      className={`
        relative px-6 py-2 rounded-full text-base font-semibold transition-all
        ${active 
          ? "text-white bg-gradient-to-r from-purple-500 to-blue-500" 
          : "text-[#ADB7BE] hover:text-white"
        }
      `}
    >
      {children}
      {active && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
        />
      )}
    </button>
  );
};

export default TabButton;