// data/aboutData.ts

// Content Type Interfaces
interface AboutContent {
    type: 'about';
    title: string;
    mainImage: string;
    description: string;
  }
  
  interface VisionMissionContent {
    type: 'visionMission';
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    values: Array<{
      title: string;
      description: string;
    }>;
  }
  
  interface FoundingTeamContent {
    type: 'foundingTeam';
  }
  
  type TabContent = AboutContent | VisionMissionContent | FoundingTeamContent;
  
  interface TabData {
    title: string;
    id: string;
    content: TabContent;
  }
  
  // Interface for director data
  interface SocialLinks {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    tiktok?: string;
  }
  
  interface Director {
    name: string;
    role: string;
    image: string;
    description: string;
    qualifications: string[];
    socialLinks: SocialLinks;
  }
  
  // Animation Variants

  
  // Main Data
  export const TAB_DATA: TabData[] = [
    {
      title: "About",
      id: "about",
      content: {
        type: 'about',
        title: "About NexzGen Studio",
        mainImage: "/nexzgenstudio.png",
        description: `NexzGen Studio is an innovative Malaysian-based startup, established on February 24, 2024, dedicated to empowering individuals, communities & businesses through AI-driven EdTech solutions and advanced SaaS platforms. `
      }
    },
    {
      title: "Vision, Mission & Values",
      id: "visionmission",
      content: {
        type: 'visionMission',
        vision: {
          title: "Vision",
          description: "Our vision is to be a catalyst for personal and professional fulfillment, where individuals discover their Ikigai – the sweet spot at the intersection of what they are good at, what they love, what they can be paid for, and what the world needs. We envision a world where every team member, client, and community member finds purpose and passion in their endeavors, creating a collective force for positive change and innovation."
        },
        mission: {
          title: "Mission",
          description: "Our mission is to architect powerful solution & experiences for businesses and individuals to discover their full potential in the digital landscape. Our commitment is to empower individuals, businesses, and communities by delivering cutting-edge products and services that not only meet but exceed expectations. Through a relentless pursuit of excellence, we aim to inspire and cultivate a culture of continuous learning and growth. At the core of our mission is the belief that every project we undertake contributes to a world where purpose, passion, and positive change converge, creating a lasting impact on individuals and society as a whole."
        },
        values: [
          {
            title: "Innovation",
            description: "Continuously exploring and adopting new technologies to stay at the forefront of industry trends and deliver cutting-edge solutions."
          },
          {
            title: "Collaboration",
            description: "Building strong partnerships with clients, team members, and stakeholders to create shared success and sustainable growth."
          },
          {
            title: "Excellence",
            description: "Striving for the highest quality in all our solutions and services, maintaining rigorous standards in everything we do."
          },
          {
            title: "Growth",
            description: "Fostering continuous learning and development in our team while creating opportunities for personal and professional advancement."
          }
        ]
      }
    },
    {
      title: "Founding Team",
      id: "foundingteam",
      content: {
        type: 'foundingTeam'
      }
    }
  ];
  
  export const directorsData: Director[] = [
    {
      name: "Hafiz Kadir",
      role: "Founder | CEO & CTO",
      image: "/ceo.png",
      description: "Visionary technologist with a knack for staying ahead, driving the company's technological endeavors with a forward-thinking approach.",
      qualifications: [
        "Graduate Technologist certified by MBOT",
        "4 years of expertise in a myriad of programming frameworks, including Next.js, React, Unity, and Flutter",
        "Former IT Associate at UOB, 3D Content Developer at Innoveam",
        "Computer Sc. (Multimedia) graduate from University Putra Malaysia",
        "Co-inventor of 'ARespiratory', a copyrighted AR app with Technology Readiness Level(TRL):6"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/hafizkadir",
        twitter: "https://twitter.com/hafizkadir",
        github: "https://github.com/hafizkadir"
      }
    },
    {
      name: "Andi A Ghani",
      role: "Co-founder | CCO",
      image: "/cco.png",
      description: "A decade director turning concepts into captivating visual masterpieces, guiding the artistic direction of our content and experiences.",
      qualifications: [
        "Animation Director at Wau Animation (Ejen Ali) with 10+ years of experience",
        "Former Animator at Lescopaque",
        "Mentor for emerging talents in the animation industry",
        "Multimedia Graduate from International University College of Technology (Twintech)"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/andiagani",
        instagram: "https://instagram.com/andiagani"
      }
    },
    {
      name: "Putera Shazmin",
      role: "Co-founder | COO",
      image: "/coo.png",
      description: "Strategist and implementer with a track record of optimizing processes and ensuring seamless business operations.",
      qualifications: [
        "Human Resource Management Graduate from Universiti Poly-Tech Malaysia",
        "Skilled in project management, team leadership, and organizational development",
        "Former Talent Acquisition Intern at Tan Chong Group"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/puterashazmin"
      }
    },
    {
      name: "Tengku Amirul Haiqal",
      role: "Co-founder | CIO",
      image: "/cgo.png",
      description: "A creative mind shaping interactive experiences, bringing gaming concepts to life with a passion for innovation.",
      qualifications: [
        "Solo game designer and developer of 'Stigma Birth', a 2D story-based platform game",
        "Game & Interactive Media Design Graduate from Widad University College",
        "Advocate for diversity and inclusion in the gaming community"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/tengkuamirulhaiqal",
        github: "https://github.com/tengkuamirulhaiqal"
      }
    },
    {
      name: "Aliff Farhat",
      role: "Co-founder | CMO",
      image: "/cmo.png",
      description: "Marketer extraordinaire transforming ideas into compelling narratives, shaping the company's image and connecting with audiences.",
      qualifications: [
        "Founder of Farhat Fotografi, Freelance photographer with 5+ years of experience",
        "Photography Content Creator on TikTok with over 300k+ views and 5k followers",
        "Former Videographer at RareTV, Apprentice at Saiful Nang Academy Photography (SNAP)"
      ],
      socialLinks: {
        instagram: "https://instagram.com/alifffarhat",
        tiktok: "https://tiktok.com/@alifffarhat"
      }
    }
  ];
  
  export const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };