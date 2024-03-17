import React from 'react';
import { projects } from '../constants/projects';
import { CardCatalog } from '../components/CardCatalog';

const ProjectPage: React.FC = () => {
    return (
        <div className='outer-card-container'>
            <CardCatalog projects={projects} />
        </div>

    )
}

export default ProjectPage;