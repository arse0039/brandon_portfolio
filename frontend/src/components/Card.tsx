import '../styles/cardCatalog.css';

export interface ProjectCardProps {
    projectImage: string;
    projectName: string;
    projectDescription: string;
    projectSkills: string[];
    github: string;
    url?: string;
}

export const ProjectCard = ( Project: ProjectCardProps) => {

    const handleButtonClick = (link: string): void => {
        window.open(link, '_blank');
    };

    return (
        <div className="custom-card">
            <div className="image-container">
                <img src={Project.projectImage} alt={Project.projectName}></img>
            </div>
            <div className="card-content">
                <h3>{Project.projectName} </h3>
                <p>{Project.projectDescription}</p>
                <button onClick={() => handleButtonClick(Project.github)}>Github</button>
                <p>
                    {Project.projectSkills?.map((skill, index) => (
                        <span key={index} className='skill'>{skill}</span>
                    ))}
                </p>
            </div>
        </div>
    );
};
