export interface NavLink {
    name:string;
}

export const navLinks:NavLink[] = [
    {name:'Home'}, 
    {name:'About'}, 
    {name:'Projects'},
];

export interface Profile {
    intro: string;
    experience: string;
    skills: string[];
    education: {school:string, schoolInfo:string};
    links: string;
}

export const brandonProfile:Profile = {
    intro: "Hi. I like to ate, ate, eat aaples and bananays",
    experience: "1 year. School of hard-knocks",
    skills: ["TypeScript", "Nunchucks"],
    education: {
        school:"Oregon State University",
        schoolInfo:"Bachelors of Science in Computer Science • Dec 2023 • GPA 3.9"
    },
    links: "www.google.com",
}

export const davidProfile:Profile = {
    intro: "Hi. I like to eat, eat, eat eeples and benenees",
    experience: "1 year. Hogwarts school of witchcraft and wizardry",
    skills: ["Java", "TypeScript", "Python", "Node.js", "Agile Development" ],
    education: {
        school:"Oregon State University",
        schoolInfo:"Bachelors of Science in Computer Science • Dec 2023 • GPA 6.0"
    },
    links: "www.amazon.com",
}