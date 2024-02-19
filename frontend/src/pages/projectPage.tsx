import React from 'react';
import { projects } from '../constants/projects';
import { CardCatalog } from '../components/CardCatalog';

const ProjectPage: React.FC = () => {
    return (
        <CardCatalog projects={projects} />
    )
}

export default ProjectPage;