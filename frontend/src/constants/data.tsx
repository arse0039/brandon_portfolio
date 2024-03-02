import github from '../assets/Github_white.png';
import linkedin from '../assets/LinkedIN_white.png';

export interface NavLink {
    name:string;
};

export const navLinks:NavLink[] = [
    {name:'Home'}, 
    {name:'About'}, 
    {name:'Projects'},
];

const icons = {
    linkedIn: linkedin,
    github: github,
};

export interface Socials {
    url: string, 
    icon: string
};

export interface Educations {
    school: string;
    schoolInfo: string;
    schoolDate: string;
};

export interface Experiences {
    company: string;
    title: string;
    date: string;
};

export interface Profile {
    intro: string[];
    experience: Experiences[];
    skills: string[];
    education: Educations[];
    email: string, 
    socials: Socials[];
}

export const brandonProfile:Profile = {
    intro: ["Hello! I am Brandon, a recent career-changer and recent graduate from \
    Oregon State University.", "I started my professional career working as a Registered \
    Dietitian, serving Veterans at the Department of Veterans Affairs. When the Covid \
    pandemic struck, I found myself with little to do and created a personal challenge \
    to 'learn something new everyday'. This led me to discover Computer Science and I eventually\
    started creating interactive web-based games using P5.JS. From there I was hooked! \
    I found myself learning and writing code nearly everyday. After a few months I realized \
    that I had found my passion and decided to start my career-change journey.", "During my return to school, I continued \
    working full time as a Dietitian and, following my first quarter, I realized that my love for CS was \
    leading me to help many of my peers. I was getting a lot of joy connecting with and helping \
    other students so I decided to take on a part-time role as a Teaching Assistant.", "Currently, \
    I am looking for a full-time role as a software engineer. While searching, I continue to collaborate \
    with my good friend David so that we can both continue to learn and grow. I am also studying to take \
    the AWS Associate Developer Certification Exam, which I hope to take within the next month.", "When not working on \
    projects, I enjoy being outdoors cross-country skiing, hiking, or paddleboarding. I also love to \
    cook and am a big fan of Anime and personal finance."],
    experience: [
        {
            company: "Zillow",
            title: "Sofware Development Engineer",
            date: " • June 2023 - Sept 2023 (Internship)",
        },
        {
            company: "Oregon State University",
            title: "Undergradute Teaching Assistant",
            date: " • Dec 2021 - Dec 2023",
        },
        {
            company: "Department of Veterans Affairs",
            title: "Registered Dietitian",
            date: " • Aug 2018 - Jun 2023",
        },
    ],
    skills: ["TypeScript", "Python", "Java", "Node.js", "React", "Express.js", "MongoDB", "SQL", "AWS", "Agile Development"],
    education: [
        {
            school:"Oregon State University",
            schoolInfo:"Bachelors of Science in Computer Science • ",
            schoolDate: "Dec 2023 • GPA 3.9",
        },
        {
            school:"University of Minnesota",
            schoolInfo:"Bachelors of Science in Nutrition and Dietitics • ",
            schoolDate: "Dec 2017 • GPA 3.3",
        },

    ],
    email:"arsenaub@oregonstate.edu", 
    socials:[
        {url:'https://www.linkedin.com/in/barsenault1/', icon: icons.linkedIn},
        {url: 'https://github.com/arse0039', icon: icons.github}
    ],        
}


export const davidProfile:Profile = {
    intro: ["Hi. I like to eat, eat, eat eeples and benenees"],
    experience: [
        {
            company: "Optum",
            title: "Sofware Engineer • Intern • ",
            date: "June 2023 - Sept 2023",
        }
    ],
    skills: ["Java", "TypeScript", "Python", "Node.js", "Agile Development" ],
    education: [{
        school:"Oregon State University",
        schoolInfo:"Bachelor of Science in Computer Science • ",
        schoolDate: "Dec 2023 • GPA 6.0",
    }],
    email:"dclaphan@oregonstate.edu", 
    socials:[
        {url:'google.com', icon: icons.linkedIn},
        {url: 'google.com', icon: icons.github},        
    ],
}