// interfaces

interface Experience {
    company: string;
    title: string;
    period: string;
    description: string;
    skills: string[];
}

interface Project {
    title: string;
    description: string;
    link: string;
}

interface Social {
    link: string;
}


// Experience data
export const exp1: Experience = {
    company: "Pakistan Refinery Limited",
    title: "Software Developer Intern",
    period: "Jun. 2024 – Jul. 2024",
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

// Project data
export const projects: Project[] = [ 
    {
        title: "IntelliDent",
        description: "Collaborated with Aga Khan University Hospital, sourcing a dataset of 1000 OPGs. Developed a web app that utilizes ML/DL models for teeth classification and segmentation on Orthopantomograms (OPGs).",
        link: "#"
    },
    {
        title: "Workout Buddy",
        description: "Developed a web application using MERN stack, allowing users to record and manage their workouts.",
        link: "https://github.com/ZaeemT/Workout-Tracking"
    },
    {
        title: "Transparent Background",
        description: "Created a web application using Flask, that allows you to remove background from images, and download those transparent images.",
        link: "https://github.com/ZaeemT/Transparent_Background"
    },
    {
        title: "Product Catalog",
        description: "Built a product catalog using Next.js with Redux that highlights skills in state management, API-based search static site generation and Next Routing.",
        link: "https://github.com/ZaeemT/Product-catalog"
    },
    {
        title: "Sign Language Recognition",
        description: "Recognizes 5 hand signs using custom CNN model and converts it to text and audio. Used Tensorflow and Python.",
        link: "https://github.com/ZaeemT/Sign-Language-Recognition"
    },
    {
        title: "Traffic Sign Detector",
        description: "Detecting German Traffic Signs using custom CNN model.",
        link: "https://github.com/ZaeemT/Traffic-Sign-Detector"
    },
    {
        title: "Today I Learned (TIL)",
        description: "Built a fully responsive social media website using Django, where users share their updates regarding their productivity.",
        link: "https://github.com/ZaeemT/TIL"
    },
    {
        title: "Movie Browser",
        description: "Programmed a website used to search for movies, and display details of the searched movie. Requested APIs from TMDB, containing data on 864,220 movies.",
        link: "https://github.com/ZaeemT/Movie-Browser"
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
    link: "https://drive.google.com/file/d/1_349ij161aWt8FZVNFilnQACm1t3TR5P/view?usp=sharing",
};

