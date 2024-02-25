"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "./About.css"; // Import the CSS file

const TAB_DATA = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Vision & Mission",
    id: "visionmission",
  },
  {
    title: "Directors",
    id: "directors",
  },
];

const directorsData = [
  {
    name: "Hafiz Kadir",
    role: "Founder | Chief Executive Officer",
    description: "Visionary technologist with a knack for staying ahead, driving the company's technological endeavors with a forward-thinking approach.",
    qualifications: [
      "Graduate Technologist certified by MBOT",
      "4 years of expertise in a myriad of programming frameworks,  including Next.js, React, Unity, and Flutter, crafting scalable and robust software solutions",
      "Former IT Associate at UOB, 3D Content Developer at Innoveam",
      "Computer Sc. (Multimedia) graduate from University Putra Malaysia",
      "Co-inventor of 'ARespiratory', a copyrighted AR app by MyIPO with Technology Readiness Level(TRL):6",
    ],
    image: "/ceo.png",
  },
  {
    name: "Andi A Ghani",
    role: "Co-founder | Chief Creative Officer",
    description: "A decade director turning concepts into captivating visual masterpieces, guiding the artistic direction of our content and experiences.",
    qualifications: [
      "Animation Director at Wau Animation (Ejen Ali) with 10+ years of experience",
      "Former Animator at Lescopaque, contributed to various projects including Upin Ipin & Pada Zaman Dahulu, gaining invaluable experience in the field",
      "Mentor for emerging talents in the animation industry, nurturing the next generation of creative professionals",
      "Multimedia Graduate from International University College of Technology (Twintech)",
      
    ],
    image: "/cco.png",
  },
  {
    name: "Putera Shazmin",
    role: "Co-founder | Chief Operations Officer",
    description: "Strategist and implementer with a track record of optimizing processes and ensuring seamless business operations.",
    qualifications: [
      "Former Talent Acquisition at Tan Chong Group, extensive experience in sourcing, recruiting, and retaining top talent.",
      "Human Resource Management Graduate from Universiti Poly-Tech Malaysia",
      "Skilled in project management, team leadership, and organizational development, with a focus on fostering a collaborative and high-performance work culture."

      
    ],
    image: "/coo.png",
  },
  {
    name: "Tengku Amirul Haiqal",
    role: "Co-founder | Chief Game Officer",
    description: "A creative mind shaping interactive experiences, bringing gaming concepts to life with a passion for innovation.",
    qualifications: [
      "Solo game designer and developer of 'Stigma Birth', a 2D story-based platform game released in Google Play Store",
      "Advocate for diversity and inclusion in the gaming community, promoting accessibility in game design.",
      "Game & Interactive Media Design Graduate from Widad University College",
      
    ],
    image: "/cgo.png",
  },
  {
    name: "Aliff Farhat",
    role: "Co-founder | Chief Marketing Officer",
    description: "Marketer extraordinaire transforming ideas into compelling narratives, shaping the company's image and connecting with audiences.",
    qualifications: [
      "Founder of Farhat Fotografi, Freelance photographer with 5+ years of experience",
      "Photography Content Creator on TikTok with over 300k+ views and 5k followers",
      "Former Videographer at RareTV, Apprentice at Saiful Nang Academy Photography (SNAP)",
      
    ],
    image: "/cmo.png",
  },
  // Add similar data for other directors
];

const About = () => {
  const [tab, setTab] = useState("about");

  return (
    <section className="text-white z-[20]  pt-20 pb-40 " id="about" >
        
      <div className="flex justify-center mt-8 px-4 xl:px-16">
        {TAB_DATA.map((tabData) => (
          <TabButton
            key={tabData.id}
            selectTab={() => setTab(tabData.id)}
            active={tab === tabData.id}
          >
            {tabData.title}
          </TabButton>
        ))}
      </div>
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:ml-0 sm:mr-0 md:ml-60 md:mr-60 lg:ml-60 lg:mr-60">
  <h2 className="text-4xl font-bold transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
    {tab === "about"
      ? "About "
      : tab === "visionmission"
      ? "Vision & Mission"
      : "Directors"}
  </h2>
  <div className="mt-8">
  {tab === "about" && (
  <div className="about-section">
    <div className="about-image mr-8 mb-8 lg:mb-0">
      <Image src="/nexzgenstudio.png" width={300} height={300} alt={"nexzgen"} />
    </div>
    <div className="about-content">
      <p className="text-base lg:text-lg mb-10">
        NexzGen Studio specializes in a unique blend of creative and
        technological domains, including Augmented Reality (AR), Game
        Development, Full-stack Solutions, and Animation. These niches
        form the pillars of our expertise, allowing us to craft immersive
        experiences and innovative solutions for a diverse range of
        industries. As a dynamic hub of innovation, we seamlessly
        integrate cutting-edge technology with artistic expression,
        creating solutions that transcend boundaries.
      </p>
      <h3 className="text-2xl font-bold text-white">Ikigai Empowerment</h3>
      <p className="text-base lg:text-lg">
        Our commitment to Ikigai goes beyond a concept; it's a guiding
        principle in everything we do. We empower individuals to
        discover their Ikigai, providing a nurturing environment where
        skills are honed, passions are explored, and meaningful
        contributions are made. From team members to clients and
        community members, we believe in creating a collective force for
        positive change and innovation.
      </p>
    </div>
  </div>
)}
    {tab === "visionmission" && (
      <div>
        <h3 className="text-2xl font-bold text-white ">Vision</h3>
        <p className="text-base lg:text-lg">
          Our vision is to be a catalyst for personal and professional
          fulfillment, where individuals discover their Ikigai – the sweet spot
          at the intersection of what they are good at, what they love, what
          they can be paid for, and what the world needs. We envision a world
          where every team member, client, and community member finds purpose
          and passion in their endeavors, creating a collective force for
          positive change and innovation.
        </p>
        <h3 className="text-2xl font-bold text-white mt-8">Mission</h3>
        <p className="text-base lg:text-lg">
          Our mission is to push the boundaries of what is possible in
          animation, augmented reality, game development, and full-stack
          solutions. Our commitment is to empower individuals, businesses, and
          communities by delivering cutting-edge products and services that not
          only meet but exceed expectations. Through a relentless pursuit of
          excellence, we aim to inspire and cultivate a culture of continuous
          learning and growth. At the core of our mission is the belief that
          every project we undertake contributes to a world where purpose,
          passion, and positive change converge, creating a lasting impact on
          individuals and society as a whole.
        </p>
      </div>
    )}
    {tab === "directors" && (
  <div className="director-container">
  {directorsData.map((director, index) => (
    <div key={index} className="director-card">
      <div className="director-image">
        <Image src={director.image} width={200} height={200} alt={"director"} />
      </div>
      <div className="director-content">
        <h3 className="text-lg md:text-xl font-semibold text-white mt-3">{director.name}</h3>
        <p className="text-sm md:text-base text-gray-300 italic">{director.role}</p>
        <p className="text-sm md:text-base text-gray-300">{director.description}</p>
        <ul className="text-sm md:text-base text-gray-300 list-disc mb-20 pl-4">
          {director.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

)}
  </div>
</div>
        
      
    </section>
  );
};

export default About;
