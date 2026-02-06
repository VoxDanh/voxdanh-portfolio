import React from 'react';
import ExpEducationCard from './ExpEducationCard';
import eduData from './ExpDataEducation/EduData.json';
import certData from './ExpDataEducation/courses _certificates.json';
import './ExpEducation.css';

const ExpEducation = () => {
    return (
        <div className="exp-education-container">
            {/* Education Cards Section */}
            <div className="exp-edu-cards-section">
                {eduData.map((edu) => (
                    <ExpEducationCard key={edu.id} data={edu} />
                ))}
            </div>

            {/* Certificates Section */}
            <div className="exp-certs-section">
                <h2 className="certs-title">Courses & Certificates</h2>
                <ul className="certs-list">
                    {certData.map((cert) => (
                        <li key={cert.id} className="cert-item">
                            <div>
                                <div className="cert-name">{cert.name}</div>
                                <div className="cert-issuer">
                                    {cert.issuer} • {cert.date}
                                </div>
                            </div>

                            {cert.pdfLink ? (
                                <a
                                    href={cert.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-pdf-link"
                                >
                                    View Certificate (PDF)
                                </a>
                            ) : (
                                <span className="cert-pdf-link disabled">
                                    Certificate not available
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpEducation;
