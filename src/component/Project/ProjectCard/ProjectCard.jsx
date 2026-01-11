import './ProjectCard.css'
function ProjectCard({ props }) {
    return (
        <div className="project-card-container">
            <img src={props.image} alt={props.title} className="project-card-image"></img>
            <h2 className="project-card-title">{props.title}</h2>

        </div>
    )
}
export default ProjectCard;