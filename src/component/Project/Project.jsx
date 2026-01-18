import './Project.css'
import ProjectCard from './ProjectCard/ProjectCard.jsx'
function Project({ ref }) {
    return (
        <article className="project-container" ref={ref}>
            <ProjectCard />
        </article>
    )
}
export default Project;