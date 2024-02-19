import '../styles/cardCatalog.css';
import { ProjectCard, ProjectCardProps } from "./Card";

interface CardCatalogProps {
    projects: ProjectCardProps[];
}

export const CardCatalog = ( {projects}: CardCatalogProps) => {
    return (
        <div className='card-container'>
             {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
             ))}       
        </div>
    );
};