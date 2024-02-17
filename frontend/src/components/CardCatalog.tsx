import '../styles/cardCatalog.css';
import { CRow, CCol } from "@coreui/react";
import { ProjectCard, ProjectCardProps } from "./Card";

interface CardCatalogProps {
    projects: ProjectCardProps[];
}

export const CardCatalog = ( {projects}: CardCatalogProps) => {
    return (
        <CRow className="card-catalog">
            {projects.map((project, index) => (
                <CCol md='4' key={index} className="card-column">
                    <ProjectCard {...project} />       
                </CCol>                
            ))}
        </CRow> 
    )
}