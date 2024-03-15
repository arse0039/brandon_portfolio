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

export interface Skills {
    languages: string[];
    libraries: string[];
    databases: string[];
    other: string[];
}

export interface Profile {
    intro: string[];
    experience: Experiences[];
    skills: Skills;
    education: Educations[];
    email: string, 
    socials: Socials[];
}

export const brandonProfile:Profile = {
    intro: ["Hello! I am Brandon, a career-changer and recent graduate from \
    Oregon State University.", "I started my professional career working as a Registered \
    Dietitian, serving Veterans at the Department of Veterans Affairs. When the Covid \
    pandemic struck, I found myself with little to do and created a personal challenge \
    to 'learn something new everyday'. This led me to discover Computer Science and I eventually\
    started creating interactive web-based games using P5.js. From there I was hooked! \
    I found myself learning and writing code nearly everyday. After a few months I realized \
    that I had found my passion and decided to start my career-change journey.", "During my return to school, I continued \
    working full time as a Dietitian and, following my first quarter, I realized that my love for CS was \
    leading me to help many of my peers. I was getting a lot of joy connecting with and helping \
    other students so I decided to take on a part-time role as a Teaching Assistant.", "Currently, \
    I am looking for a full-time role as a software engineer. While searching, I continue to collaborate \
    with my good friend David so that we can both continue to learn and grow. I am also studying to take \
    the AWS Associate Developer Certification Exam, which I hope to take within the next month.", "When not working on \
    projects, I enjoy being outdoors cross-country skiing, hiking, or paddleboarding. I also love to \
    cook and am a big fan of anime and personal finance."],
    experience: [
        {
            company: "Zillow",
            title: "Software Development Engineer",
            date: " • June 2023 - Sept 2023 (Internship)",
        },
        {
            company: "Oregon State University",
            title: "Undergraduate Teaching Assistant",
            date: " • Dec 2021 - Dec 2023",
        },
        {
            company: "Department of Veterans Affairs",
            title: "Registered Dietitian",
            date: " • Aug 2018 - Jun 2023",
        },
    ],
    skills: {
        languages:["TypeScript", "Python", "Javascript", "Java", "HTML", "CSS"],
        libraries:["Node.js", "React", "Express.js", "Redux", "Flask"],
        databases:["MongoDB", "SQL", "DynamoDB"],
        other:["AWS", "Git", "Jira", "GraphQL", "Agile Development", "Rest APIs"]
    },
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
    intro: ["After 8 years in Business Operations as a Project Manager, People Manager, and Data Analyst, I embraced my passion for technology \
    and problem-solving and returned to school to pursue a degree in Computer Science.", " Working in Business Ops \
    I often had the opportunity to collaborate with software engineering teams. I always had an appreciation \
    for their contribution to the projects we worked on and thought it would be interesting to be on that side of the work,\
    actually ‘building’ the ideas that the business had come up with. Two years ago I started actively working \
    towards making the switch to a career as a Software Engineer by returning to school to pursue a degree in Computer \
    Science at Oregon State University.", "Over the course of my degree program, I worked full-time, held a part-time position as a teaching \
    assistant, and last summer I had a successful software engineering internship where I got professional experience working on a full-stack \
    project. I returned to school following the intership and graduated in December.", "In addition to working on projects with Brandon, I'm now \
    looking for a full-time Software Engineer position, preferably based in San Francisco or the San Francisco Bay Area, but \
    I am also open to positions in the Los Angeles or Chicago metro areas, or fully remote positions. Let's connect and explore how my past experience, passion \
    for problem-solving, and dedication to technology can contribute to your team's success."    
    ],
    experience: [
        {
            company: "Optum (UnitedHealth Group)",
            title: "Software Engineer • Intern • ",
            date: "June 2023 - Aug 2023",
        },
        {
            company: "Oregon State University",
            title: "Undergraduate Teaching Assistant • ",
            date: "Jan 2023 - June 2023",
        },
        {
            company: "Narvar",
            title: "Revenue Operations Analyst • ",
            date: "Jan 2021 - Jan 2023",
        },
        {
            company: "Beam Suntory",
            title: "Project Manager • People Manager • ",
            date: "Dec 2016 - Jan 2021",
        }
    ],
    skills: {
        languages:["Python", "SQL", "TypeScript", "JavaScript", "C", "Java"],
        libraries:["React", "Node.js", "Flask", "Express.js"],
        databases:["MySQL", "MongoDB", "Google Firestore", "CosmosDB"],
        other:["Git", "Agile Development", "Google Cloud", "REST APIs", "Test Driven Development", "TensorFlow"]
    },
    education: [
        {
        school:"Oregon State University",
        schoolInfo:"Bachelor of Science in Computer Science • ",
        schoolDate: "Dec 2023 • GPA 4.0",
        },
        {
            school:"University of Wisconsin - Madison",
            schoolInfo:"Bachelor of Science in Political Science & History • ",
            schoolDate: "May 2015 • GPA 3.1",
        }
    ],
    email:"davidclaphan@gmail.com", 
    socials:[
        {url:'https://www.linkedin.com/in/david-claphan', icon: icons.linkedIn},
        {url: 'https://github.com/davidclaphan', icon: icons.github},        
    ],
}