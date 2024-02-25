"use-client"
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-purple" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-3 text-lg font-semibold hover:text-purple ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 absolute bottom-0 left-0 right-0"
      ></motion.div>
    </button>
  );
};

export default TabButton;
