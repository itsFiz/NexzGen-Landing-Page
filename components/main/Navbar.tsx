'use client'
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-3 md:px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/nexzgencircular.png"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-slowspin hover:scale-110"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 hover:scale-110">
            NexzGen
          </span>
        </a>

        {/* Burger menu icon for mobile screens */}
        <div
          className="md:hidden cursor-pointer"
          onClick={handleToggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-300 hover:text-#8E2DE2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex w-[250px] md:w-[800px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[10px] md:mr-[15px] px-[10px] md:px-[20px] py-[5px] md:py-[10px] rounded-full text-gray-200">
            <a
              href="#home"
              className=" font-semibold block py-2 px-4 text-gray-200 hover:text-purple hover:scale-110"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2 hover:scale-110"
            >
              About Us
            </a>
            <a
              href="#services"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2 hover:scale-110"
            >
              Services
            </a>
            
            <a
              href="#product"
              className="font-semibold  block py-2 px-4 text-gray-200 hover:text-#8E2DE2 hover:scale-110"
            >
              Work
            </a>
            <a
              href="#career"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2 hover:scale-110"
            >
              Career
            </a>
            <a
              href="#footer"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2 hover:scale-110"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Burger menu for mobile screens */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[65px] right-0 left-0 bg-[black] py-2">
            <a
              href="#home"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2"
            >
              About Us
            </a>
            <a
              href="#services"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2"
            >
              Services
            </a>
            
            <a
              href="#product"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2"
            >
              Work
            </a>
            <a
              href="#career"
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2 "
            >
              Career
            </a>
            <a
              href="#footer" 
              className="font-semibold block py-2 px-4 text-gray-200 hover:text-#8E2DE2"
            >
              Contact
            </a>
            
          </div>
        )}
        {/* Get Started Button */}
        <a
        href="#services"
        className={`text-white italic font-semibold py-2 px-4 rounded-full hidden md:block ${isHovered ? 'bg-gradient-to-r from-purple-500 to-blue-500' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Get Started
      </a>
      </div>
    </div>
  );
};

export default Navbar;
