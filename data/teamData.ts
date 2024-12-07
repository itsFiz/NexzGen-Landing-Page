 
  interface Director {
    name: string;
    role: string;
    image: string;
    description: string;
    qualifications: string[];
    socialLinks: SocialLinks;
  }
    // Interface for director data
    interface SocialLinks {
        linkedin?: string;
        twitter?: string;
        github?: string;
        instagram?: string;
        tiktok?: string;
        youtube?: string;
    
      }
  
  export const foundingteam: Director[] = [
    {
      name: "Hafiz Kadir",
      role: "Founder | CEO & CTO",
      image: "/ceo.png",
      description: "Visionary technologist with a knack for staying ahead, driving the company's technological endeavors with a forward-thinking approach.",
      qualifications: [
        "Executive (System Development) at TNB Research",
        "Graduate Technologist certified by MBOT",
        "Coding since 11y/o, 132 IQ",
        "4 years of professional expertise in a myriad of programming frameworks, including Next.js, React, Unity, and Flutter",
        "Former IT Associate at UOB, 3D Content Developer at Innoveam",
        "Computer Sc. (Multimedia) graduate from University Putra Malaysia",
        "Co-inventor of 'ARespiratory', an IUCEL gold medal winner copyrighted AR app with Technology Readiness Level(TRL):6"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/hafizkadir",
        twitter: "https://twitter.com/hafizkadir",
        github: "https://github.com/hafizkadir",
        
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
    // {
    //   name: "Putera Shazmin",
    //   role: "Co-founder | COO",
    //   image: "/coo.png",
    //   description: "Strategist and implementer with a track record of optimizing processes and ensuring seamless business operations.",
    //   qualifications: [
    //     "Human Resource Management Graduate from Universiti Poly-Tech Malaysia",
    //     "Skilled in project management, team leadership, and organizational development",
    //     "Former Talent Acquisition Intern at Tan Chong Group"
    //   ],
    //   socialLinks: {
    //     linkedin: "https://linkedin.com/in/puterashazmin"
    //   }
    // },
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
        github: "https://github.com/tengkuamirulhaiqal",
        youtube: "http://www.youtube.com/@tenkk_ch"
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
        instagram: "https://instagram.com/aliff.farhat",
        tiktok: "https://tiktok.com/@aliff.farhat"
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