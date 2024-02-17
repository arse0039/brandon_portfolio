import React from 'react';
import { projects } from '../constants/projects';
import { CardCatalog } from '../components/CardCatalog';

const ProjectPage: React.FC = () => {
    return (
        <div>
            <h1>Project Page</h1>
            <CardCatalog projects={projects} />
        </div>
    )
}

export default ProjectPage;