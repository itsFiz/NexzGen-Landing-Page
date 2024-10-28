import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GrLinkedin, GrGithub, GrInstagram, GrYoutube, GrGoogle, GrTwitter } from "react-icons/gr";
import { FaTiktok, FaSteam, FaBehance, FaItchIo, FaDiscord, FaReddit } from "react-icons/fa";
import { SiBattledotnet, SiKofi, SiPatreon, SiDeviantart, SiArtstation } from "react-icons/si";
import { BsTwitch } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface SocialIconProps {
  platform: string;
  link: string;
}

type IconComponent = React.ComponentType<{ className?: string }>;

interface ComponentIcon {
  type: 'component';
  icon: IconComponent;
}

interface ImageIcon {
  type: 'image';
  src: string;
}

type IconDefinition = ComponentIcon | ImageIcon;

const ICONS: Record<string, IconDefinition> = {
  // Professional
  linkedin: { type: 'component', icon: GrLinkedin },
  github: { type: 'component', icon: GrGithub },
  behance: { type: 'component', icon: FaBehance },
  website: { type: 'component', icon: CgWebsite },
  
  // Social Media
  twitter: { type: 'component', icon: GrTwitter },
  x: { type: 'image', src: '/logo-white.png' },
  instagram: { type: 'component', icon: GrInstagram },
  tiktok: { type: 'component', icon: FaTiktok },
  youtube: { type: 'component', icon: GrYoutube },
  twitch: { type: 'component', icon: BsTwitch },
  reddit: { type: 'component', icon: FaReddit },
  discord: { type: 'component', icon: FaDiscord },
  
  // Gaming
  steam: { type: 'component', icon: FaSteam },
  battlenet: { type: 'component', icon: SiBattledotnet },
  itchio: { type: 'component', icon: FaItchIo },
  googleplay: { type: 'component', icon: GrGoogle },
  
  // Art & Creation
  artstation: { type: 'component', icon: SiArtstation },
  deviantart: { type: 'component', icon: SiDeviantart },
  
  // Support & Monetization
  patreon: { type: 'component', icon: SiPatreon },
  kofi: { type: 'component', icon: SiKofi }
};

const HOVER_COLORS: Record<string, string> = {
  linkedin: "hover:text-[#0077B5]",
  github: "hover:text-[#FFF]",
  behance: "hover:text-[#1769FF]",
  twitter: "hover:text-[#158cd6]",
  instagram: "hover:text-[#E4405F]",
  tiktok: "hover:text-[#FFF]",
  youtube: "hover:text-[#FF0000]",
  twitch: "hover:text-[#9146FF]",
  steam: "hover:text-[#5a6273]",
  battlenet: "hover:text-[#00AEFF]",
  itchio: "hover:text-[#FA5C5C]",
  googleplay: "hover:text-[#414141]",
  artstation: "hover:text-[#13AFF0]",
  deviantart: "hover:text-[#05CC47]",
  patreon: "hover:text-[#FF424D]",
  kofi: "hover:text-[#FF5E5B]",
  reddit: "hover:text-[#FF4500]",
  discord: "hover:text-[#5865F2]",
  website: "hover:text-[#00ff95]"
};

const SocialIcon: React.FC<SocialIconProps> = ({ platform, link }) => {
  const iconDef = ICONS[platform.toLowerCase()];
  const hoverColor = HOVER_COLORS[platform.toLowerCase()] || "hover:text-white";

  if (!iconDef) return null;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 ${hoverColor} transition-colors duration-300`}
      whileHover={{ 
        scale: 1.1, 
        y: -2,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      {iconDef.type === 'image' ? (
        <div className="w-5 h-5 relative">
          <Image
            src={iconDef.src}
            alt={platform}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <iconDef.icon className="w-5 h-5" />
      )}
      <span className="sr-only">{platform}</span>
    </motion.a>
  );
};

export default SocialIcon;