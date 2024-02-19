export const navLinks = ['Home', 'About', 'Projects'];


export interface Profile {
    intro: string;
    experience: string;
    skills: string;
    education: string;
    links: string;
}

export const brandonProfile:Profile = {
    intro: "Hi. I like to ate, ate, eat aaples and bananays",
    experience: "1 year. School of hard-knocks",
    skills: "Bo staff skillz. Nunchuck skillz",
    education: "OSU 2021-2023. GPA 3.9",
    links: "www.google.com",
}

export const davidProfile:Profile = {
    intro: "Hi. I like to eat, eat, eat eeples and benenees",
    experience: "1 year. Hogwarts school of witchcraft and wizardry",
    skills: "Backflips. Miming. Check forgery.",
    education: "OSU 2021-2023. GPA 6.0",
    links: "www.amazon.com",
}