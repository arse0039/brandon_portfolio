import '../styles/cardCatalog.css';
import github from '../assets/Github_white.png';

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
                    {project.projectDescription}
                </div>
                <div className='card-content-button'>
                    <img src={github} alt='Github' onClick={() => window.open(project.github, '_blank')} className='github-image' />
                </div>
                <div className='card-content-skills'>
                        {project.projectSkills?.map((skill, index) => (
                            <span key={index} className='skill'>{skill}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        ))}
                </div>
            </div>
        </div>
    );
};