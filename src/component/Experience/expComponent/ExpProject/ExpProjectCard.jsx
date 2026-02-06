import React, { useState, useRef, useEffect } from 'react';
import './ExpProjectCard.css';

const ExpProjectCard = ({ data }) => {
    const { projectName, technologies, problemsSolved } = data;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            // Check if actual content height > max-height (100px)
            if (contentRef.current.scrollHeight > 100) {
                setIsOverflowing(true);
            }
        }
    }, [problemsSolved]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="exp-project-card">
            <h3 className="exp-project-title">{projectName}</h3>

            <div className="exp-project-tech">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </div>

            <div
                className={`problems-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}
                ref={contentRef}
                style={!isOverflowing ? { maxHeight: 'none', maskImage: 'none', WebkitMaskImage: 'none' } : {}}
            >
                <ul className="exp-project-problems">
                    {problemsSolved.map((item, index) => {
                        const content = item.replace(/^[+-]\s*/, '');

                        return (
                            <li key={index} className="problem-item">
                                <span className="problem-marker">-</span>
                                <span>{content}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {isOverflowing && (
                <button className="expand-btn" onClick={toggleExpand}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default ExpProjectCard;
