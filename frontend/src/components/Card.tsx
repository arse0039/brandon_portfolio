import React from 'react';
import { CCard, CCardTitle, CCardBody, CButton, CCardText, CCardImage } from '@coreui/react';
import projectImage from '../assets/project_placeholder.png'

interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectSkills: string[];
    github: string;
    url?: string;
}


export const ProjectCard = ( Project: ProjectCardProps) => {
    return (
        <CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={projectImage} />
            <CCardBody>
                <CCardTitle title={Project.projectName}></CCardTitle>
                <CCardText>
                    {Project.projectDescription} 
                </CCardText>
                <CCardText>
                    {Project.projectSkills}
                </CCardText>
                <CButton href={Project.github}>GitHub</CButton>
            </CCardBody>
        </CCard>
    )
}
