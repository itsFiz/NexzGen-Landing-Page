'use client'
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/nexzgencircular.png"
            alt="NexzGen Logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden sm:block text-gray-300">
            NexzGen
          </span>
        </Link>

        {/* Hamburger Menu for Mobile/Tablet */}
        <button
          className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center max-w-4xl mx-8">
          <nav className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="font-semibold px-4 py-2 hover:text-purple-500 hover:scale-105 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Get Started Button - Desktop */}
        <Link
          href="/getstarted"
          className={`hidden lg:block text-white font-semibold py-2 px-6 rounded-full transition-all ${
            isHovered 
              ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
              : 'border border-purple-500/50 hover:border-purple-500'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
        </Link>

        {/* Mobile/Tablet Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[65px] left-0 right-0 bg-[#0300147f] backdrop-blur-md border-t border-[#7042f861]"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="font-semibold py-2 px-4 text-gray-200 hover:text-purple-500 hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/getstarted"
                className="font-semibold py-2 px-4 text-purple-500 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;