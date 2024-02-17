import React from 'react';
import { ProjectCard } from '../components/Card';
import { projects } from '../constants/projects';

const ProjectPage: React.FC = () => {
    return (
        <div>
            <h1>Project Page</h1>
            <ProjectCard {...projects[0]}></ProjectCard>
        </div>
    )
}

export default ProjectPage;