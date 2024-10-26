'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

interface FooterLink {
  text: string;
  link?: string;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  content: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  link: string;
}

interface SocialLinks {
  community: SocialLink[];
  social: SocialLink[];
}

const currentYear = new Date().getFullYear();

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "About",
      content: [
        {
          text: "SSM Business Info",
          link: "https://drive.google.com/file/d/1Obni8cbmoY0tUeNBv7On7ue5JP92Erk1/view?usp=sharing",
          icon: <ExternalLink className="w-4 h-4" />
        },
        {
          text: "+60 11-1302 5474",
          link: "tel:+60 11-1302 5474",
          icon: <Phone className="w-4 h-4" />
        },
        {
          text: "info@nexzgen.com",
          link: "mailto:info@nexzgen.com",
          icon: <Mail className="w-4 h-4" />
        },
        {
          text: "Level 9, Integra Tower, Jalan Tun Razak, 50400, Kuala Lumpur, Malaysia",
          icon: <MapPin className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Services",
      content: [
        { text: "Digital Solutions", link: "services" },
        { text: "Creative Production", link: "services" },
        { text: "Immersive Technologies", link: "services" },
        { text: "Digital Marketing", link: "services" }
      ]
    }
  ];

  const socialLinks: SocialLinks = {
    community: [
      { icon: <FaDiscord className="w-5 h-5" />, name: 'Discord', link: 'https://discord.gg/e7q4NkBr7e' },
      { icon: <FaYoutube className="w-5 h-5" />, name: 'YouTube', link: 'https://www.youtube.com/@nexzgenstudio' },
      { icon: <FaWhatsapp className="w-5 h-5" />, name: 'WhatsApp', link: 'https://wa.link/wgcd4s' },
      { icon: <FaTelegram className="w-5 h-5" />, name: 'Telegram', link: 'https://t.me/nexzgen' }
    ],
    social: [
      { icon: <RxLinkedinLogo className="w-5 h-5" />, name: 'LinkedIn', link: 'https://www.linkedin.com/company/nexzgenstudio' },
      { icon: <FaInstagram className="w-5 h-5" />, name: 'Instagram', link: 'https://www.instagram.com/nexzgenstudio' },
      { icon: <FaFacebook className="w-5 h-5" />, name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61556648944759' },
      { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter', link: 'https://twitter.com/NexzGenStudio' }
    ]
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative z-10 w-full bg-gradient-to-b from-transparent to-[#0300145e] backdrop-blur-md pt-16 pb-8"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center space-y-4 max-w-[250px]">
            <motion.div 
              className="flex flex-col items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/nexzgencircular.png"
                width={60}
                height={60}
                className="object-contain group-hover:rotate-12 transition-transform duration-300"
                alt="NexzGen Logo"
              />
              <span className="font-bold text-xl text-gray-200">
                NexzGen Studio
              </span>
            </motion.div>
            <p className="text-sm text-gray-300 text-center">
              202403051936 (003579929-K)
            </p>
            <p className="text-sm text-gray-300 text-center">
              Empowering individuals and businesses through AI-driven EdTech solutions, Extended Reality(XR) experiences, innovative SaaS platforms & SMMA strategies.
            </p>
          </div>

          {/* Information Sections */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4"
            >
              <h3 className="font-bold text-base text-gray-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300">
                {section.title}
              </h3>
              <div className="flex flex-col items-center space-y-3">
                {section.content.map((item, index) => (
                  item.link ? (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 group transition-colors text-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon && (
                        <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.text}</span>
                    </motion.a>
                  ) : (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300 text-center">
                      {item.icon && (
                        <span className="text-purple-400 flex-shrink-0">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.text}</span>
                    </div>
                  )
                ))}
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          {(Object.keys(socialLinks) as Array<keyof typeof socialLinks>).map((type, idx) => (
            <motion.div
              key={type}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4"
            >
              <h3 className="font-bold text-base text-gray-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h3>
              <div className="flex flex-col items-center space-y-3">
                {socialLinks[type].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 group transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800 text-sm text-center text-gray-300"
        >
          <p>Copyright © {currentYear} NexzGen. All rights reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;