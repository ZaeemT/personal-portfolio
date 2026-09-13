import React from "react";
import { GlobeIcon, GithubIcon } from "lucide-react";


// interfaces

interface Experience {
  company: string;
  title: string;
  period: string;
  description: string[];
  skills: string[];
  logoUrl: string;
  href: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface Project {
  title: string;
  href?: string;
  description: string;
  technologies: string[];
  links?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
}

interface Social {
  link: string;
}

// Experience data
export const exp: Experience[] = [
  // {
  //   company: "Unikrew Solutions (Private) Limited",
  //   title: "Full-Stack Engineer",
  //   period: "May. 2025 – Present",
  //   description: [
  //     "Engineered a full-stack Incentive Management Module (Python + React) used by MCB Pakistan, automating incentive calculations and reducing manual processing effort by 40%.",
  //     "Designed and implemented a Developer Integration Portal using Go and React, enabling streamlined access to in-house services (Transliteration, OCR, Facial Comparison, Document Validation, Facial Spoof Check). Improved developer integration time by 60%.",
  //     "Built a high-performance Go microservice for scraping and updating the Active Taxpayers List (ATL), reducing data refresh time from hours to under 15 minutes and ensuring weekly tax-status accuracy.",
  //   ],
  //   skills: ["Go", "Python", "React.js", "AWS", "Docker", "MongoDB"],
  //   logoUrl: "/unikrew_logo.svg",
  //   href: "https://www.unikrew.com"
  // },
  {
    company: "TekRevol",
    title: "Junior Full-Stack Engineer",
    period: "Aug. 2024 – Apr. 2025",
    description: [
      "Achievement: Top performing employee for October 2024.",
      "Worked on a trucking app utilizing the MERN stack, integrating Firebase for real-time notifications on the mobile app from the backend. The project included 4 types of role-based users.",
      "Programmed an e-commerce backend using MySQL, Node.js, and Adonis.js, managing over 10,000 transactions daily using stripe, and storing images using AWS S3.",
      "Researched and developed RAG-based chatbot using FastAPI and LangChain, achieving an average response time below 1 second, significantly enhancing user interaction with real-time data retrieval.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "FastAPI", "LLMs"],
    logoUrl: "/tekrevol_logo.jpeg",
    href: "https://www.tekrevol.com"
  },
  {
    company: "Pakistan Refinery Limited",
    title: "Software Developer Intern",
    period: "Jun. 2024 – Jul. 2024",
    description: [
      "Designed and implemented a system to monitor equipment issued to employees among 6 departments, including purchase order details, warranty information, and other attributes. Constructed an inventory management system, enhancing asset tracking and streamlining internal processes by 30%.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    logoUrl: "/PRL_NEW_LOGO.png",
    href: "https://www.prl.com.pk/"
  },
  {
    company: "Dawood Family Takaful Limited",
    title: "Software Engineering Intern",
    period: "Jun. 2023 – Aug. 2023",
    description: [
      "Developed 4 features for a mobile app for the company agents, focusing on optimizing client record tracking.",
    ],
    skills: ["React Native", "Firebase"],
    logoUrl: "/dftl-logo.png",
    href: "https://dawoodtakaful.com/"
  },
];



// export const exp3: Experience = {
//     company: "Upwork",
//     title: "Freelance Software Developer",
//     period: "Nov. 2023 – Present",
//     description: ["Leveraged different technologies to conceptualize, create, and launch full-stack web or AI applications to meet client specifications and enhance their business operations.", "Completed over 5 projects, resulting in improved client satisfaction and operational efficiency.", "Delivered projects on time, within scope, and often exceeding client expectations, leading to repeat business and positive referrals."],
//     skills: ["Flask", "Django", "MongoDB", "Express.js", "React.js", "Node.js"]
// }

// Education data
export const education: Education[] = [
  {
    school: "Ghulam Ishaq Khan Institute (GIKI)",
    href: "https://giki.edu.pk/",
    degree: "Bachelor's Degree in Computer Engineering",
    logoUrl: "/giki_logo.png",
    start: "Sept. 2020",
    end: "Jun. 2024",
  }
]


// Project data
export const projects: Project[] = [
  {
    title: "Education Council",
    description: "An AI Council system that provides democratic, consensus-based advice of opportunities for future studies.",
    technologies: ["Vite.js", "TypeScript", "Tailwind CSS", "FastAPI", "OpenRouter", "CrewAI", "GCP"],
    image: "/edu-council.png",
  },
  {
    title: "AI Voice Banking Assistant",
    description: "Developed an AI-powered bilingual voice banking agent, enabling customers to navigate banking services and complete workflows through natural conversation; implemented RAG-based question answering for company policies and general queries, alongside intent-based dynamic screen navigation in English and Urdu.",
    technologies: ["LLMs", "LangChain", "AWS"],
    image: "/voice-agent.png",
  },
  {
    title: "Azure Properties",
    description: "Developed a full-stack real estate platform for residential and commercial properties, enabling users to search, view, and book properties for rent or sale, with integrated viewing appointment scheduling.",
    technologies: ["React.js", "Node.js", "Drizzle", "PostgreSQL"],
    href: "https://azureproperties.ae/",
    video: "/azure-prop.mp4",
    links: [
      {
        type: "Website",
        href: "https://azureproperties.ae/",
        icon: React.createElement(GlobeIcon, { className: "size-3" }),
      },
    ]
  },
  {
    title: "Myndify",
    description: "Engineered the backend architecture for MYNDIFY, powering a personal “second brain” platform with record management, contextual notes, task tracking, smart reminders, media uploads, search, and user data management, supporting interconnected information across people, places, and events.",
    technologies: ["Nest.js", "MongoDB", "AWS"],
    href: "https://myndifyapp.com/",
    image: "/myndify.png", 
    links: [
      {
        type: "Website",
        href: "https://myndifyapp.com/",
        icon: React.createElement(GlobeIcon, { className: "size-3" }),
      },
    ]
  },
  // {
  //   title: "WM Trucking",
  //   dates: "2024",
  //   description: "Collaborated on a trucking app utilizing the MERN stack and integrated Firebase for real-time notifications on the mobile app from the backend. The project included 4 types of role-based users.",
  //   technologies: ["Node.js", "MongoDB", "Firebase"],
  //   href: "https://www.wmtrucking.net/",
  //   image: "/wm-truck.png",
  //   links: [
  //     {
  //       type: "Website",
  //       href: "https://www.wmtrucking.net/",
  //       icon: React.createElement(GlobeIcon, { className: "size-3" }),
  //     },
  //   ]
  // },
  {
    title: "HR Salary Slip Portal",
    description: "Web app for HR to upload Excel salary data, generate PDF salary slips, and email them to employees automatically.",
    technologies: ["Python", "React.js", "FastAPI", "MongoDB"],
    href: "https://github.com/ZaeemT/hr-salary-slip-portal",
    video: "https://github.com/user-attachments/assets/47c31b65-644f-4cc5-90b5-da7bcb8a0d1e",
    links: [
      {
        type: "Source",
        href: "https://github.com/ZaeemT/hr-salary-slip-portal",
        icon: React.createElement(GithubIcon, { className: "size-3" }),
      },
    ]
  },
  // {
  //   title: "Developer Integration Portal",
  //   dates: "2025",
  //   description: "Designed and implemented a Developer Integration Portal using Go and React, enabling streamlined access to in-house services (Transliteration, OCR, Facial Comparison, Document Validation, Facial Spoof Check). Improved developer integration time by 60\\%.",
  //   technologies: ["Go", "React.js", "MongoDB", "Postman"],
  //   video: "#",
  // },
  {
    title: "Polling App",
    description: "Real-time polling app with anonymous voting, built with TypeScript and MERN stack, using JWT authentication and Socket.IO.",
    technologies: ["TypeScript", "Node.js", "Vite.js", "Socket.IO", "MongoDB"],
    href: "https://github.com/ZaeemT/polling-app",
    video: "https://github.com/user-attachments/assets/cd8cb8f2-c22c-4a9f-bd28-18c190628310",
    links: [
      {
        type: "Source",
        href: "https://github.com/ZaeemT/polling-app",
        icon: React.createElement(GithubIcon, { className: "size-3" }),
      },
    ]
  }

  // {
  //   title: "IntelliDent",
  //   description:
  //     "Web app for teeth classification and segmentation on dental X-rays using ML/DL models, developed in collaboration with Aga Khan University Hospital.",
  //   code_link: "#",
  //   live_link: "#",
  // },
  // {
  //   title: "HR Salary Slip Portal",
  //   description:
  //     "Web app for HR to upload Excel salary data, generate PDF salary slips, and email them to employees automatically.",
  //   code_link: "https://github.com/ZaeemT/hr-salary-slip-portal",
  //   live_link: "#",
  // },
  // {
  //   title: "Polling App",
  //   description:
  //     "Real-time polling app with anonymous voting, built with TypeScript and MERN stack, using JWT authentication and Socket.IO.",
  //   code_link: "https://github.com/ZaeemT/polling-app",
  //   live_link: "#",
  // },
  // {
  //   title: "Workout Buddy",
  //   description:
  //     "MERN stack web app with JWT authentication for users to record and manage workouts.",
  //   code_link: "https://github.com/ZaeemT/Workout-Tracking",
  //   live_link: "#",
  // },
  // {
  //   title: "Transparent Background",
  //   description:
  //     "Flask web app to remove image backgrounds and download transparent images.",
  //   code_link: "https://github.com/ZaeemT/Transparent_Background",
  //   live_link: "#",
  // },
  // {
  //   title: "Product Catalog",
  //   description:
  //     "Next.js and Redux product catalog with API-based search, static site generation, and Next Routing.",
  //   code_link: "https://github.com/ZaeemT/Product-catalog",
  //   live_link: "https://the-product-catalog.vercel.app/",
  // },
  // Summarized commented projects:
  // {
  //   title: "Sign Language Recognition",
  //   description:
  //     "CNN-based app recognizing 5 hand signs, converting them to text and audio using Tensorflow and Python.",
  //   code_link: "https://github.com/ZaeemT/Sign-Language-Recognition",
  //   live_link: "#",
  // },
  // {
  //   title: "German Traffic Sign Detector",
  //   description:
  //     "CNN model for detecting and classifying German traffic signs.",
  //   code_link: "https://github.com/ZaeemT/Traffic-Sign-Detector",
  //   live_link: "#",
  // },
  // {
  //   title: "Today I Learned (TIL)",
  //   description:
  //     "Responsive social media site for sharing productivity updates, built with Django and Tailwind CSS.",
  //   code_link: "https://github.com/ZaeemT/TIL",
  //   live_link: "#",
  // },
  // {
  //   title: "Movie Browser",
  //   description:
  //     "Website to search and display movie details using TMDB API.",
  //   code_link: "https://github.com/ZaeemT/Movie-Browser",
  //   live_link: "#",
  // },
];

// Socials data
export const email: Social = {
  link: "zaeemtauqir@hotmail.com",
};

export const linkedin: Social = {
  link: "https://www.linkedin.com/in/zaeemt/",
};

export const github: Social = {
  link: "https://github.com/ZaeemT/",
};

export const resume: Social = {
  link: "https://drive.google.com/file/d/1aJUN0BA4kJ_s8ohBdPxm5FaiNXzADSDu/view?usp=sharing",
};
