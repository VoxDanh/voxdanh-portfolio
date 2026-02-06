import React from 'react';
import './ExpEducationCard.css';

const ExpEducationCard = ({ data }) => {
    const { institution, degree, technologies, description, score } = data;

    return (
        <div className="exp-edu-card">
            <div className="exp-edu-header">
                <h3 className="exp-edu-degree">{degree}</h3>
                <p className="exp-edu-institution">{institution}</p>
            </div>

            <div className="exp-edu-tech">
                {technologies && technologies.map((tech, index) => (
                    <span key={index} className="edu-tech-tag">
                        {tech}
                    </span>
                ))}
            </div>

            <p className="exp-edu-description">{description}</p>

            <div className="exp-edu-score">
                Score/Grade: {score}
            </div>
        </div>
    );
};

export default ExpEducationCard;
