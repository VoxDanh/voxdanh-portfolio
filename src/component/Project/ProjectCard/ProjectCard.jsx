import './ProjectCard.css'
function ProjectCard({ Project_data }) {
    return (
        <div className="project-card">
            <div className="project-tags">
                {/* <p className="project-type">{Project_data.type}</p> */}
                <p className="project-status">{Project_data.status}</p>
            </div>
            <img src={Project_data.imgProject} alt="Project Image" className="project-image" />
            <h2 className="project-title">{Project_data.nameProject}</h2>
            <p className="project-description">{Project_data.description}</p>
            <div className="project-links-container">
                <a href={Project_data.detailLink} className="project-link nav-links-container">Learn More</a>
                <a href={Project_data.demoLink} className="project-demo nav-links-container">View Demo</a>
                <a href={Project_data.gitHubLink} className="project-github nav-links-container">View code</a>
                <a href={Project_data.tutorialLink} className="project-blog nav-links-container">Tutorial</a>
            </div>
        </div>
    )
}
export default ProjectCard;