// components/SocialIcon.tsx
import React from "react";
import { motion } from "framer-motion";
import { GrLinkedin, GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

interface SocialIconProps {
  platform: string;
  link: string;
}

type IconType = {
  [key: string]: React.ComponentType<{ className?: string }>;
};

const ICONS: IconType = {
  linkedin: GrLinkedin,
  github: GrGithub,
  twitter: GrTwitter,
  instagram: GrInstagram,
  tiktok: FaTiktok,
};

const SocialIcon: React.FC<SocialIconProps> = ({ platform, link }) => {
  const Icon = ICONS[platform.toLowerCase()];

  if (!Icon) return null;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

export default SocialIcon;