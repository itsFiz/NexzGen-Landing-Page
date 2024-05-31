'use client'
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,

} from "react-icons/rx";

import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  mt-40 relative z-[20] "
      style={{ transform: "scale(0.9" }}
    >
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="items-stretch flex max-w-[383px]  flex-col ">
            <div className="items-stretch flex justify-between gap-1 px-20">
              <img
                loading="lazy"
                srcSet="https://i.imgur.com/GvgmDPf.png"
                className="aspect-[0.44] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-2xl self-center grow shrink basis-auto my-auto">
                <span className="font-bold ml-[10px] hidden md:block text-gray-300 ">
                  NexzGen 
                </span>
              </div>
            </div>
          </div>
          <style jsx>{`
            .footer-link {
              color: #718096; /* Initial color: gray-800 */
              transition: color 0.3s ease; /* Smooth transition */
            }

            .footer-link:hover {
              color: #8E2DE2 !important; /* Hover color: white */
            }
          `}</style>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="https://drive.google.com/file/d/1zk9Ng9zKidp0BO4IseF_Ii17RXPWM0Zn/view?usp=sharing" target="blank"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              NexzGen Studio 
            </a>
            <a
              href="https://wa.me/message/JGNQ5LCCMIPCK1" target="blank"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              +60 11-2101 8682
            </a>
            <a
              href="mailto:info@nexzgen.com"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              info@nexzgen.com
            </a>
            <a
              href="#learning-about-me"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              51200, Kuala Lumpur, Malaysia{" "}
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Services</div>
            <a
              href="#services"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              Web Development
            </a>
            <a
              href="#services"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              UI/UX Design
            </a>
            <a
              href="#services"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              Animation
            </a>
            <a
              href="#services"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
            >
              Augmented Reality
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://discord.gg/9TZa9Gn5"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
            <a
              href="https://www.youtube.com/@nexzgenstudio"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </a>
            <a
              href="https://wa.me/message/JGNQ5LCCMIPCK1"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp/>
              <span className="text-[15px] ml-[6px]">WhatsApp</span>
            </a>
            <a
              href="https://t.me/nexzgen"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
              <span className="text-[15px] ml-[6px]">Telegram</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.linkedin.com/company/nexzgenstudio"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/nexzgenstudio"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556648944759"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </a>
            <a
              href="https://twitter.com/NexzGenStudio"
              className="footer-link flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter/>
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center z-[3] mt-10">
          Copyright &copy; {currentYear} NexzGen. All rights reserved
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
