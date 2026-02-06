import React from 'react';
import ExpProjectCard from './ExpProjectCard';
import projectData from './ExpDataProject/ExpDataProject.json';
import './ExpProject.css';

const ExpProject = () => {
    return (
        <div className="exp-project-container">
            {projectData.map((project) => (
                <ExpProjectCard key={project.id} data={project} />
            ))}
        </div>
    );
};

export default ExpProject;
