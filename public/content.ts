// interfaces

interface Experience {
    company: string;
    title: string;
    period: string;
    description: string;
    skills: string[];
}

interface Social {
    link: string;
}


// Experience data
export const exp1: Experience = {
    company: "Pakistan Refinery Limited",
    title: "Software Developer Intern",
    period: "Jun. 2024 – Present",
    description: "Designed and implemented a system to monitor equipment issued to employees among 6 departments, including purchase order details, warranty information, and other attributes. Constructed an inventory management system, enhancing asset tracking and streamlining internal processes by 30%.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
}

export const exp2: Experience = {
    company: "Upwork",
    title: "Freelance Software Developer",
    period: "Nov. 2023 – Present",
    description: "Leveraged different technologies to conceptualize, create, and launch full-stack web or AI applications to meet client specifications and enhance their business operations. Completed over 5 projects, resulting in improved client satisfaction and operational efficiency. Delivered projects on time, within scope, and often exceeding client expectations, leading to repeat business and positive referrals.",
    skills: ["Flask", "Django", "MongoDB", "Express.js", "React.js", "Node.js"]
}

export const exp3: Experience = {
    company: "Dawood Family Takaful Limited",
    title: "Software Engineering Intern",
    period: "Jun. 2023 – Aug. 2023",
    description: "Developed 4 features for a mobile app for the company agents, focusing on optimizing client record tracking.",
    skills: ["React Native", "Firebase"]
}


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
    link: "https://drive.google.com/file/d/1_349ij161aWt8FZVNFilnQACm1t3TR5P/view?usp=sharing",
};

