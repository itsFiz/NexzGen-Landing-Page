import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const SubmitButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Your submit logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      type="submit"
      onClick={handleSubmit}
      disabled={isLoading}
      className={`
        py-3 px-6 rounded-lg font-semibold
        bg-gradient-to-r from-purple-500 to-blue-500
        text-white transition-all duration-200
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}
      `}
      whileHover={isLoading ? {} : { scale: 1.02 }}
      whileTap={isLoading ? {} : { scale: 0.98 }}
    >
      <div className="flex items-center gap-2">
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </div>
    </motion.button>
  );
};

export default SubmitButton;