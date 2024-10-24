// components/TabButton.tsx
import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`
        relative px-6 py-2 rounded-full text-base font-semibold transition-all
        ${active 
          ? "text-white bg-gradient-to-r from-purple-500 to-blue-500" 
          : "text-[#ADB7BE] hover:text-white"
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {active && (
        <motion.div
          className=" bg-gradient-to-r from-purple-500 to-blue-500"
          layoutId="activeTab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;