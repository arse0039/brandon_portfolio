import '../styles/cardCatalog.css';

export interface ProjectCardProps {
    projectImage: string;
    projectName: string;
    projectDescription: string;
    projectSkills: string[];
    github: string;
    url?: string;
}

export const ProjectCard = ( project: ProjectCardProps) => {
    return (
        <div className="custom-card">
            <div className="image-container">
                <img src={project.projectImage} alt={project.projectName}></img>
            </div>
            <div className="card-content">
                <div className='card-content-title'>
                    <h3>{project.projectName} </h3>
                </div>
                <div className='card-content-description'>
                    <p>{project.projectDescription}</p>
                </div>
                <div className='card-content-button'>
                    <button onClick={() => window.open(project.github, '_blank')}>Github</button>
                </div>
                <div className='card-content-skills'>
                    <p>
                        {project.projectSkills?.map((skill, index) => (
                            <span key={index} className='skill'>{skill}  </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};