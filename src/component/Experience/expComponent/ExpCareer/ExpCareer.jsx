import React from 'react';
import careerData from './ExpDataCareer/dataCareer.json';
import freelanceData from './ExpDataCareer/dataFreelance.json';
import './ExpCareer.css';

const ExpCareer = () => {
    return (
        <div className="exp-career-wrapper">

            {/* Career Timeline Section */}
            <div className="timeline-section">
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Professional Journey</h2>
                <div className="timeline-container">
                    {careerData.map((item) => (
                        <div key={item.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="career-card">
                                <h3 className="career-position">{item.position}</h3>
                                <h4 className="career-company">{item.company}</h4>
                                <p className="career-description">{item.description}</p>
                                <div className="career-duration">
                                    <i className="far fa-calendar-alt"></i> {item.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Freelance Section */}
            <div className="freelance-section">
                <h2 className="freelance-title">Freelance Projects</h2>
                <div className="freelance-grid">
                    {freelanceData.map((project) => (
                        <div key={project.id} className="freelance-card">
                            <div className="freelance-job">{project.jobTitle}</div>
                            <div className="freelance-role">{project.role}</div>
                            <p className="freelance-desc">{project.description}</p>
                            {project.duration && (
                                <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#777', fontStyle: 'italic' }}>
                                    {project.duration}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ExpCareer;
