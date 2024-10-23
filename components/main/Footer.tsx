'use client'
import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className=" relative z-10 flex flex-col items-center justify-center  backdrop-blur-md mt-auto bg-transparent"
    >
      <div className="w-full max-w-[1400px] text-gray-200 p-4 md:p-8">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Main Footer Content */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="https://i.imgur.com/GvgmDPf.png"
                  className="w-[60px] h-auto object-contain"
                  alt="NexzGen Logo"
                />
                <span className="font-bold text-xl text-gray-300 hidden md:block">
                  NexzGen
                </span>
              </div>
            </div>

        

            {/* About Section */}
            <div className=" flex flex-col items-center lg:items-start space-y-4">
              <h3 className="font-bold text-base">About</h3>
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <a href="https://drive.google.com/file/d/1Obni8cbmoY0tUeNBv7On7ue5JP92Erk1/view?usp=sharing" 
                   target="_blank" 
                   className="footer-link text-sm text-center lg:text-left">
                  NexzGen Studio 202403051936 (003579929-K)
                </a>
                <a href="https://wa.link/wgcd4s" 
                   target="_blank" 
                   className="footer-link text-sm">
                  +60 11-1302 5474
                </a>
                <a href="mailto:info@nexzgen.com" 
                   className="footer-link text-sm">
                  info@nexzgen.com
                </a>
                <p className="footer-link text-sm text-center lg:text-left">
                  Level 9, Integra Tower, Jalan Tun Razak, 50400, Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h3 className="font-bold text-base">Services</h3>
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <a href="#services" className="footer-link text-sm">Web & Mobile App Development</a>
                <a href="#services" className="footer-link text-sm">Augmented Reality</a>
                <a href="#services" className="footer-link text-sm">UI/UX Design</a>
                <a href="#services" className="footer-link text-sm">Social Media Marketing</a>
              </div>
            </div>

            {/* Community Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h3 className="font-bold text-base">Community</h3>
              <div className="flex flex-col items-center lg:items-start space-y-3">
                {[
                  { icon: <FaDiscord />, name: 'Discord', link: 'https://discord.gg/e7q4NkBr7e' },
                  { icon: <FaYoutube />, name: 'YouTube', link: 'https://www.youtube.com/@nexzgenstudio' },
                  { icon: <FaWhatsapp />, name: 'WhatsApp', link: 'https://wa.link/wgcd4s' },
                  { icon: <FaTelegram />, name: 'Telegram', link: 'https://t.me/nexzgen' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link flex items-center gap-2 text-sm hover:text-purple-500 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h3 className="font-bold text-base">Social Media</h3>
              <div className="flex flex-col items-center lg:items-start space-y-3">
                {[
                  { icon: <RxLinkedinLogo />, name: 'LinkedIn', link: 'https://www.linkedin.com/company/nexzgenstudio' },
                  { icon: <FaInstagram />, name: 'Instagram', link: 'https://www.instagram.com/nexzgenstudio' },
                  { icon: <FaFacebook />, name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61556648944759' },
                  { icon: <FaTwitter />, name: 'Twitter', link: 'https://twitter.com/NexzGenStudio' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link flex items-center gap-2 text-sm hover:text-purple-500 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 mb-4 text-sm text-center">
            Copyright &copy; {currentYear} NexzGen. All rights reserved
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #718096;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #8E2DE2;
        }
      `}</style>
    </footer>
  );
};

export default Footer;