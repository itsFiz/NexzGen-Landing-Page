// app/components/TabButton.tsx
'use client';
import { motion } from 'framer-motion';

interface TabButtonProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function TabButton({ children, selected, onClick }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
        selected 
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" 
          : "text-gray-400 hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}