import '../styles/cardCatalog.css';
import { CCard, CCardTitle, CCardBody, CButton, CCardText, CCardImage, CCardFooter } from '@coreui/react';
import projectImage from '../assets/project_placeholder.png'

export interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectSkills: string[];
    github?: string;
    url?: string;
}


export const ProjectCard = ( Project: ProjectCardProps) => {
    return (
        <CCard className='custom-card'>
            <CCardImage orientation="top" src={projectImage} className='card-image'/>
            <CCardBody>
                <CCardTitle className='title'>{Project.projectName}</CCardTitle>
                <CCardText className='description'>
                    {Project.projectDescription} 
                </CCardText>
                <CButton href={Project.github}target='_blank' className='button'>GitHub</CButton>
            </CCardBody>
            <CCardFooter className='footer'>
                {Project.projectSkills?.map((skill, index) => (
                    <span key={index} className='skill'>{skill}</span>
                ))}
            </CCardFooter>
        </CCard>
    )
}
