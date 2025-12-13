// interfaces

interface Experience {
  company: string;
  title: string;
  period: string;
  description: string[];
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  code_link: string;
  live_link: string;
}

interface Social {
  link: string;
}

// Experience data
export const exp1: Experience = {
  company: "Dawood Family Takaful Limited",
  title: "Software Engineering Intern",
  period: "Jun. 2023 – Aug. 2023",
  description: [
    "Developed 4 features for a mobile app for the company agents, focusing on optimizing client record tracking.",
  ],
  skills: ["React Native", "Firebase"],
};

export const exp2: Experience = {
  company: "Pakistan Refinery Limited",
  title: "Software Developer Intern",
  period: "Jun. 2024 – Jul. 2024",
  description: [
    "Designed and implemented a system to monitor equipment issued to employees among 6 departments, including purchase order details, warranty information, and other attributes. Constructed an inventory management system, enhancing asset tracking and streamlining internal processes by 30%.",
  ],
  skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
};

// export const exp3: Experience = {
//     company: "Upwork",
//     title: "Freelance Software Developer",
//     period: "Nov. 2023 – Present",
//     description: ["Leveraged different technologies to conceptualize, create, and launch full-stack web or AI applications to meet client specifications and enhance their business operations.", "Completed over 5 projects, resulting in improved client satisfaction and operational efficiency.", "Delivered projects on time, within scope, and often exceeding client expectations, leading to repeat business and positive referrals."],
//     skills: ["Flask", "Django", "MongoDB", "Express.js", "React.js", "Node.js"]
// }

export const exp4: Experience = {
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
};

// export const exp5: Experience = {
//     company: "Unikrew Solutions (Private) Limited",
//     title: "Full-Stack Engineer",
//     period: "May. 2025 – Present",
//     description: [
//         "Engineered a full-stack Incentive Management Module (Python + React) used by MCB Pakistan, automating incentive calculations and reducing manual processing effort by 40%.",
//         "Designed and implemented a Developer Integration Portal using Go and React, enabling streamlined access to in-house services (Transliteration, OCR, Facial Comparison, Document Validation, Facial Spoof Check). Improved developer integration time by 60%.",
//         "Built a high-performance Go microservice for scraping and updating the Active Taxpayers List (ATL), reducing data refresh time from hours to under 15 minutes and ensuring weekly tax-status accuracy."
//     ],
//     skills: ["Go", "Python", "React.js", "AWS", "Docker", "MongoDB"]
// }

// Project data
export const projects: Project[] = [
  {
    title: "IntelliDent",
    description:
      "Collaborated with Aga Khan University Hospital, sourcing a dataset of 1000 OPGs. Developed a web app that utilizes ML/DL models for teeth classification and segmentation on Orthopantomograms.",
    code_link: "#",
    live_link: "#",
  },
  {
    title: "Workout Buddy",
    description:
      "Developed a web application using MERN stack and JWT Authentication, allowing users to record and manage their workouts.",
    code_link: "https://github.com/ZaeemT/Workout-Tracking",
    live_link: "https://workout-traking.vercel.app",
  },
  {
    title: "Transparent Background",
    description:
      "Created a web application using Flask and leveraging flask sessions, that allows you to remove background from images, and download those transparent images.",
    code_link: "https://github.com/ZaeemT/Transparent_Background",
    live_link: "#",
  },
  {
    title: "Product Catalog",
    description:
      "Built a product catalog using Next.js with Redux that highlights skills in state management, API-based search static site generation and Next Routing.",
    code_link: "https://github.com/ZaeemT/Product-catalog",
    live_link: "https://the-product-catalog.vercel.app/",
  },
  {
    title: "Sign Language Recognition",
    description:
      "Recognizes 5 hand signs using custom CNN model and converts it to text and audio. Used Tensorflow and Python.",
    code_link: "https://github.com/ZaeemT/Sign-Language-Recognition",
    live_link: "#",
  },
  {
    title: "German Traffic Sign Detector",
    description:
      "A custom CNN model detects and classifies various German traffic signs to enhance road safety and automation.",
    code_link: "https://github.com/ZaeemT/Traffic-Sign-Detector",
    live_link: "#",
  },
  {
    title: "Today I Learned (TIL)",
    description:
      "Built a fully responsive social media website using Django and Tailwind CSS, where users who are authenticated can share their updates regarding their productivity.",
    code_link: "https://github.com/ZaeemT/TIL",
    live_link: "#",
  },
  {
    title: "Movie Browser",
    description:
      "Programmed a website used to search for movies, and display details of the searched movie. Requested APIs from TMDB, containing data on 864,220 movies.",
    code_link: "https://github.com/ZaeemT/Movie-Browser",
    live_link: "#",
  },
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
