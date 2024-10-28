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
  
 