// import project images from assets folder here
import mlCapstone from '../assets/ML_generic.jpg';
import databaseProject from '../assets/DB_generic.png';

export const projects = [
    {
        projectImage: mlCapstone,
        projectName: "ML Music Genre Prediction App",
        projectDescription: "A machine learning project, our system utilizes convolutional neural networks and signal processing \
        to classify audio samples into genres. The user can then interact with the model by submitting a YouTube URL, and the program will \
        output the predicted genre matches for the provided audio.",
        projectSkills: ["AI/ML", "React.js", "Python", "Flask", "TensorFlow"],
        github: 'https://github.com/arse0039/capstone',
    },
    {
        projectImage: databaseProject,
        projectName: "Issue Tracking Application",
        projectDescription: "A web application built to help users create projects and manage tasks and issues across those \
        projects. Built using Next.js, Typescript it uses a distributed, serverless backend powered by multiple AWS cloud services \
        including API Gatweway, Lambda, DynamoDB, and Cognito.",
        projectSkills: ["AWS", "Tailwind CSS", "Typescript", "AWS Lambda", "AWS Cognito"],
        github: 'https://github.com/BAPortfolioHub/issue-tracker',
        url: 'https://issue-tracker-ten-theta.vercel.app/'
    },
    {
        projectImage: databaseProject,
        projectName: "Database Management Web Application",
        projectDescription: "A database management tool meant to be used by database administrators to manage a \
        community-driven recreation service. A SQL database holds information related to 5 different entities and supports \
        basic CRUD operations for all entities.",
        projectSkills: ["React.js", "JavaScript", "SQL", "node.js"],
        github: 'https://github.com/arse0039/uffda_react_app',
    },
]