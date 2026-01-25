import './Project.css';
import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard/ProjectCard.jsx';
import projectData from './data-Project-json/Project_Data.json';
const Project = forwardRef((props, ref) => {

    return (
        <article className="project-container" ref={ref}>
            {projectData.map((project) => (
                <ProjectCard key={project.id} Project_data={project} />
            ))}
        </article>
    );
});

export default Project;

// note : tôi đã sử dụng fetch để lấy data từ file json nhưng tôi nhận ra không thể fetch lấy dữ liệu ở trong thư mục src vì fetch không có quyền truy cập vào thư mục src nên tôi đã import trực tiếp file json vào component Project.jsx để lấy data cho component ProjectCard.jsx